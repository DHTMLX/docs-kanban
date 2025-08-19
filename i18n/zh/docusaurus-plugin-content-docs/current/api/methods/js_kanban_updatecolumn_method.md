---
sidebar_label: updateColumn()
title: updateColumn 方法
description: 探索 DHTMLX JavaScript 看板库中的 updateColumn 方法文档。查看开发者指南、API 参考、代码示例、在线演示，并获得 DHTMLX 看板的免费 30 天试用。
---

# updateColumn()

### 描述

@short: 使用列的 ID 修改该列的数据

### 用法

~~~jsx {}
updateColumn({
    id: string | number,
    column?: object,
    replace?: boolean
}): void;
~~~

### 参数

- `id` - （必选）指定要更新的列的 ID
- `column` - （可选）一个包含列新数据的对象。完整的 **column** 参数列表请参见[**这里**](/api/config/js_kanban_columns_config.md)
- `replace` - （可选）确定是否完全替换现有数据

:::note
当 `replace` 设置为 *true* 时，现有数据将被新数据完全替换。如果未设置，则只更新提供的值。
:::

### 示例

~~~jsx {7-16}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 使用 ID 为 "backlog" 的列更新列数据
board.updateColumn({
    id: "backlog",
    column: {
        label: "Updated column",
        limit: 3,
        strictLimit: 3,
        collapsed: true
    },
    replace: true
});
~~~

**更新日志**:
- **id** 和 **column** 参数在 v1.1 中引入
- **replace** 参数在 v1.3 中添加
