---
sidebar_label: unselectCard()
title: unselectCard 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 unselectCard 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# unselectCard()

### 描述

@short: 取消选中通过其 ID 标识的卡片。

### 用法

~~~jsx {}
unselectCard({ id: string | number }): void;
~~~

:::info
如果调用 **unselectCard()** 时不传入任何参数，将会清除所有卡片的选中状态。
:::

### 参数

- `id` - （必需）要取消选中的卡片的唯一标识符。

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 取消选中 ID 为 1 的卡片
board.unselectCard({ id: 1 });
~~~
