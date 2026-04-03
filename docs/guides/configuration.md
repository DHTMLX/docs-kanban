---
sidebar_label: Configuration
title: Configuration
description: You can learn about the configuration in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Configuration

Configure *Kanban* appearance and behavior through its API:

- configure card appearance via [`cardShape`](api/config/js_kanban_cardshape_config.md)
- configure editor fields via [`editorShape`](api/config/js_kanban_editorshape_config.md)
- configure editor behavior via [`editor`](api/config/js_kanban_editor_config.md)
- configure rendering and scrolling via [`renderType`](api/config/js_kanban_rendertype_config.md) and [`scrollType`](api/config/js_kanban_scrolltype_config.md)
- configure Kanban history via [`history`](api/config/js_kanban_history_config.md)
- customize card appearance via [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md)
    - *Refer to the [**Customization**](guides/customization.md) section for details!*
- apply the desired locale via [`locale`](api/config/js_kanban_locale_config.md)
    - *Refer to the [**Localization**](guides/localization.md) section for details!*
- load data for cards, columns, rows, and links via [`cards`](api/config/js_kanban_cards_config.md), [`columns`](api/config/js_kanban_columns_config.md), [`rows`](api/config/js_kanban_rows_config.md), and [`links`](api/config/js_kanban_links_config.md)
    - *Refer to the [**Working with data**](guides/working_with_data.md) section for details!*

## Cards

The Kanban board distributes *cards* across *columns* and *rows*. Use [`cardShape`](api/config/js_kanban_cardshape_config.md) to control which predefined fields appear on each card:

- a card label via the `label: boolean` config
- a card description via the `description: boolean` config

    :::tip
    Activate **label** and **description** to show matching inputs in the editor. Configure these inputs with the [**text** and **textarea**](#using-text-and-textarea-fields) types.
    :::

- a card progress via the `progress: boolean` config

    :::tip
    Activating **progress** adds a progress control to the editor automatically. Configure it with the [**progress**](#using-the-progress-field) type.
    :::

- a start date via the `start_date: boolean` config
- an end date via the `end_date: boolean` config

    :::tip
    The editor shows date controls for **start date** and **end date** when you activate these fields. Configure the controls with the [**date**](#using-date-and-daterange-fields) type.
    :::

- a card context menu via the `menu: boolean` config
- a card attachment via the `attached: boolean` config

    :::tip
    To configure the file attachment field in the editor, use the [**files**](#using-the-file-upload-field) type.
    :::

- a card color via the `color: boolean` config

    :::tip
    Activating **color** adds a colorpicker to the editor automatically. Configure it with the [**color**](#using-the-color-field) type.
    :::

- a card cover (*preview image*) via the `cover: boolean` config
- card comments via the `comments: boolean` config
- a confirmation dialog for card deletion via the `confirmDeletion: boolean` config
- card votes via the `votes: boolean | { show: boolean, clicable: true }` config
- card assignment (users) via the `users: boolean | { show: boolean, values: object, maxCount: number | false }` config

    :::tip
    To assign a single user, configure the editor control with [**combo** or **select**](#using-combo-select-and-multiselect-fields). For multiple users, use [**multiselect**](#using-combo-select-and-multiselect-fields).
    :::

- a card priority via the `priority: boolean | { show: boolean, values: object }` config

    :::tip
    Activating **priority** adds a select control to the editor automatically. Configure it with [**combo** or **select**](#using-combo-select-and-multiselect-fields) only.
    :::

- *a custom field* via the `headerFields: [ { key: string, label: string, css: string } ]` config

Pass `cardShape` to the constructor along with your card and column data:

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
    columns,
    cards,
    cardShape
});
~~~

:::note
If you don't specify card settings via [`cardShape`](api/config/js_kanban_cardshape_config.md), the widget applies [**defaultCardShape**](api/config/js_kanban_cardshape_config.md#default-config).
:::

## Editor

:::info
Display the Editor as a **sidebar** or **modal window** using the [`editor.placement`](api/config/js_kanban_editor_config.md) property!
:::

The editor consists of fields for managing card data. Configure editor fields with [`editorShape`](api/config/js_kanban_editorshape_config.md). The supported field types are:

- [**combo**, **select**, and **multiselect**](#using-combo-select-and-multiselect-fields)
- [**color**](#using-the-color-field)
- [**text** and **textarea**](#using-text-and-textarea-fields)
- [**progress**](#using-the-progress-field)
- [**files**](#using-the-file-upload-field)
- [**date** and **dateRange**](#using-date-and-daterange-fields)
- [**comments**](#using-the-comments-field)
- [**links**](#using-the-links-field)

### Using combo, select, and multiselect fields

Pass the field type and options array to each `editorShape` entry:

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
For **multiselect** and **combo** fields, specify a path to the preview image via the **avatar** property:

~~~jsx {3,9,13}
editorShape: [
    {
        type: "multiselect", // or "combo"
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

[**Kanban. Limiting assignments to one user only**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban)
:::

### Using the color field

Specify the allowed color values and optional picker config:

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

### Using text and textarea fields

Configure text inputs with placeholder, focus, and style options:

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

### Using the progress field

Set `min`, `max`, and `step` to control the progress slider range:

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

### Using the file upload field

#### Configuring Upload Url as String

~~~jsx {4-15}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "files", 
            key: "attached", // the "attached" key is used when configuring the "cardShape" property
            label: "Attachment",
            uploadURL: url + "/uploads", // specify url as string
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

#### Configuring Upload Url as Function

~~~jsx {9-31}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        ...defaultEditorShape,
        {
            key: "attached",
            type: "files",
            label: "Files",
            uploadURL: rec => {
                const formData = new FormData();
                formData.append("upload", rec.file);

                const config = {
                    method: "POST",
                    body: formData,
                    headers: {
                        'Authorization': 'Bearer ' + token  // token or other headers here
                    }
                };

                return fetch(url + "/uploads", config) // URL here
                    .then(res => res.json())
                    .then(
                        data => {
                            return { id: rec.id, ...data };
                        },
                        () => ({ id: rec.id, status: "error" })
                    )
                    .catch();
            }
        }
    ]
});
~~~

### Using date and dateRange fields

Specify a date format for the field:

~~~jsx {3-8}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "date", 
            key: "start_date",
            label: "Start date",
            format: "%d/%m/%y"
        },
        // settings of other fields
    ]
});
~~~

Use `dateRange` to bind start and end dates to a single control:

~~~jsx {3-11}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "dateRange", 
            key: {
                start: "start_date",
                end: "end_date"
            },
            label: "Date Range",
            format: "%d/%m/%y"
        },
        // settings of other fields
    ]
});
~~~

### Using the comments field

Configure comment display, date format, and placement:

~~~jsx {3-13}
new kanban.Kanban("#root", {
    editorShape: [
       {
            type: "comments",
            key: "comments",
            label: "Comments",
            config: {
                dateFormat: "%M %d",
                placement: "page", // or "editor"
                html: true,
                confirmDeletion: true
            }
        },
        // settings of other fields
    ]
});
~~~

### Using the links field

Add a links field to let users create card dependencies:

~~~jsx {3-10}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "links",
            key: "links",
            label: "Links",
            config: {
                confirmDeletion: true
            }
        },
        // settings of other fields
    ]
});
~~~

