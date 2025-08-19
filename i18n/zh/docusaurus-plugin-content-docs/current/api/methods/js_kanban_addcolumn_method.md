---
sidebar_label: addColumn()
title: addColumn 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 addColumn 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费30天试用版的 DHTMLX 看板。
---

# addColumn()

### 描述

@short: 在看板中插入一个新的列

### 用法

~~~jsx {}
addColumn({
    id?: string | number,
    column?: object,
    before?: string | number
}): void;
~~~

### 参数

- `id` - （可选）指定新列的 ID
- `column` - （可选）提供定义新列的数据对象
- `before` - （可选）指定新列插入位置之前的列的 ID

:::info
您可以在[**这里**](/api/config/js_kanban_columns_config.md)找到完整的 **column** 参数列表
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
        label: "额外列",
        limit: 2,
        strictLimit: 2,
        collapsed: true
    },
    before: "column_2"
});
~~~

**更新日志**:参数 **id**、**column** 和 **before** 于 v1.1 版本引入
