---
sidebar_label: 与服务器协作
title: 与服务器协作
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解如何与服务器协作。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX Kanban 的 30 天评估版。
---

# 与服务器协作

JavaScript Kanban 能够处理客户端和服务器端的数据。它没有特殊的后端要求，因此可连接到任何支持 REST API 的后端平台。

:::info
该组件内置了 **Go** 和 **Node** 后端选项，同时也支持自定义服务器脚本。
:::

## RestDataProvider

JavaScript Kanban 提供了 **RestDataProvider** 服务，完全支持后端 REST API 操作。该服务便于与服务器通信，并可执行以下数据操作:

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

## REST 方法

**RestDataProvider** 服务包含多个用于动态加载数据的 REST 方法:

- [`getCards()`](/api/provider/rest_methods/js_kanban_getcards_method.md) - 返回 ***cards data*** 的 promise
- [`getColumns()`](/api/provider/rest_methods/js_kanban_getcolumns_method.md) - 返回 ***columns data*** 的 promise
- [`getLinks()`](/api/provider/rest_methods/js_kanban_getlinks_method.md) - 返回 ***links data*** 的 promise
- [`getRows()`](/api/provider/rest_methods/js_kanban_getrows_method.md) - 返回 ***rows data*** 的 promise
- [`getUsers()`](/api/provider/rest_methods/js_kanban_getusers_method.md) - 返回 ***users data*** 的 promise

## 与后端交互

要连接服务器，只需将 **RestDataProvider** 关联到您的服务器脚本。如果使用内置后端，可在以下位置找到:

- [**Go**](https://github.com/web-widgets/kanban-go) 后端
- [**Node**](https://github.com/web-widgets/kanban-node) 后端

您也可以自行搭建后端。

:::tip
如有自定义后端，请参阅 [**REST API routes**](/api/overview/rest_routes_overview/) 部分以获取更多信息。
:::

连接 **RestDataProvider** 到后端非常简单:只需使用 **kanban.RestDataProvider** 构造函数，并传入服务器的 **URL**。

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
要实现添加、删除等数据操作并将请求发送到服务器，**RestDataProvider** 需要通过 [**api.setNext()**](/api/internal/js_kanban_setnext_method.md) 加入 **Event Bus** 链。
:::

### 示例

下面的代码片段演示如何将 **RestDataProvider** 连接到 **Go** 后端，并从服务器加载数据:

<iframe src="https://snippet.dhtmlx.com/f25y0809?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 多用户后端

Kanban 看板广泛应用于各类企业，多用户支持可显著提升协作体验。启用该功能后，多个用户可实时管理同一个看板上的卡片，无需刷新页面。这样可以让协作更加流畅，所有人都能及时看到变更。

要设置多用户后端，首先需在初始化看板前在服务器上完成授权。可以使用一个简单的 `login(url: string)` 方法实现:

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

该方法仅为授权演示--所有用户都以 ID 为 1 登录。登录后，服务器返回一个 token，后续请求都需携带该 token。为自动完成此操作，可以使用 `RestDataProvider.setHeaders()` 方法，为每个请求添加自定义请求头。默认情况下，服务器期望 token 在 `"Remote-Token":<value>` 头部:

~~~js {}
login(url).then(token => {
    // rest provider 初始化
    const restProvider = new kanban.RestDataProvider(url);
    // 设置自定义请求头
    restProvder.setHeaders({
        "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
    });
    
    // 组件初始化...
});
~~~

获得 token 后，可以如下初始化 Kanban 组件:

~~~js {}
// 组件初始化...
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

    // 将客户端变更保存到服务器
    board.api.setNext(restProvider);
    
    // 多用户初始化...
});
~~~

组件设置完毕后，需要添加 WebSocket 监听服务器事件。用法如下:

~~~js {}
// 多用户初始化...

// 获取服务器事件的客户端处理器
const handlers = kanbanUpdates(
    board.api,
    restProvider.getIDResolver()
);
// 连接服务器事件
const events = new RemoteEvents(url + "/api/v1", token);
// 将处理器绑定到服务器事件
events.on(handlers);
~~~

- `handlers` - 客户端用于响应服务器事件的处理函数
- `events` - 该对象连接服务器并监听事件
- `RemoteEvents.on(handlers)` - 将处理器绑定到服务器事件

通过这种方式实现多用户后端，可极大提升协作效率，并让所有用户即时在界面中看到最新更改。

