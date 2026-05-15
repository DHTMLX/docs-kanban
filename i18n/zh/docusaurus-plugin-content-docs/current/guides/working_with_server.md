---
sidebar_label: 与服务器协作
title: 与服务器协作
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解如何与服务器协作。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX Kanban 30 天试用版。
---

# 与服务器协作

JavaScript Kanban 支持同时处理客户端和服务器端数据。该组件对后端没有特殊要求，可以连接任何支持 REST（RESTful）API 的后端平台。

:::info
该组件自带内置的 Go 和 Node 后端。您同样可以使用自定义的服务器脚本。
:::

## RestDataProvider

JavaScript Kanban 提供了 `RestDataProvider` 服务，完全支持与后端通信的 REST API。该 provider 发送和接收以下数据操作：

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

## REST 方法

`RestDataProvider` 服务提供以下用于动态数据加载的 REST 方法：

- [`getCards()`](api/provider/rest_methods/js_kanban_getcards_method.md) — 获取 cards 数据的 Promise
- [`getColumns()`](api/provider/rest_methods/js_kanban_getcolumns_method.md) — 获取 columns 数据的 Promise
- [`getLinks()`](api/provider/rest_methods/js_kanban_getlinks_method.md) — 获取 links 数据的 Promise
- [`getRows()`](api/provider/rest_methods/js_kanban_getrows_method.md) — 获取 rows 数据的 Promise
- [`getUsers()`](api/provider/rest_methods/js_kanban_getusers_method.md) — 获取 users 数据的 Promise
- [`send()`](api/provider/rest_methods/js_kanban_send_method.md) — 发送自定义 HTTP 请求并返回 Promise

## 与后端交互

要与服务器交互，需要将 `RestDataProvider` 连接到后端脚本。可使用内置后端，也可以创建自定义后端：

- [Go](https://github.com/web-widgets/kanban-go)
- [Node](https://github.com/web-widgets/kanban-node)

:::tip
如果使用自定义后端，请参考 [REST API routes](api/overview/rest_routes_overview.md) 参考文档。
:::

要将 `RestDataProvider` 连接到后端，需要调用 `kanban.RestDataProvider` 构造函数并传入后端 URL。以下代码片段创建一个 provider，获取初始数据，并将 provider 绑定到 Kanban Event Bus：

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
通过 [`api.setNext()`](api/internal/js_kanban_setnext_method.md) 方法将 `RestDataProvider` 添加到 Event Bus 中。此步骤使数据操作（添加、删除等）能够触发相应的服务器请求。
:::

### 示例

以下演示将 `RestDataProvider` 连接到 Go 后端并加载服务器数据：

<iframe src="https://snippet.dhtmlx.com/f25y0809?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 多用户后端 {#multiuser-backend}

多用户后端允许多个用户无需刷新页面即可实时编辑同一看板。组件通过 WebSocket 连接到服务器，自定义处理函数将服务器传来的变更应用到看板。

要启用多用户后端，需在初始化 Kanban 前在服务器上完成用户授权。以下 `login(url)` 函数用于获取并缓存会话 token：

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

该函数用于模拟授权（演示中登录请求硬编码了 `id=1`，因此每个获取的会话均使用 ID `1`）。授权成功后，服务器会返回一个 token，后续请求都需要携带该 token。

要将 token 自动附加到每个请求，请调用 `RestDataProvider.setHeaders()`。默认情况下，服务器将 token 存储在 `"Remote-Token": <value>` header 中：

~~~js {}
login(url).then(token => {
    // rest provider 初始化
    const restProvider = new kanban.RestDataProvider(url);
    // 设置 token 为自定义 header
    restProvider.setHeaders({
        "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
    });
    
    // 组件初始化...
});
~~~

获取 token 后，初始化组件。以下代码片段获取数据并创建 Kanban 看板：

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

    // 将客户端数据保存到服务器
    board.api.setNext(restProvider);
    
    // 多用户初始化...
});
~~~

看板创建完成后，附加 WebSocket 以监听服务器事件。以下代码片段配置 `RemoteEvents` 处理函数：

~~~js {}
// 多用户初始化...

// 获取服务器事件的客户端处理函数
const handlers = kanbanUpdates(
    board.api,
    restProvider.getIDResolver()
);
// 连接服务器事件
const events = new RemoteEvents(url + "/api/v1", token);
// 绑定客户端处理函数到服务器事件
events.on(handlers);
~~~

该代码片段中使用了以下标识符：

- `handlers` — 处理服务器事件的客户端处理函数
- `events` — 监听服务器传入事件的 `RemoteEvents` 实例

`events.on(handlers)` 调用将客户端处理函数注册到服务器端事件。组件现在可以实时响应服务器端的变更。

