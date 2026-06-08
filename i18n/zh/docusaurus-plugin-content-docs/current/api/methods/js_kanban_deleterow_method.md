---
sidebar_label: deleteRow()
title: deleteRow 方法 API
description: 阅读 DHTMLX Kanban 的 deleteRow 方法 API。了解如何通过 ID 从看板中删除行。
---

# deleteRow()

### 描述

@short: 从 Kanban 的数据存储中移除指定的行

### 用法

~~~jsx {}
deleteRow({ id: string | number }): void;
~~~

### 参数

- `id` - （必需）要删除的行的 ID

### 示例

~~~jsx {7}
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 通过 ID 删除行
board.deleteRow({ id: "feature" });
~~~