---
sidebar_label: setSearch()
title: setSearch 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 setSearch 方法。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX 看板的免费 30 天试用版本。
---

# setSearch()

### 描述

@short: 根据给定的搜索条件查找卡片

### 用法

~~~jsx {}
setSearch({
    value: string,
    by?: string
}): void;
~~~

:::info
该方法允许您根据指定的搜索条件查找卡片。调用 **setSearch()** 时不传入任何参数将重置搜索输入并移除所有高亮显示的卡片。
:::

### 参数

- `value` - （必需）要搜索的文本
- `by` - （可选）要在特定卡片字段中进行搜索

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