### Binding editor fields to card fields

:::info
To link an editor field to the corresponding card field, add a **key** to the field object in [`editorShape`](api/config/js_kanban_editorshape_config.md). For built-in card fields, set the matching key to *true* in [`cardShape`](api/config/js_kanban_cardshape_config.md). For custom fields, add the key to the **headerFields** array. The key also sets the field's initial data value.

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
If you don't specify editor settings via [`editorShape`](api/config/js_kanban_editorshape_config.md), the widget applies [**defaultEditorShape**](api/config/js_kanban_editorshape_config.md#default-config). Default controls appear in the editor only after you activate the corresponding card fields via [`cardShape`](api/config/js_kanban_cardshape_config.md).
:::

### Configuring editor behavior

Use the [`editor`](api/config/js_kanban_editor_config.md) property to control editor behavior:

- enable autosave via `editor.autoSave`
- set the autosave delay via `editor.debounce` (requires `autoSave: true`)

~~~jsx {6-9}
new kanban.Kanban("#root", {
    columns,
    cards,
    editorShape,
    editor: {
        autoSave: true,
        debounce: 2000
    }
    // other parameters
});
~~~

## Toolbar

The **Toolbar** contains a search bar, sort controls, and buttons to add columns and rows. Initialize it in a separate container using the **kanban.Toolbar()** constructor:

~~~jsx {13}
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    cardShape,
    editorShape
});

new kanban.Toolbar("#toolbar", { api: board.api });
~~~

Use the **items** property to hide, show, or customize Toolbar controls:

~~~jsx {6-51}
const board = new kanban.Kanban("#root", {...});

new kanban.Toolbar("#toolbar", {
    api: board.api,
    items: [
        { // custom search bar
            type: "search",
            options: [
                {
                    id: "label",
                    label: "By label"
                },
                {
                    id: "start_date",
                    label: "By date",
                    searchRule: (card, value, by) => {
                        const date = card[by];
                        return date?.toString().includes(value);
                    }
                }
            ],
            resultTemplate: kanban.template(searchResult => {
                return `<div class="list-item">
                            <div class="list-item-text">${searchResult.result.label}</div>
                            ${searchResult.result.description ? `<div class="list-item-text item-description">${searchResult.result.description}</div>` : ""}
                        </div>`
            })
        },
        "spacer", // empty space
        "undo", // control to undo the card operations in the history
        "redo", // control to redo the card operations in the history
        { // custom sort control
            type: "sort",
            options: [
                {
                    text: "Sort by label",
                    by: "label",
                    dir: "asc"
                },
                {
                    text: "Sort by description",
                    by: "description",
                    dir: "desc"
                }
            ]
        },
        "addColumn", // control for adding new columns
        "addRow", // control for adding new rows
        // custom elements
    ]
});
~~~

:::tip
To hide a Toolbar control, remove its string from the **items** array.
:::

## Example

This snippet shows Cards, Editor, and Toolbar configured together:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
