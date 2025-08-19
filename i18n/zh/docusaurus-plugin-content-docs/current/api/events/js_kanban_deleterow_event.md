---
sidebar_label: delete-row
title: delete-row 事件
description: 了解 DHTMLX JavaScript Kanban 库中 delete-row 事件的工作原理。浏览开发者指南，查看 API 参考，测试代码示例和实时演示，并免费下载 DHTMLX Kanban 的30天试用版。
---

# delete-row

### 描述

@short: 当某一行被删除时触发

### 用法

~~~jsx {}
"delete-row": ({ 
    id: string | number,
    skipProvider?: boolean 
}) => void;
~~~

### 参数

**delete-row** 事件的回调函数接受一个包含以下参数的对象:

- `id` - （必填）被删除行的 ID
- `skipProvider` - （可选）控制是否将请求发送到服务器

:::info
若要使用内部事件，可以参考 [**Event Bus methods**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "delete-row" 事件
board.api.on("delete-row", (obj) => {
    console.log(obj.id);
});
~~~
