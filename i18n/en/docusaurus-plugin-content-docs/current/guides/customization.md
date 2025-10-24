---
sidebar_label: Customization
title: Customization
description: You can learn about the customization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Customization

Along with configuring Kanban, there are plenty of ways to tweak how it looks and works. You can set up a custom card template, adjust the context menu for cards, columns, and rows, change up the Toolbar’s layout and actions, and use your own CSS styles to give Kanban a personal touch.

## Custom cards

If you want your cards to look a certain way, the [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) property comes in handy. This callback function lets you define your own styles and logic for displaying cards in Kanban. Here’s a quick example:

<iframe src="https://snippet.dhtmlx.com/8rhdq81d?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Custom context menu

For those times when you want to change up the context menu for cards, columns, or rows, you’ll want to use the [`cardShape`](api/config/js_kanban_cardshape_config.md), [`columnShape`](api/config/js_kanban_columnshape_config.md), and [`rowShape`](api/config/js_kanban_rowshape_config.md) properties. Here’s how you can do it:

<iframe src="https://snippet.dhtmlx.com/8eo65gr5?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Custom toolbar

To switch up the Toolbar’s layout and what it can do, the [`items`](api/config/toolbar_items_config.md) property is the one to use. You can list out the controls you want in the array, put them in any order, and change how each one works.

Check out the snippet below to see how to:

- rearrange the controls
- set up the searchbar and adjust how it works
- tweak the sort control and its behavior
- add a custom control and set up what it does

<iframe src="https://snippet.dhtmlx.com/s5r5h4ju?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Custom styles

If you’d like to change how Kanban looks, you can do that by updating the relevant *CSS variables*. For more details, take a look at the [**Stylization**](guides/stylization.md) section.

Here’s a snippet showing how to apply your own styles to Kanban:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=html&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>