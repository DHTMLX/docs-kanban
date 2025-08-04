---
sidebar_label: setTheme()
title: setTheme Method
description: Learn about the setTheme method in the DHTMLX JavaScript Kanban library documentation. Explore developer guides and API references, experiment with code examples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# setTheme()

### Description

@short: Dynamically applies a new theme to the Kanban board (reinitializing it).

### Usage

~~~jsx {}
setTheme({
    name?: string, // "material" (default) | "willow" | "willow-dark"
    fonts?: boolean
}): void;
~~~

### Parameters

- `name` - (optional) specifies the theme to apply to the Kanban board. The available options are:
  - "material" (*default*)
  - "willow"
  - "willow-dark"
- `fonts` - (optional) controls whether fonts are loaded from the CDN (wxi font).

:::tip
You can set the initial theme using the [`theme`](/api/config/js_kanban_theme_config) property.
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

**Related articles:** [Stylization](/guides/stylization)

**Related sample:** [Kanban. Changing a theme via the CSS class](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)
