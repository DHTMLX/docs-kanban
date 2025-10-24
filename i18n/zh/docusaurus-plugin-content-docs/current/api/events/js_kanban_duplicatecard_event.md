---
sidebar_label: duplicate-card
title: duplicate-card 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 duplicate-card 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# duplicate-card

### 描述

@short: 在复制卡片时触发

### 用法

~~~jsx {}
"duplicate-card": ({
    id: string | number,
    card?: object,
    select?: boolean
}) => void;
~~~

### 参数

**duplicate-card** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必需）要复制的卡片的 ID
- `card` - （可选）新卡片的数据对象。卡片参数的完整列表请参见 [这里](api/config/js_kanban_cards_config.md)
- `select` - （可选）启用或禁用新添加卡片的选中状态

:::info
要处理内部事件，您可以使用 [**事件总线方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "duplicate-card" 事件
board.api.on("duplicate-card", (obj) => {
    console.log(obj);
});
~~~

**更新日志：** `select` 参数在 v1.5.10 版本中添加