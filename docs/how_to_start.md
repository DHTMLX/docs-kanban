---
sidebar_label: How to start
title: How to Start
description: You can explore how to start working with DHTMLX Kanban in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
metaTitle: "DHTMLX JavaScript Kanban — How to Start"
metaDescription: "A step-by-step guide to adding DHTMLX JavaScript Kanban to your application: include the library, initialize the board, and load your first data."
---

# How to start

This page describes how to start with DHTMLX Kanban in your application.

import editor from '@site/static/img/js_kanban_editor.png';

<img
  src={editor}
  alt="JS Kanban Main"
  className="img_border"
/>

## Step 1. Include source files

Create an *index.html* file. Add the Kanban JS and CSS files to the `<head>` section:

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

### Install via npm or yarn

You can also import Kanban into your project using `npm` or `yarn`.

#### Trial version

:::info
If you want to use the trial version of Kanban, download the [**trial Kanban package**](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) and follow the steps in the *README* file. Note that the trial version is available for 30 days only.
:::

#### PRO version

:::info
You can access the DHTMLX private **npm** registry in the [Client's Area](https://dhtmlx.com/clients/) by generating your login and password. A detailed installation guide is available there. Access to the private **npm** is available only while your proprietary Kanban license is active.
:::

## Step 2. Create Kanban

To add Kanban to the page, take the following steps:

- specify two DIV containers in the *index.html* file
- initialize Kanban and its Toolbar using the **kanban.Kanban** and **kanban.Toolbar** constructors

:::info
The Toolbar is an optional part of the Kanban interface. To create Kanban without the Toolbar, specify only one DIV container and initialize the widget via the **kanban.Kanban** constructor only.
:::

Each constructor takes the container ID and a configuration object as parameters:

~~~html {9-10,13-19} title="index.html"
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
                api: board.api
            });
        </script>
    </body>
</html>
~~~

## Step 3. Configure Kanban

To start working with Kanban, provide data for **cards** and **columns** (and *rows*). You can also configure the [cards](guides/configuration.md#cards), [editor](guides/configuration.md#editor), and [toolbar](guides/configuration.md#toolbar) appearance:

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

That's all. Your Kanban board is ready. Explore the guides below to customize and extend it.

- [Configuration](guides/configuration.md) — configure card fields, editor, and toolbar
- [Working with data](guides/working_with_data.md) — load, update, and manage board data at runtime
- [Customization](guides/customization.md) — customize card templates and visual appearance
- [Localization](guides/localization.md) — apply a locale to the interface
