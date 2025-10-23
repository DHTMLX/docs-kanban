---
sidebar_label: set-sort
title: set-sort 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 set-sort 事件。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# set-sort

### 描述

@short: 当卡片排序时触发

### 用法

~~~jsx {}
"set-sort": (
    {
        by?: string | ((card: object) => any),
        dir?: "asc" | "desc",
        columnId?: string | number,
        preserve?: boolean
    } | null
) => void;
~~~

### 参数

**set-sort** 事件的回调函数可以接受 *null* 值或包含以下参数的对象：

- `by` - （可选）用于排序的卡片字段（*string* 或 *function*）
- `dir` - （可选）排序顺序。可选值为 *"asc"* 和 *"desc"*
- `preserve` - （可选）启用或禁用排序状态的保留
- `columnId` - （可选）要排序的列的 ID

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
// 订阅 "set-sort" 事件
board.api.on("set-sort", (obj) => {
    console.log(obj);
});
~~~

**更新日志：** 该事件在 v1.2 版本中添加