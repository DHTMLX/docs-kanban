---
sidebar_label: redo()
title: redo 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 redo 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费 30 天评估版本的 DHTMLX 看板。
---

# redo()

### 描述

@short: 重新执行由 undo 方法撤销的操作

:::info
`redo()` 方法仅在配置中设置了 [`history: true`](/api/config/js_kanban_history_config.md) 时才有效！
:::

### 用法

~~~jsx {}
redo(): void;
~~~

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 重做看板历史中最后一次撤销的操作
board.redo();
~~~

**更新日志:** 此方法自 v1.3 版本引入
