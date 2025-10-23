---
sidebar_label: destructor()
title: destructor 方法
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 destructor 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载免费的 30 天试用版 DHTMLX Kanban。
---

# destructor()

### 描述

@short: 移除 Kanban 的所有 HTML 元素，并解除所有相关事件的绑定

### 用法

~~~jsx {}
destructor(): void;
~~~

### 示例

~~~jsx {7}
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 移除 Kanban
board.destructor();
~~~