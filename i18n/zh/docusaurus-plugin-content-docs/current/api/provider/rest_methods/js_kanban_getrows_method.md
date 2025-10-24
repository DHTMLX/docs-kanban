---
sidebar_label: getRows()
title: getRows REST 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 getRows REST 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天试用版本。
---

# getRows()

### 描述

@short: 获取包含行数据的 promise

:::info
**getRows()** 方法是用于与服务器交互的 **RestDataProvider** 服务的一部分
:::

### 用法

~~~jsx {}
getRows(): promise;
~~~

### 返回值

**getRows()** 方法通过 **GET** 请求向服务器发送请求，并返回包含行数据的 **promise**

### 示例

~~~jsx {2,7}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getRows()
]).then(([cards, columns, rows]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        rows,
        rowKey: "type"
    });
    board.api.setNext(restProvider);
});
~~~

**相关内容：** [与服务器交互](guides/working_with_server.md)