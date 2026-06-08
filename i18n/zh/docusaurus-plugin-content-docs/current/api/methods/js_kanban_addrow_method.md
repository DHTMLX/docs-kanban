---
sidebar_label: addRow()
title: addRow 方法 API
description: 阅读 DHTMLX Kanban 的 addRow 方法 API。了解如何向看板添加新行（泳道）。
---

# addRow()

### 描述

@short: 在看板中添加一行新行

### 用法

~~~jsx {}
addRow({
    id?: string | number,
    row?: object,
    before?: string | number
}): void;
~~~

### 参数

- `id` - （可选）新行的 ID
- `row` - （可选）新行的数据对象
- `before` - （可选）新行将被插入到该行 ID 之前

:::info
完整的 **row** 参数列表请参见 [**这里**](api/config/js_kanban_rows_config.md)
:::

### 示例

~~~jsx {8-15}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// 添加新行
board.addRow({
    id: "extra_row",
    row: {
        label: "Extra row",
        collapsed: false
    },
    before: "row_2"
});
~~~

**更新日志**：参数 **id**、**row** 和 **before** 于 v1.1 版本新增