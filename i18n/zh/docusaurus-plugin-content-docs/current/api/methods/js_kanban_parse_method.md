---
sidebar_label: parse()
title: parse 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 parse 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天试用版 DHTMLX 看板。
---

# parse()

### 描述

@short: 将数据解析到看板中

### 用法

~~~jsx {}
parse({
    columns?: array,
    rows?: array,
    cards?: array,
    links?: array
}): void;
~~~

### 参数

- [`columns`](api/config/js_kanban_columns_config.md) - （可选）列数据对象数组
- [`rows`](api/config/js_kanban_rows_config.md) - （可选）行数据对象数组
- [`cards`](api/config/js_kanban_cards_config.md) - （可选）卡片数据对象数组
- [`links`](api/config/js_kanban_links_config.md) - （可选）链接数据对象数组

### 示例

~~~jsx {4-9}
// 创建看板
const board = new kanban.Kanban("#root", {});
// 将数据解析到看板中
board.parse({
    columns,
    cards,
    rows,
    links
});
~~~

**更新日志：** 从 v1.1 版本开始，解析新数据前无需在构造函数中重置初始数据

**相关文章：** [数据操作](guides/working_with_data.md#loading-data-from-local-source)