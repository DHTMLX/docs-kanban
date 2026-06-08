---
sidebar_label: $meta
title: $meta 参数 API
description: 阅读 DHTMLX Kanban 的 $meta 参数 API。了解如何传递额外设置以配置方法和事件。
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