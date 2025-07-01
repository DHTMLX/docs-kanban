---
sidebar_label: getAreaCards()
title: getAreaCards 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 getAreaCards 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版本。
---

# getAreaCards()

### 描述

@short: 获取指定列（以及行）内所有卡片的数据对象数组。

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

该方法返回一个表示卡片的数据对象数组。

:::info
当看板只有**列**而没有**行**时，只需传入***columnId***参数。在这种情况下，方法返回该列中所有卡片的数据对象数组。

如果看板同时包含**列**和**行**，则必须同时传入***columnId***和***rowId***参数。方法将返回位于指定列和行中的卡片数据对象数组。
:::

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 从指定的列和行中获取卡片数据对象数组
board.getAreaCards("column_id", "row_id");
~~~
