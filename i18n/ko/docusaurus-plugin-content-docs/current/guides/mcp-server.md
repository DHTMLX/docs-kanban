---
sidebar_label: DHTMLX MCP 서버
title: 보드와 REST 동기화를 위한 DHTMLX Kanban MCP 연동
description: MCP 서버는 AI 도구가 최신 DHTMLX Kanban 문서에 접근하도록 해줍니다. 카드, 컬럼, 스윔레인, 에디터 필드, REST 데이터 동기화를 모두 다룹니다.
---

# DHTMLX Kanban MCP 서버: 카드, 에디터, REST 동기화

제대로 동작하는 [DHTMLX Kanban](/) 보드는 여러 요소가 정확히 맞물려야 합니다. 카드 필드와 에디터 필드는 [같은 key를 공유](guides/configuration.md#bind-editor-fields-to-card-fields)해야 하고, [Toolbar](guides/customization.md#custom-toolbar)는 보드에 연결된 별도의 위젯으로 동작하며, [서버 동기화](guides/working_with_server.md)는 정해진 액션 핸들러 집합에 의존합니다. 생성된 코드는 카드 필드와 에디터 필드가 같은 key를 사용하고, Toolbar가 별도로 연결되어 있으며, 서버 동기화가 학습 시점의 스냅샷이 아니라 현재의 액션 핸들러를 기반으로 할 때 제대로 동작합니다.

DHTMLX MCP 서버는 어시스턴트가 추측 대신 최신 Kanban 문서를 근거로 작업하도록 합니다. [에디터 필드를 카드 필드에 바인딩하는 방법](guides/configuration.md#bind-editor-fields-to-card-fields), [Toolbar를 커스터마이즈하는 방법](guides/customization.md#custom-toolbar), [RestDataProvider 백엔드를 연결하는 방법](guides/working_with_server.md)을 물어보면, 어시스턴트는 코드를 작성하기 전에 최신 레퍼런스를 가져옵니다.

### MCP 엔드포인트

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note
DHTMLX MCP 서버는 DHTMLX Kanban뿐만 아니라 주요 DHTMLX 제품 전체를 다룹니다. 어떤 DHTMLX 컴포넌트를 사용하든 동일한 엔드포인트와 설정 방법이 그대로 적용됩니다.
:::

## MCP 서버를 통한 Kanban 문서 활용

내부적으로 서버는 DHTMLX Kanban 문서 전체의 인덱스를 유지하며, 다음과 같은 요청을 처리합니다:

- 시그니처와 기본값을 포함한 Kanban [메서드](api/overview/methods_overview.md), [이벤트](api/overview/events_overview.md), [속성](api/overview/properties_overview.md)의 최신 API 조회.
- Kanban 보드와 별도의 Toolbar 생성자 모두에 대해 바로 실행 가능한 [초기화](guides/initialization.md) 코드 생성.
- combo, multiselect, color, date, files 필드 타입을 포함한 [카드 및 에디터 필드](guides/configuration.md#cards) 설정(`cardShape`, `editorShape`)과 key를 통한 바인딩.
- 문서화된 템플릿 callback을 사용한 카드 템플릿, 컨텍스트 메뉴, 컬럼 헤더 [커스터마이즈](guides/customization.md).
- CSS 변수와 조건부 CSS 클래스를 사용한 컬럼, 행, 카드 [스타일링](guides/stylization.md).
- 내장 locale 객체 또는 사용자 정의 locale 객체를 사용한 Kanban 및 Toolbar 인터페이스 [로컬라이제이션](guides/localization.md).
- 데이터 API를 통한 카드, 컬럼, 행, 링크, 댓글의 [로드, 내보내기, 수정](guides/working_with_data.md).
- `RestDataProvider`를 통한 [REST 백엔드](guides/working_with_server.md) 연결, 또는 WebSocket으로 변경 사항을 동기화하는 멀티유저 보드 구성.
- Gantt, Scheduler 같은 다른 DHTMLX 위젯이나 [React](guides/integration_with_react.md), [Vue](guides/integration_with_vue.md), [Angular](guides/integration_with_angular.md), [Svelte](guides/integration_with_svelte.md)와의 Kanban [통합](guides/integration.md).

## Kanban 프롬프트가 MCP에서 일으키는 동작

DHTMLX MCP 서버는 Model Context Protocol(MCP) 위에 구성된 Retrieval-Augmented Generation(RAG) 파이프라인으로 Kanban 관련 질문에 답하며, 각 요청을 두 가지 워크플로로 나눕니다. *Search*는 어시스턴트가 참고할 레퍼런스 페이지를 찾아오고, *Inference*는 해당 페이지를 직접 읽어 완성된 답변을 제공합니다. 그에 앞서 어시스턴트는 요청 중 실제로 문서 조회가 필요한 부분을 먼저 가려내고, 나머지는 자체 지식으로 처리합니다.

*"사용자가 새 카드를 추가할 때 백엔드 데이터베이스와 자동으로 동기화되도록 DHTMLX Kanban을 연결하려면 어떻게 해야 하나요?"* 라는 프롬프트를 예로 살펴보겠습니다:

1. 어시스턴트가 문서가 필요한 부분을 식별합니다: `RestDataProvider`가 새 카드를 서버와 동기화하는 방식.
2. 서버가 이를 서버 통합 문서와 매칭합니다.
3. 답변에 코드 생성이 필요하므로 요청은 *Search*로 전달됩니다(정답이 하나인 질문이라면 대신 *Inference*로 갑니다).
4. *Search*가 최신 Kanban 문서로 구축된 벡터 인덱스에서 해당 페이지를 가져옵니다.
5. 어시스턴트가 그 페이지들을 컨텍스트로 받습니다.
6. 그 컨텍스트를 바탕으로 어시스턴트는 `add-card` 작업에 맞게 `RestDataProvider`를 구성하고, 백엔드에 특화된 요청 세부 사항은 Kanban API를 추측하는 대신 자체 지식으로 채웁니다.

덕분에 Kanban 코드 제안은 현재 동작하는 API에 맞춰 유지됩니다.

## 도구별 MCP 서버 등록

터미널을 쓰든 설정 파일을 쓰든, 두 방법 모두 아래 URL을 도구에 지정하는 것입니다. 한 번 등록해 두면 해당 도구에서 만드는 모든 Kanban 보드에서 서버를 사용할 수 있습니다.

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

가장 많이 쓰이는 도구들의 설정 방법은 아래와 같습니다.

### Claude Code

:::info
MCP 서버를 등록하는 모든 방법은 Claude Code의 [공식 문서](https://code.claude.com/docs/en/mcp)를 참고하세요.
:::

명령줄에서 서버를 등록하려면 다음을 실행합니다:

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

직접 설정하려면 `.mcp.json`에 다음 항목을 추가합니다:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "type": "http",
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Cursor

:::info
Cursor가 지원하는 모든 MCP 설정 방법은 [공식 문서](https://cursor.com/en-US/docs/mcp)에서 확인하세요.
:::

서버를 추가하는 순서:

1. Settings를 엽니다(Mac에서는 `Cmd+Shift+J`, Windows/Linux에서는 `Ctrl+Shift+J`)
2. **Tools & MCP**로 이동합니다
3. **Add Custom MCP**를 클릭합니다
4. 다음 설정을 붙여 넣습니다:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Google Antigravity

#### Antigravity 2.0

:::info
Antigravity의 MCP 연동에 대한 자세한 내용은 [공식 문서](https://antigravity.google/docs/mcp)에 있습니다.
:::

DHTMLX MCP 서버를 Google Antigravity에 연결하려면 다음 단계를 수행합니다:

1. 명령 팔레트를 엽니다
2. "mcp add"를 입력합니다
3. "HTTP"를 선택합니다
4. 다음 값을 입력합니다:
- 이름:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI

:::info
[관련 가이드](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes)에서 Gemini CLI에서 Antigravity CLI로 마이그레이션하는 방법을 다룹니다.
:::

DHTMLX MCP 서버를 Antigravity CLI에 연결하려면 다음 위치 중 하나에 `mcp_config.json`을 생성합니다:

- 전역: `~/.gemini/config/mcp_config.json`
- 워크스페이스: `.agents/mcp_config.json`

다음 설정을 추가합니다:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

그런 다음 터미널에서 `agy`를 실행합니다.

### ChatGPT

:::info
ChatGPT의 [공식 문서](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt)에서 MCP 커넥터 설정 전체 과정을 안내합니다.
:::

커넥터 설정 순서:

1. **Settings** → **Apps & Connectors**로 이동합니다
2. **Advanced settings**를 클릭합니다
3. **Developer mode**를 활성화합니다
4. **Apps & Connectors**로 돌아와 "Create"를 클릭합니다
5. 커넥터 정보를 입력합니다:
- 이름:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- 인증: `No authentication`
6. **Create**를 클릭합니다

커넥터를 만들고 나면 ChatGPT는 대화 중에 MCP 서버에서 문서를 가져옵니다.

:::info
코딩 작업이 많은 워크플로에는 다른 MCP 지원 도구가 더 적합할 수 있습니다.
:::

### 그 밖의 도구

여기에 별도 항목이 없는 도구들도 대부분 MCP를 지원하며, 설정에서 "Model Context Protocol" 또는 "Context Sources"로 표시되는 경우가 많습니다. 그곳에 `https://docs.dhtmlx.com/mcp`를 사용자 지정 소스로 추가하세요.

## MCP 서버가 데이터를 다루는 방식

MCP 서버는 호스팅형 서비스입니다. 사용자의 컴퓨터에서는 아무것도 실행되지 않고, 프로젝트 파일을 읽지 않으며, 개인 정보를 저장하지 않습니다.

디버깅과 서비스 개선 과정에서 쿼리가 기록될 수 있습니다.

더 엄격한 개인정보 보호 요건이 필요한 조직은 쿼리 로깅을 끈 상용 배포를 요청할 수 있습니다. 자세한 내용은 `info@dhtmlx.com`으로 문의하세요.

## 바로 쓸 수 있는 Kanban 보드 프롬프트

아래 프롬프트는 대상 API 영역별로 묶여 있습니다. 필요한 것을 가져다 자신의 보드에 맞게 세부 사항만 바꿔 사용하세요.

**카드, 컬럼, 스윔레인**

~~~
DHTMLX Kanban에서 사용자가 카드를 컬럼과 행 사이로 드래그할 수 있게 하려면 어떻게 해야 하나요? 문서를 참고해 주세요.
~~~
~~~
특정 컬럼이나 스윔레인에 들어갈 수 있는 카드 수를 제한하려면 어떻게 해야 하나요?
~~~
~~~
Kanban API로 카드를 복제하고 복사본을 다른 행으로 옮기려면 어떻게 해야 하나요?
~~~

**에디터와 필드 타입**

~~~
사용자 정의 에디터 필드를 카드 필드에 바인딩해 카드와 에디터 양쪽에 표시되게 하려면 어떻게 해야 하나요?
~~~
~~~
DHTMLX Kanban 에디터에서 사용자 아바타가 있는 multiselect 필드를 설정하려면 어떻게 해야 하나요?
~~~
~~~
DHTMLX Kanban 에디터에서 debounce 지연을 적용한 자동 저장을 활성화하려면 어떻게 해야 하나요?
~~~

**Toolbar와 보드 컨트롤**

~~~
Kanban Toolbar에 사용자 정의 검색 컨트롤을 추가하고 보드에 연결하려면 어떻게 해야 하나요?
~~~
~~~
DHTMLX Kanban Toolbar에서 undo와 redo 컨트롤을 제거하려면 어떻게 해야 하나요?
~~~

**REST 및 멀티유저 동기화**

~~~
DHTMLX Kanban을 Go 백엔드에 연결하고 초기 데이터를 로드하려면 어떻게 해야 하나요?
~~~
~~~
DHTMLX Kanban이 특정 작업을 백엔드와 동기화하는 방식을 커스터마이즈하려면 어떻게 해야 하나요?
~~~
~~~
WebSocket으로 변경 사항을 실시간 동기화하는 멀티유저 DHTMLX Kanban 보드를 구성하려면 어떻게 해야 하나요?
~~~

## Kanban 프롬프트로 더 나은 결과 얻기

- **대상 요소를 명확히 지정하세요.** 보드, 컬럼, 행(스윔레인), 카드를 구분해서 표현하세요(예: "Kanban 보드에서", "특정 행에 대해", "Testing 컬럼의 카드에서"). 대상이 분명할수록 서버가 알맞은 레퍼런스 페이지를 찾아냅니다.
- **필드 타입을 지정하세요.** `cardShape`와 `editorShape`는 combo, multiselect, color, date, files 등 다양한 필드 타입을 지원합니다. 그냥 "필드"라고 하지 말고 타입을 명시하면(예: "아바타가 있는 multiselect 필드") 어시스턴트가 해당 설정 레퍼런스를 가져옵니다.
- **프롬프트에 "문서를 참고해 주세요"를 덧붙이세요.** 이 표현은 학습 데이터만으로 답하지 말고 MCP 조회를 수행하라는 신호가 됩니다. API가 바뀌었을 가능성이 큰 `RestDataProvider` 핸들러와 필드 설정에서 특히 중요합니다.
- **클라이언트 작업인지 서버 작업인지 밝히세요.** Kanban은 로컬 데이터로도, `RestDataProvider` 기반 REST API로도 동작합니다. 어느 쪽인지 언급하면(예: "RestDataProvider를 사용해서" 또는 "백엔드 없이") 어시스턴트가 클라이언트 전용 예제에 REST 전용 호출을 섞지 않습니다.
