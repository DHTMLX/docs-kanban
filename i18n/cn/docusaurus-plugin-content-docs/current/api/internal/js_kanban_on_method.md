---
sidebar_label: api.on()
title: on 方法
description: 了解 DHTMLX JavaScript Kanban 库中的 on 方法。浏览开发者指南、API 参考，试用代码示例和在线演示，并免费下载 DHTMLX Kanban 30 天试用版。
---

# api.on()

### 描述

@short: 允许附加处理函数以监听内部事件

### 用法

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### 参数

- `event` - （必需）要监听的事件名称
- `handler` - （必需）处理该事件的函数（参数根据触发的事件而异）

### 事件

:::info
您可以在[**这里**](/api/overview/main_overview.md/#kanban-事件)查看 Kanban 内部事件的完整列表
:::

### 示例

~~~jsx {7-9}
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 当卡片被移动时，将卡片数据输出到控制台
board.api.on("move-card", ({ id, columnId }) => {
    console.log({ id, columnId });
});
~~~
