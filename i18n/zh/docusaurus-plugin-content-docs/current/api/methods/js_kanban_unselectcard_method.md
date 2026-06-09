---
sidebar_label: unselectCard()
title: unselectCard 方法 API
description: 阅读 DHTMLX Kanban 的 unselectCard 方法 API。了解如何通过卡片 ID 取消选择卡片。
---

# unselectCard()

### 描述

@short: 通过卡片 ID 取消选择卡片

### 用法

~~~jsx {}
unselectCard({ id: string | number }): void;
~~~

:::info
要取消选择所有卡片，请调用不带参数的 **unselectCard()** 方法
:::

### 参数

- `id` - （必需）要取消选择的卡片的 ID

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 取消选择 ID 为 1 的卡片
board.unselectCard({ id: 1 });
~~~