---
sidebar_label: setTheme()
title: setTheme Method
description: You can learn about the setTheme method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setTheme()

### Description

@short: Allows you to change the Kanban theme on the fly (reinitializes the component).

### Usage

~~~jsx {}
setTheme({
    name?: string, // "material" (default) | "willow" | "willow-dark"
    fonts?: boolean
}): void;
~~~

### Parameters

- `name` - (optional) the theme to apply to the Kanban board. There are three themes available:
    - "material" (*default*)
    - "willow"
    - "willow-dark"
- `fonts` - (optional) toggles loading of fonts from the CDN (wxi font).

:::tip
You can set the initial theme using the [`theme`](api/config/js_kanban_theme_config.md) property.
:::

### Example

~~~jsx {6}
// create Kanban
const board = new kanban.Kanban("#root", {
    // initial configuration parameters
});
// apply the "willow" theme
board.setTheme({ name: "willow", font: false });
~~~

**Change log:** This method was introduced in v1.6

**Related articles:** [Stylization](guides/stylization.md)

**Related sample:** [Kanban. Changing a theme via the CSS class](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)