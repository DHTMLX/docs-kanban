---
sidebar_label: getCards()
title: getCards REST 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 getCards REST 方法。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# getCards()

### 描述

@short: 获取包含卡片数据的 promise

:::info
**getCards()** 方法属于 **RestDataProvider** 服务，该服务用于处理与服务器的交互。
:::

### 用法

~~~jsx {}
getCards(): promise;
~~~

### 返回值

**getCards()** 方法向服务器发起 **GET** 请求，并返回包含卡片数据的 **promise**。

### 示例

~~~jsx {2,5}
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
