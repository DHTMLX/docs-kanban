---
sidebar_label: moveRow()
title: moveRow 方法 API
description: 阅读 DHTMLX Kanban 的 moveRow 方法 API。了解如何将行移动到新的位置。
---

# moveRow()

### 描述

@short: 将一行移动到新的位置

### 用法

~~~jsx {}
moveRow({
    id: string | number,
    before?: string | number
}): void;
~~~

### 参数

- `id` - （必填）要移动的行的 ID
- `before` - （可选）移动的行将放置在其前面的行的 ID。如果未指定 `before` 参数，行将被放置在看板的末尾

### 示例

~~~jsx {8-11}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    row
});
// 将 "task" 游泳道移动，并放置在 "feature" 之前（上方）
board.moveRow({
    id: "task",
    before: "feature"
});
~~~

**更新日志：** 该方法在 v1.1 版本中添加