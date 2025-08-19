---
sidebar_label: getColumns()
title: getColumns REST 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 getColumns REST 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天试用版。
---

# getColumns()

### 描述

@short: 获取包含列数据的 promise

:::info
**getColumns()** 方法是用于服务器交互的 **RestDataProvider** 服务的一部分。
:::

### 用法

~~~jsx {}
getColumns(): promise;
~~~

### 返回值

**getColumns()** 方法向服务器发出 **GET** 请求，并返回一个 **promise**，该 promise 解析后包含列数据。

### 示例

~~~jsx {2,6}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns()
]).then(([cards, columns]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns
    });
    board.api.setNext(restProvider);
});
~~~

**相关文档:** [Working with server](../../../../guides/working_with_server)
