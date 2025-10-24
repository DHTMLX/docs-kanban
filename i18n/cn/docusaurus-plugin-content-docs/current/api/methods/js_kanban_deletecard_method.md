---
sidebar_label: deleteCard()
title: deleteCard 方法
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 deleteCard 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天评估版本。
---

# deleteCard()

### 描述

@short: 从看板的数据存储中删除指定的卡片。

### 用法

~~~jsx {}
deleteCard({ id: string | number }): void;
~~~

### 参数

- `id` - （必需）要删除卡片的唯一标识符

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 通过 id 删除卡片
board.deleteCard({ id: 1 });
~~~
