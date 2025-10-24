---
sidebar_label: delete-vote
title: delete-vote 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 delete-vote 事件。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版本。
---

# delete-vote

### 描述

@short: 当用户从卡片中移除投票时触发

### 用法

~~~jsx {}
"delete-vote": ({
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**delete-vote** 事件的回调函数接收一个包含以下属性的对象:

- `cardId` - （必需）被移除投票的卡片的 ID
- `skipProvider` - （可选）控制是否跳过向服务器发送请求

:::info
要管理内部事件，您可以参考[**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "delete-vote" 事件
board.api.on("delete-vote", (obj) => {
    console.log(obj.cardId);
});
~~~

**更新日志:** 该事件自 v1.4 版本引入
