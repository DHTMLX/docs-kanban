---
sidebar_label: destructor()
title: Toolbar destructor 方法 API
description: 阅读 DHTMLX Kanban 的 Toolbar destructor 方法 API。了解如何销毁 Toolbar 并解除所有相关事件监听器。
---

# destructor()

### 描述

@short: 移除 Toolbar 的所有 HTML 元素，并解除所有相关事件绑定

### 用法

~~~jsx {}
destructor(): void;
~~~

### 示例

~~~jsx {6}
// 创建 Kanban
const board = new kanban.Kanban("#root", {});
// 创建 Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// 移除 Toolbar
toolbar.destructor();
~~~