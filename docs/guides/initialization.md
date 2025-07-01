---
sidebar_label: Initialization
title: Initialization
description: You can learn about the initialization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Initialization

Here's how to quickly set up Kanban on a page and add all the board features to your app. Just follow these steps to get the component working:

1. [Include the Kanban source files on a page](#including-source-files).
2. [Create a container for Kanban](#creating-container).
3. [Initialize Kanban with a constructor](#initializing-kanban).

## Including source files

First, [download the package](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) and unpack it somewhere in your project folder.

For Kanban to work, just add these two files to your page:

- *kanban.js*
- *kanban.css*

Make sure the paths to those files are correct:

~~~html title="index.html"
<script type="text/javascript" src="./dist/kanban.js"></script>  
<link rel="stylesheet" href="./dist/kanban.css">
~~~

## Creating container

Add a container element for Kanban and assign it an ID, like *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

If you want the Kanban board to have a *Toolbar*, add a separate container for it as well:

~~~jsx {1} title="index.html"
<div id="toolbar"></div> // container for Toolbar
<div id="root"></div> // container for Kanban
~~~

## Initializing Kanban

Kanban gets initialized using the **kanban.Kanban** constructor. It expects two arguments:

- an HTML container (the ID of the HTML container)
- an object with configuration properties. [See the full list here](#configuration-properties)

~~~jsx title="index.html"
// create Kanban
new kanban.Kanban("#root", {
    // configuration properties
});
~~~

If you're adding a *Toolbar* as well, initialize it separately with the **kanban.Toolbar** constructor. It also needs two arguments:

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
More details on setting up the Kanban Toolbar can be found in the [**Configuration**](/guides/configuration.md/#toolbar) section.
:::

### Configuration properties

:::note
A complete list of configuration options for **Kanban** is available [**here**](/api/overview/properties_overview.md). <br />
The full list of properties for the **Toolbar of Kanban** is [**here**](/api/overview/toolbar_properties_overview.md).
:::

## Example

Here's a snippet that shows Kanban being initialized with some starting data:

<iframe src="https://snippet.dhtmlx.com/gb50vyip?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
