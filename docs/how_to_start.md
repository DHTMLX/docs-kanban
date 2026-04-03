---
sidebar_label: How to start
title: How to Start
description: You can explore how to start working with DHTMLX Kanban in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# How to start

This guide covers the steps to get Kanban running on a page.

import editor from '@site/static/img/js_kanban_editor.png';

<img
  src={editor}
  alt="JS Kanban Main"
  className="img_border"
/>

## Step 1. Include source files

Create an HTML file named *index.html*, then include the Kanban source files:

- the JS file of Kanban
- the CSS file of Kanban

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

### Install Kanban via npm or yarn

You can import JavaScript Kanban into your project using `yarn` or `npm` package manager.

#### Install trial Kanban via npm or yarn

:::info
If you want to use trial version of Kanban, download the [**trial Kanban package**](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) and follow steps mentioned in the *README* file. Note that trial Kanban is available 30 days only.
:::

#### Install PRO Kanban via npm or yarn

:::info
You can access the DHTMLX private **npm** directly in the [Client's Area](https://dhtmlx.com/clients/) by generating your login and password for **npm**. A detailed installation guide is also available there. Please note that access to the private **npm** is available only while your proprietary Kanban license is active.
:::

## Step 2. Create Kanban

Add two DIV containers to *index.html* and initialize the constructors:

- specify two DIV containers in the *index.html* file
- initialize Kanban and its Toolbar using the **kanban.Kanban** and **kanban.Toolbar** constructors

:::info
The Toolbar is an optional part of the Kanban interface. To create Kanban without Toolbar, you can specify only one DIV container and initialize the widget via the **kanban.Kanban** constructor
:::

Each constructor takes the ID of its HTML container and a configuration object:

~~~html {9-10,13-15,17-19} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with Kanban</title>
        <script src="./dist/kanban.js"></script>   
        <link href="./dist/kanban.css" rel="stylesheet">  
    </head>
    <body>
        <div id="toolbar"></div>
        <div id="root"></div>

        <script>
            const board = new kanban.Kanban("#root", {
                // configuration properties
            });

            new kanban.Toolbar("#toolbar", {
                // configuration properties
            });
        </script>
    </body>
</html>
~~~

## Step 3. Configure Kanban

Pass configuration properties to the constructors. At minimum, provide initial data for **cards** and **columns** (and *rows*). You can also configure the [cards](guides/configuration.md#cards), [editor](guides/configuration.md#editor), and [toolbar](guides/configuration.md#toolbar) appearance:

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

## What's next

That's all — three steps and Kanban is running on your page. Now you can start working with your tasks or explore the [Configuration](guides/configuration.md) guide to customize the board further.
