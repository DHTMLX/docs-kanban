---
sidebar_label: getLinks()
title: getLinks REST 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 getLinks REST 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费30天试用版。
---

# getLinks()

### 描述

@short: 获取包含链接数据的 promise

:::info
**getLinks()** 方法属于 **RestDataProvider** 服务，用于与服务器交互。
:::

### 用法

~~~jsx {}
getLinks(): promise;
~~~

### 返回值

**getLinks()** 方法向服务器发出 **GET** 请求，并返回一个 **promise**，该 promise 解析为链接数据。

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

**更新日志:** 此方法自版本 1.5 起引入

**相关文档:** [与服务器交互](../../../../guides/working_with_server)
