---
sidebar_label: getAreaCards()
title: getAreaCards 方法 API
description: 阅读 DHTMLX Kanban 的 getAreaCards 方法 API。了解如何以数据对象数组的形式获取列或行中的所有卡片。
---

# getAreaCards()

### 描述

@short: 获取指定列（和行）中所有卡片的数据对象数组

### 用法

~~~jsx {}
getAreaCards(
    columnId: string | number,
    rowId?: string | number
): array;
~~~

### 参数

- `columnId` - （必需）目标列的 ID
- `rowId` - （可选）目标行的 ID

### 返回值

该方法返回包含卡片数据对象的数组

:::info
如果看板仅包含 **列** 而没有 **行**，则只需传入 ***columnId*** 参数。此时，方法返回包含指定列中所有卡片数据对象的数组。

如果看板包含 **列** 和 **行**，则可以同时传入 ***columnId*** 和 ***rowId*** 参数。此时，方法返回包含特定列和行中所有卡片数据对象的数组。
:::

### 示例

~~~jsx {8}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// 获取指定列和行的卡片数据对象数组
board.getAreaCards("column_id", "row_id");
~~~