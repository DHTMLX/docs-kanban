---
sidebar_label: add-row
title: add-row 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 add-row 事件。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版本。
---

# add-row

### 描述

@short: 当添加新行时触发

### 用法

~~~jsx {}
"add-row": ({
    id?: string | number,
    row?: object,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**add-row** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （可选）新行的 ID
- `row` - （可选）新行的数据对象。完整的 **row** 参数列表可以在[**这里**](api/config/js_kanban_rows_config.md)找到
- `before` - （可选）新行将被插入到该 ID 行之前
- `skipProvider` - （可选）启用或禁用阻止请求发送到服务器

:::info
处理内部事件时，您可以使用[**事件总线方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "add-row" 事件
board.api.on("add-row", (obj) => {
    console.log(obj.id);
});
~~~

**更新日志**：在 v1.1 版本中添加了 **id**、**before** 和 **row** 参数