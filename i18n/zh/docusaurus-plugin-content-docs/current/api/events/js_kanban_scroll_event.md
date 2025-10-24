---
sidebar_label: scroll
title: scroll 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 scroll 事件。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# scroll

### 描述

@short: 当滚动到指定元素时触发

### 用法

~~~jsx {}
"scroll": ({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}) => void;
~~~

### 参数

**scroll** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必需）目标元素的 ID
- `to` - （必需）目标元素的类型。可选值为 *"column"*、*"row"* 和 *"card"*
- `options` - （可选）滚动选项对象。完整的滚动参数列表请参见 [这里](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

:::info
若需处理内部事件，可以使用 [**事件总线方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "scroll" 事件
board.api.on("scroll", (obj) => {
    console.log(obj);
});
~~~

**更新日志：** 该事件在 v1.2 版本中新增