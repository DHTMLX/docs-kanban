---
sidebar_label: move-row
title: move-row 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 move-row 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX 看板的免费 30 天评估版。
---

# move-row

### 描述

@short: 当移动行时触发

### 用法

~~~jsx {}
"move-row": ({
    id: string | number,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**move-row** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必需）要移动的行的 ID
- `before` - （可选）移动的行将被放置在该行之前的行的 ID。如果未指定 `before` 参数，行将被放置在看板的末尾
- `skipProvider` - （可选）启用/禁用阻止请求发送到服务器

:::info
处理内部事件时，您可以使用[**事件总线方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {8-10}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// 订阅 "move-row" 事件
board.api.on("move-row", (obj) => {
    console.log(obj);
});
~~~

**更新日志：** 此事件在 v1.1 中添加