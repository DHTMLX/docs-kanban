---
sidebar_label: scrollType
title: scrollType 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 scrollType 配置。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
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
当您将 `renderType: "lazy"` 与 [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md) 一起使用时，也应该固定卡片的高度。尽管该布局类型支持可变高度的卡片，但如果卡片内容为自定义内容，显示效果可能不稳定。
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
