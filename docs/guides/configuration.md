---
sidebar_label: Configuration
title: Configuration
description: You can learn about the configuration in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Configuration

You can adjust the desired settings of Kanban to meet your needs. The available configuration properties allow you to [load data](guides/working_with_data.md) for *columns*, *rows* and *cards*, as well as configure the **Cards**, **Editor** and **Toolbar** appearance.

## Cards

The board of Kanban consists of the cards distributed into *columns* and *rows*. You can configure the cards appearance using the [cardShape](api/config/js_kanban_cardshape_config.md) configuration property:

~~~jsx {12-35,43}
const users = [ // user data
    { id: 1, label: "John Smith", path: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // card priority data
    { id: 1, color: "#FF5252", label: "high" },
    { id: 2, color: "#FFC975", label: "medium" },
    { id: 3, color: "#0AB169", label: "low" }
];

const cardShape = { // card settings
    label: true,
    description: true,
    progress: true,
    start_date: true,
    end_date: true,
    menu: true,
    attached: true,
    priority: {
        show: true,
        values: cardPriority
    },
    users: {
        show: true,
        values: users
    },
    headerFields: [
        {
            key: "sprint",
            type: "text",
            label: "Custom field"
        }
    ]
};

new kanban.Kanban("#root", {
	// data
	columns,
	cards,
	rows,
	// card settings
	cardShape
});
~~~

:::note
Unless you specify the card settings via the **cardShape** property, the widget will apply a [**defaultCardShape**](api/config/js_kanban_cardshape_config.md#default-config) set of parameters!
:::

## Editor

The editor of Kanban consists of the fields to manage the cards data. You can configure the editor fields using the [editorShape](api/config/js_kanban_editorshape_config.md) configuration property:

~~~jsx {6-14,22}
const users = [ // user data
	{ id: 1, label: "John Smith", path: "../assets/user.jpg" },
	{ id: 2, label: "Aaron Short" }
];

const editorShape = [ // editor settings
	...kanban.defaultEditorShape, // include default settings
	{ // add custom field
	    type: "multiselect",
	    key: "users",
	    label: "Users",
	    options: users
	}
];

new kanban.Kanban("#root", {
	// data
	columns,
	cards,
	rows,
	// editor settings
	editorShape
});
~~~

:::note
Unless you specify the editor settings via the **editorShape** property, the widget will apply a [**defaultEditorShape**](api/config/js_kanban_editorshape_config.md#default-config) set of parameters!
:::

## Toolbar

The toolbar of Kanban consists of the search bar and controls for adding *columns* and *rows*. To display the toolbar, you need to initialize it in a separate container using the **kanban.Toolbar** constructor.

~~~jsx {13}
// create Kanban
const board = new kanban.Kanban("#root", {
	// data
	columns,
	cards,
	rows,
	// card settings
	cardShape,
	// editor settings
	editorShape
});

new kanban.Toolbar("#toolbar", { api: board.api });
~~~

You can also manage (*hide/show*) the toolbar controls using the **items** array:

~~~jsx {6-10}
// create Kanban
const board = new kanban.Kanban("#root", {...});

new kanban.Toolbar("#toolbar", {
	api: board.api,
	items: [
		"search", // search bar
		"controls", // controls for adding new columns and rows
		// custom elements
	]
});
~~~

:::tip
To *hide* some of the toolbar controls, remove the "search" or/and "controls" string(s) from the **items** array
:::

:::info
Unless you specify the [**rowKey**](api/config/js_kanban_rowkey_config.md) property, the toolbar will ***hide*** the  control for adding rows!
:::

## Example

In this snippet you can see how to configure the **Cards**, **Editor** and **Toolbar** of Kanban:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
