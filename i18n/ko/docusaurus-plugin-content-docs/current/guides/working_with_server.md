---
sidebar_label: 서버와 함께 작업하기
title: 서버와 함께 작업하기
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 서버와 함께 작업하는 방법을 알아보세요. 개발자 가이드와 API 레퍼런스를 확인하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 서버와 함께 작업하기

JavaScript Kanban은 클라이언트와 서버 데이터 모두와 함께 작업할 수 있습니다. 이 위젯은 백엔드에 대한 특별한 요구 사항이 없으며, REST API(RESTful API)를 지원하는 모든 백엔드 플랫폼과 손쉽게 연동할 수 있습니다.

:::info
기본적으로, 위젯에는 내장된 **Go** 및 **Node** 백엔드가 함께 제공됩니다. 하지만, 직접 만든 서버 스크립트도 사용할 수 있습니다.
:::

## RestDataProvider

JavaScript Kanban에는 백엔드와의 통신을 위한 REST API를 완벽하게 지원하는 **RestDataProvider** 서비스가 있습니다. 이를 통해 서버와 상호작용하며 다음과 같은 데이터 작업을 수행할 수 있습니다:

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

**RestDataProvider** 서비스에는 동적 데이터 로딩을 위한 특별한 REST 메서드가 포함되어 있습니다:

- [`getCards()`](api/provider/rest_methods/js_kanban_getcards_method.md) - ***카드 데이터***에 대한 promise를 반환합니다
- [`getColumns()`](api/provider/rest_methods/js_kanban_getcolumns_method.md) - ***컬럼 데이터***에 대한 promise를 반환합니다
- [`getLinks()`](api/provider/rest_methods/js_kanban_getlinks_method.md) - ***링크 데이터***에 대한 promise를 반환합니다
- [`getRows()`](api/provider/rest_methods/js_kanban_getrows_method.md) - ***행 데이터***에 대한 promise를 반환합니다
- [`getUsers()`](api/provider/rest_methods/js_kanban_getusers_method.md) - ***사용자 데이터***에 대한 promise를 반환합니다

## 백엔드와의 상호작용

서버와 상호작용하려면 **RestDataProvider**를 해당 서버 스크립트에 연결해야 합니다. 내장 백엔드를 사용하고 싶다면, 다음 저장소에서 필요한 스크립트를 찾을 수 있습니다:

- [**Go**](https://github.com/web-widgets/kanban-go) 백엔드
- [**Node**](https://github.com/web-widgets/kanban-node) 백엔드

또는 직접 커스텀 서버를 만들 수도 있습니다.

:::tip
커스텀 백엔드를 사용하는 경우, [**REST API 라우트**](api/overview/rest_routes_overview.md) 항목을 참고하세요!
:::

**RestDataProvider**를 백엔드에 연결하려면, 해당 **URL**을 파라미터로 전달하여 **kanban.RestDataProvider** 생성자를 호출해야 합니다.

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
데이터 작업(*추가*, *삭제* 등) 및 서버로의 요청 전송을 위해 [**api.setNext()**](api/internal/js_kanban_setnext_method.md) 메서드를 사용하여 **RestDataProvider**를 **Event Bus** 순서에 포함시켜야 합니다.
:::

### 예제

이 코드 스니펫에서는 **RestDataProvider**를 **Go** 백엔드에 연결하고 서버 데이터를 로드하는 방법을 보여줍니다:

<iframe src="https://snippet.dhtmlx.com/f25y0809?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 다중 사용자 백엔드

Kanban과 같은 프로젝트 관리 도구는 다양한 규모의 기업에서 많이 사용됩니다. 이런 점을 고려하여, 여러 사용자가 원활하게 협업할 수 있도록 하는 것이 중요합니다. 새로운 기능을 통해 사용자는 페이지를 새로 고침하지 않고도 Kanban 보드에서 동일한 카드를 실시간으로 효율적으로 관리할 수 있습니다. 그 결과, 최종 사용자는 서로의 작업을 실시간으로 확인하고 협업할 수 있어 생산성과 만족도가 높아집니다.

다중 사용자 백엔드를 구현하려면 Kanban 초기화 전에 서버에서 인증을 받아야 합니다. 이를 위해 `login(url: string)` 함수를 생성할 수 있습니다:

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

이 함수는 인증을 시뮬레이션하며, 모든 사용자는 ID 1로 인증됩니다. 인증이 성공하면 서버는 토큰을 반환하며, 이후 모든 요청에 이 토큰을 사용해야 합니다. 토큰 전송을 자동화하려면 `RestDataProvider.setHeaders()` 함수를 사용합니다. 이 함수는 요청에 커스텀 헤더를 추가합니다. 기본적으로, 서버는 `"Remote-Token":<value>` 헤더에 토큰을 저장합니다:

~~~js {}
login(url).then(token => {
    // rest provider 초기화
    const restProvider = new kanban.RestDataProvider(url);
    // 토큰을 커스텀 헤더로 설정
    restProvder.setHeaders({
        "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
    });
    
    // 위젯 초기화...
});
~~~

토큰을 받은 후에는 위젯을 초기화해야 합니다. 아래와 같이 할 수 있습니다:

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

    // 클라이언트 데이터를 서버에 저장
    board.api.setNext(restProvider);
    
    // 다중 사용자 초기화...
});
~~~

