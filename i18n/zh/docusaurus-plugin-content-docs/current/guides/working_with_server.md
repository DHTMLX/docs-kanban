---
sidebar_label: 与服务器协作
title: 与服务器协作
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解如何与服务器协作。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX Kanban 30 天试用版。
---

# 与服务器协作

JavaScript Kanban 支持同时处理客户端和服务器端数据。该组件对后端没有特殊要求，可以轻松连接任何支持 REST API（RESTful API）的后端平台。

:::info
默认情况下，该组件自带内置的 **Go** 和 **Node** 后端。但您同样可以使用自定义的服务器脚本。
:::

## RestDataProvider

JavaScript Kanban 提供了 **RestDataProvider** 服务，完全支持与后端交互的 REST API。它允许与服务器进行交互并执行以下数据操作：

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

**RestDataProvider** 服务包含用于动态数据加载的特殊 REST 方法：

- [`getCards()`](api/provider/rest_methods/js_kanban_getcards_method.md) - 获取 ***cards data*** 的 Promise
- [`getColumns()`](api/provider/rest_methods/js_kanban_getcolumns_method.md) - 获取 ***columns data*** 的 Promise
- [`getLinks()`](api/provider/rest_methods/js_kanban_getlinks_method.md) - 获取 ***links data*** 的 Promise
- [`getRows()`](api/provider/rest_methods/js_kanban_getrows_method.md) - 获取 ***rows data*** 的 Promise
- [`getUsers()`](api/provider/rest_methods/js_kanban_getusers_method.md) - 获取 ***users data*** 的 Promise

## 与后端交互

要与服务器交互，您需要将 **RestDataProvider** 连接到相应的服务器脚本。如果您希望使用内置后端，可以在以下仓库中找到所需脚本：

