---
sidebar_label: theme
title: theme Config
description: Explore the (Toolbar) theme config within the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code samples and live demos, and download a free 30-day trial version of DHTMLX Kanban.
---

# theme

### Description

@short: Optional. Specifies the theme applied to the Toolbar.

### Usage

~~~jsx {}
theme?: string; // "material" | "willow" | "willow-dark"
~~~

:::important
In addition to setting the `theme` property, you can apply the desired theme by adding the corresponding *css* classes to the widget containers:

- **Material theme**
~~~html {}
    <!-- Kanban toolbar -->
    <div id="toolbar" class="wx-material-theme"></div>
    <!-- Kanban container -->
    <div id="root" class="wx-material-theme"></div>
~~~

- **Willow theme**
~~~html {}
    <!-- Kanban toolbar -->
    <div id="toolbar" class="wx-willow-theme"></div>
    <!-- Kanban container -->
    <div id="root" class="wx-willow-theme"></div>
~~~

- **Willow-Dark theme**
~~~html {}
    <!-- Kanban toolbar -->
    <div id="toolbar" class="wx-willow-dark-theme"></div>
    <!-- Kanban container -->
    <div id="root" class="wx-willow-dark-theme"></div>
~~~

Alternatively, simply include the desired theme stylesheet from the skins folder:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### Default config

The Toolbar defaults to the **Material** theme. You can also switch to the **Willow** or **Willow-Dark** themes.

:::tip
To update the theme on the fly, use the [**setConfig()**](../../methods/toolbar_setconfig_method) method.
:::

### Example

~~~jsx {5,11}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    theme: "willow-dark" // sets the initial theme to "willow-dark"
    // other parameters
});
// create Toolbar
new Toolbar("#toolbar", {
    api: board.api,
    theme: "willow-dark", // sets the initial theme to "willow-dark"
});
~~~

**Change log:** This property was introduced in v1.4

**Related articles:** [Stylization](/guides/stylization)

**Related sample:**
- [Kanban. Using themes](https://snippet.dhtmlx.com/jnw54xif?tag=kanban)
- [Kanban. Including a theme as a stylesheet](https://snippet.dhtmlx.com/k3iw6ti0?tag=kanban)
- [Kanban. Changing a theme via the CSS class](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)
