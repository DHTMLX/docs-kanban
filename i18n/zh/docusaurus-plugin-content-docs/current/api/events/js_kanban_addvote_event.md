---
sidebar_label: add-vote
title: add-vote 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 add-vote 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费30天评估版。
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

**add-vote** 事件的回调接收一个包含以下属性的对象:

- `cardId` - （必需）投票被添加的卡片的 ID
- `skipProvider` - （可选）控制是否跳过向服务器发送请求

:::info
要处理内部事件，可以参考[**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "add-vote" 事件
board.api.on("add-vote", (obj) => {
    console.log(obj.cardId);
});
~~~

**更新日志:** 此事件在 v1.4 版本中引入