- [**Go**](https://github.com/web-widgets/kanban-go) 后端
- [**Node**](https://github.com/web-widgets/kanban-node) 后端

或者，您也可以创建自定义后端。

:::tip
如果您使用自定义后端，请参考 [**REST API routes**](api/overview/rest_routes_overview.md) 主题获取更多信息！
:::

要将 **RestDataProvider** 连接到后端，需要调用 **kanban.RestDataProvider** 构造函数，并将相应的 **URL** 作为参数传入。

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
您需要通过 [**api.setNext()**](api/internal/js_kanban_setnext_method.md) 方法将 **RestDataProvider** 包含到 **Event Bus** 顺序中，以便执行数据操作（*添加*、*删除*等）并向服务器发送相应请求。
:::

### 示例

在以下代码片段中，您可以看到如何将 **RestDataProvider** 连接到 **Go** 后端并加载服务器数据：

<iframe src="https://snippet.dhtmlx.com/f25y0809?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 多用户后端

诸如我们的 Kanban 这样的项目管理工具，受到各类企业的高度青睐。考虑到这一点，提供无缝的多用户体验非常重要。我们的新特性允许多个用户实时高效地管理同一看板上的卡片，无需刷新页面。因此，终端用户可以协作并实时了解彼此的操作，从而提升生产力和整体满意度。

要实现多用户后端，需要在 Kanban 初始化前在服务器上完成授权。为此，您可以创建 `login(url: string)` 函数：

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

该函数仅用于模拟授权，所有用户都将以 ID 1 进行授权。授权成功后，服务器会发送一个 token，后续每次请求服务器都需要使用该 token。为了自动发送 token，可以使用 `RestDataProvider.setHeaders()` 方法。该方法能为请求添加自定义 header。默认情况下，服务器将 token 存储在 `"Remote-Token":<value>` header 中：

~~~js {}
login(url).then(token => {
    // rest provider 初始化
    const restProvider = new kanban.RestDataProvider(url);
    // 设置 token 为自定义 header
    restProvder.setHeaders({
        "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
    });
    
    // 组件初始化...
});
~~~

获取 token 后，您应初始化组件。可以按如下方式实现：

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

组件初始化后，需要添加 WebSocket，用于监听来自服务器的事件。可按如下方式实现：

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

- `handlers` - 处理服务器事件的客户端处理函数
- `events` - 连接服务器并监听所有事件的对象
- `RemoteEvents.on(handlers)` - 将客户端处理函数应用到服务器事件

集成多用户后端后，您可以简化用户间的协作，并让他们通过 UI 实时了解所有变更。

### 示例

以下代码片段演示了如何配置多用户后端，以实时跟踪其他用户的变更：

<iframe src="https://snippet.dhtmlx.com/xw6g6qd6?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 服务器事件自定义

您可以自定义服务器事件的处理逻辑。为此，需将 **handlers** 对象传递给 `RemoteEvents.on(handlers)` 方法。**handlers** 对象应具有如下结构：

~~~js {}
{
    "cards": cardsHandler: function(obj: any),
    "columns": columnsHandler: function(obj: any),
    "links": linksHandler: function(obj: any),
    "rows": rowsHandler: function(obj: any),
}
~~~

当服务器发生变更时，会返回被修改元素的名称。这些名称可能因服务器逻辑而异。

客户端更新的数据会作为 **obj** 参数传递给 `function(obj: any)`。为了指定操作类型，存在一个 `type: string` 字段。其可能取值如下：

- 对于 **cards**: `"add-card"`, `"update-card"`, `"delete-card"`, `"move-card"`
- 对于 **columns**: `"add-column"`, `"update-column"`, `"delete-column"`, `"move-column"`
- 对于 **links**: `"add-link"`, `"delete-link"`
- 对于 **rows**: `"add-row"`, `"update-row"`, `"delete-row"`, `"move-row"`

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
    obj.card.column = idResolver(obj.card.column, TypeColumn);
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

`RestDataProvider.getIDResolver()` 方法返回一个函数，用于同步客户端 ID 与服务器 ID。当在客户端新建一个对象（*card/column/row/link*）时，结果对象会有一个临时 ID，并在存储中有对应的服务器 ID。`idResolver()` 函数用于同步客户端 ID 与服务器 ID。其格式为：`idResolver(id: TID, type: number)`

`type` 参数为模型类型，取值如下：

- `CardID` - 1,
- `RowID` - 2,
- `ColumnID` - 3
- `LinkID` - 4

为避免再次向服务器发送请求，调用 `board.api.exec()` 方法时需使用 `skipProvider: true` 标志。

最后一步是将自定义处理函数应用到服务器事件。通过这种方式，您可以自定义服务器事件处理逻辑。

## 将两个或更多状态归为同一列

本节介绍如何将来自不同列的卡片显示在同一列中（例如，将 *To do* 和 *Unassigned* 状态的卡片归为一个公共列）。

要实现此类分组，您需要添加一个自定义字段（如 **status**），用于存储卡片当前状态。**column** 字段则存储公共状态。

接下来，需为卡片分组制定特定规则。如下所示，不同状态的卡片会被分组到特定列：

- *todo*, *unassigned* - 属于 **Open** 列
- *dev*, *testing* - 属于 **Inprogress** 列
- *merged*, *released* - 属于 **Done** 列

实现将两个或更多状态的卡片归为同一列有两种方式：

- [服务器端分组](#服务器端分组)
- [服务器端 + 客户端分组](#服务器端--客户端分组)

### 服务器端分组

如需实现服务器端分组，您的服务器应支持通过 [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) 向客户端发送数据（见 [多用户后端](#多用户后端)）。

在服务器处理更新卡片请求时，需要检查 **status** 字段。在本例中我们使用 [Go](https://go.dev/) 语言，您也可以使用其他后端技术。

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
      // 需通知客户端将卡片移动到对应列

      // 需更新卡片索引
      updateCardIndex(&c)

      // 通知客户端更新列
      ws.Publish("card-update", &c)
   }
   // ...
}
~~~

因此，当用户更改 status 字段值时，服务器逻辑会检查其值，并将卡片放入相应列。之后，服务器会通过 WebSocket 通知客户端该卡片需要移动到其他列。

### 服务器端 + 客户端分组

对于混合方案，您应从服务器获取分组规则。客户端根据这些规则，依据 status 字段的值判断卡片应归入哪一列。

~~~js
const groupingRules = await fetch("http://server.com/rules");
~~~

例如，可以指定如下规则：

~~~json
{
   "open": ["todo", "unassigned"],
   "progress": ["dev", "testing"],
   "done": ["merged", "released"],
}
~~~

然后，您需要定义逻辑，检测卡片变更并将其移动到目标列：

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

通过这种方式，您可以根据其他字段为卡片指定特定列。

### 示例

以下代码片段展示了如何配置服务器端，将两个或更多状态实时分组到同一列：

<iframe src="https://snippet.dhtmlx.com/habbz6mf?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>