---
sidebar_label: parse()
title: parse 方法 API
description: 阅读 DHTMLX Kanban 的 parse 方法 API。了解如何从 JSON 加载卡片、列、行和看板数据。
---

# parse()

### 描述

@short: 将数据解析到看板中

`parse()` 方法是 [`setConfig()`](/api/methods/js_kanban_setconfig_method) 的别名，仅限于数据相关属性（`cards`、`columns`、`rows`、`links`）。对于这些属性，两个方法在底层执行相同的操作。

:::tip 推荐使用 setConfig()
使用 [`setConfig()`](/api/methods/js_kanban_setconfig_method) 方法，它接受相同的数据属性**以及**其他看板配置选项。建议用一次 `setConfig()` 调用设置所有属性，而不是分别调用 `parse()` 传入数据、再调用 `setConfig()` 传入其他属性（如 [`columnKey`](api/config/js_kanban_columnkey_config.md)、[`rowKey`](api/config/js_kanban_rowkey_config.md)、[`cardShape`](api/config/js_kanban_cardshape_config.md)）：

~~~js
// 不推荐：两次调用
kanban.setConfig({ columnKey: "type" });
kanban.parse({ columns });

// 推荐：一次调用
kanban.setConfig({
    columnKey: "type",
    columns
});
~~~
:::

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

// 等效的 setConfig() 调用
// board.setConfig({ columns, cards, rows, links });
~~~

**更新日志**：自 v1.1 版本起，在解析新数据前无需在构造函数中重置初始数据。

**相关文章**：[数据操作](guides/working_with_data.md#load-data-from-a-local-source)
