---
sidebar_label: delete-card
title: delete-card 事件
description: 探索 DHTMLX JavaScript Kanban 库中的 delete-card 事件文档。查找开发者指南、API 参考、代码示例、在线演示，并免费下载 DHTMLX Kanban 30 天试用版。
---

# delete-card

### 描述

@short: 当卡片被删除时触发

### 用法

~~~jsx {}
"delete-card": ({ 
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**delete-card** 事件的回调函数接收一个包含以下属性的对象:

- `id` - （必需）被删除卡片的标识符
- `skipProvider` - （可选）控制是否阻止向服务器发送请求

:::info
有关管理内部事件，请参阅 [**Event Bus methods**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "delete-card" 事件
board.api.on("delete-card", (obj) => {
    console.log(obj.id);
});
~~~
