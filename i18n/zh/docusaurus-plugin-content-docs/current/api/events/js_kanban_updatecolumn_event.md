---
sidebar_label: update-column
title: update-column 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 update-column 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天评估版本的 DHTMLX 看板。
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