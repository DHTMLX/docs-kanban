---
sidebar_label: getIDResolver()
title: getIDResolver REST 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 getIDResolver REST 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX Kanban 무료 30일 평가판도 다운로드할 수 있습니다.
---

# getIDResolver()

### 설명

@short: 임시 클라이언트 측 ID를 백엔드 ID로 변환하는 함수를 반환합니다

:::info
`getIDResolver()` 메서드는 서버와 연동하기 위한 **RestDataProvider** 서비스의 일부입니다.
:::

### 사용법

~~~jsx {}
getIDResolver(): (id: string | number, type: number) => string | number;
~~~

### 반환값

이 메서드는 `idResolver(id, type)` 함수를 반환합니다:

- `id` — 변환할 엔티티 ID (임시 클라이언트 측 ID 또는 일반 ID)
- `type` — ID가 속한 모델 타입:
    - `1` — 카드 (`CardID`)
    - `2` — 행 (`RowID`)
    - `3` — 열 (`ColumnID`)
    - `4` — 링크 (`LinkID`)
    - `5` — 댓글 (`CommentID`)

클라이언트에서 새 엔티티(카드, 열, 행, 링크, 댓글)를 생성할 때, `RestDataProvider`는 임시 클라이언트 측 ID를 할당하고 서버에서 반환한 백엔드 ID를 기억합니다. `idResolver(id, type)` 함수는 보유 중인 임시 ID에 대해 백엔드 ID를 반환합니다. 이미 백엔드 ID와 일치하는 ID의 경우 변환 없이 그대로 반환합니다.

### 예제

가장 일반적인 사용 사례는 멀티유저 환경에서 `RestDataProvider`를 `kanbanUpdates`에 연결하는 것입니다. 이를 통해 백엔드 ID를 대상으로 하는 서버 이벤트가 임시 ID로 클라이언트에 존재하는 엔티티에 올바르게 적용됩니다:

~~~jsx {6-9}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

// other initialization...

const handlers = kanbanUpdates(
    board.api,
    restProvider.getIDResolver()
);

const events = new kanban.RemoteEvents(url + "/api/v1", token);
events.on(handlers);
~~~

동일한 resolver 함수를 `RemoteEvents.on()`에 전달하는 커스텀 핸들러 내부에서도 사용할 수 있습니다. 전체 예제는 [서버 이벤트 커스터마이즈](guides/working_with_server.md/#customize-server-events)를 참조하세요.

**관련 문서:** [서버와 연동하기: 멀티유저 백엔드](guides/working_with_server.md/#multiuser-backend)
