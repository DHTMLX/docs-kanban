---
sidebar_label: move-column
title: move-column 事件
description: 探索 DHTMLX JavaScript Kanban 库中的 move-column 事件。查看开发者指南、API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天试用版。
---

# move-column

### 描述

@short: 当列被移动时触发

### 用法

~~~jsx {}
"move-column": ({
    id: string | number,
    before: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**move-column** 事件的回调接收一个包含以下属性的对象:

- `id` - （必需）被移动列的 ID
- `before` - （必需）被移动列将放置于其前的列的 ID
- `skipProvider` - （可选）控制是否跳过向服务器发送请求

:::info
要管理内部事件，您可以参考[**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "move-column" 事件
board.api.on("move-column", (obj) => {
    console.log(obj);
});
~~~

**更新日志:** 此事件在 v1.1 中引入
