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
theme?: string; // "material" | "willow" | "willow-dark"
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
:::

### Default config

By default, Kanban uses the **Material** theme. You can set it to the **Willow** and **Willow-Dark** themes as well.

:::tip
To change the current theme dynamically, you can use the [**setConfig()**](../../methods/js_kanban_setconfig_method) method.
:::

### Example

~~~jsx {5}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards,
	theme: "willow-dark" // the "willow-dark" theme will be set initially
	// other parameters
});
~~~

**Related articles:** [Stylization](../../../guides/stylization)

**Related sample:** [Kanban. Changing a theme via the CSS class](https://snippet.dhtmlx.com/7qzp561m)