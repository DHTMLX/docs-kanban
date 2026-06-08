---
sidebar_label: setSearch()
title: setSearch 方法 API
description: 阅读 DHTMLX Kanban 的 setSearch 方法 API。了解如何按指定参数搜索卡片。
---

# setSearch()

### 描述

@short: 根据指定参数查找卡片

### 用法

~~~jsx {}
setSearch({
    value: string,
    by?: string
}): void;
~~~

:::info
使用此方法，您可以根据指定参数搜索所需的卡片。如果调用 **setSearch()** 方法时不传入参数，将清空搜索栏并取消卡片的高亮显示。
:::

### 参数

- `value` - （必需）要搜索的值  
- `by` - （可选）用于搜索的卡片字段

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 高亮显示符合参数的卡片
board.setSearch({ value: "Integration", by: "label" });
~~~