---
sidebar_label: parse()
title: parse 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 parse 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天试用版 DHTMLX 看板。
---

# parse()

@short: 将数据解析到看板中

该方法在处理与数据相关的看板配置时，与 [`setConfig`](/api/methods/js_kanban_setconfig_method) 执行相同的操作。因此，建议为了与其他配置选项保持一致，优先使用 `setConfig`，不过 `parse` 依然作为数据解析的别名被支持。

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

**更新日志**：自 v1.1 版本起，在解析新数据前无需在构造函数中重置初始数据。

**相关文章**：[数据操作](guides/working_with_data.md#loading-data-from-local-source)
