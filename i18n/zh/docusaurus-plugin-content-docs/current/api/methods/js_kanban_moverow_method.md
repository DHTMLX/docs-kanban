---
sidebar_label: moveRow()
title: moveRow 方法
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 moveRow 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天试用版。
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