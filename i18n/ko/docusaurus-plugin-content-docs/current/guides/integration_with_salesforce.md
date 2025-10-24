---
sidebar_label: Salesforce와의 통합
title: Salesforce와의 통합
description: DHTMLX Kanban을 Salesforce에 통합하는 방법을 알아보세요. 이 가이드는 Salesforce Lightning 컴포넌트 내에서 원활하게 동작하기 위한 HTML 설정과 환경 구성을 설명합니다.
---

# Salesforce와의 통합

:::tip
이 문서를 읽기 전에 [**Salesforce**](https://www.salesforce.com/)의 기본 개념과 패턴에 익숙해야 합니다. 지식이 필요하다면 [**Salesforce 문서**](https://developer.salesforce.com/docs)를 참고하세요.
:::

DHTMLX Kanban은 [Salesforce](https://www.salesforce.com/) 플랫폼과 호환됩니다. Salesforce 환경에 DHTMLX Kanban을 추가하는 방법에 대한 코드 예제를 준비했습니다. 자세한 내용은 관련 [GitHub 예제](https://github.com/DHTMLX/salesforce-lwc-demo)를 참고하세요.

:::note
JavaScript Kanban 위젯은 [**Salesforce**](https://www.salesforce.com/) 환경에서 동작하고 있음을 자동으로 감지하여 내부적으로 통합 로직을 구성합니다. 대부분의 경우 [**Salesforce 전용 메서드**](#salesforce-전용-메서드)를 수동으로 호출할 필요가 없습니다.
:::

## 환경 준비

Salesforce 프로젝트에 Kanban을 추가하려면, *루트* 컨테이너에 `data-wx-root="true"` HTML 속성을 지정해야 합니다. 이 속성은 라이브러리가 **Kanban** 및 **Toolbar** 위젯을 마운트할 주요 노드를 찾을 수 있도록 도와줍니다.

```html title="kanban.html"
<template>
    <div id="wx-root" data-wx-root="true" class="kanban-wrapper" tabindex="0">
        <div class="sf_toolbar" lwc:dom="manual" data-wx-portal-root="1"></div>
        <div class="sf_kanban" lwc:dom="manual" data-wx-portal-root="1"></div>
    </div>
</template>
```

`data-wx-portal-root="1"` 속성으로 표시된 하위 요소들은 DHTMLX 컴포넌트(**Toolbar** 및 **Kanban** 등)를 위한 컨테이너 역할을 합니다.

## Salesforce 환경 API

DHTMLX Kanban에는 Salesforce 환경을 수동으로 제어할 수 있는 메서드를 저장하는 `salesForceEnv` 헬퍼 클래스가 포함되어 있습니다. 아래와 같이 `salesForceEnv` 헬퍼 클래스를 가져올 수 있습니다:

```jsx {4}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv
} from "@dhx/trial-kanban";
```

:::note
일반적으로 salesforce 전용 메서드는 필요하지 않지만, 자동 감지가 실패할 경우에만 예외적으로 사용할 수 있습니다.
:::

### Salesforce 전용 메서드

`salesForceEnv` 헬퍼 클래스의 다음 메서드를 사용할 수 있습니다:

| 메서드                                                           | 설명                                                                          |
| :--------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| `salesForceEnv.detect()`                                         | Kanban이 Salesforce 내부에서 실행 중인지 감지합니다.                            |
| `salesForceEnv.addGlobalEvent(eventName, handler, htmlElement)`  | 첫 번째 사용 가능한 HTML 요소에 전역 이벤트를 연결합니다.                       |
| `salesForceEnv.getTopNode()`                                     | Salesforce DOM 계층 내에서 첫 번째 사용 가능한 HTML 요소를 반환합니다.           |

```jsx {4,7}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv
} from "@dhx/trial-kanban";

salesForceEnv.detect();
```

### 추가로 내보내는 함수

| 함수                   | 설명                                                                              |
| :--------------------- | :-------------------------------------------------------------------------------- |
| `enableSalesForce()`   | 자동 감지가 불가능할 때 Salesforce 환경을 수동으로 설정합니다.                      |

```jsx {5,8}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv,
    enableSalesForce
} from "@dhx/trial-kanban";

enableSalesForce();
```

## 작업 흐름 단계

1. LWC 컨테이너에 `data-wx-root="true"` 속성을 추가합니다.
2. DHTMLX Kanban 및 Toolbar를 가져오고(선택적으로) 초기화합니다.
3. JavaScript Kanban 위젯이 Salesforce 컨텍스트를 자동으로 감지하고 내부 구성을 적용합니다.
4. 비표준 임베딩 시나리오가 아니라면 `enableSalesForce()` 함수나 `salesForceEnv` 메서드를 호출할 필요가 없습니다.

### 예제

```jsx title="kanban.js"
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default class KanbanLWC {
    connectedCallback() {
        const kanban_container = this.template.querySelector(".sf_kanban");
        const toolbar_container = this.template.querySelector(".sf_toolbar");
        const kanban = new Kanban(kanban_container, { /* configuration properties */ });
        const toolbar = new Toolbar(toolbar_container, { api: kanban.api });
    }
}
```

이제 DHTMLX Kanban 컴포넌트가 **Salesforce Lightning** 환경에 완전히 통합되었습니다. 위젯은 LWC 내부에서 DOM 계층 구조와 이벤트 바인딩을 자동으로 처리합니다. 표준 API를 통해 Kanban을 계속 구성할 수 있으며, 프로젝트 요구 사항에 따라 Kanban의 외관과 로직을 사용자 정의할 수 있습니다. 최종 예제는 [**GitHub**](https://github.com/DHTMLX/salesforce-lwc-demo)에서 확인할 수 있습니다.