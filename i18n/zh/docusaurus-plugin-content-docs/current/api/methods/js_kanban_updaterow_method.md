---
sidebar_label: updateRow()
title: updateRow 方法
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 updateRow 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Kanban 免费 30 天试用版。
---

# updateRow()

### 描述

@short: 通过行 ID 更新行数据

### 用法

~~~jsx {}
updateRow({
    id: string | number,
    row?: object,
    replace?: boolean
}): void;
~~~

### 参数

- `id` - （必需）要更新的行的 ID
- `row` - （可选）行的新数据对象。完整的 **row** 参数列表请参见[**这里**](api/config/js_kanban_rows_config.md)
- `replace` - （可选）启用/禁用完全替换数据

    :::note
    如果将 `replace` 参数设置为 *true*，旧数据将被新数据完全替换。否则，该方法只会更新您传入的值。
    :::

### 示例

~~~jsx {8-15}
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// 使用 ID 为 "feature" 的行更新数据
board.updateRow({
    id: "feature",
    row: {
        label: "Updated row",
        collapsed: true
    },
    replace: true
});
~~~

**更新日志**：
- 在 v1.1 版本中添加了 **id** 和 **row** 参数
- 在 v1.3 版本中添加了 **replace** 参数