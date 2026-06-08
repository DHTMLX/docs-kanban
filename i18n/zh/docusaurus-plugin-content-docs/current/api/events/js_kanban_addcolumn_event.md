---
sidebar_label: add-column
title: add-column 事件 API
description: 阅读 DHTMLX Kanban 的 add-column 事件 API。了解如何处理添加新列时触发的事件。
---

# add-column

### 描述

@short: 添加新列时触发

### 用法

~~~jsx {}
"add-column": ({
    id?: string | number,
    column?: object,
    before?: string | number,
    skipProvider?: boolean,
}) => void;
~~~

### 参数

**add-column** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （可选）新列的 ID
- `column` - （可选）新列的数据对象。完整的 **column** 参数列表可在[**这里**](api/config/js_kanban_columns_config.md)找到
- `before` - （可选）新列将被插入到此列 ID 之前
- `skipProvider` - （可选）启用/禁用阻止请求发送到服务器

:::info
处理内部事件时，可以使用[**事件总线方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "add-column" 事件
board.api.on("add-column", (obj) => {
    console.log(obj.label);
});
~~~

**更新日志**：v1.1 版本新增了 **id**、**before** 和 **column** 参数