---
sidebar_label: duplicate-card
title: duplicate-card 事件
description: 了解 DHTMLX JavaScript 看板库中的 duplicate-card 事件。浏览开发者指南、API 参考，尝试代码示例和在线演示，并免费下载 30 天试用版的 DHTMLX 看板。
---

# duplicate-card

### 描述

@short: 当卡片被复制时触发

### 用法

~~~jsx {}
"duplicate-card": ({
    id: string | number,
    card?: object,
    select?: boolean
}) => void;
~~~

### 参数

**duplicate-card** 事件的回调函数接收一个包含以下属性的对象:

- `id` - （必填）被复制卡片的 ID
- `card` - （可选）新卡片的数据对象。完整的卡片参数列表请参见 [here](/api/config/js_kanban_cards_config.md)
- `select` - （可选）控制新添加的卡片是否被选中

:::info
要处理内部事件，可以使用[**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "duplicate-card" 事件
board.api.on("duplicate-card", (obj) => {
    console.log(obj);
});
~~~

**更新日志:** `select` 参数自 v1.5.10 版本开始支持
