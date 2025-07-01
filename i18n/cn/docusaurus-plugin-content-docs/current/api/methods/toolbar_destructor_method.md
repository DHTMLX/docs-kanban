---
sidebar_label: destructor()
title: destructor 方法
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 Toolbar 的 destructor 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天评估版本 DHTMLX Kanban。
---

# destructor()

### 描述

@short: 通过移除所有 Toolbar 的 HTML 元素并解除所有关联事件来进行清理。

### 用法

~~~jsx {}
destructor(): void;
~~~

### 示例

~~~jsx {6}
// 创建看板
const board = new kanban.Kanban("#root", {});
// 创建工具栏
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// 移除工具栏
toolbar.destructor();
~~~
