---
sidebar_label: deleteColumn()
title: deleteColumn 方法 API
description: 阅读 DHTMLX Kanban 的 deleteColumn 方法 API。了解如何通过 ID 从看板中删除列。
---

# deleteColumn()

### 描述

@short: 从看板的数据存储中移除指定的列

### 用法

~~~jsx {}
deleteColumn({ id: string | number }): void;
~~~

### 参数

- `id` - （必填）要删除的列的 ID

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 通过列的 id 删除列
board.deleteColumn({ id: "backlog" });
~~~