### 示例

以下演示配置了多用户后端，用于实时跟踪其他用户的变更：

<iframe src="https://snippet.dhtmlx.com/xw6g6qd6?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 自定义服务器事件

要为服务器事件定义自定义逻辑，需将 `handlers` 对象传递给 `RemoteEvents.on(handlers)`。该对象的结构如下：

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

服务器发生变更后，响应中包含被修改元素的名称。这些名称取决于服务器逻辑。

客户端更新的数据会通过 `function(obj: any)` 回调的 `obj` 参数传入。`type: string` 字段指定操作类型，允许的值如下：

- 对于 cards：`"add-card"`, `"update-card"`, `"delete-card"`, `"move-card"`
- 对于 columns：`"add-column"`, `"update-column"`, `"delete-column"`, `"move-column"`
- 对于 links：`"add-link"`, `"delete-link"`
- 对于 rows：`"add-row"`, `"update-row"`, `"delete-row"`, `"move-row"`
- 对于 comments：`"add-comment"`, `"update-comment"`, `"delete-comment"`
- 对于 votes：`"add-vote"`, `"delete-vote"`

以下代码片段展示了实现细节：

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
    obj.card.column = idResolver(obj.card.column, TypeCol);
    switch (obj.type) {
        case "add-card":
            board.api.exec("add-card", {
                card: obj.card,
                select: false,
                skipProvider: true, // 防止客户端再次向服务器发送请求
            })
            break;
        // 其他操作
    }
}

// 添加自定义处理函数
const handlers = {
   cards: cardsHandler,
};

const remoteEvents = new kanban.RemoteEvents(remoteEventsURL, token);
remoteEvents.on(handlers);
~~~

`RestDataProvider.getIDResolver()` 方法返回一个函数，用于同步客户端 ID 与服务器 ID。当客户端创建新对象（card、column、row 或 link）时，该对象会获得一个临时 ID，同时数据存储中保存对应的服务器 ID。`idResolver(id: TID, type: number)` 函数将临时 ID 解析为服务器 ID。

`type` 参数标识模型类型：

- `CardID` — `1`
- `RowID` — `2`
- `ColumnID` — `3`
- `LinkID` — `4`
- `CommentID` — `5`

要防止请求发送到服务器，调用 `board.api.exec()` 时需传入 `skipProvider: true`。`remoteEvents.on(handlers)` 调用负责注册自定义处理函数。

## 将状态分组到同一列

将来自不同列的卡片显示在同一列中。例如，可以将 `todo` 和 `unassigned` 状态的卡片放在同一列。

要实现分组，需添加一个自定义字段（如 `status`）用于存储卡片当前状态，`column` 字段则存储公共状态。

定义分组规则。下例使用以下状态进行分组：

- `todo`, `unassigned` — 属于 **Open** 列
- `dev`, `testing` — 属于 **Inprogress** 列
- `merged`, `released` — 属于 **Done** 列

有两种实现方式：

- [服务器端分组](#group-on-the-server)
- [服务器端 + 客户端混合分组](#server-side-client-side-grouping)

### 服务器端分组 {#group-on-the-server}

服务器端分组要求服务器能够通过 [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) 向客户端推送数据（见 [多用户后端](#multiuser-backend)）。

当服务器处理卡片更新请求时，需检查 `status` 字段。下例使用 [Go](https://go.dev/) 语言，但任何后端技术均可使用。

以下代码片段在服务器端将 `status` 字段映射到目标列：

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
      // 如果因 status 字段更新了 column，
      // 通知客户端将卡片移动到对应列

      // 更新卡片索引
      updateCardIndex(&c)

      // 通知客户端更新列
      ws.Publish("card-update", &c)
   }
   // ...
}
~~~

当用户更改 status 字段值时，服务器会检查其值并将卡片放入目标列，然后通过 WebSocket 通知客户端移动该卡片。

### 服务器端 + 客户端混合分组 {#server-side-client-side-grouping}

对于混合方案，从服务器获取分组规则。客户端根据这些规则，依据 `status` 字段的值确定目标列。

以下代码片段用于获取规则：

~~~js
const groupingRules = await fetch("http://server.com/rules");
~~~

规则对象的格式如下：

~~~json
{
   "open": ["todo", "unassigned"],
   "progress": ["dev", "testing"],
   "done": ["merged", "released"],
}
~~~

定义检测卡片变更并将其移动到对应列的逻辑。以下代码片段拦截 `move-card` 和 `update-card` 事件：

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

该方式可根据其他字段的值为卡片指定所属列。

### 示例

以下演示配置了服务器端，将两个或更多状态实时分组到同一列：

<iframe src="https://snippet.dhtmlx.com/habbz6mf?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
