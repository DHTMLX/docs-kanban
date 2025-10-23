---
sidebar_label: $meta
title: $meta 参数
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 $meta 参数。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天评估版本 DHTMLX Kanban。
---

# $meta

### 描述

@short: 用于配置 Kanban 方法和事件的额外设置对象

:::important
`$meta` 对象包含一组额外的参数，用于基于 Kanban 事件配置方法！
:::

### 用法

~~~jsx {}
$meta?: {
    skipHistory?: boolean
};
~~~

### 参数

`$meta` 对象包含以下参数：

- `skipHistory` - （可选）启用或禁用在 Kanban 历史记录中跳过操作

### 示例

~~~jsx {11-13}
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 添加新卡片，并在 Kanban 历史记录中跳过此操作
board.addCard({
    id: 1,
    columnId: "backlog",
    card: { label: "New card" },
    $meta: { 
        skipHistory: true 
    }
});
~~~

**更新日志：** `$meta` 参数自 v1.3 版本起添加

**相关文章：** [`history`](api/config/js_kanban_history_config.md)