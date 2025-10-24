---
sidebar_label: delete-card
title: delete-card 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 delete-card 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版。
---

# delete-card

### 描述

@short: 当删除卡片时触发

### 用法

~~~jsx {}
"delete-card": ({ 
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**delete-card** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必需）要删除的卡片 ID
- `skipProvider` - （可选）启用或禁用阻止请求发送到服务器

:::info
处理内部事件时，可以使用 [**Event Bus 方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "delete-card" 事件
board.api.on("delete-card", (obj) => {
    console.log(obj.id);
});
~~~