---
sidebar_label: updateRow()
title: updateRow 方法
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 updateRow 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天评估版。
---

# updateRow()

### 描述

@short: 根据行的 ID 修改该行的数据。

### 用法

~~~jsx {}
updateRow({
    id: string | number,
    row?: object,
    replace?: boolean
}): void;
~~~

### 参数

- `id` - （必需）要更新的行的标识符
- `row` - （可选）包含该行新数据的对象。完整的 **row** 参数列表请参见[**这里**](/api/config/js_kanban_rows_config.md)
- `replace` - （可选）控制是否完全替换现有数据

:::note
将 `replace` 参数设置为 *true* 会用新数据完全覆盖旧数据。如果未设置或为 false，则只更新指定的值。
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

**更新日志**:
- **id** 和 **row** 参数在 v1.1 版本中添加
- **replace** 参数在 v1.3 版本中添加
