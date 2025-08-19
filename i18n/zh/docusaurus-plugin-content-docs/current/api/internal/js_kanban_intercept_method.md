---
sidebar_label: api.intercept()
title: intercept 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 intercept 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载免费的 30 天评估版本的 DHTMLX 看板。
---

# api.intercept()

### 描述

@short: 允许捕获并阻止内部事件在发生之前的执行。

### 用法

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### 参数

- `event` - （必需）要监听的事件
- `callback` - （必需）要执行的函数（其参数取决于被拦截的事件）

### 事件

:::info
您可以在[**这里**](/api/overview/main_overview.md/#kanban-事件)查看完整的看板内部事件列表
:::

### 示例

~~~jsx {7-11}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 阻止卡片被移动到 ID 为 "done" 的列
board.api.intercept("move-card", ({ id, columnId }) => {
    if(columnId !== "done" ){
        return false;
    }
});
~~~
