---
sidebar_label: getUsers()
title: getUsers REST 方法 API
description: 阅读 DHTMLX Kanban 的 getUsers REST 方法 API。了解如何获取包含用户数据的 promise。
---

# getUsers()

### 描述

@short: 获取包含用户数据的 promise

:::info
**getUsers()** 方法是 **RestDataProvider** 服务的一部分，用于与服务器交互
:::

### 用法

~~~jsx {}
getUsers(): promise;
~~~

### 返回值

**getUsers()** 方法通过 **GET** 请求向服务器发送请求，并返回一个包含用户数据的 **promise**

### 示例

~~~jsx {2,8,21}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getRows(),
    restProvider.getUsers(),
]).then(([cards, columns, rows, users]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
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

**更新日志：** 该方法在 v1.3 版本中添加

**相关文档：** [与服务器交互](guides/working_with_server.md)