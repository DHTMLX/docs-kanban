---
sidebar_label: destructor()
title: destructor 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 destructor 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX 看板。
---

# destructor()

### 描述

@short: 清除看板的所有 HTML 元素并移除所有相关的事件处理程序。

### 用法

~~~jsx {}
destructor(): void;
~~~

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 移除看板
board.destructor();
~~~
