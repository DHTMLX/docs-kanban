---
sidebar_label: destructor()
title: destructor 方法
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 Toolbar 的 destructor 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天试用版本。
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