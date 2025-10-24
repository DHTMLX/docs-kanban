---
sidebar_label: update-column
title: update-column 事件
description: 探索 DHTMLX JavaScript Kanban 库文档中的 update-column 事件。查看开发者指南、API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天试用版。
---

# update-column

### 描述

@short: 当列数据被更新时触发。

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

**update-column** 事件的回调接收一个包含以下属性的对象:

- `id` - （必需）标识要更新的列
- `column` - （可选）提供列的新数据对象。完整的 **column** 属性列表请参见[**此处**](/api/config/js_kanban_columns_config.md)
- `replace` - （可选）决定是替换整个数据集还是仅更新指定字段

:::note
将 `replace` 设置为 *true* 表示现有数据将被新数据完全替换。如果为 false 或省略，则只更新提供的值。
:::

- `skipProvider` - （可选）控制是否发送更新服务器的请求，或跳过此请求

:::info
如需管理内部事件，请参阅[**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "update-column" 事件
board.api.on("update-column", (obj) => {
    console.log(obj);
});
~~~

**更新日志**:
- **id** 和 **column** 参数在 v1.1 中引入
- **replace** 参数在 v1.3 中添加