### 示例

如下代码片段展示如何配置多用户后端，实现用户间实时同步变更:

<iframe src="https://snippet.dhtmlx.com/xw6g6qd6?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 服务器事件自定义

您可以自定义服务器事件的处理方式。只需将自定义 **handlers** 对象传递给 `RemoteEvents.on(handlers)` 方法即可。**handlers** 对象结构如下:

~~~js {}
{
    "cards": cardsHandler: function(obj: any),
    "columns": columnsHandler: function(obj: any),
    "links": linksHandler: function(obj: any),
    "rows": rowsHandler: function(obj: any),
}
~~~

每当服务器有变更时，会返回被修改元素的名称，该名称可能因后端逻辑不同而变化。

客户端的变更通过 `function(obj: any)` 的 **obj** 参数传递。操作类型通过 `type: string` 字段指定，可能的取值包括:

- **cards**: `"add-card"`, `"update-card"`, `"delete-card"`, `"move-card"`
- **columns**: `"add-column"`, `"update-column"`, `"delete-column"`, `"move-column"`
- **links**: `"add-link"`, `"delete-link"`
- **rows**: `"add-row"`, `"update-row"`, `"delete-row"`, `"move-row"`

参考以下代码示例:

~~~js {}
// 初始化 kanban
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
                skipProvider: true, // 防止客户端再向服务器发送请求
            })
            break;
        // 其他操作
    }
}

// 添加自定义处理器
const handlers = {
   cards: cardsHandler,
};

const remoteEvents = new kanban.RemoteEvents(remoteEventsURL, token);
remoteEvents.on(handlers);
~~~

`RestDataProvider.getIDResolver()` 方法返回一个函数，用于同步客户端和服务器的 ID。当在客户端新建对象（*card/column/row*）时，先分配一个临时 ID，服务器返回的真实 ID 存储在数据中。`idResolver()` 用于保持 ID 的一致，方法签名为 `idResolver(id: TID, type: number)`。

`type` 与实体的对应关系如下:

- `CardID` - 1,
- `RowID` - 2,
- `ColumnID` - 3

如需禁止向服务器发送新请求，可在调用 `board.api.exec()` 时加上 `skipProvider: true` 标志。

自定义处理器挂载后，您将完全掌控客户端对服务器事件的处理逻辑。

## 将多个状态分组到同一列

有时您可能希望在一列中展示不同状态的卡片（例如，将 *To do* 和 *Unassigned* 状态的卡片归为一列）。

此时，可以添加一个自定义字段（如 **status**）用于存储卡片当前状态，**column** 字段则用于存储公共状态。

然后，定义卡片分组规则。例如，可以将以下状态分组到不同列:

- *todo*, *unassigned* - 显示在 **Open** 列
- *dev*, *testing* - 显示在 **Inprogress** 列
- *merged*, *released* - 显示在 **Done** 列

实现方式有两种:

- [服务器端分组](#服务器端分组)
- [服务器端 + 客户端分组](#服务器端--客户端分组)

### 服务器端分组

如需在服务器端实现分组，后端需支持通过 [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) 向客户端推送数据（参见 [多用户后端](#多用户后端)）。

当服务器收到卡片更新请求时，需检查 **status** 字段。例如，使用 [Go](https://go.dev/) 可这样写:

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
      // 如果状态字段导致列发生变化
      // 通知客户端将卡片移动到对应列

      // 需更新卡片索引
      updateCardIndex(&c)

      // 通知客户端更新列
      ws.Publish("card-update", &c)
   }
   // ...
}
~~~

因此，当卡片状态变更时，服务器逻辑会将其分配到正确的列，并通过 WebSocket 通知客户端移动到相应列。

### 服务器端 + 客户端分组

采用组合方式时，服务器提供分组规则，客户端根据规则和卡片状态判断归属列。

~~~js
const groupingRules = await fetch("http://server.com/rules");
~~~

示例规则如下:

~~~json
{
   "open": ["todo", "unassigned"],
   "progress": ["dev", "testing"],
   "done": ["merged", "released"],
}
~~~

接下来，在客户端添加逻辑，根据卡片状态自动归入正确列:

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

通过这种方式，可以根据其它字段灵活控制卡片所属列。

### 示例

以下代码片段展示如何用服务器端逻辑实时合并多个状态到同一列:

<iframe src="https://snippet.dhtmlx.com/habbz6mf?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
