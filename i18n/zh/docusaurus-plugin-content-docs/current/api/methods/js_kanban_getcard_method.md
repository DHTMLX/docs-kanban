---
sidebar_label: getCard()
title: getCard 方法
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 getCard 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Kanban 的免费30天评估版。
---

# getCard()

### 描述

@short: 使用指定的 ID 获取卡片的数据对象

### 用法

~~~jsx {}
getCard(id: string | number): object;
~~~

### 参数

- `id` - （必需）您想要访问的卡片的 ID

### 返回值

此方法返回与给定 ID 关联的卡片的数据对象

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 获取 ID 为 1 的卡片的数据对象
board.getCard(1);
~~~
