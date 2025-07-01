---
sidebar_label: 서버와 함께 작업하기
title: 서버와 함께 작업하기
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 서버와 함께 작업하는 방법을 살펴볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 둘러보고, 코드 예제와 라이브 데모를 직접 시도해 보며, DHTMLX Kanban의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 서버와 함께 작업하기

JavaScript Kanban은 클라이언트 측 데이터와 서버 측 데이터를 모두 처리할 수 있습니다. 특별한 백엔드 요구 사항이 없으므로 REST API를 지원하는 모든 백엔드 플랫폼과 연결할 수 있습니다.

:::info
이 위젯은 기본적으로 **Go** 및 **Node** 백엔드 옵션을 제공하며, 커스텀 서버 스크립트도 지원합니다.
:::

## RestDataProvider

JavaScript Kanban은 백엔드 작업을 위한 REST API를 완벽하게 지원하는 **RestDataProvider** 서비스를 제공합니다. 이 서비스로 서버와 쉽게 통신하면서 다음과 같은 데이터 작업을 수행할 수 있습니다:

- ***"add-card"***
- ***"add-column"***
- ***"add-comment"***
- ***"add-row"***
- ***"add-link"***
- ***"delete-card"***
- ***"delete-column"***
- ***"delete-comment"***
- ***"delete-row"***
- ***"delete-link"***
- ***"move-card"***
- ***"move-column"***
- ***"move-row"***
- ***"update-card"***
- ***"update-column"***
- ***"update-comment"***
- ***"update-row"***

## REST 메서드

**RestDataProvider** 서비스에는 데이터를 동적으로 불러오는 여러 REST 메서드가 포함되어 있습니다:

- [`getCards()`](/api/provider/rest_methods/js_kanban_getcards_method.md) - ***카드 데이터***를 담은 promise 반환
- [`getColumns()`](/api/provider/rest_methods/js_kanban_getcolumns_method.md) - ***컬럼 데이터***를 담은 promise 반환
- [`getLinks()`](/api/provider/rest_methods/js_kanban_getlinks_method.md) - ***링크 데이터***를 담은 promise 반환
- [`getRows()`](/api/provider/rest_methods/js_kanban_getrows_method.md) - ***행 데이터***를 담은 promise 반환
- [`getUsers()`](/api/provider/rest_methods/js_kanban_getusers_method.md) - ***사용자 데이터***를 담은 promise 반환

## 백엔드와 상호작용

서버에 연결하려면 **RestDataProvider**를 서버 스크립트에 연결하면 됩니다. 내장 백엔드를 사용하는 경우, 아래에서 확인할 수 있습니다:

- [**Go**](https://github.com/web-widgets/kanban-go) 백엔드
- [**Node**](https://github.com/web-widgets/kanban-node) 백엔드

직접 백엔드를 구현하여 사용할 수도 있습니다.

:::tip
커스텀 백엔드를 사용하는 경우, [**REST API 경로**](/api/overview/rest_routes_overview/) 섹션을 참고하세요.
:::

**RestDataProvider**를 백엔드에 연결하는 방법은 간단합니다. **kanban.RestDataProvider** 생성자에 서버 **URL**을 전달하면 됩니다.

~~~js {1-2,27}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getUsers(),
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getLinks(),
    restProvider.getRows()
]).then(([users, cards, columns, links, rows]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        links,
        rows,
        rowKey: "type",
        editorShape: [
            ...kanban.defaultEditorShape,
            {
                type: "multiselect", 
                key: "users",
                label: "Users",
                values: users
            }
        ]
    });
    board.api.setNext(restProvider);
});
~~~

:::info
데이터 항목 추가, 삭제 등 서버로 요청을 보내기 위한 작업을 활성화하려면, **RestDataProvider**를 [**api.setNext()**](/api/internal/js_kanban_setnext_method.md)를 사용해 **Event Bus** 체인에 포함해야 합니다.
:::

### 예제

아래는 **RestDataProvider**를 **Go** 백엔드에 연결하여 서버에서 데이터를 로드하는 예시입니다:

<iframe src="https://snippet.dhtmlx.com/f25y0809?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 다중 사용자 백엔드

Kanban 보드는 다양한 규모의 기업에서 널리 사용되며, 다중 사용자 지원 기능을 통해 협업 경험이 크게 향상됩니다. 이 기능을 사용하면 여러 사용자가 동시에 Kanban 보드의 같은 카드를 실시간으로 관리할 수 있으며 페이지 새로고침 없이도 변경 사항을 즉시 확인할 수 있습니다. 이를 통해 협업이 더욱 원활해지고, 모든 사용자가 바뀐 내용을 실시간으로 확인할 수 있습니다.

다중 사용자 백엔드를 설정하려면, Kanban 보드 초기화 전에 서버에서 인증을 받아야 합니다. 이를 위해 간단한 `login(url: string)` 함수를 사용할 수 있습니다:

