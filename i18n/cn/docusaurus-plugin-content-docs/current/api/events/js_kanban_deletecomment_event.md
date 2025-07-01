---
sidebar_label: delete-comment
title: delete-comment 事件
description: 了解 DHTMLX JavaScript 看板库中的 delete-comment 事件。浏览开发者指南、API 参考，试用代码示例和在线演示，并获得 DHTMLX 看板的免费 30 天试用。
---

# delete-comment

### 描述

@short: 当卡片评论被删除时触发

### 用法

~~~jsx {}
"delete-comment": ({
    id?: string | number, 
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**delete-comment** 事件的回调函数接收一个包含以下属性的对象:

- `id` - （可选）被删除评论的 ID
- `cardId` - （必需）包含该评论的卡片 ID
- `skipProvider` - （可选）控制是否阻止请求发送到服务器

:::info
要管理内部事件，可以使用 [**Event Bus 方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "delete-comment" 事件
board.api.on("delete-comment", (obj) => {
    console.log(obj.id);
});
~~~

**更新日志:** 此事件从 v1.4 版本开始引入
