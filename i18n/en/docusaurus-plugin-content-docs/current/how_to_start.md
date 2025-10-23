---
sidebar_label: How to start
title: How to Start
description: You can explore how to start working with DHTMLX Kanban in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# How to start

Here's a straightforward walkthrough for getting a working Kanban board up and running on your page.

import editor from '@site/static/img/js_kanban_editor.png';

<img
    src={editor}
    alt="JS Kanban Main"
    className="img_border"
/>

## Step 1. Including source files

Start by creating an HTML file named *index.html*. After that, add the Kanban source files into your new file.

You'll need two files:

- the Kanban JS file
- the Kanban CSS file

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

### Installing Kanban via npm or yarn

It's easy to add JavaScript Kanban to your project using either `yarn` or `npm`.

#### Installing trial Kanban via npm or yarn

:::info
If you're interested in the trial version, just download the [**trial Kanban package**](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) and follow the steps in the *README* file. Keep in mind, the trial lasts for 30 days.
:::

#### Installing PRO Kanban via npm or yarn

:::info
The DHTMLX private **npm** is available in the [Client's Area](https://dhtmlx.com/clients/), where you can generate your login and password for **npm**. There’s also a detailed installation guide there. Remember, access to the private **npm** is only available while your Kanban license is active.
:::

## Step 2. Creating Kanban

Now it's time to add Kanban to the page. First, set up the DIV containers for Kanban and its Toolbar. Here’s what to do:

- Add two DIV containers to your *index.html* file
- Initialize Kanban and its Toolbar using the **kanban.Kanban** and **kanban.Toolbar** constructors

:::info
The Toolbar is optional. If you want Kanban without a Toolbar, just use a single DIV container and initialize the widget with the **kanban.Kanban** constructor.  
:::

The constructors take the IDs of the HTML containers where Kanban and the Toolbar will go, along with their configuration objects.

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

## Step 3. Configuring Kanban

Now you can set up the configuration properties you want Kanban to use when it starts.

To get going, you'll need to provide some initial data for **cards** and **columns** (and *rows* if needed).
Besides the initial data, you can also tweak the look and feel of [cards](guides/configuration.md#cards), the [editor](guides/configuration.md#editor), and the [toolbar](guides/configuration.md#toolbar).

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

That’s it—just three easy steps and the Kanban board is ready for action. You can start managing your tasks or dive deeper into what JavaScript Kanban has to offer.