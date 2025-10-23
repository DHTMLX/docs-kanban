---
sidebar_label: Initialization
title: Initialization
description: You can learn about the initialization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Initialization

This guide walks through the process of adding a Kanban board to a web page, so you can easily bring Kanban functionality into your app. Here’s how to get everything set up and ready to use:

1. [Include the Kanban source files on a page](#including-source-files).
2. [Create a container for Kanban](#creating-container).
3. [Initialize Kanban with a constructor](#initializing-kanban).

## Including source files

First, [download the package](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) and unzip it somewhere in your project folder.

To get Kanban working, just include these two files in your HTML:

- *kanban.js*
- *kanban.css*

Be sure the paths to the files are correct for your project:

~~~html title="index.html"
<script type="text/javascript" src="./dist/kanban.js"></script>  
<link rel="stylesheet" href="./dist/kanban.css">
~~~

## Creating container

Set up a container for Kanban in your HTML and give it an ID, like *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

If you want to add a *Toolbar* along with the Kanban board, set up a separate container for it as well:

~~~jsx {1} title="index.html"
<div id="toolbar"></div> // container for Toolbar
<div id="root"></div> // container for Kanban
~~~

## Initializing Kanban

To get Kanban up and running, use the **kanban.Kanban** constructor. It needs two things:

- the HTML container (just pass the container’s ID)
- an object with configuration options. [Check out the full list here](#configuration-properties)

~~~jsx title="index.html"
// create Kanban
new kanban.Kanban("#root", {
    // configuration properties
});
~~~

If you’re adding a *Toolbar* too, it gets initialized separately with the **kanban.Toolbar** constructor. The setup is similar:

- the HTML container (the ID)
- an object with configuration options

~~~jsx {6-8} title="index.html"
// create Kanban
const board = new kanban.Kanban("#root", {
    // configuration properties
});

new kanban.Toolbar("#toolbar", {
    // configuration properties
});
~~~

:::info
For more details on setting up the Kanban Toolbar, check out the [**Configuration**](guides/configuration.md/#toolbar) section.
:::

### Configuration properties

:::note
A complete list of configuration options for **Kanban** is available [**here**](api/overview/properties_overview.md). <br/> 
You’ll find all the Toolbar configuration options [**here**](api/overview/toolbar_properties_overview.md).
:::

## Example

Here’s a quick example showing how to set up **Kanban** with some starter data:

<iframe src="https://snippet.dhtmlx.com/gb50vyip?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>