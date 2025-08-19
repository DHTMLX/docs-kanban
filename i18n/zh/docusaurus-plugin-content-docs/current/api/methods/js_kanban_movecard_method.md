---
sidebar_label: moveCard()
title: moveCard 方法
description: 探索 DHTMLX JavaScript 看板库中的 moveCard 方法。查看开发者指南、API 参考、代码示例、实时演示，并获得 DHTMLX Kanban 免费 30 天试用。
---

# moveCard()

### 描述

@short: 将卡片移动到指定的列（以及行）。

### 用法

~~~jsx {}
moveCard({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number
}): void;
~~~

### 参数

- `id` - （必需）需要移动的卡片 ID
- `columnId` - （必需）卡片将放置的目标列 ID
- `rowId` - （可选）卡片将定位的目标行 ID
- `before` - （可选）在该卡片 ID 之前插入被移动卡片

:::info
当组件配置中设置了 **rowKey** 属性时，调用 **moveCard()** 方法时必须提供 **rowId**！
:::

### 示例

~~~jsx {9-14}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 移动 ID 为 1 的卡片
// 它将被放置到 "inprogress" 列和 "feature" 行中，
// 并定位在 ID 为 8 的卡片之前
board.moveCard({
    id: 1,
    columnId: "inprogress",
    rowId: "feature",
    before: 8
});
~~~
