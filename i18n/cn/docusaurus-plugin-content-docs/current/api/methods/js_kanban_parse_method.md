---
sidebar_label: parse()
title: parse 方法
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 parse 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天试用版。
---

# parse()

### 描述

@short: 将数据加载到看板中

### 用法

~~~jsx {}
parse({
    columns?: array,
    rows?: array,
    cards?: array
}): void;
~~~

### 参数

- [`columns`](/api/config/js_kanban_columns_config.md) - （可选）包含列数据对象的数组
- [`rows`](/api/config/js_kanban_rows_config.md) - （可选）包含行数据对象的数组
- [`cards`](/api/config/js_kanban_cards_config.md) - （可选）包含卡片数据对象的数组

### 示例

~~~jsx {4-8}
// 创建看板
const board = new kanban.Kanban("#root", {});
// 将数据加载到看板
board.parse({
    columns,
    cards,
    rows
});
~~~

**更新日志:** 从 v1.1 版本开始，解析新数据前不再需要在构造函数中重置初始数据

**相关文档:** [数据操作](/guides/working_with_data#从本地数据源加载数据)
