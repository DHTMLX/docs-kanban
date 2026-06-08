---
sidebar_label: add-vote
title: add-vote 事件 API
description: 阅读 DHTMLX Kanban 的 add-vote 事件 API。了解如何处理用户添加新投票时触发的事件。
---

# add-vote

### 描述

@short: 当用户添加新投票时触发

### 用法

~~~jsx {}
"add-vote": ({
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**add-vote** 事件的回调函数可以接收一个包含以下参数的对象：

- `cardId` - （必需）要添加投票的卡片 ID
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
// 订阅 "add-vote" 事件
board.api.on("add-vote", (obj) => {
    console.log(obj.cardId);
});
~~~

**更新日志：** 该事件在 v1.4 版本中添加