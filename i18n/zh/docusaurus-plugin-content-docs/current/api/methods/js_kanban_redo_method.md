---
sidebar_label: redo()
title: redo 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 redo 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天试用版 DHTMLX 看板。
---

# redo()

### 描述

@short: 重复撤销操作所还原的动作

:::info
`redo()` 方法仅适用于启用了 [`history: true`](api/config/js_kanban_history_config.md) 配置的情况！
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
// 在看板的历史记录中前进一步
board.redo();
~~~

**更新日志：** 此方法在 v1.3 版本中新增