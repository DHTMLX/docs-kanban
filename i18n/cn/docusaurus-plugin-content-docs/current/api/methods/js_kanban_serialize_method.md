---
sidebar_label: serialize()
title: serialize 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 serialize 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# serialize()

### 描述

@short: 将看板数据转换为 JSON 格式。

### 用法

~~~jsx {}
serialize(): object;
~~~

### 返回值

该方法返回一个包含看板数据的对象:

~~~jsx {}
{
    cards: [{...}, {...}, ...],
    rows: [{...}, {...}, ...],
    columns: [{...}, {...}, ...]
}
~~~

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 获取看板数据对象
board.serialize();
~~~
