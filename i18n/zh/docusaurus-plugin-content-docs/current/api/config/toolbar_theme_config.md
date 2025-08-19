---
sidebar_label: theme
title: theme
description: 探索 DHTMLX JavaScript 看板库中的（工具栏）主题配置。查看开发者指南、API参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费30天试用版本。
---

# 主题

### 描述

@short: 可选。指定应用于工具栏的主题。

### 用法

~~~jsx {}
theme?: string; // "material" | "willow" | "willow-dark"
~~~

:::important
除了设置 `theme` 属性之外，您还可以通过向控件容器添加相应的 *css* 类来应用所需的主题:

- **Material 主题**
~~~html {}
    <!-- 看板工具栏 -->
    <div id="toolbar" class="wx-material-theme"></div>
    <!-- 看板容器 -->
    <div id="root" class="wx-material-theme"></div>
~~~

- **Willow 主题**
~~~html {}
    <!-- 看板工具栏 -->
    <div id="toolbar" class="wx-willow-theme"></div>
    <!-- 看板容器 -->
    <div id="root" class="wx-willow-theme"></div>
~~~

- **Willow-Dark 主题**
~~~html {}
    <!-- 看板工具栏 -->
    <div id="toolbar" class="wx-willow-dark-theme"></div>
    <!-- 看板容器 -->
    <div id="root" class="wx-willow-dark-theme"></div>
~~~

或者，您也可以直接从 skins 文件夹中引入所需主题的样式表:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### 默认配置

工具栏默认使用 **Material** 主题。您也可以切换到 **Willow** 或 **Willow-Dark** 主题。

:::tip
若要动态更新主题，请使用 [**setConfig()**](../../methods/toolbar_setconfig_method) 方法。
:::

### 示例

~~~jsx {5,11}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    theme: "willow-dark" // 设置初始主题为 "willow-dark"
    // 其他参数
});
// 创建工具栏
new Toolbar("#toolbar", {
    api: board.api,
    theme: "willow-dark", // 设置初始主题为 "willow-dark"
});
~~~

**更新日志:** 此属性在 v1.4 版本中引入

**相关文档:** [样式化](/guides/stylization)

**相关示例:**
- [看板。使用主题](https://snippet.dhtmlx.com/jnw54xif?tag=kanban)
- [看板。以样式表方式引入主题](https://snippet.dhtmlx.com/k3iw6ti0?tag=kanban)
- [看板。通过 CSS 类切换主题](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)
