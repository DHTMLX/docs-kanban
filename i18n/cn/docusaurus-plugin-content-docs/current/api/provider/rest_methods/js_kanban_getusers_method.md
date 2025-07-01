---
sidebar_label: getUsers()
title: getUsers REST 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 getUsers REST 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# getUsers()

### 描述

@short: 获取包含用户数据的 promise

:::info
**getUsers()** 方法是用于服务器通信的 **RestDataProvider** 服务的一部分
:::

### 用法

~~~jsx {}
getUsers(): promise;
~~~

### 返回值

**getUsers()** 方法向服务器发送一个 **GET** 请求，并返回一个解析为用户数据的 **promise**

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

**更新日志:** 此方法在版本 1.3 中引入

**相关文档:** [与服务器交互](../../../../guides/working_with_server)
