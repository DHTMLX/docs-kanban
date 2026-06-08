---
sidebar_label: getColumns()
title: getColumns REST 方法 API
description: 阅读 DHTMLX Kanban 的 getColumns REST 方法 API。了解如何获取包含列数据的 promise。
---

# getColumns()

### 描述

@short: 获取包含列数据的 promise

:::info
**getColumns()** 方法是用于与服务器交互的 **RestDataProvider** 服务的一部分
:::

### 用法

~~~jsx {}
getColumns(): promise;
~~~

### 返回值

**getColumns()** 方法通过 **GET** 请求向服务器发送请求，并返回包含列数据的 **promise**

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

**相关文章：** [与服务器交互](guides/working_with_server.md)