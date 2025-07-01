---
sidebar_label: moveRow()
title: moveRow 方法
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 moveRow 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天试用版本。
---

# moveRow()

### 描述

@short: 将某一行移动到看板中的新位置。

### 用法

~~~jsx {}
moveRow({
    id: string | number,
    before: string | number
}): void;
~~~

### 参数

- `id` - （必需）需要移动的行的 ID
- `before` - （必需）将移动行放置在其前面的行的 ID

### 示例

~~~jsx {8-11}
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    row
});
// 将 "task" 泳道移动，并放置在 "feature" 泳道之前
board.moveRow({
    id: "task",
    before: "feature"
});
~~~

**更新日志:** 此方法在 v1.1 版本中添加
