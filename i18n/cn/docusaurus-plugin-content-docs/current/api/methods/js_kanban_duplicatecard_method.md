---
sidebar_label: duplicateCard()
title: duplicateCard 方法
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 duplicateCard 方法。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Kanban 的免费 30 天评估版本。
---

# duplicateCard()

### 描述

@short: 根据给定的 ID 创建卡片的副本

### 用法

~~~jsx {}
duplicateCard({
    id: string | number,
    card?: object,
    select?: boolean
}): void;
~~~

### 参数

- `id` - （必填）要复制的卡片的 ID
- `card` - （可选）新卡片的数据对象。您可以在[**这里**](/api/config/js_kanban_cards_config.md)找到卡片参数的完整列表
- `select` - （可选）决定新添加的卡片是否被选中

### 示例

~~~jsx {7-10}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 复制 ID 为 1 的卡片
board.duplicateCard({
    id: 1,
    card: { label: "Duplicated card" },
    select: true
});
~~~

**更新日志:** `select` 参数在 v1.5.10 版本中添加
