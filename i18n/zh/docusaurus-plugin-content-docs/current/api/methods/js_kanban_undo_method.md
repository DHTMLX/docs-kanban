---
sidebar_label: undo()
title: undo 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 undo 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# undo()

### 描述

@short: 撤销看板中的最后一次操作

:::info
`undo()` 方法仅在启用 [`history: true`](/api/config/js_kanban_history_config.md) 配置时生效！
:::

### 用法

~~~jsx {}
undo(): void;
~~~

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 撤销看板历史中的上一步操作
board.undo();
~~~

**更新日志:** 此方法在 v1.3 版本中新增
