---
sidebar_label: theme
title: theme Config
description: Explore the theme configuration options in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# theme

### Description

@short: Optional. Sets a theme for the Kanban component.

### Usage

~~~jsx {}
theme?: {
    name: string, // "material" (default) | "willow" | "willow-dark"
    fonts?: boolean
};
~~~

:::important
In addition to using the `theme` property, themes can be applied by adding the appropriate *css* classes to the widget containers:

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

Alternatively, you can include the desired theme directly on the page from the skins folder:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### Parameters

The **theme** configuration accepts the following parameters:

- `theme` - (optional) an object containing theme settings:
    - `name` - (required) specifies the theme name to apply to Kanban
    - `fonts` - (optional) controls whether fonts are loaded from the CDN (wxi font)

:::tip
The **Willow** and **Willow-Dark** themes are also available. To switch themes dynamically, use the [`setTheme()`](api/methods/js_kanban_settheme_method.md) method.
:::

### Default config

By default, the Kanban uses the **Material** theme.

~~~jsx {}
theme: {
    name: "material",
    fonts: true
}
~~~

### Example

~~~jsx {5-8}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    theme: {
        name: "willow-dark", // sets the initial theme to "willow-dark"
        fonts: false
    }
    // other parameters
});
~~~

**Change log:** This property was introduced in v1.4

**Related articles:** [Stylization](guides/stylization.md)

**Related sample:** [Kanban. Changing a theme via the CSS class](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)