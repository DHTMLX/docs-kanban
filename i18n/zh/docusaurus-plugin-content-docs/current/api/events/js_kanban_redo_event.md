---
sidebar_label: redo
title: redo 事件 API
description: 阅读 DHTMLX Kanban 的 redo 事件 API。了解如何处理重复执行被撤销操作时触发的事件。
---

# redo

### 描述

@short: 当重复执行被撤销操作时触发

### 用法

~~~jsx {}
"redo": () => void;
~~~

:::info
要处理内部事件，您可以使用 [**事件总线方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "redo" 事件
board.api.on("redo", () => {
    console.log("redo operation");
});
~~~

**更新日志**：该事件在 v1.7 版本中添加