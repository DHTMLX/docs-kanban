---
sidebar_label: api.setNext()
title: setNext 方法 API
description: 阅读 DHTMLX Kanban 的 setNext 方法 API。了解如何将看板 API 连接到数据提供者和后端流程。
---

# api.setNext()

### 描述

@short: 允许将某个操作添加到事件总线（Event Bus）的执行顺序中

### 用法

~~~jsx {}
api.setNext(next: any): void;
~~~

### 参数

- `next` - （必需）要包含在**事件总线**执行顺序中的操作  

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
您需要将 **RestDataProvider** 包含到**事件总线**的执行顺序中，以便对数据执行操作（如**添加**、**删除**等）并向服务器发送相应请求
:::