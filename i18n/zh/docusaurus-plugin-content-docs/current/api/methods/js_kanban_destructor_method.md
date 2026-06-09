---
sidebar_label: destructor()
title: destructor 方法 API
description: 阅读 DHTMLX Kanban 的 destructor 方法 API。了解如何销毁看板并解除所有相关事件监听器。
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