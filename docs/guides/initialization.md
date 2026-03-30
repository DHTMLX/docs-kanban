---
sidebar_label: Initialization
title: Initialization
description: You can learn about the initialization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Initialization

This guide covers what you need to get Kanban on a page. You'll include two source files, create one or two containers, and call the constructors.

There are two constructors: `kanban.Kanban` for the board and `kanban.Toolbar` for the control bar. Both take the same two arguments — a container ID and a configuration object. The Toolbar is optional, but if you use it, it needs its own container and a reference to the board's API so it knows which board to control.

Steps:

1. [Include source files](#including-source-files)
2. [Add containers](#creating-container)
3. [Initialize](#initializing-kanban)

## Including source files

[Download the package](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) and unpack it into your project folder.

You need two files:

- *kanban.js*
- *kanban.css*

Here we add them to the page:

~~~html title="index.html"
<script type="text/javascript" src="./dist/kanban.js"></script>
<link rel="stylesheet" href="./dist/kanban.css">
~~~

Make sure the paths point to the correct location in your `dist` folder.

## Creating container

Add a `div` for the board and give it an ID:

~~~html title="index.html"
<div id="root"></div>
~~~

If you're using the Toolbar, it needs its own container — the Toolbar renders outside the board, not inside it:

~~~html title="index.html"
<div id="toolbar"></div>
<div id="root"></div>
~~~

## Initializing Kanban

Here we initialize the board by passing the container ID and a configuration object to `kanban.Kanban`:

~~~jsx title="index.html"
new kanban.Kanban("#root", {
    // configuration properties
});
~~~

If you're using the Toolbar, initialize it separately and pass `board.api` to connect it to the board:

~~~jsx {6-8} title="index.html"
const board = new kanban.Kanban("#root", {
    // configuration properties
});

new kanban.Toolbar("#toolbar", {
    api: board.api
});
~~~

:::info
To learn more about configuring the Toolbar, see the [**Configuration**](guides/configuration.md/#toolbar) section.
:::

For the full list of configuration properties:

- [Kanban properties](api/overview/properties_overview.md)
- [Toolbar properties](api/overview/toolbar_properties_overview.md)

## Example

<iframe src="https://snippet.dhtmlx.com/gb50vyip?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
