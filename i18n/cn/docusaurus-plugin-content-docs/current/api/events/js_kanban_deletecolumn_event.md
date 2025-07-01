---
sidebar_label: delete-column
title: delete-column 事件
description: 探索 DHTMLX JavaScript Kanban 库中的 delete-column 事件文档。查看开发者指南、API 参考，尝试代码示例和在线演示，并免费下载 30 天试用版的 DHTMLX Kanban。
---

# delete-column

### 描述

@short: 当某列被删除时触发

### 用法

~~~jsx {}
"delete-column": ({ 
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**delete-column** 事件的回调函数接收一个包含以下属性的对象:

- `id` - （必需）被删除列的 ID
- `skipProvider` - （可选）控制请求是否发送到服务器

:::info
要管理内部事件，请参考[**Event Bus 方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "delete-column" 事件 
board.api.on("delete-column", (obj) => {
    console.log(obj.id);
});
~~~
