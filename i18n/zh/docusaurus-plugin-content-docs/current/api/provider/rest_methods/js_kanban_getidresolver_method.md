---
sidebar_label: getIDResolver()
title: getIDResolver REST 方法 API
description: 阅读 DHTMLX Kanban 的 getIDResolver REST 方法 API。了解如何将临时客户端 ID 解析为后端 ID。
---

# getIDResolver()

### 描述

@short: 返回一个将临时客户端 ID 解析为后端 ID 的函数

:::info
`getIDResolver()` 方法是 **RestDataProvider** 服务的一部分，用于与服务器进行交互。
:::

### 用法

~~~jsx {}
getIDResolver(): (id: string | number, type: number) => string | number;
~~~

### 返回值

该方法返回一个 `idResolver(id, type)` 函数：

- `id` — 需要解析的实体 ID（临时客户端 ID 或常规 ID）
- `type` — 该 ID 所属的模型类型：
    - `1` — 卡片（`CardID`）
    - `2` — 行（`RowID`）
    - `3` — 列（`ColumnID`）
    - `4` — 链接（`LinkID`）
    - `5` — 评论（`CommentID`）

当客户端创建新实体（卡片、列、行、链接、评论）时，`RestDataProvider` 会为其分配一个临时客户端 ID，并记录服务器返回的后端 ID。`idResolver(id, type)` 函数会为其持有的任何临时 ID 返回对应的后端 ID。对于已与后端匹配的 ID，该函数将原样返回。

### 示例

最常见的使用场景是在多用户环境中将 `RestDataProvider` 与 `kanbanUpdates` 连接，使针对后端 ID 的服务器事件能正确应用于客户端仍以临时 ID 存在的实体：

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

同样的解析函数也可以在传递给 `RemoteEvents.on()` 的自定义处理程序中使用。完整示例请参阅[自定义服务器事件](guides/working_with_server.md#customize-server-events)。

**相关文章：** [与服务器协作：多用户后端](guides/working_with_server.md#multiuser-backend)
