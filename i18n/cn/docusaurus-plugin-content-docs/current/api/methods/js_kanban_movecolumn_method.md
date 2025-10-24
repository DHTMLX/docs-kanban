---
sidebar_label: moveColumn()
title: moveColumn 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 moveColumn 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费30天评估版。
---

# moveColumn()

### 描述

@short: 将某一列移动到看板中的新位置。

### 用法

~~~jsx {}
moveColumn({
    id: string | number,
    before: string | number
}): void;
~~~

### 参数

- `id` - （必填）要移动的列的 ID
- `before` - （必填）移动的列将插入到此列之前的列 ID

### 示例

~~~jsx {7-10}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 将 "backlog" 列移动，并放置到 "done" 列之前
board.moveColumn({
    id: "backlog",
    before: "done"
});
~~~

**更新日志:** 此方法在 v1.1 版本中引入
