---
sidebar_label: Initialization
title: Initialization
description: You can study the developer guide in the documentation of the JavaScript Kanban library. Browse API reference, try out code examples and live demos.
---

# Initialization

This guide will give you detailed instructions on how to create JS Kanban on a page to enrich your application with features of the Kanban board. Take the following steps to get a ready-to-use component:

1. [Include the JS Kanban source files on a page](#including-source-files)
2. [Create a container for JS Kanban](#creating-container)
3. [Initialize JS Kanban with a constructor](#initializing-js-kanban)

## Including source files

!!![TODO] **Заменить ссылку на скачивание JS Kanban**

[Download the package](https://dhtmlx.com/docs) and unpack it into a folder of your project.

To create JS Kanban, you need to include 2 source files on your page:

- *kanban.js*
- *kanban.css*

Make sure that you set correct relative paths to these files:

```html title="index.html"
<script type="text/javascript" src="codebase/kanban.js"></script>  
<link rel="stylesheet" href="codebase/kanban.css">
```

The structure of the JS Kanban pack is the following:

!!![TODO] **Добавить структуру файлов пакета с кратким описанием**

## Creating container

Add a container for JS Kanban and give it an ID, for example *"root"*:

```jsx title="index.html"
<div id="root"></div>
```

If you want to create the widget together with its *Toolbar*, you need to add a separate container for it:

```jsx {1} title="index.html"
<div id="toolbar"></div> // container for Toolbar
<div id="root"></div> // container for JS Kanban
```

## Initializing JS Kanban

Initialize JS Kanban with the **kanban.Kanban** constructor. It takes two parameters:

- an HTML container (the ID of the HTML container)
- an object with configuration properties. [See the full list here](#configuration-properties).

```jsx title="index.html"
// create JS Kanban
new kanban.Kanban("#root", {
    // config options
});
```

If you want to create the widget together with its *Toolbar*, you need to initialize it separately using the **kanban.Toolbar** constructor. It also takes two parameters:

- an HTML container (the ID of the HTML container)
- an object with JS Kanban API.

```jsx {6} title="index.html"
// create JS Kanban
const board = new kanban.Kanban("#root", {
    // config options
});

new kanban.Toolbar("#toolbar", { api: board.api });
```

:::info
To learn more about configuring the Toolbar of JS Kanban, read [**this**](./configuration.md/#toolbar) article
:::

### Configuration properties

This is a list of [properties](api/api_overview.md/#js-kanban-properties) that you can specify in the JS Kanban configuration object:

- **cards** - (*array*) an array of objects containing the cards data. ***This parameter is mandatory***
- **cardShape** - (*object*) an object of the cards configs
- **cardTemplate** - (*function*) returns and applies a new HTML template of the card
- **columnKey** - (*string*) defines belonging the card to the column
- **columns** - (*array*) an array of objects containing the columns data. ***This parameter is mandatory***
- **editorAutoSave** - (*boolean*) enables/disables an autosave mode of the Editor
- **editorShape** - (*object*) an object of the editor configs
- **readonly** - (*string* or *object*) enables/disables ***editing***, ***adding***, ***selecting***, ***dragging*** of the cards
- **rowKey** - (*string*) defines belonging the card to the row
- **rows** - (*array*) an array of objects containing the rows data.

## Example

In this snippet you can see how to initialize *JS Kanban* and its *Toolbar*:

!!![TODO] **Добавить ссылку на сниппет с максимальным количеством конфигураций виджета и его Тулбаром**

<iframe src="" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>
