---
sidebar_label: 主题
title: 主题配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解（工具栏）主题配置。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# 主题

### 描述

@short: 可选。应用于工具栏的主题

### 用法

~~~jsx {}
theme?: string; // "material" | "willow" | "willow-dark"
~~~

:::important
除了使用 `theme` 属性，您还可以通过向控件容器添加相应的 *css* 类来应用所需的主题：

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

或者直接从 skins 文件夹在页面中引入所需主题：

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### 默认配置

默认情况下，工具栏使用 **Material** 主题。您也可以设置为 **Willow** 和 **Willow-Dark** 主题。

:::tip
要动态更改当前主题，可以使用 [**setConfig()**](api/methods/toolbar_setconfig_method.md) 方法。
:::

### 示例

~~~jsx {5,11}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    theme: "willow-dark" // 初始设置为 "willow-dark" 主题
    // 其他参数
});
// 创建工具栏
new Toolbar("#toolbar", {
    api: board.api,
    theme: "willow-dark", // 初始设置为 "willow-dark" 主题
});
~~~

**更新日志：** 该属性在 v1.4 版本中添加

**相关文档：** [样式化](guides/stylization.md)

**相关示例：** [看板。通过 CSS 类更改主题](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)