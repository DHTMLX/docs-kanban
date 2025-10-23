---
sidebar_label: cardHeight
title: cardHeight 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 cardHeight 配置。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版本。
---

# cardHeight

### 描述

@short: 可选。卡片的高度

### 用法

~~~jsx {}
cardHeight?: number; // px
~~~

:::important
如果您同时使用 [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) 和 [`scrollType: "default"`](api/config/js_kanban_scrolltype_config.md) 设置，请务必通过 `cardHeight` 属性指定卡片的固定高度。如果未指定，卡片将不会显示。
:::

### 示例

~~~jsx {4}
new kanban.Kanban("#root", {
    cards,
    columns,
    cardHeight: 150, // px
    // 其他参数
});
~~~

**更新日志：** 该属性在 v1.2 版本中添加

**相关文档：** [配置](guides/configuration.md#cards)

**相关示例：** [Kanban. Lazy rendering and column scroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)