~~~js {}
const login = (url) => {
    var token = sessionStorage.getItem("login-token");
    if (token) {
        return Promise.resolve(token);
    }

    return fetch(url + "/login?id=1")
        .then(raw => raw.text())
        .then(token => {
            sessionStorage.setItem("login-token", token);
            return token;
        });
};
~~~

이 함수는 인증 데모용이며, 모든 사용자가 ID 1로 인증됩니다. 로그인 후 서버에서 토큰을 반환하며, 이후의 모든 요청에 이 토큰을 포함해야 합니다. `RestDataProvider.setHeaders()` 메서드를 사용하면 커스텀 헤더를 각 요청에 자동으로 추가할 수 있습니다. 기본적으로 서버는 `"Remote-Token":<value>` 헤더에 토큰을 기대합니다.

~~~js {}
login(url).then(token => {
    // rest provider 초기화
    const restProvider = new kanban.RestDataProvider(url);
    // 커스텀 헤더로 토큰 설정
    restProvder.setHeaders({
        "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
    });
    
    // 위젯 초기화...
});
~~~

토큰을 받은 후 Kanban 위젯은 다음과 같이 초기화할 수 있습니다:

~~~js {}
// 위젯 초기화...
Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getLinks(),
    restProvider.getRows(),
]).then(([cards, columns, links, rows]) => {
    const board = new Kanban("#root", {
        cards,
        columns,
        links,
        rows,
        rowKey: "row",
        cardShape,
        editorShape,
    });

    // 클라이언트 데이터를 서버로 저장
    board.api.setNext(restProvider);
    
    // 다중 사용자 초기화...
});
~~~

위젯 설정 후, WebSocket을 추가하여 서버 이벤트를 수신해야 합니다. 방법은 다음과 같습니다:

~~~js {}
// 다중 사용자 초기화...

// 서버 이벤트에 대한 클라이언트 핸들러 가져오기
const handlers = kanbanUpdates(
    board.api,
    restProvider.getIDResolver()
);
// 서버 이벤트에 연결
const events = new RemoteEvents(url + "/api/v1", token);
// 서버 이벤트에 클라이언트 핸들러 연결
events.on(handlers);
~~~

- `handlers` - 서버 이벤트에 반응하는 클라이언트 함수
- `events` - 서버에 연결되어 이벤트를 수신하는 객체
- `RemoteEvents.on(handlers)` - 핸들러를 서버 이벤트에 연결

이처럼 다중 사용자 백엔드를 추가하면 여러 사용자가 동시에 작업하고, UI에서 즉시 변경 사항을 확인할 수 있습니다.

### 예제

아래는 다중 사용자 백엔드를 설정하여 사용자가 서로의 변경 사항을 실시간으로 볼 수 있게 하는 예시입니다:

<iframe src="https://snippet.dhtmlx.com/xw6g6qd6?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 서버 이벤트 커스터마이즈

서버 이벤트 처리 방식을 커스터마이즈할 수 있습니다. 이를 위해 `RemoteEvents.on(handlers)` 메서드에 직접 정의한 **handlers** 객체를 전달하면 됩니다. **handlers** 객체 구조는 다음과 같습니다:

~~~js {}
{
    "cards": cardsHandler: function(obj: any),
    "columns": columnsHandler: function(obj: any),
    "links": linksHandler: function(obj: any),
    "rows": rowsHandler: function(obj: any),
}
~~~

서버에 무언가 변경이 발생하면, 변경된 요소의 이름이 반환되며 이는 백엔드 로직에 따라 다를 수 있습니다.

클라이언트 측 업데이트는 `function(obj: any)`의 **obj** 인자로 전달됩니다. 작업 종류는 `type: string` 필드로 지정되며, 다음과 같은 값을 가질 수 있습니다:

- **cards**: `"add-card"`, `"update-card"`, `"delete-card"`, `"move-card"`
- **columns**: `"add-column"`, `"update-column"`, `"delete-column"`, `"move-column"`
- **links**: `"add-link"`, `"delete-link"`
- **rows**: `"add-row"`, `"update-row"`, `"delete-row"`, `"move-row"`

아래 코드 예시를 참고하세요:

~~~js {}
// kanban 초기화
const board = new kanban.Kanban(...);
const restProvider = new kanban.RestDataProvider(url);
const idResolver = restProvider.getIDResolver();
const TypeCard = 1;
const TypeRow = 2;
const TypeCol = 3;

const cardsHandler = (obj: any) => {
    obj.card.id = idResolver(obj.card.id, TypeCard);
    obj.card.row = idResolver(obj.card.row, TypeRow);
    obj.card.column = idResolver(obj.card.column, TypeColumn);
    switch (obj.type) {
        case "add-card":
            board.api.exec("add-card", {
                card: obj.card,
                select: false,
                skipProvider: true, // 클라이언트에서 서버로 요청 전송 방지
            })
            break;
        // 기타 작업
    }
}

