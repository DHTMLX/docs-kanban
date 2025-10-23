---
sidebar_label: undo
title: undo 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 undo 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# undo

### 描述

@short: 当撤销看板中的最后一次操作时触发

### 用法

~~~jsx {}
"undo": () => void;
~~~

:::info
处理内部事件时，您可以使用 [**Event Bus 方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "undo" 事件
board.api.on("undo", () => {
    console.log("撤销操作");
});
~~~

**更新日志**：该事件在 v1.7 中新增