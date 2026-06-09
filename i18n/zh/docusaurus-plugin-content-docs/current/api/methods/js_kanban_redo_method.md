---
sidebar_label: redo()
title: redo 方法 API
description: 阅读 DHTMLX Kanban 的 redo 方法 API。了解如何重做被撤销的操作。
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