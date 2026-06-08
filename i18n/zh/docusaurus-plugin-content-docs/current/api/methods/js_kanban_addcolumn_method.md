---
sidebar_label: addColumn()
title: addColumn 方法 API
description: 阅读 DHTMLX Kanban 的 addColumn 方法 API。了解如何向看板添加新列。
---

# addColumn()

### 描述

@short: 向看板中添加一个新列

### 用法

~~~jsx {}
addColumn({
    id?: string | number,
    column?: object,
    before?: string | number
}): void;
~~~

### 参数

- `id` - （可选）新列的 ID
- `column` - （可选）新列的数据对象
- `before` - （可选）指定新列将插入到哪个列之前的 ID

:::info
完整的 **column** 参数列表请参见 [**这里**](api/config/js_kanban_columns_config.md)
:::

### 示例

~~~jsx {7-16}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 添加新列
board.addColumn({
    id: "extra_column",
    column: {
        label: "Extra column",
        limit: 2,
        strictLimit: 2,
        collapsed: true
    },
    before: "column_2"
});
~~~

**更新日志**：从 v1.1 版本开始，新增了 **id**、**column** 和 **before** 参数