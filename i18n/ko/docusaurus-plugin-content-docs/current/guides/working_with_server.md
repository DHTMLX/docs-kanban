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

JavaScript Kanban에는 백엔드와의 통신을 위한 REST API를 완벽하게 지원하는 `RestDataProvider` 서비스가 있습니다. 이 provider는 다음과 같은 데이터 작업을 주고받습니다:

- `"add-card"`
- `"add-column"`
- `"add-comment"`
- `"add-row"`
- `"add-link"`
- `"delete-card"`
- `"delete-column"`
- `"delete-comment"`
- `"delete-row"`
- `"delete-link"`
- `"move-card"`
- `"move-column"`
- `"move-row"`
- `"update-card"`
- `"update-column"`
- `"update-comment"`
- `"update-row"`
- `"add-vote"`
- `"delete-vote"`

## REST 메서드

`RestDataProvider` 서비스는 동적 데이터 로딩을 위한 다음과 같은 REST 메서드를 제공합니다:

- [`getCards()`](api/provider/rest_methods/js_kanban_getcards_method.md) — ***카드 데이터***에 대한 promise를 반환합니다
- [`getColumns()`](api/provider/rest_methods/js_kanban_getcolumns_method.md) — ***컬럼 데이터***에 대한 promise를 반환합니다
- [`getLinks()`](api/provider/rest_methods/js_kanban_getlinks_method.md) — ***링크 데이터***에 대한 promise를 반환합니다
- [`getRows()`](api/provider/rest_methods/js_kanban_getrows_method.md) — ***행 데이터***에 대한 promise를 반환합니다
- [`getUsers()`](api/provider/rest_methods/js_kanban_getusers_method.md) — ***사용자 데이터***에 대한 promise를 반환합니다
- [`send()`](api/provider/rest_methods/js_kanban_send_method.md) — 커스텀 HTTP 요청을 전송하고 promise를 반환합니다

## 백엔드와의 상호작용

서버와 상호작용하려면 `RestDataProvider`를 백엔드 스크립트에 연결해야 합니다. 내장 백엔드 중 하나를 사용하거나 직접 만들 수 있습니다:

