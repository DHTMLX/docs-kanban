---
sidebar_label: update-column
title: update-column 事件 API
description: 阅读 DHTMLX Kanban 的 update-column 事件 API。了解如何处理更新列数据时触发的事件。
---

# update-column

### 描述

@short: 当更新列数据时触发

### 用法

~~~jsx {}
"update-column": ({
    id: string | number,
    column?: object,
    replace?: boolean,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**update-column** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必需）要更新的列的 ID
- `column` - （可选）列的新数据对象。完整的 **column** 参数列表可以在[**这里**](api/config/js_kanban_columns_config.md)找到
- `replace` - （可选）启用/禁用完全替换数据

    :::note
    如果将 `replace` 参数设置为 *true*，旧数据将被新数据完全替换。否则，该方法只会更新您传入的值。
    :::

- `skipProvider` - （可选）启用/禁用阻止请求发送到服务器

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
// 订阅 "update-column" 事件
board.api.on("update-column", (obj) => {
    console.log(obj);
});
~~~

**更新日志**：
- **id** 和 **column** 参数在 v1.1 版本中添加
- **replace** 参数在 v1.3 版本中添加