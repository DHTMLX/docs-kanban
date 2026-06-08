---
sidebar_label: delete-link
title: delete-link 事件 API
description: 阅读 DHTMLX Kanban 的 delete-link 事件 API。了解如何处理删除链接时触发的事件。
---

# delete-link

### 描述

@short: 在删除链接时触发

### 用法

~~~jsx {}
"delete-link": ({
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**delete-link** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必需）要删除的链接的 ID
- `skipProvider` - （可选）启用或禁用阻止请求发送到服务器

:::info
要处理内部事件，您可以使用[**事件总线方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {8-10}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links
});
// 订阅 "delete-link" 事件
board.api.on("delete-link", (obj) => {
    console.log(obj.id);
});
~~~

**更新日志：** 该事件在 v1.4 版本中添加