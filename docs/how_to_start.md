---
sidebar_label: How to start
title: How to Start
description: You can explore how to start working with DHTMLX Kanban in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# How to start

Here's a straightforward tutorial that walks through setting up a fully working Kanban board on a web page.

![JS Kanban Main](/assets/js_kanban_editor.png)

## Step 1. Including source files

Begin by making an HTML file and naming it *index.html*. Next, add the Kanban source files into this file.

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

Kanban can also be imported into your project using `yarn` or `npm`.

#### Installing trial Kanban via npm or yarn

:::info
For the trial version, download the [**trial Kanban package**](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) and follow the instructions in the *README* file. The trial is available for 30 days.
:::

#### Installing PRO Kanban via npm or yarn

:::info
Access to the DHTMLX private **npm** is available in the [Client's Area](https://dhtmlx.com/clients/), where you can generate your login and password for **npm**. The installation steps are described there as well. Please note, private **npm** access is only available while your proprietary Kanban license is active.
:::

## Step 2. Creating Kanban

With the files included, it's time to add Kanban to the page. Start by adding DIV containers for both the Kanban board and its Toolbar:

- Add two DIV containers in the *index.html* file
- Initialize Kanban and the Toolbar using the **kanban.Kanban** and **kanban.Toolbar** constructors

:::info
The Toolbar is optional in the Kanban interface. If you want only the Kanban board, just use a single DIV and the **kanban.Kanban** constructor.
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

Now you can set up the configuration properties for how Kanban should look and work when it starts.

To get things running, add the initial data for **cards** and **columns** (and *rows* if needed).
Along with the data, it's possible to adjust how [cards](/guides/configuration#cards), the [editor](/guides/configuration#editor), and [toolbar](/guides/configuration#toolbar) will look.

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

That's it-three easy steps and now you have a simple tool for visualizing and managing your workflow. You can start working with your tasks or dive deeper into the JavaScript Kanban features.
