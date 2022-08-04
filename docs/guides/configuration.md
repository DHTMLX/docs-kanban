---
sidebar_label: Configuration
title: Configuration
description: You can learn about the configuration in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Configuration

You can configure the *Kanban* appearance and functionality via the corresponding API. The available parameters will allow you to:

- configure the cards appearance via the [`cardShape`](api/config/js_kanban_cardshape_config.md) property
- configure the editor fields via the [`editorShape`](api/config/js_kanban_editorshape_config.md) property
- configure rendering and scrolling via the [`renderType`](api/config/js_kanban_rendertype_config.md) and [`scrollType`](api/config/js_kanban_scrolltype_config.md) properties
- customize the card appearance via the [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) property
	- *Refer to the [**Customisation**](guides/customization.md) section for details!*
- apply the desired locale via the [`locale`](api/config/js_kanban_locale_config.md) property
	- *Refer to the [**Localization**](guides/localization.md) section for details!*
- load data for cards, columns and rows via the corresponding [`cards`](api/config/js_kanban_cards_config.md), [`columns`](api/config/js_kanban_columns_config.md) and [`rows`](api/config/js_kanban_rows_config.md) properties
	- *Refer to the [**Working with data**](guides/working_with_data.md) section for details!*

## Cards

The board of Kanban consists of the *cards* distributed into *columns* and *rows*. You can configure the cards appearance using the [`cardShape`](api/config/js_kanban_cardshape_config.md) configuration property. There are several predefined fields you can include (or exclude) into the card template, namely:

- a card label via the `label: boolean` config
- a card description via the `description: boolean` config

	:::tip
	You can manage the **label** and **description** fields of any card via the corresponding inputs of the Kanban editor. If you activate these fields, the corresponding inputs will be displayed in the editor automatically. To configure these inputs, you can use the [**text** and **textarea**](#text-and-textarea-types) types.
	:::

- a card progress via the `progress: boolean` config

	:::tip
	You can manage the **progress** field of any card via the corresponding control of the Kanban editor. If you activate this field, the corresponding control will be displayed in the editor automatically. To configure this control, you can use the [**progress**](#progress-type) type.
	:::

- a start date via the `start_date: boolean` config
- a end date via the `end_date: boolean` config

	:::tip
	You can manage the **start date** and **end date** fields of any card via the corresponding controls of the Kanban editor. If you activate these fields, the corresponding controls will be displayed in the editor automatically. To configure these controls, you can use the [**date**](#date-type) type.
	:::

- a card context menu via the `menu: boolean` config
- a card attachment via the `attached: boolean` config

	:::tip
	You can **attache files** to any card via the corresponding field of the Kanban editor. To configure this field, you can use the [**files**](#files-type) type.
	:::

- a card color via the `color: boolean` config

	:::tip
	You can manage the **top color line** of any card via the corresponding control of the Kanban editor. If you activate **color**, the corresponding control (*colorpicker*) will be displayed in the editor automatically. To configure this control, you can use the [**color**](#color-type) type.
	:::

- a card cover (*preview image*) via the `cover: boolean` config
- a card assignment (users) via the `users: { show: boolean, values: object }` config

	:::tip
	You can assign one or several users to any card via the corresponding control of the Kanban editor. To configure this control, you can use the [**multiselect**](#combo-select-and-multiselect-types) type only.
	:::

- a card priority via the `priority: { show: boolean, values: object }` config

	:::tip
	You can manage the **priority** of any card via the corresponding control of the Kanban editor. If you activate **priority**, the corresponding control will be displayed in the editor automatically. To configure this control, you can use the [**combo** or **select**](#combo-select-and-multiselect-types) types only.
	:::

- *a custom field* via the `headerFields: [ { key: string, label: string, css: string } ]` config

~~~jsx {12-35,42}
const users = [ // users data
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // card priority data
    { id: 1, color: "#FF5252", label: "high" },
    { id: 2, color: "#FFC975", label: "medium" },
    { id: 3, color: "#0AB169", label: "low" }
];

const cardShape = { // cards settings
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
            label: "Custom field",
			css: "custom_css_class"
        }
    ]
};

new kanban.Kanban("#root", {
	// cards data
	columns,
	cards,
	// cards settings
	cardShape
});
~~~

:::note
Unless you specify the card settings via the [`cardShape`](api/config/js_kanban_cardshape_config.md) property, the widget will apply a [**defaultCardShape**](api/config/js_kanban_cardshape_config.md#default-config) set of parameters!
:::

## Editor

The *editor* of Kanban consists of the fields for managing the cards data. To configure the editor fields (controls), you can use the [`editorShape`](api/config/js_kanban_editorshape_config.md) property. You can use the following types of the editor fields:

- [**combo**, **select**, and **multiselect**](#combo-select-and-multiselect-types)
- [**color**](#color-type)
- [**text** and **textarea**](#text-and-textarea-types)
- [**progress**](#progress-type)
- [**files**](#files-type)
- [**date**](#date-type)

### Combo, Select and Multiselect types

The editor fields of **combo**, **select**, and **multiselect** types can be set in the following way:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "combo", // or "select" and "multiselect"
            key: "priority", // the "priority" key is used when configuring the "cardShape" property
            label: "Priority",
            values: [
                { id: 1, label: "high" },
                { id: 2, label: "medium" },
                { id: 3, label: "low" }
            ]
        },
        // settings of other fields
    ]
});
~~~

:::info
For the editor field of **"multiselect"** type you can also specify a path to the preview image via the **avatar** property:

~~~jsx {3,9,13}
editorShape: [
	{
		type: "multiselect", 
		key: "users", // the "users" key is used when configuring the "cardShape" property
		label: "Users",
		values: [
			{ 
				id: 1, label: "Alan", 
				avatar: "preview_image_path_1.png" 
			},
			{ 
				id: 2, label: "John", 
				avatar: "preview_image_path_2.png" 
			}
		]
	},
	// settings of other fields
]
~~~
:::

### Color type

The editor field of **color** type can be set in the following way:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "color", 
            key: "color", // the "color" key is used when configuring the "cardShape" property
            label: "Card color",
            values: ["#65D3B3", "#FFC975", "#58C3FE"],
            config: {
                clear: true,
                placeholder: "Select color"
            }
        },
        // settings of other fields
    ]
});
~~~

### Text and Textarea types

The editor fields of **text** and **textarea** types can be set in the following way:

~~~jsx {3-14}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "text", // or "textarea"
            key: "label",
            label: "Label",
            config: {
                placeholder: "Type your tips here", 
				readonly: false, 
				focus: true,
                disabled: false,
                inputStyle: "height: 50px;"
            }
        },
        // settings of other fields
    ]
});
~~~

