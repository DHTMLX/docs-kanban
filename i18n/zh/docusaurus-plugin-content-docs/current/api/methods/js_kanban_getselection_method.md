---
sidebar_label: getSelection()
title: getSelection 方法 API
description: 阅读 DHTMLX Kanban 的 getSelection 方法 API。了解如何获取当前已选卡片的 ID。
---

# getSelection()

### 描述

@short: 获取一个包含所选卡片 ID 的数组

### 用法

~~~jsx {}
getSelection(): array;
~~~

### 返回值

该方法返回一个包含所选卡片 ID 的数组

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 获取所选卡片 ID 的数组
board.getSelection();
~~~