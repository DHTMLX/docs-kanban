---
sidebar_label: duplicateCard()
title: duplicateCard 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 duplicateCard 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版本。
---

# duplicateCard()

### 描述

@short: 通过指定的 ID 复制一张卡片

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
- `card` - （可选）新卡片的数据对象。完整的卡片参数列表可以在[**这里**](api/config/js_kanban_cards_config.md)找到
- `select` - （可选）启用或禁用选择新添加的卡片

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

**更新日志：** `select` 参数在 v1.5.10 版本中新增