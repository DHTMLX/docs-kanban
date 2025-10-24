---
sidebar_label: getColumnCards()
title: getColumnCards 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 getColumnCards 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# getColumnCards()

### 描述

@short: 获取一个数组，存储特定列中所有卡片的数据对象

### 用法

~~~jsx {}
getColumnCards(id: string | number): array;
~~~

### 参数

- `id` - （必填）目标列的 ID

### 返回值

该方法返回一个数组，存储特定列中所有卡片的数据对象

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 获取 ID 为 1 的列中所有卡片的数据对象
const cards_data = board.getColumnCards(1);
console.log(cards_data);
~~~

**更新日志**：该方法自 v1.7 版本起新增