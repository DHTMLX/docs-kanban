---
sidebar_label: getLinks()
title: getLinks REST 方法 API
description: 阅读 DHTMLX Kanban 的 getLinks REST 方法 API。了解如何获取包含链接数据的 promise。
---

# getLinks()

### 描述

@short: 获取包含链接数据的 promise

:::info
**getLinks()** 方法是 **RestDataProvider** 服务的一部分，用于与服务器交互
:::

### 用法

~~~jsx {}
getLinks(): promise;
~~~

### 返回值

**getLinks()** 方法通过 **GET** 方法向服务器发送请求，并返回包含链接数据的 **promise**。

### 示例

~~~jsx {2,7}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getLinks(),
]).then(([cards, columns, links]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        links
    });
    board.api.setNext(restProvider);
});
~~~

**更新日志：** 该方法在 v1.5 版本中新增

**相关文档：** [与服务器交互](guides/working_with_server.md)