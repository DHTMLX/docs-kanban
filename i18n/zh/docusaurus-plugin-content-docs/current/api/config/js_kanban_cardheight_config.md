---
sidebar_label: cardHeight
title: cardHeight 配置 API
description: 阅读 DHTMLX Kanban 的 cardHeight 配置 API。了解固定卡片高度如何支持布局和懒加载渲染。
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
当您将 [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) 与 [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md) 配合使用时，也应通过 `cardHeight` 属性固定卡片高度。尽管该布局类型支持卡片高度可变，但在自定义卡片内容时，可能无法稳定工作。

如果未指定 `cardHeight`，组件将根据 [`cardShape`](api/config/js_kanban_cardshape_config.md) 中声明的可见字段，对卡片高度进行实验性估算作为回退方案。若使用了自定义 [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md)，此估算将不适用——在这种情况下，请显式设置 `cardHeight`，或提供自定义的 [`getCardHeight`](api/config/js_kanban_getcardheight_config.md) 函数。
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
