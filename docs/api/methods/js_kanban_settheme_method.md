---
sidebar_label: setTheme()
title: setTheme Method
description: You can learn about the setTheme method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setTheme()

### Description

@short: Applies a new theme to Kanban dynamically (with reinitialization)

### Usage

~~~jsx {}
setTheme(theme?: string): void;
~~~

### Parameters

- `theme` - (optional) a theme to be applied to Kanban. There are 3 available themes:
    - "material" (*default*)
    - "willow"
    - "willow-dark"

:::tip
To specify the initial theme, you can use the [**setTheme()**](../../config/js_kanban_theme_config) property.
:::

### Example

~~~jsx {6}
// create Kanban
const board = new eventCalendar.EventCalendar("#root", {
    // initial configuration parameters
});
// set the "willow" theme
board.setTheme( "willow" );
~~~

**Change log:** The method was added in v2.0

**Related articles:** [Stylization](../../../guides/stylization)

**Related sample:**
- [Kanban. Using themes](https://snippet.dhtmlx.com/jnw54xif?tag=kanban)
- [Kanban. Including a theme as a stylesheet](https://snippet.dhtmlx.com/k3iw6ti0?tag=kanban)
- [Kanban. Changing a theme via the CSS class](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)