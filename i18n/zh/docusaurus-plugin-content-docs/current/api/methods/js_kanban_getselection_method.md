---
sidebar_label: getSelection()
title: getSelection 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 getSelection 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版。
---

# getSelection()

### 描述

@short: 获取包含所选卡片 ID 的数组

### 用法

~~~jsx {}
getSelection(): array;
~~~

### 返回值

此方法返回一个数组，包含当前选中卡片的 ID。

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 获取包含所选卡片 ID 的数组
board.getSelection();
~~~
