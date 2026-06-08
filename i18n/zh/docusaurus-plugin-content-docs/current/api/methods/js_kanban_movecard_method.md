---
sidebar_label: moveCard()
title: moveCard 方法 API
description: 阅读 DHTMLX Kanban 的 moveCard 方法 API。了解如何将卡片移动到指定的列或行。
---

# moveCard()

### 描述

@short: 将卡片移动到指定的列（和行）

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

- `id` - （必填）将要移动的卡片的 ID
- `columnId` - （必填）卡片将被放置到的列的 ID
- `rowId` - （可选）卡片将被放置到的行的 ID
- `before` - （可选）在该卡片 ID 之前插入新卡片

:::info
如果在组件配置中指定了 **rowKey** 属性，则 **moveCard()** 方法的 **rowId** 参数为*必填*！
:::

### 示例

~~~jsx {9-14}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 移动 ID 为 1 的卡片
// 该项将被放置到 "inprogress" 列和 "feature" 行，
// 并插入到 ID 为 8 的卡片之前
board.moveCard({
    id: 1,
    columnId: "inprogress",
    rowId: "feature",
    before: 8
});
~~~