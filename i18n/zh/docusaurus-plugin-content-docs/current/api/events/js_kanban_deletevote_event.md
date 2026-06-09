---
sidebar_label: delete-vote
title: delete-vote 事件 API
description: 阅读 DHTMLX Kanban 的 delete-vote 事件 API。了解如何处理用户从卡片中删除投票时触发的事件。
---

# delete-vote

### 描述

@short: 当用户从卡片中删除投票时触发

### 用法

~~~jsx {}
"delete-vote": ({
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**delete-vote** 事件的回调函数可以接收一个包含以下参数的对象：

- `cardId` - （必需）要删除投票的卡片 ID
- `skipProvider` - （可选）启用或禁用阻止请求发送到服务器

:::info
要处理内部事件，您可以使用[**事件总线方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "delete-vote" 事件
board.api.on("delete-vote", (obj) => {
    console.log(obj.cardId);
});
~~~

**更新日志：** 该事件于 v1.4 版本添加