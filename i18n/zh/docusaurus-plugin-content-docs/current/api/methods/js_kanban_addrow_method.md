---
sidebar_label: addRow()
title: addRow 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 addRow 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载免费 30 天评估版本的 DHTMLX 看板。
---

# addRow()

### 描述

@short: 在看板中插入一个新行

### 用法

~~~jsx {}
addRow({
    id?: string | number,
    row?: object,
    before?: string | number
}): void;
~~~

### 参数

- `id` - （可选）新行的标识符
- `row` - （可选）表示新行的数据对象
- `before` - （可选）新行应插入到其之前的行的 ID

:::info
完整的 **row** 参数列表请参见[**这里**](/api/config/js_kanban_rows_config.md)
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

**更新日志**:参数 **id**、**row** 和 **before** 于 v1.1 版本引入
