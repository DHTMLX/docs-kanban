---
sidebar_label: theme
title: theme
description: 探索 DHTMLX JavaScript 看板库中的主题配置选项。查看开发者指南、API 参考、在线演示，并获取 DHTMLX 看板的免费 30 天试用。
---

# 主题

### 描述

@short: 可选。定义应用于看板的主题

### 用法

~~~jsx {}
theme?: {
    name: string, // "material"（默认）| "willow" | "willow-dark"
    fonts?: boolean
};
~~~

:::important
除了设置 `theme` 属性外，还可以通过直接向组件容器添加相应的 *css* 类来应用主题:

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

或者，你也可以通过从 skins 文件夹链接所需主题的样式表来包含该主题:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### 参数

以下是可用于配置 **theme** 的参数:

- `theme` - （可选）包含主题设置的对象，支持:
    - `name` - （必需）要应用于看板的主题名称
    - `fonts` - （可选）控制是否从 CDN 加载字体（wxi 字体）

:::tip
**Willow** 和 **Willow-Dark** 主题也可用。要动态切换主题，可以使用 [`setTheme()`](../../methods/js_kanban_settheme_method) 方法。
:::

### 默认配置

看板默认使用 **Material** 主题。

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

**更新日志:** 该属性从 v1.4 版本引入

**相关文档:** [样式定制](/guides/stylization)

**相关示例:**
- [看板。使用主题](https://snippet.dhtmlx.com/jnw54xif?tag=kanban)
- [看板。以样式表形式引入主题](https://snippet.dhtmlx.com/k3iw6ti0?tag=kanban)
- [看板。通过 CSS 类切换主题](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)
