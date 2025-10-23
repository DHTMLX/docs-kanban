---
sidebar_label: updateColumn()
title: updateColumn 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 updateColumn 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
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