---
sidebar_label: 主题
title: 主题配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解主题配置。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天评估版本 DHTMLX 看板。
---

# 主题

### 描述

@short: 可选。应用于看板的主题

### 用法

~~~jsx {}
theme?: {
    name: string, // "material"（默认）| "willow" | "willow-dark"
    fonts?: boolean
};
~~~

:::important
除了使用 `theme` 属性外，您还可以通过向控件容器添加相应的 *css* 类来应用所需的主题：

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

或者直接从 skins 文件夹在页面中引入所需的主题：

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### 参数

要配置 **theme**，您可以使用以下参数。

- `theme` - （可选）包含主题设置的对象。您可以指定以下参数：
    - `name` - （必需）要应用于看板的主题名称
    - `fonts` - （可选）启用或禁用从 CDN 加载字体（wxi 字体）

:::tip
您也可以应用 **Willow** 和 **Willow-Dark** 主题。要动态更改当前主题，可以使用 [`setTheme()`](api/methods/js_kanban_settheme_method.md) 方法。
:::

### 默认配置

默认情况下，看板使用 **Material** 主题。

~~~jsx {}
theme: {
    name: "material",
    fonts: true
}
~~~

### 示例

~~~jsx {5-8}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    theme: {
        name: "willow-dark", // 初始设置为 "willow-dark" 主题
        fonts: false
    }
    // 其他参数
});
~~~

**更新日志：** 此属性在 v1.4 版本中添加

**相关文档：** [样式设置](guides/stylization.md)

**相关示例：** [通过 CSS 类更改看板主题](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)