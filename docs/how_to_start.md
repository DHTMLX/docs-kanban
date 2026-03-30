---
sidebar_label: How to start
title: How to Start
description: You can explore how to start working with DHTMLX Kanban in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# How to start

This guide covers the minimum setup to get a working Kanban board on a page.

There are two constructors: `kanban.Kanban` for the board, and `kanban.Toolbar` for the toolbar above it. Each needs its own container. The Toolbar is optional — if you don't need search and sorting controls, skip it entirely.

import editor from '@site/static/img/js_kanban_editor.png';

<img
  src={editor}
  alt="JS Kanban Main"
  className="img_border"
/>

## Step 1. Include source files

You need two files: the JS bundle and the CSS.

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

:::info
**Trial version:** Download the [**trial Kanban package**](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) and follow the *README*. Valid for 30 days.
:::

:::info
**PRO version:** Log into the [Client's Area](https://dhtmlx.com/clients/) to generate credentials for the DHTMLX private **npm** registry. Access requires an active license.
:::

## Step 2. Add containers

Add a container for the board, and a second one for the Toolbar if you're using it:

~~~html {1-2} title="index.html"
<div id="toolbar"></div>
<div id="root"></div>
~~~

## Step 3. Initialize

Pass the container ID and a configuration object to each constructor. The Toolbar needs a reference to the board's API — that's how it knows which board to control.

~~~jsx {2-4,6-8} title="index.html"
const board = new kanban.Kanban("#root", {
    // configuration properties
});

new kanban.Toolbar("#toolbar", {
    api: board.api
});
~~~

## Step 4. Load data

At minimum, provide `cards` and `columns`. `rows` is optional.

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

- [Load data from a server](guides/working_with_data.md)
- [Customize card appearance](guides/customization.md)
- [Localize the interface](guides/localization.md)
