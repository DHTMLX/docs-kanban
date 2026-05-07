---
sidebar_label: Initialization
title: Initialization
description: You can learn about the initialization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Initialization

This guide walks through the steps to create a ready-to-use Kanban widget on a page:

1. [Include the Kanban source files on a page](#include-source-files).
2. [Create a container for Kanban](#create-a-container).
3. [Initialize Kanban with a constructor](#initialize-kanban).

## Include source files

[Download the package](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) and unpack it into a folder of your project.

Include the following source files on your page:

- *kanban.js*
- *kanban.css*

Set correct relative paths to both files:

~~~html title="index.html"
<script type="text/javascript" src="./dist/kanban.js"></script>  
<link rel="stylesheet" href="./dist/kanban.css">
~~~

## Create a container

Add a container for Kanban and assign an ID, for example `root`:

~~~jsx title="index.html"
<div id="root"></div>
~~~

To create the widget with a Toolbar, add a separate container for the Toolbar:

~~~jsx {1} title="index.html"
<div id="toolbar"></div> // container for Toolbar
<div id="root"></div> // container for Kanban
~~~

## Initialize Kanban

Initialize Kanban with the `kanban.Kanban` constructor. The constructor takes two parameters:

- an HTML container ID
- a configuration object (see the [full list of properties](#configuration-properties))

The following code snippet creates a Kanban instance:

~~~jsx title="index.html"
// create Kanban
new kanban.Kanban("#root", {
    // configuration properties
});
~~~

To create the widget with a Toolbar, initialize the Toolbar separately with the `kanban.Toolbar` constructor. The Toolbar controls operate on the Kanban instance through the [`api`](api/config/toolbar_api_config.md) parameter. Pass `board.api` to bind the Toolbar to the board:

~~~jsx {7} title="index.html"
// create Kanban
const board = new kanban.Kanban("#root", {
    // configuration properties
});

new kanban.Toolbar("#toolbar", {
    api: board.api, // required: links Toolbar controls to the Kanban instance
    // other configuration properties
});
~~~

:::info
For details on configuring the Toolbar, read the [Configuration](guides/configuration.md#toolbar) section.
:::

### Configuration properties

For the complete reference of configuration properties, see:

- [Kanban properties overview](api/overview/properties_overview.md) — all Kanban configuration properties
- [Toolbar properties overview](api/overview/toolbar_properties_overview.md) — all Toolbar configuration properties

## Example

The following snippet initializes Kanban with sample data:

<iframe src="https://snippet.dhtmlx.com/gb50vyip?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
