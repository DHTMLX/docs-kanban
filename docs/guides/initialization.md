---
sidebar_label: Initialization
title: Initialization
description: You can study the developer guide in the documentation of the JavaScript Kanban library. Browse API reference, try out code examples and live demos.
---

# Initialization

This guide will give you detailed instructions on how to create JS Kanban on a page to enrich your application with features of a kanban board. Follow the steps below to get a ready-to-use component:

1. [Include the JS Kanbna source files on a page](#including-source-files)
2. [Create a container for JS Kanban](#creating-container)
3. [Initialize JS Kanban with the object constructor](#initializing-js-kanban)

!!![TODO] **Добавить ссылку на сниппет с базовыми параметрами виджета**

<iframe src="" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Including source files

!!![TODO] **Заменить ссылку на скачивание Канбана**

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

!!![TODO] **Добавить структуру файлов с кратким описанием**

## Creating container

Add a container for JS Kanban and give it an ID, for example "root":

```html title="index.html"
<div id="root"></div>
```

## Initializing JS Kanban

Initialize JS Kanban with the **kanban.Kanban** constructor. It takes two parameters:

- the HTML container for JS Kanban
- an object with configuration properties. [See the full list below](#configuration-properties).

```js title="index.html"
// create JS Kanban
new kanban.Kanban("#root", {
    // config options
});
```

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
- **rows** - (*array*) an array of objects containing the rows data

You can set configuration options during initialization as the second parameter of the constructor:

!!![TODO] **Добавить ссылку на сниппет с максимальным количеством конфигураций**

<iframe src="" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>
