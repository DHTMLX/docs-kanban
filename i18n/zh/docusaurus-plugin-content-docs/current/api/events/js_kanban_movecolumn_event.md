---
sidebar_label: move-column
title: move-column 事件 API
description: 阅读 DHTMLX Kanban 的 move-column 事件 API。了解如何处理移动列时触发的事件。
---

# move-column

### 描述

@short: 当移动列时触发

### 用法

~~~jsx {}
"move-column": ({
    id: string | number,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**move-column** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必需）要移动的列的 ID
- `before` - （可选）指定移动列将被放置在其前面的列的 ID。如果未指定 `before` 参数，列将被放置在看板的末尾
- `skipProvider` - （可选）启用或禁用防止请求发送到服务器

:::info
要处理内部事件，您可以使用[**事件总线方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "move-column" 事件
board.api.on("move-column", (obj) => {
    console.log(obj);
});
~~~

**更新日志：** 此事件在 v1.1 中添加