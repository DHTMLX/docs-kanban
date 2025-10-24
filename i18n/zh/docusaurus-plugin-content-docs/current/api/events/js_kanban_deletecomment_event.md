---
sidebar_label: delete-comment
title: delete-comment 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 delete-comment 事件。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# delete-comment

### 描述

@short: 当删除卡片评论时触发

### 用法

~~~jsx {}
"delete-comment": ({
    id?: string | number, 
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**delete-comment** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （可选）要删除的评论 ID
- `cardId` - （必需）包含要删除评论的卡片 ID
- `skipProvider` - （可选）启用或禁用阻止请求发送到服务器

:::info
若需处理内部事件，您可以使用 [**Event Bus 方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "delete-comment" 事件
board.api.on("delete-comment", (obj) => {
    console.log(obj.id);
});
~~~

**更新日志：** 该事件自 v1.4 版本起添加