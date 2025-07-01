---
sidebar_label: $meta
title: $meta 参数
description: 您可以在DHTMLX JavaScript看板库的文档中了解 $meta 参数。浏览开发者指南和API参考，试用代码示例和在线演示，并免费下载30天评估版的DHTMLX看板。
---

# $meta

### 说明

@short: 一个包含额外设置的对象，用于自定义看板的方法和事件

:::important
`$meta` 对象提供了额外的参数，用于配置与看板事件相关的方法！
:::

### 用法

~~~jsx {}
$meta?: {
    skipHistory?: boolean
};
~~~

### 参数

`$meta` 对象包含以下参数:

- `skipHistory` - （可选）控制该操作是否应被排除在看板的历史记录跟踪之外

### 示例

~~~jsx {11-13}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 添加新卡片，并在看板历史中跳过此操作
board.addCard({
    id: 1,
    columnId: "backlog",
    card: { label: "New card" },
    $meta: { 
        skipHistory: true 
    }
});
~~~

**更新日志:** `$meta` 参数自 v1.3 版本引入

**相关文章:** [`history`](/api/config/js_kanban_history_config.md)
