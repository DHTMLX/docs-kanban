---
sidebar_label: update-row
title: update-row 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 update-row 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# update-row

### 描述

@short: 当更新行数据时触发

### 用法

~~~jsx {}
"update-row": ({
    id: string | number,
    row?: object,
    replace?: boolean,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**update-row** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必需）要更新的行的 ID
- `row` - （可选）行的新数据对象。完整的 **row** 参数列表请参见 [**这里**](api/config/js_kanban_rows_config.md)
- `replace` - （可选）启用/禁用完全替换数据

    :::note
    如果将 `replace` 参数设置为 *true*，旧数据将被新数据完全替换。否则，方法只会更新您传入的值。
    :::

- `skipProvider` - （可选）启用/禁用阻止请求发送到服务器

:::info
处理内部事件时，您可以使用 [**事件总线方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "update-row" 事件
board.api.on("update-row", (obj) => {
    console.log(obj);
});
~~~

**更新日志**：
- **id** 和 **row** 参数在 v1.1 中新增
- **replace** 参数在 v1.3 中新增