- [Go](https://github.com/web-widgets/kanban-go)
- [Node](https://github.com/web-widgets/kanban-node)

:::tip
커스텀 백엔드를 사용하는 경우, [REST API 라우트](api/overview/rest_routes_overview.md) 레퍼런스를 참고하세요.
:::

`RestDataProvider`를 백엔드에 연결하려면, 백엔드 URL을 파라미터로 전달하여 `kanban.RestDataProvider` 생성자를 호출하세요. 아래 코드 스니펫은 provider를 생성하고, 초기 데이터를 가져오며, provider를 Kanban Event Bus에 바인딩하는 방법을 보여줍니다:

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
[`api.setNext()`](api/internal/js_kanban_setnext_method.md) 메서드를 통해 `RestDataProvider`를 Event Bus에 추가하세요. 이 단계를 통해 데이터 작업(추가, 삭제 등)이 서버에 해당 요청을 전송할 수 있습니다.
:::

### 예제

다음 데모는 `RestDataProvider`를 Go 백엔드에 연결하고 서버 데이터를 로드하는 방법을 보여줍니다:

<iframe src="https://snippet.dhtmlx.com/f25y0809?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 다중 사용자 백엔드

다중 사용자 백엔드를 사용하면 여러 사용자가 페이지를 새로 고침하지 않고도 동일한 Kanban 보드를 실시간으로 편집할 수 있습니다. 위젯은 WebSocket을 통해 서버에 연결하며, 커스텀 핸들러가 수신된 변경 사항을 Kanban 보드에 적용합니다.

다중 사용자 백엔드를 활성화하려면, Kanban 초기화 전에 서버에서 사용자 인증을 받아야 합니다. 다음 `login(url)` 함수는 세션 토큰을 가져와 캐시합니다:

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

이 함수는 인증을 시뮬레이션합니다(데모에서는 로그인 쿼리에 `id=1`을 하드코딩하므로, 가져오는 모든 세션은 ID `1`을 사용합니다). 인증이 성공하면 서버는 토큰을 반환하며, 이후 모든 요청에 이 토큰을 포함시켜야 합니다.

모든 요청에 토큰을 첨부하려면 `RestDataProvider.setHeaders()`를 호출하세요. 기본적으로, 서버는 `"Remote-Token": <value>` 헤더에 토큰을 저장합니다:

~~~js {}
login(url).then(token => {
    // rest provider 초기화
    const restProvider = new kanban.RestDataProvider(url);
    // 토큰을 커스텀 헤더로 설정
    restProvider.setHeaders({
        "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
    });
    
    // 위젯 초기화...
});
~~~

토큰을 받은 후에는 위젯을 초기화해야 합니다. 아래 코드 스니펫은 데이터를 가져오고 Kanban 보드를 생성하는 방법을 보여줍니다:

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

보드가 준비되면 서버 이벤트를 수신하기 위해 WebSocket을 연결합니다. 아래 코드 스니펫은 `RemoteEvents` 핸들러를 설정하는 방법을 보여줍니다:

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

스니펫에서 사용된 식별자:

- `handlers` — 서버 이벤트를 처리하는 클라이언트 핸들러
- `events` — 서버에서 수신되는 이벤트를 수신하는 `RemoteEvents` 인스턴스

`events.on(handlers)` 호출은 서버 사이드 이벤트에 클라이언트 핸들러를 등록합니다. 이제 위젯은 서버 사이드 변경 사항을 실시간으로 반영합니다.

### 예제

다음 데모는 다중 사용자 백엔드를 구성하여 다른 사용자의 변경 사항을 실시간으로 추적하는 방법을 보여줍니다:

<iframe src="https://snippet.dhtmlx.com/xw6g6qd6?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 서버 이벤트 커스터마이징

서버 이벤트에 대한 커스텀 로직을 정의하려면, `handlers` 객체를 `RemoteEvents.on(handlers)`에 전달하세요. 객체의 구조는 다음과 같습니다:

~~~ts {}
{
    cards?: (obj: any) => void;
    columns?: (obj: any) => void;
    links?: (obj: any) => void;
    rows?: (obj: any) => void;
    comments?: (obj: any) => void;
    votes?: (obj: any) => void;
}
~~~

서버에서 변경이 발생하면, 응답에 수정된 요소의 이름이 포함됩니다. 이 이름은 서버 로직에 따라 달라질 수 있습니다.

클라이언트에서 업데이트된 데이터는 `function(obj: any)` 콜백의 `obj` 인자로 전달됩니다. `type: string` 필드가 작업을 지정합니다. 허용되는 값:

- 카드: `"add-card"`, `"update-card"`, `"delete-card"`, `"move-card"`
- 컬럼: `"add-column"`, `"update-column"`, `"delete-column"`, `"move-column"`
- 링크: `"add-link"`, `"delete-link"`
- 행: `"add-row"`, `"update-row"`, `"delete-row"`, `"move-row"`
- 댓글: `"add-comment"`, `"update-comment"`, `"delete-comment"`
- 투표: `"add-vote"`, `"delete-vote"`

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
    obj.card.column = idResolver(obj.card.column, TypeCol);
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

`RestDataProvider.getIDResolver()` 메서드는 클라이언트 ID와 서버 ID를 동기화하는 데 필요한 함수를 반환합니다. 클라이언트에서 새 객체(카드, 컬럼, 행 또는 링크)를 생성하면, 해당 객체에는 임시 ID와 데이터 저장소의 서버 ID가 함께 존재합니다. `idResolver(id: TID, type: number)` 함수는 임시 ID를 서버 ID로 변환합니다.

`type` 인자는 모델 유형을 식별합니다:

- `CardID` — `1`
- `RowID` — `2`
- `ColumnID` — `3`
- `LinkID` — `4`
- `CommentID` — `5`

`board.api.exec()`를 호출할 때 `skipProvider: true`를 전달하면 서버로의 요청 전송을 방지할 수 있습니다. `remoteEvents.on(handlers)` 호출로 커스텀 핸들러를 등록합니다.

## 두 개 이상의 상태(status)를 하나의 컬럼으로 그룹화하기

서로 다른 컬럼의 카드를 하나의 컬럼에서 표시할 수 있습니다. 예를 들어, `todo`와 `unassigned` 상태를 가진 카드를 하나의 컬럼으로 표시할 수 있습니다.

그룹화를 구현하려면, 현재 카드 상태를 저장하는 커스텀 필드(예: `status`)를 추가하세요. 그런 다음 `column` 필드에 공통 상태를 저장합니다.

그룹화 규칙을 정의하세요. 아래 예제에서는 다음 상태를 사용합니다:

- `todo`, `unassigned` — **Open** 컬럼
- `dev`, `testing` — **Inprogress** 컬럼
- `merged`, `released` — **Done** 컬럼

구현 방법은 두 가지가 있습니다:

- [서버에서 그룹화](#group-on-the-server)
- [서버와 클라이언트 혼합 그룹화](#server-side-client-side-grouping)

### 서버에서 그룹화 {#group-on-the-server}

서버 사이드 그룹화를 구현하려면, 서버가 [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)를 통해 클라이언트에 데이터를 전송할 수 있어야 합니다([다중 사용자 백엔드](#다중-사용자-백엔드) 참고).

서버에서 카드 업데이트 쿼리를 처리할 때 `status` 필드를 확인하세요. 아래 예제는 [Go](https://go.dev/)를 사용하지만, 다른 백엔드 기술도 사용할 수 있습니다.

아래 코드 스니펫은 서버에서 `status` 필드를 대상 컬럼에 매핑하는 방법을 보여줍니다:

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

      // 카드의 인덱스 업데이트
      updateCardIndex(&c)

      // 클라이언트에 컬럼 업데이트 알림
      ws.Publish("card-update", &c)
   }
   // ...
}
~~~

사용자가 status 필드의 값을 변경하면, 서버 로직이 값을 확인하여 해당 컬럼에 카드를 배치합니다. 이후 서버는 WebSocket을 통해 클라이언트에 카드 이동을 알립니다.

### 서버와 클라이언트 혼합 그룹화 {#server-side-client-side-grouping}

서버와 클라이언트 혼합 방식을 사용하려면, 서버로부터 그룹화 규칙을 받아와야 합니다. 클라이언트는 이 규칙을 사용하여 `status` 필드 값에 따라 대상 컬럼을 결정합니다.

아래 코드 스니펫은 규칙을 가져오는 방법을 보여줍니다:

~~~js
const groupingRules = await fetch("http://server.com/rules");
~~~

규칙 객체는 다음 형식을 따릅니다:

~~~json
{
   "open": ["todo", "unassigned"],
   "progress": ["dev", "testing"],
   "done": ["merged", "released"],
}
~~~

카드 변경을 확인하고 카드를 해당 컬럼으로 이동시키는 로직을 정의하세요. 아래 코드 스니펫은 `move-card`와 `update-card` 이벤트를 가로채는 방법을 보여줍니다:

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
      card: { status: groupingRules[ev.columnId][0] },
   });
});

kanban.api.intercept("update-card", ev => {
   updateColumn(ev.card);
});
~~~

이 방식을 사용하면 다른 필드 값에 따라 특정 컬럼에 카드를 배치할 수 있습니다.

### 예제

다음 데모는 서버 사이드에서 두 개 이상의 상태를 하나의 컬럼으로 그룹화하는 방법을 실시간으로 보여줍니다:

<iframe src="https://snippet.dhtmlx.com/habbz6mf?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
