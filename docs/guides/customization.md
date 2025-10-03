---
sidebar_label: Customization
title: Customization
description: You can learn about the customization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Customization

Besides configuring Kanban, you can customize its appearance and behaviour. The widget allows you to specify a custom template for cards, modify a context menu for cards, columns and rows, change the Toolbar structure and functionality, and apply custom css styles to Kanban.

## Custom cards

To display cards by a custom template, you can use the [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) property. It is a callback function that allows you to define the desired styles and logic and apply it to Kanban. See the snippet below:

<iframe src="https://snippet.dhtmlx.com/8rhdq81d?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Custom context menu

To customize a context menu for cards, columns and rows, you can use the corresponding [`cardShape`](api/config/js_kanban_cardshape_config.md), [`columnShape`](api/config/js_kanban_columnshape_config.md) and [`rowShape`](api/config/js_kanban_rowshape_config.md) properties. See the snippet below:

<iframe src="https://snippet.dhtmlx.com/8eo65gr5?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Custom toolbar

To customize the Toolbar structure and its functionality, you can use the [`items`](api/config/toolbar_items_config.md) property. In the array of this config you can define controls you need, arrange them in the desired order as well as modify their behaviour.

In the snippet below you can see how to customize the following:

- an order of controls arrangement
- a searchbar and its behaviour
- a sort control and its behaviour
- a custom control and its behaviour  

<iframe src="https://snippet.dhtmlx.com/s5r5h4ju?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Custom styles

You can customize the appearance of Kanban by changing values of the corresponding *CSS variables*. Refer to the [**Stylization**](../stylization) section for details.

In this snippet you can see how to apply custom styles to Kanban:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=html&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
