---
sidebar_label: moveColumn()
title: moveColumn 方法 API
description: 阅读 DHTMLX Kanban 的 moveColumn 方法 API。了解如何将列移动到新的位置。
---

# moveColumn()

### 描述

@short: 将列移动到新的位置

### 用法

~~~jsx {}
moveColumn({
    id: string | number,
    before?: string | number
}): void;
~~~

### 参数

- `id` - （必需）要移动的列的 ID
- `before` - （可选）移动列将被放置在其前面的列的 ID。如果未指定 `before` 参数，列将被放置在看板的末尾

### 示例

~~~jsx {7-10}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 移动 "backlog" 列，并将其放置在 "done" 列之前
board.moveColumn({
    id: "backlog",
    before: "done"
});
~~~

**更新日志：** 此方法自 v1.1 版本起添加