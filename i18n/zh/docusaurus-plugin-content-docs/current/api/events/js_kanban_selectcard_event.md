---
sidebar_label: select-card
title: select-card 事件
description: 了解 DHTMLX JavaScript 看板库中 select-card 事件的工作原理。探索开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# select-card

### 描述

@short: 当选中卡片时触发

### 用法

~~~jsx {}
"select-card": ({
    id: string | number,
    groupMode?: boolean
}) => void;
~~~

### 参数

**select-card** 事件的回调接收一个包含以下属性的对象:

- `id` - （必需）被选中卡片的 ID
- `groupMode` - （可选）表示多选模式（默认为 false）

:::info
要管理内部事件，您可以使用 [**Event Bus 方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "select-card" 事件
board.api.on("select-card", (obj) => {
    console.log(obj.id);
});
~~~
