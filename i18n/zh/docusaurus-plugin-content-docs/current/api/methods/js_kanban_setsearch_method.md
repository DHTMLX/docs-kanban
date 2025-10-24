---
sidebar_label: setSearch()
title: setSearch 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 setSearch 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
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