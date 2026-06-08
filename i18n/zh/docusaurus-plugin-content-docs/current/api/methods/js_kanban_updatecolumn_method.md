---
sidebar_label: updateColumn()
title: updateColumn 方法 API
description: 阅读 DHTMLX Kanban 的 updateColumn 方法 API。了解如何更新列的属性、样式和菜单设置。
---

# updateColumn()

### 描述

@short: 通过列的 ID 更新列数据

### 用法

~~~jsx {}
updateColumn({
    id: string | number,
    column?: object,
    replace?: boolean
}): void;
~~~

### 参数

- `id` - （必需）要更新的列的 ID
- `column` - （可选）列的新数据对象。完整的 **column** 参数列表可在[**这里**](api/config/js_kanban_columns_config.md)找到
- `replace` - （可选）启用/禁用完全替换数据

    :::note
    如果将 `replace` 参数设置为 *true*，旧数据将被新数据完全替换。否则，该方法只会更新您传入的值。
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
        label: "更新后的列",
        limit: 3,
        strictLimit: 3,
        collapsed: true
    },
    replace: true
});
~~~

**更新日志**：
- **id** 和 **column** 参数在 v1.1 中添加
- **replace** 参数在 v1.3 中添加