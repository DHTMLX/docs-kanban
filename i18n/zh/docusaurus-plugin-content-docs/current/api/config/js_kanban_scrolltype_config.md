---
sidebar_label: scrollType
title: scrollType 配置
description: 了解 DHTMLX JavaScript 看板库中的 scrollType 配置。查看开发者指南、API 参考、代码示例、在线演示，并免费下载 30 天试用版的 DHTMLX 看板。
---

# scrollType

### 描述

@short: 可选。指定滚动行为的方式。

### 用法

~~~jsx {}
scrollType?: "default" | "column";
~~~  

:::note
当 `scrollType` 设置为 `"column"` 时，每个列可以独立滚动。
:::

### 默认配置

~~~jsx {}
scrollType: "default"
~~~

:::important
如果您将 [`renderType: "lazy"`](/api/config/js_kanban_rendertype_config.md) 与 `scrollType: "default"` 一起使用，确保通过 [`cardHeight`](/api/config/js_kanban_cardheight_config.md) 属性设置固定的卡片高度。否则，卡片将不会显示。
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

**更新日志:** 该属性在 v1.2 版本引入

**相关文档:** [配置](/guides/configuration#卡片)

**相关示例:** [看板。固定表头、懒加载和列滚动](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
