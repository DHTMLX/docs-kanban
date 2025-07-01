---
sidebar_label: delete-link
title: delete-link 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 delete-link 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费 30 天试用版的 DHTMLX 看板。
---

# delete-link

### 描述

@short: 当链接被删除时触发

### 用法

~~~jsx {}
"delete-link": ({
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**delete-link** 事件的回调函数接收一个包含以下属性的对象:

- `id` - （必需）被删除链接的 ID
- `skipProvider` - （可选）控制是否阻止向服务器发送请求

:::info
要处理内部事件，可以使用[**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {8-10}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links
});
// 监听 "delete-link" 事件
board.api.on("delete-link", (obj) => {
    console.log(obj.id);
});
~~~

**更新日志:** 此事件在 v1.4 中引入
