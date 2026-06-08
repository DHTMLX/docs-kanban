---
sidebar_label: set-search
title: set-search 事件 API
description: 阅读 DHTMLX Kanban 的 set-search 事件 API。了解如何处理搜索卡片时触发的事件。
---

# set-search

### 描述

@short: 在搜索卡片时触发

### 用法

~~~jsx {}
"set-search": ({
    value: string,
    by?: string
}) => void;
~~~

### 参数

**set-search** 事件的回调函数可以接收一个包含以下参数的对象：

- `value` - （必需）要搜索的值
- `by` - （可选）用于搜索的卡片字段

:::info
如需处理内部事件，可以使用[**事件总线方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "set-search" 事件
board.api.on("set-search", (obj) => {
    console.log(obj.value);
});
~~~