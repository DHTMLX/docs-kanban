---
sidebar_label: Initialization
title: Initialization
description: You can learn about the initialization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Initialization

This guide will give you detailed instructions on how to create Kanban on a page to enrich your application with features of the Kanban board. Take the following steps to get a ready-to-use component:

1. [Include the Kanban source files on a page](#including-source-files).
2. [Create a container for Kanban](#creating-container).
3. [Initialize Kanban with a constructor](#initializing-kanban).

## Including source files

[Download the package](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) and unpack it into a folder of your project.

To create Kanban, you need to include 2 source files on your page:

- *kanban.js*
- *kanban.css*

Make sure that you set correct relative paths to the source files:

~~~html title="index.html"
<script type="text/javascript" src="./dist/kanban.js"></script>  
<link rel="stylesheet" href="./dist/kanban.css">
~~~

## Creating container

Add a container for Kanban and give it an ID, for example *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

If you want to create the widget along with its *Toolbar*, you need to add a separate container for it:

~~~jsx {1} title="index.html"
<div id="toolbar"></div> // container for Toolbar
<div id="root"></div> // container for Kanban
~~~

## Initializing Kanban

Initialize Kanban with the **kanban.Kanban** constructor. It takes two parameters:

- an HTML container (the ID of the HTML container)
- an object with configuration properties. [See the full list here](#configuration-properties)

~~~jsx title="index.html"
// create Kanban
new kanban.Kanban("#root", {
    // configuration properties
});
~~~

If you want to create the widget along with its *Toolbar*, you need to initialize it separately using the **kanban.Toolbar** constructor. It also takes two parameters:

- an HTML container (the ID of the HTML container)
- an object with configuration properties

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
To learn more about configuring the Toolbar of Kanban, read the [**Configuration**](guides/configuration.md/#toolbar) section
:::

### Configuration properties

:::note
The full list of properties to configure **Kanban** can be found [**here**](api/overview/properties_overview.md). <br> 
The full list of properties to configure **Toolbar of Kanban** can be found [**here**](api/overview/toolbar_properties_overview.md).
:::

## Example

In this snippet you can see how to initialize **Kanban** with the initial data:

<iframe src="https://snippet.dhtmlx.com/gb50vyip?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>