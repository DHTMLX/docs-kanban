---
sidebar_label: Customization
title: Customization
description: You can learn about the customization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Customization

Along with configuration options, Kanban gives plenty of ways to tweak how it looks and acts. It's possible to set up a custom template for cards, adjust the context menu for cards, columns, and rows, change up the Toolbar's layout and features, and use your own CSS styles to give Kanban a unique appearance.

## Custom cards

For displaying cards with a custom look, the [`cardTemplate`](/api/config/js_kanban_cardtemplate_config.md) property comes in handy. This property lets you use a callback function for adding your own styles and logic to Kanban. Check out the snippet below to see how it works:

<iframe src="https://snippet.dhtmlx.com/8rhdq81d?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Custom context menu

If you want to change the context menu for cards, columns, or rows, you can use the [`cardShape`](/api/config/js_kanban_cardshape_config.md), [`columnShape`](/api/config/js_kanban_columnshape_config.md), and [`rowShape`](/api/config/js_kanban_rowshape_config.md) properties. The example below shows how to set these up:

<iframe src="https://snippet.dhtmlx.com/8eo65gr5?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Custom toolbar

The Toolbar can be adjusted as needed by using the [`items`](/api/config/toolbar_items_config.md) property. Inside its array, add the controls you want, put them in any order, and update how they work to fit your needs.

Take a look at the snippet below to see how to customize things like:

- the order of controls
- the searchbar and how it works
- the sort control and its behavior
- a custom control and what it does

<iframe src="https://snippet.dhtmlx.com/s5r5h4ju?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Custom styles

If you want to change how Kanban looks, try adjusting the relevant *CSS variables*. For more details, check out the [**Stylization**](../stylization) section.

The snippet here shows how custom styles can be applied to Kanban:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=html&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
