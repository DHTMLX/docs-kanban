---
sidebar_label: renderType
title: renderType 配置 API
description: 阅读 DHTMLX Kanban 的 renderType 配置 API。了解如何启用懒加载渲染并优化大型看板的性能。
---

# renderType

### 描述

@short: 可选。定义卡片渲染的类型

:::info
当处理大量卡片时会用到此属性。如果设置为 *"lazy"*，组件将只渲染看板上可见的卡片的视觉部分。这可以显著提升组件的性能。
:::

### 用法

~~~jsx {}
renderType?: "default" | "lazy";
~~~  

:::important
如果您将 `renderType: "lazy"` 与 [`scrollType: "default"`](api/config/js_kanban_scrolltype_config.md) 设置结合使用，请务必通过 [`cardHeight`](api/config/js_kanban_cardheight_config.md) 属性指定卡片的固定高度。否则卡片将无法正确显示。
当您将 `renderType: "lazy"` 与 [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md) 搭配使用时，也应通过 [`cardHeight`](api/config/js_kanban_cardheight_config.md) 属性固定卡片的高度。虽然此布局类型支持卡片高度可变，但如果使用自定义卡片内容，可能无法稳定工作。

如果未设置 `cardHeight`，组件将根据 [`cardShape`](api/config/js_kanban_cardshape_config.md) 对卡片高度进行实验性近似估算。对于使用自定义 [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) 的看板，请改为提供自定义的 [`getCardHeight`](api/config/js_kanban_getcardheight_config.md) 函数。
:::

### 默认配置

~~~jsx {}
renderType: "default"
~~~

### 示例

~~~jsx {5}
new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    renderType: "lazy",
    // 其他参数
});
~~~

**更新日志：** 该属性在 v1.2 版本中添加

**相关文档：** [配置](guides/configuration.md#cards)

**相关示例：** [Kanban. 固定表头，懒加载渲染和列滚动](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
