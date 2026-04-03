---
sidebar_label: Initialization
title: Initialization
description: You can learn about the initialization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Initialization

There are two constructors: `kanban.Kanban` for the board itself, and `kanban.Toolbar` for the control bar above it. Both take the same two arguments: a container ID and a configuration object. The Toolbar is optional — and it needs a reference to the board's `api` to know which board it controls.

Steps:

1. [Include source files](#including-source-files)
2. [Add containers](#creating-container)
3. [Initialize](#initializing-kanban)

## Including source files

[Download the package](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) and unpack it into your project folder.

You need two files:

- *kanban.js*
- *kanban.css*

~~~html title="index.html"
<script type="text/javascript" src="./dist/kanban.js"></script>
<link rel="stylesheet" href="./dist/kanban.css">
~~~

Check that the paths point to the right location in your `dist` folder.

## Creating container

Add a `div` for the board:

~~~html title="index.html"
<div id="root"></div>
~~~

If you're using the Toolbar, it needs its own container — it renders outside the board:

~~~html title="index.html"
<div id="toolbar"></div>
<div id="root"></div>
~~~

## Initializing Kanban

Pass the container ID and a configuration object to `kanban.Kanban`:

~~~jsx title="index.html"
new kanban.Kanban("#root", {
    // configuration properties
});
~~~

To add the Toolbar, initialize it separately and pass `board.api` so it can communicate with the board:

~~~jsx {6-8} title="index.html"
const board = new kanban.Kanban("#root", {
    // configuration properties
});

new kanban.Toolbar("#toolbar", {
    api: board.api
});
~~~

For the full list of configuration properties:

- [Kanban properties](api/overview/properties_overview.md)
- [Toolbar properties](api/overview/toolbar_properties_overview.md)
- [Toolbar configuration](guides/configuration.md#toolbar)

## Example

<iframe src="https://snippet.dhtmlx.com/gb50vyip?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
