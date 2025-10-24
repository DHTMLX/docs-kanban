---
sidebar_label: move-row
title: move-row 事件
description: 探索 DHTMLX JavaScript Kanban 库中的 move-row 事件。查找开发者指南、API 参考、代码示例、实时演示，并免费下载 DHTMLX Kanban 的 30 天试用版。
---

# move-row

### 描述

@short: 当行被移动时触发

### 用法

~~~jsx {}
"move-row": ({
    id: string | number,
    before: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**move-row** 事件的回调函数接收一个包含以下属性的对象:

- `id` - （必需）被移动行的 ID
- `before` - （必需）被移动行将放置在其前面的行的 ID
- `skipProvider` - （可选）控制是否跳过向服务器的请求

:::info
要管理内部事件，您可以使用 [**Event Bus 方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {8-10}
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// 监听 "move-row" 事件
board.api.on("move-row", (obj) => {
    console.log(obj);
});
~~~

**更新日志:** 此事件自 v1.1 版本引入
