---
sidebar_label: delete-row
title: delete-row 事件 API
description: 阅读 DHTMLX Kanban 的 delete-row 事件 API。了解如何处理删除行时触发的事件。
---

# delete-row

### 描述

@short: 在删除行时触发

### 用法

~~~jsx {}
"delete-row": ({ 
    id: string | number,
    skipProvider?: boolean 
}) => void;
~~~

### 参数

**delete-row** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必需）要删除的行的 ID
- `skipProvider` - （可选）启用/禁用阻止请求发送到服务器

:::info
要处理内部事件，您可以使用 [**事件总线方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "delete-row" 事件
board.api.on("delete-row", (obj) => {
    console.log(obj.id);
});
~~~