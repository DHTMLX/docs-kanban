---
sidebar_label: theme
title: theme Config
description: Here’s an overview of the (Toolbar) theme configuration in the DHTMLX JavaScript Kanban library documentation. Explore developer guides, API references, try code examples, check out live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# theme

### Description

@short: Optional. Specifies a theme to apply to the Toolbar.

### Usage

~~~jsx {}
theme?: string; // "material" | "willow" | "willow-dark"
~~~

:::important
In addition to setting the `theme` property, you can also apply the desired theme by adding the corresponding *css* classes directly to the widget containers:

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

Alternatively, you can include the required theme stylesheet from the skins folder:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### Default config

By default, the Toolbar uses the **Material** theme. You can switch to the **Willow** or **Willow-Dark** themes as needed.

:::tip
To update the theme on the fly, you can use the [**setConfig()**](api/methods/toolbar_setconfig_method.md) method.
:::

### Example

~~~jsx {5,11}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    theme: "willow-dark" // initially applies the "willow-dark" theme
    // other parameters
});
// create Toolbar
new Toolbar("#toolbar", {
    api: board.api,
    theme: "willow-dark", // initially applies the "willow-dark" theme
});
~~~

**Change log:** This property was introduced in v1.4

**Related articles:** [Stylization](guides/stylization.md)

**Related sample:** [Kanban. Changing a theme via the CSS class](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)