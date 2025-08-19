---
sidebar_label: renderType
title: renderType 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 renderType 配置。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX 看板。
---

# renderType

### 描述

@short: 可选。指定卡片的渲染方式。

:::info
当处理大量卡片时，此设置非常有用。将其设置为 *"lazy"* 会使组件仅渲染当前在看板上可见的卡片，从而大幅提升性能。
:::

### 用法

~~~jsx {}
renderType?: "default" | "lazy";
~~~  

:::important
当 `renderType: "lazy"` 与 [`scrollType: "default"`](/api/config/js_kanban_scrolltype_config.md) 一起使用时，请确保通过 [`cardHeight`](/api/config/js_kanban_cardheight_config.md) 属性为卡片设置固定高度。否则，卡片可能无法正确显示。
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

**更新日志:** 此属性自 v1.2 引入

**相关文档:** [配置](/guides/configuration#卡片)

**相关示例:** [Kanban. 固定表头，懒加载渲染与列滚动](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
