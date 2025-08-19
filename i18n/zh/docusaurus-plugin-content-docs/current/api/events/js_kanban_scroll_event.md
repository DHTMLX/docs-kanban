---
sidebar_label: scroll
title: scroll 事件
description: 探索 DHTMLX JavaScript 看板库中的 scroll 事件。查阅开发者指南、API 参考，试用代码示例和在线演示，并免费下载 DHTMLX 看板的30天试用版。
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

**scroll** 事件的回调函数接收一个包含以下属性的对象:

- `id` - （必需）目标元素的 ID
- `to` - （必需）指定目标元素类型:*"column"*、*"row"* 或 *"card"*
- `options` - （可选）包含滚动选项的对象。详细参数列表请参见 [这里](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

:::info
要处理内部事件，您可以使用 [**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
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

**更新日志:** 此事件自 v1.2 版本引入
