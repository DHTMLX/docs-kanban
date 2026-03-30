---
sidebar_label: How to start
title: How to Start
description: You can explore how to start working with DHTMLX Kanban in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# How to start

This guide walks you through adding a working Kanban board to a page. You'll include the source files, create containers, and initialize both the board and its optional Toolbar.

There are two constructors you'll work with: `kanban.Kanban` for the board and `kanban.Toolbar` for the control bar above it. The Toolbar is optional — if you don't need search or sort controls, you can skip it entirely. When you do use it, it needs its own container and a reference to the board's API.

import editor from '@site/static/img/js_kanban_editor.png';

<img
  src={editor}
  alt="JS Kanban Main"
  className="img_border"
/>

## Step 1. Include source files

Create an HTML file and include the two required Kanban files — the JS bundle and the CSS:

~~~html {5-6} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with Kanban</title>
        <script src="./dist/kanban.js"></script>
        <link href="./dist/kanban.css" rel="stylesheet">
    </head>
    <body>
        <script>
        // your code will be here
        </script>
    </body>
</html>
~~~

### Installing via npm or yarn

If you prefer to install through a package manager, you have two options depending on your license:

:::info
**Trial version:** Download the [**trial Kanban package**](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) and follow the steps in the *README*. The trial is valid for 30 days.
:::

:::info
**PRO version:** You can access the DHTMLX private **npm** registry through the [Client's Area](https://dhtmlx.com/clients/). Generate your credentials there. Access requires an active Kanban license.
:::

## Step 2. Add containers

Here we add two containers — one for the board, one for the Toolbar. The order in the HTML matters: the Toolbar container should come first so it renders above the board.

~~~html {1-2} title="index.html"
<div id="toolbar"></div>
<div id="root"></div>
~~~

:::info
The Toolbar is optional. If you don't need it, you only need one container for the board.
:::

## Step 3. Initialize

Here we initialize both constructors. Notice that we pass `board.api` to the Toolbar — that's how it knows which board to control:

~~~jsx {2-4,6-8} title="index.html"
const board = new kanban.Kanban("#root", {
    // configuration properties
});

new kanban.Toolbar("#toolbar", {
    api: board.api
});
~~~

## Step 4. Load data

At minimum, you need to provide `cards` and `columns`. `rows` is optional — you only need it if you want swimlanes:

~~~jsx {2-7,11-18}
const board = new kanban.Kanban("#root", {
    cards,
    columns,
    rows,
    rowKey: "row",
    cardShape,
    editorShape
});

new kanban.Toolbar("#toolbar", {
    api: board.api,
    items: [
        "search",
        "spacer",
        "sort",
        "addColumn",
        "addRow"
    ]
});
~~~

For the full list of configuration options, see:

- [Cards configuration](guides/configuration.md#cards)
- [Editor configuration](guides/configuration.md#editor)
- [Toolbar configuration](guides/configuration.md#toolbar)

## What's next

Now that the board is on the page, you may want to:

- [Load data from a server](guides/working_with_data.md)
- [Customize card appearance](guides/customization.md)
- [Localize the interface](guides/localization.md)
