---
sidebar_label: How to start
title: How to Start
description: You can explore how to start working with DHTMLX Kanban in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# How to start

This clear and comprehensive tutorial will guide your through the steps you need to take in order to get a full-functional Kanban on a page.

![JS Kanban Main](assets/js_kanban_editor.png)

## Step 1. Including source files

Start from creating an HTML file and call it *index.html*. Then proceed to include Kanban source files into the created file.

There are two necessary files:

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

### Installing Kanban via Npm and Yarn

You can import JavaScript Kanban into your project using `yarn` or `npm` package manager.

#### Installing trial Kanban via Npm and Yarn

:::info
If you want to use trial version of Kanban, download the [**trial Kanban package**](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) and follow steps mentioned in the *README* file. Note that trial Kanban is available 30 days only.
:::

#### Installing PRO Kanban via Npm and Yarn

:::info
If you have already own Kanban under the proprietary license, send your **license number** on the *contact@dhtmlx.com* email to receive *login* and *password* for private **npm** as well as detailed guide on how to install Kanban. Note that private **npm** is available before the expiration of the proprietary Kanban license.
:::

## Step 2. Creating Kanban

Now you are ready to add Kanban to the page. First, let's create the DIV containers for Kanban and its Toolbar. So, take the following steps:

- specify two DIV containers in the *index.html* file
- initialize Kanban and its Toolbar using the **kanban.Kanban** and **kanban.Toolbar** constructors

:::info
The Toolbar is an optional part of the Kanban interface. To create Kanban without Toolbar, you can specify only one DIV container and initialize the widget via the **kanban.Kanban** constructor  
:::

As parameters, constructors take the IDs of HTML containers where the Kanban and Toolbar will be placed into, as well as corresponding configuration objects.

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

Next you can specify configuration properties you want the Kanban component to have when initialized.

To start working with Kanban, first you need to provide the initial data for **cards** and **columns** (and *rows*).
Beside the initial data, you can configure the [cards](../guides/configuration#cards), [editor](../guides/configuration#editor) and [toolbar](../guides/configuration#toolbar) appearance.

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

That's all. Just three simple steps and you have a handy tool for visualizing and managing the workflow. Now you can start working with your tasks or keep exploring the inner world of JavaScript Kanban.