### Progress type

The editor field of **progress** type can be set in the following way:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "progress", 
            key: "progress", // the "progress" key is used when configuring the "cardShape" property
            label: "Progress",
            config: {
				min: 10,
				max: 90,
				step: 5
			}
        },
        // settings of other fields
    ]
});
~~~

### Files type

The editor field of **files** type can be set in the following way:

~~~jsx {4-15}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "files", 
            key: "attached", // the "attached" key is used when configuring the "cardShape" property
            label: "Attachment",
			uploadURL: url + "/uploads",
			config: {
				accept: "image/*", // "video/*", "audio/*"
				disabled: false,
				multiple: true,
				folder: false
			}
        },
        // settings of other fields
    ]
});
~~~

### Date and DateRange types

The editor field of **date** type can be set in the following way:

~~~jsx {3-7}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "date", 
            key: "start_date",
            label: "Start date"
        },
        // settings of other fields
    ]
});
~~~

The editor field of **dateRange** type can be set in the following way:

~~~jsx {3-10}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "dateRange", 
            key: {
                start: "start_date",
                end: "end_date"
            }
            label: "Date Range"
        },
        // settings of other fields
    ]
});
~~~

### Linking editor fields to card fields

:::info
To link the editor field to the corresponding card field, you need to provide special **key** in the object of [`editorShape`](api/config/js_kanban_editorshape_config.md) property (`key: "editor_field_key"`). The value of this key needs to be set to *true* in the [`cardShape`](api/config/js_kanban_cardshape_config.md) property (for built-in card fields) or specified in the **headerFields** array (for custom card fields). You can provide the initial data of any field via this key as well.

~~~jsx {5,13,22,25,33-34,38-39,45-47}
// editor settings
const editorShape = [ 
    { 
        type: "text",
        key: "label",
        label: "Label",
        config: {
            placeholder: "Enter new label here"
        }
    },
	{ 
        type: "textarea",
        key: "note",
        label: "Note",
        config: {
            placeholder: "Enter usefull note here"
        }
    }
];
// cards settings
const cardShape = {
	label: true, // a key of built-in field
	headerFields: [
		{
			key: "note", // a key of custom field 
			label: "Note"
		}
	]
};
// cards data
const cards = [
    {
        label: "Volvo",
		note: "It is the swedish car",
		column: "backlog"
    },
    {
        label: "Audi",
		note: "It is the german car",
		column: "backlog"
    }
];
// create Kanban
new kanban.Kanban("#root", {
    editorShape,
	cardShape,
    cards,
	columns
    // other configuration parameters
});
~~~
:::

:::note
Unless you specify the editor settings via the [`editorShape`](api/config/js_kanban_editorshape_config.md) property, the widget will apply a [**defaultEditorShape**](api/config/js_kanban_editorshape_config.md#default-config) set of parameters. In this case, the default controls and inputs will be displayed in editor only after activating the corresponding fields of cards via the [`cardShape`](api/config/js_kanban_cardshape_config.md) property.
:::

## Toolbar

**Toolbar** of Kanban consists of the searchbar for *searching cards* and controls for *sorting cards* and *adding new columns and rows*. To display Toolbar, you need to initialize it in a separate container using the **kanban.Toolbar()** constructor.

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

You can manage (*hide/show/customize*) the Toolbar controls using the **items** property:

~~~jsx {6-13}
// create Kanban
const board = new kanban.Kanban("#root", {...});

new kanban.Toolbar("#toolbar", {
	api: board.api,
	items: [
		"search", // search bar
        "spacer", // empty space
        "sort", // control for sorting cards
        "addColumn", // control for adding new columns
        "addRow", // control for adding new rows
		// custom elements
	]
});
~~~

:::tip
To hide some of the Toolbar controls, remove the corresponding string(s) from the **items** array.
:::

## Example

In this snippet you can see how to configure the **Cards**, **Editor** and **Toolbar** of Kanban:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
