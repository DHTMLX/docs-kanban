---
sidebar_label: api.setNext()
title: setNext 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 setNext 方法。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# api.setNext()

### 描述

@short: 允许将特定操作插入到事件总线（Event Bus）序列中。

### 用法

~~~jsx {}
api.setNext(next: any): void;
~~~

### 参数

- `next` - （必需）要添加到**事件总线**序列中的操作  

### 示例

~~~jsx {15}
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
        rowKey: "row"
    });
    board.api.setNext(restProvider);
});
~~~

:::info
将 **RestDataProvider** 包含在**事件总线**序列中是处理诸如**添加**、**删除**等数据操作，以及向服务器发送相关请求所必需的。
:::