위젯 초기화 후에는 서버에서 발생하는 이벤트를 수신하기 위해 WebSocket을 추가해야 합니다. 다음과 같이 할 수 있습니다:

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

- `handlers` - 서버 이벤트를 처리하는 클라이언트 핸들러
- `events` - 서버에 연결하여 모든 수신 이벤트를 듣는 객체
- `RemoteEvents.on(handlers)` - 서버 이벤트에 클라이언트 핸들러를 적용

다중 사용자 백엔드를 앱에 통합하면, 사용자 간 협업을 간소화하고 UI를 통해 실시간으로 변경 사항을 추적할 수 있습니다.

### 예제

아래 스니펫은 다중 사용자 백엔드를 구성하여 다른 사용자의 변경 사항을 실시간으로 추적하는 방법을 보여줍니다:

<iframe src="https://snippet.dhtmlx.com/xw6g6qd6?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 서버 이벤트 커스터마이징

서버 이벤트를 처리하는 자체 로직을 정의할 수 있습니다. 이를 위해 **handlers** 객체를 `RemoteEvents.on(handlers)` 메서드에 전달해야 합니다. **handlers** 객체는 다음과 같은 구조를 가져야 합니다:

~~~js {}
{
    "cards": cardsHandler: function(obj: any),
    "columns": columnsHandler: function(obj: any),
    "links": linksHandler: function(obj: any),
    "rows": rowsHandler: function(obj: any),
}
~~~

서버에서 변경이 발생하면, 수정된 요소의 이름을 반환합니다. 이 이름은 서버 로직에 따라 달라질 수 있습니다.

클라이언트에서 업데이트된 데이터는 `function(obj: any)` 함수의 **obj** 인자에 전달됩니다. 작업을 지정하려면 `type: string` 필드를 사용합니다. 가능한 값은 다음과 같습니다:

- **카드**: `"add-card"`, `"update-card"`, `"delete-card"`, `"move-card"`
- **컬럼**: `"add-column"`, `"update-column"`, `"delete-column"`, `"move-column"`
- **링크**: `"add-link"`, `"delete-link"`
- **행**: `"add-row"`, `"update-row"`, `"delete-row"`, `"move-row"`

아래 코드 스니펫에서 구현 예시를 확인할 수 있습니다:

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

`RestDataProvider.getIDResolver()` 메서드는 클라이언트 ID와 서버 ID를 동기화하는 데 필요한 함수를 반환합니다. 클라이언트에서 새 객체(*카드/컬럼/행/링크*)를 생성하면, 해당 객체에는 임시 ID와 저장소의 서버 ID가 함께 존재합니다. `idResolver()` 함수는 클라이언트 ID와 서버 ID를 동기화할 수 있습니다. 이 함수의 형식은 `idResolver(id: TID, type: number)`입니다.

