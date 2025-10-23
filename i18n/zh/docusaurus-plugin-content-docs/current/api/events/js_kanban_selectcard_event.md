---
sidebar_label: select-card
title: select-card 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 select-card 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# select-card

### 描述

@short: 当选择卡片时触发

### 用法

~~~jsx {}
"select-card": ({
    id: string | number,
    groupMode?: boolean
}) => void;
~~~

### 参数

**select-card** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必需）被选中卡片的 ID
- `groupMode` - （可选）多选模式（默认值为 false）

:::info
处理内部事件时，您可以使用[**事件总线方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "select-card" 事件
board.api.on("select-card", (obj) => {
    console.log(obj.id);
});
~~~