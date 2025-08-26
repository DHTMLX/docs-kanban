---
sidebar_label: theme
title: theme Config
description: Explore the theme configuration options in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, live demos, and get a free 30-day trial of DHTMLX Kanban.
---

# theme

### Description

@short: Optional. Defines a theme to apply to the Kanban board

### Usage

~~~jsx {}
theme?: {
    name: string, // "material" (default) | "willow" | "willow-dark"
    fonts?: boolean
};
~~~

:::important
Besides setting the `theme` property, it's also possible to apply a theme by adding the appropriate *css* classes directly to the widget containers:

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

Alternatively, you can include the desired theme by linking its stylesheet from the skins folder:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### Parameters

Here are the parameters you can use to configure the **theme**:

- `theme` - (optional) an object holding theme settings. It supports:
    - `name` - (required) the name of the theme to apply to the Kanban
    - `fonts` - (optional) controls whether fonts are loaded from the CDN (wxi font)

:::tip
The **Willow** and **Willow-Dark** themes are also available. To switch themes dynamically, the [`setTheme()`](/api/methods/js_kanban_settheme_method) method can be used.
:::

### Default config

The Kanban board defaults to the **Material** theme.

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
        name: "willow-dark", // sets the "willow-dark" theme initially
        fonts: false
    }
    // other parameters
});
~~~

**Change log:** This property was introduced in v1.4

**Related articles:** [Stylization](/guides/stylization)

**Related sample:**
- [Kanban. Using themes](https://snippet.dhtmlx.com/jnw54xif?tag=kanban)
- [Kanban. Including a theme as a stylesheet](https://snippet.dhtmlx.com/k3iw6ti0?tag=kanban)
- [Kanban. Changing a theme via the CSS class](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)