`type` 인자는 다음 값을 가집니다:

- `CardID` - 1,
- `RowID` - 2,
- `ColumnID` - 3
- `LinkID` - 4

서버로의 요청 전송을 방지하려면, `board.api.exec()` 메서드 호출 시 `skipProvider: true` 플래그를 사용해야 합니다.

마지막으로, 커스텀 핸들러를 서버 이벤트에 적용하면 자체 서버 이벤트 핸들러를 만들 수 있습니다.

## 두 개 이상의 상태(status)를 하나의 컬럼으로 그룹화하기

이 섹션에서는 서로 다른 컬럼의 카드를 하나의 컬럼에서 표시하는 방법(예: *To do*와 *Unassigned* 상태를 가진 카드의 공통 컬럼)을 설명합니다.

이런 그룹화를 구현하려면, 커스텀 필드(예: **status**)를 추가해야 합니다. 이 필드는 카드의 현재 상태를 저장합니다. **column** 필드는 공통 상태를 저장합니다.

이후 카드 그룹화를 위한 특정 규칙을 만들어야 합니다. 예를 들어, 다음과 같이 상태별로 특정 컬럼에 카드를 그룹화할 수 있습니다:

- *todo*, *unassigned* - **Open** 컬럼의 상태
- *dev*, *testing* - **Inprogress** 컬럼의 상태
- *merged*, *released* - **Done** 컬럼의 상태

두 개 이상의 상태를 하나의 컬럼으로 그룹화하는 방법은 두 가지가 있습니다:

- [서버 사이드](#server-side-grouping)
- [서버 사이드 + 클라이언트 사이드](#server-side--client-side-grouping)

### 서버 사이드 그룹화

서버 사이드 그룹화를 구현하려면, 서버가 [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)를 통해 클라이언트에 데이터를 전송할 수 있어야 합니다([다중 사용자 백엔드](#multiuser-backend) 참고).

서버에서 카드 업데이트 쿼리를 처리하는 부분에서 **status** 필드를 확인해야 합니다. 여기서는 [Go](https://go.dev/) 언어를 예시로 사용하지만, 다른 백엔드 기술도 사용할 수 있습니다.

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
      // status 필드로 컬럼이 변경되면,
      // 클라이언트에 해당 카드의 컬럼 이동을 알림

      // 카드의 인덱스 업데이트 필요
      updateCardIndex(&c)

      // 클라이언트에 컬럼 업데이트 알림
      ws.Publish("card-update", &c)
   }
   // ...
}
~~~

이렇게 하면, 사용자가 status 필드의 값을 변경할 때 서버 로직이 값을 확인하여 해당 컬럼에 카드를 배치합니다. 이후 서버는 WebSocket을 통해 클라이언트에 카드 이동을 알립니다.

### 서버 사이드 + 클라이언트 사이드 그룹화

서버와 클라이언트 혼합 방식을 사용하려면, 서버로부터 그룹화 규칙을 받아와야 합니다. 이 규칙에 따라 클라이언트가 status 필드 값에 따라 카드를 어느 컬럼으로 이동시킬지 결정할 수 있습니다.

~~~js
const groupingRules = await fetch("http://server.com/rules");
~~~

예를 들어, 다음과 같이 규칙을 지정할 수 있습니다:

~~~json
{
   "open": ["todo", "unassigned"],
   "progress": ["dev", "testing"],
   "done": ["merged", "released"],
}
~~~

다음으로, 카드 변경을 확인하고 필요한 컬럼으로 이동시키는 로직을 정의해야 합니다:

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

이렇게 하면, 다른 필드 값에 따라 특정 컬럼에 카드를 배치할 수 있습니다.

### 예제

아래 스니펫은 서버 사이드에서 두 개 이상의 상태를 하나의 컬럼으로 그룹화하는 방법을 실시간으로 보여줍니다:

<iframe src="https://snippet.dhtmlx.com/habbz6mf?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>