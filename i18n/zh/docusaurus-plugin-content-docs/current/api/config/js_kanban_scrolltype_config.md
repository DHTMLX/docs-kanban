---
sidebar_label: scrollType
title: scrollType 配置 API
description: 阅读 DHTMLX Kanban 的 scrollType 配置 API。了解如何配置看板的滚动方式及列滚动行为。
---

# scrollType

### 描述

@short: 可选。定义滚动类型

### 用法

~~~jsx {}
scrollType?: "default" | "column";
~~~

:::note
如果您使用 `scrollType: "column"` 设置，则可以分别滚动每一列。
:::

### 默认配置

~~~jsx {}
scrollType: "default"
~~~

:::important
如果您将 [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) 和 `scrollType: "default"` 设置结合使用，请务必通过 [`cardHeight`](api/config/js_kanban_cardheight_config.md) 属性指定卡片的固定高度。否则卡片将无法显示。
当您将 [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) 与 `scrollType: "column"` 一起使用时，也应该通过 [`cardHeight`](api/config/js_kanban_cardheight_config.md) 属性固定卡片的高度。尽管该布局类型支持可变高度的卡片，但如果卡片内容为自定义内容，显示效果可能不稳定。

如果未设置 `cardHeight`，组件将根据 [`cardShape`](api/config/js_kanban_cardshape_config.md) 对卡片高度进行实验性估算作为回退。对于使用自定义 [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) 的看板，请改为提供自定义的 [`getCardHeight`](api/config/js_kanban_getcardheight_config.md) 函数。
:::

### 示例

~~~jsx {5}
new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    scrollType: "column",
    // 其他参数
});
~~~

**更新日志：** 该属性在 v1.2 版本中添加

**相关文档：** [配置](guides/configuration.md#cards)

**相关示例：** [看板。固定表头、懒加载渲染和列滚动](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
