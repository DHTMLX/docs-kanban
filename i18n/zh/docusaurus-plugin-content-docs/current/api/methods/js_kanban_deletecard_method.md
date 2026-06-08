---
sidebar_label: deleteCard()
title: deleteCard 方法 API
description: 阅读 DHTMLX Kanban 的 deleteCard 方法 API。了解如何通过 ID 从看板中删除卡片。
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