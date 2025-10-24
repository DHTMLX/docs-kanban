---
sidebar_label: deleteCard()
title: deleteCard 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 deleteCard 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版本。
---

# deleteCard()

### 描述

@short: 从看板的数据存储中移除指定的卡片

### 用法

~~~jsx {}
deleteCard({ id: string | number }): void;
~~~

### 参数

- `id` - （必填）要删除的卡片的 ID

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 通过卡片 ID 删除卡片
board.deleteCard({ id: 1 });
~~~