// 커스텀 핸들러 추가
const handlers = {
   cards: cardsHandler,
};

const remoteEvents = new kanban.RemoteEvents(remoteEventsURL, token);
remoteEvents.on(handlers);
~~~

`RestDataProvider.getIDResolver()` 메서드는 클라이언트 ID와 서버 ID를 동기화하는 함수를 반환합니다. 클라이언트에서 무언가(카드/컬럼/행)를 새로 만들면 임시 ID가 먼저 할당되고, 실제 서버 ID는 store에 저장됩니다. `idResolver()` 함수로 이 ID를 동기화합니다. 시그니처는 `idResolver(id: TID, type: number)`입니다.

`type` 값은 다음과 같이 매핑됩니다:

- `CardID` - 1,
- `RowID` - 2,
- `ColumnID` - 3

서버로 새 요청을 보내기 원하지 않는 경우, `board.api.exec()` 호출 시 `skipProvider: true` 플래그를 사용하면 됩니다.

커스텀 핸들러를 연결하면 클라이언트 측에서 서버 이벤트 처리 방식을 완전히 제어할 수 있습니다.

## 두 개 이상의 상태를 하나의 컬럼으로 그룹화

여러 상태의 카드를 하나의 컬럼에 표시하고 싶은 경우가 있습니다(예: *To do*와 *Unassigned* 상태 카드를 하나의 컬럼에 표시).

이를 위해 카드의 현재 상태를 저장하는 커스텀 필드(예: **status**)를 추가하고, **column** 필드에는 공통 상태를 저장합니다.

그런 다음, 카드 그룹화 규칙을 정의합니다. 예를 들면 다음과 같이 상태별로 컬럼을 그룹화할 수 있습니다:

- *todo*, *unassigned* - **Open** 컬럼
- *dev*, *testing* - **Inprogress** 컬럼
- *merged*, *released* - **Done** 컬럼

구현 방식에는 다음 두 가지가 있습니다:

- [서버 측](#서버-측-그룹화)
- [서버 측 + 클라이언트 측](#서버-측--클라이언트-측-그룹화)

### 서버 측 그룹화

그룹화를 서버에서 처리하려면, 백엔드가 [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)을 통해 클라이언트로 데이터를 푸시할 수 있어야 합니다([다중 사용자 백엔드](#다중-사용자-백엔드) 참고).

서버가 카드 업데이트 요청을 받으면 **status** 필드를 확인해야 합니다. 예를 들어, [Go](https://go.dev/)로는 다음과 같이 구현할 수 있습니다:

~~~go
func Update(id int, c Card) error {
   // ...
   oldColumn := c.Column
   s := data.Status
   if s == "todo" || s == "unassigned" {
      c.Column = "open"
   } else if s == "dev" || s == "testing" {
      c.Column = "inprogress"
   } else if s == "merged" || s == "released" {
      c.Column = "done"
   }

   db.Save(&c)

   if oldColumn != c.Column {
      // status 필드에 의해 컬럼이 변경된 경우,
      // 클라이언트에 카드를 해당 컬럼으로 이동하도록 알림

      // 카드의 인덱스 업데이트 필요
      updateCardIndex(&c)

      // 클라이언트에 컬럼 업데이트 알림
      ws.Publish("card-update", &c)
   }
   // ...
}
~~~

즉, 카드 상태가 변경되면 서버 로직에서 올바른 컬럼으로 할당하고, 클라이언트에 알림(WebSocket)을 보내 카드를 옮기도록 합니다.

### 서버 측 + 클라이언트 측 그룹화

이 방식에서는 서버가 그룹화 규칙을 제공하고, 클라이언트가 카드의 상태에 따라 어느 컬럼에 속하는지 판단합니다.

~~~js
const groupingRules = await fetch("http://server.com/rules");
~~~

예시 규칙은 다음과 같습니다:

~~~json
{
   "open": ["todo", "unassigned"],
   "progress": ["dev", "testing"],
   "done": ["merged", "released"],
}
~~~

그 다음, 클라이언트에서 카드의 상태를 확인해 컬럼을 지정하는 로직을 추가합니다:

~~~js
const updateColumn = card => {
   for (let col in groupingRules) {
      if (groupingRules[col].includes(card.status)) {
         card.column = col;
         break;
      }
   }
};

kanban.api.intercept("move-card", ev => {
   kanban.api.exec("update-card", {
      id: ev.id,
      card: { status: groupingRules[ev.columnId][0],
   });
});

kanban.api.intercept("update-card", ev => {
   updateColumn(ev.card);
});
~~~

이를 통해 카드가 다른 필드의 값에 따라 어떤 컬럼에 표시될지 제어할 수 있습니다.

### 예제

아래는 서버 측 로직을 사용하여 두 개 이상의 상태를 하나의 컬럼에 그룹화하는 실시간 예시입니다:

<iframe src="https://snippet.dhtmlx.com/habbz6mf?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
