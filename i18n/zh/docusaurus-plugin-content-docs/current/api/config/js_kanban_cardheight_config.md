---
sidebar_label: cardHeight
title: cardHeight 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 cardHeight 配置。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Kanban 的免费 30 天评估版。
---

# cardHeight

### 描述

@short: 可选。定义卡片的高度。

### 用法

~~~jsx {}
cardHeight?: number; // px
~~~

:::important
当同时使用 [`renderType: "lazy"`](/api/config/js_kanban_rendertype_config.md) 和 [`scrollType: "default"`](/api/config/js_kanban_scrolltype_config.md) 时，务必通过 `cardHeight` 属性设置卡片的固定高度。否则，卡片将无法显示。
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

**更新日志:** 此属性自版本 1.2 起引入

**相关文档:** [配置](/guides/configuration#卡片)

**相关示例:** [Kanban. 懒加载渲染与列滚动](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
