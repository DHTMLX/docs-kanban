---
sidebar_label: theme
title: theme Config
description: You can learn about the theme config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# theme

### Description

@short: Optional. A theme to be applied to Kanban

### Usage

~~~jsx {}
theme?: {
    name: string, // "material" (default) | "willow" | "willow-dark"
    fonts: boolean
};
~~~

:::important
Besides using the `theme` property, you can also apply the needed theme via adding the corresponding *css* classes to the widget containers:

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

or just include the needed theme on the page from the skins folder:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### Parameters

To configure the **theme**, you can use the following parameters.

- `theme` - (optional) an object with theme settings. Here you can specify the following parameters:
    - `name` - (required) a theme name to be applied to Kanban
    - `fonts` - (optional) enables/disables fonts loading from the CDN (wxi font)

:::tip
You can also apply the **Willow** and **Willow-Dark** themes as well. To change the current theme dynamically, you can use the [**setConfig()**](../../methods/js_kanban_setconfig_method) method.
:::

### Default config

By default, Kanban uses the **Material** theme.

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
        name: "willow-dark", // the "willow-dark" theme will be set initially
        fonts: false
    }
    // other parameters
});
~~~

**Change log:** The property was added in v1.4

**Related articles:** [Stylization](../../../guides/stylization)

**Related sample:**
- [Kanban. Using themes](https://snippet.dhtmlx.com/jnw54xif?tag=kanban)
- [Kanban. Including a theme as a stylesheet](https://snippet.dhtmlx.com/k3iw6ti0?tag=kanban)
- [Kanban. Changing a theme via the CSS class](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)