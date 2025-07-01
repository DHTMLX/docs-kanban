---
sidebar_label: set-search
title: set-search 事件
description: 了解 DHTMLX JavaScript Kanban 库中的 set-search 事件。查看开发者指南，探索 API 参考，测试代码示例和在线演示，并获取 DHTMLX Kanban 免费 30 天试用。
---

# set-search

### 描述

@short: 当执行卡片搜索时触发

### 用法

~~~jsx {}
"set-search": ({
    value: string,
    by?: string
}) => void;
~~~

### 参数

**set-search** 事件的回调函数接收一个包含以下参数的对象:

- `value` - （必填）搜索关键词
- `by` - （可选）用于搜索的卡片字段

:::info
要处理内部事件，可以使用[**Event Bus 方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "set-search" 事件
board.api.on("set-search", (obj) => {
    console.log(obj.value);
});
~~~
