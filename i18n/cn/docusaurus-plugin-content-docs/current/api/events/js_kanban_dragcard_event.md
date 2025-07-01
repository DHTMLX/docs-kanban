---
sidebar_label: drag-card
title: drag-card 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 drag-card 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费 30 天评估版 DHTMLX 看板。
---

# drag-card

### 描述

@short: 当使用拖放操作移动卡片时，此事件会被触发。

### 用法

~~~jsx {}
"drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source: array
}) => void;
~~~

### 参数

**drag-card** 事件的回调函数接收一个包含以下属性的对象:

- `id` - （必需）被拖动的卡片的 ID
- `columnId` - （必需）卡片当前所在列的 ID
- `rowId` - （可选）卡片当前所在行的 ID
- `before` - （可选）位于拖动卡片之后的卡片的 ID
- `source` - （可选）包含被移动卡片 ID 的数组

:::info
要管理内部事件，可以使用 [**Event Bus methods**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "drag-card" 事件
board.api.on("drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**更新日志:** 此事件自版本 1.4 起可用

**相关示例:** [Kanban. 禁用对特定列的拖放](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
