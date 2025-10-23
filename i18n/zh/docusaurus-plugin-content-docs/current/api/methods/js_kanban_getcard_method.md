---
sidebar_label: getCard()
title: getCard 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 getCard 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# getCard()

### 描述

@short: 根据指定的 ID 获取卡片的数据对象

### 用法

~~~jsx {}
getCard(id: string | number): object;
~~~

### 参数

- `id` - （必填）目标卡片的 ID

### 返回值

该方法返回指定 ID 的卡片的数据对象

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 获取 ID 为 1 的卡片的数据对象
const card_data = board.getCard(1);
console.log(card_data);
~~~