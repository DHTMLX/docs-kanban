---
sidebar_label: undo()
title: undo 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 undo 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版。
---

# undo()

### 描述

@short: 撤销看板中的最后一次操作

:::info
`undo()` 方法仅适用于启用了 [`history: true`](api/config/js_kanban_history_config.md) 配置的情况！
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
// 在看板的历史记录中回退一步
board.undo();
~~~

**更新日志：** 该方法在 v1.3 版本中新增