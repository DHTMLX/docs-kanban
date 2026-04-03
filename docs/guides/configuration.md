---
sidebar_label: Configuration
title: Configuration
description: You can learn about the configuration in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Configuration

This guide covers how to configure Kanban's card appearance, editor fields, and toolbar, and how these three areas connect.

## How configuration works

You can configure the *Kanban* appearance and functionality via the corresponding API:

- **[`cardShape`](api/config/js_kanban_cardshape_config.md)** — configures card appearance
- **[`editorShape`](api/config/js_kanban_editorshape_config.md)** — configures editor fields
- **[`editor`](api/config/js_kanban_editor_config.md)** — configures editor behaviour
- **[`renderType`](api/config/js_kanban_rendertype_config.md)** and **[`scrollType`](api/config/js_kanban_scrolltype_config.md)** — configure rendering and scrolling
- **[`history`](api/config/js_kanban_history_config.md)** — configures Kanban history
- **[`cardTemplate`](api/config/js_kanban_cardtemplate_config.md)** — customizes card appearance; see [**Customization**](guides/customization.md) for details
- **[`locale`](api/config/js_kanban_locale_config.md)** — applies a locale; see [**Localization**](guides/localization.md) for details
- **[`cards`](api/config/js_kanban_cards_config.md)**, **[`columns`](api/config/js_kanban_columns_config.md)**, **[`rows`](api/config/js_kanban_rows_config.md)**, and **[`links`](api/config/js_kanban_links_config.md)** — load data for cards, columns, rows, and links; see [**Working with data**](guides/working_with_data.md) for details

The `cardShape` and `editorShape` objects are linked by field keys. When you enable a field in `cardShape` (for example, `priority: true`) and define a field in `editorShape` with the same `key` value (`key: "priority"`), Kanban connects them. The editor field reads from and writes to that card field.

Built-in fields like `label`, `priority`, and `color` have reserved keys. Custom fields go into the `headerFields` array in `cardShape`, with any key you choose.

The **Toolbar** is a separate widget. It initializes in its own container and connects to the board via the `api` reference.

## Cards

The board displays cards in columns and rows. You control which fields appear on each card using the [`cardShape`](api/config/js_kanban_cardshape_config.md) property.

Available built-in fields:

- **`label: boolean`** — card title
- **`description: boolean`** — card description

    :::tip
    Activate **label** and **description** to show the corresponding inputs in the editor. To configure these inputs, use the [**text** and **textarea**](#text-and-textarea-types) types.
    :::

- **`progress: boolean`** — card progress bar

    :::tip
    Activate **progress** to show the corresponding control in the editor. To configure this control, use the [**progress**](#progress-type) type.
    :::

- **`start_date: boolean`** — start date
- **`end_date: boolean`** — end date

    :::tip
    Activate **start_date** and **end_date** to show the corresponding controls in the editor. To configure these controls, use the [**date**](#date-and-daterange-types) type.
    :::

- **`menu: boolean`** — card context menu
- **`attached: boolean`** — file attachments

    :::tip
    You can attach files to any card via the corresponding field in the editor. To configure this field, use the [**files**](#files-type) type.
    :::

- **`color: boolean`** — color line at the top of the card

    :::tip
    Activate **color** to show the corresponding control (*colorpicker*) in the editor. To configure this control, use the [**color**](#color-type) type.
    :::

- **`cover: boolean`** — card cover (preview image)
- **`comments: boolean`** — card comments
- **`confirmDeletion: boolean`** — confirmation dialog before card deletion
- **`votes: boolean | { show: boolean, clicable: true }`** — card votes
- **`users: boolean | { show: boolean, values: object, maxCount: number | false }`** — card assignment (users)

    :::tip
    You can assign users to any card via the corresponding control in the editor. For a single user, apply the [**combo** or **select**](#combo-select-and-multiselect-types) type. For multiple users, choose [**multiselect**](#combo-select-and-multiselect-types).
    :::

- **`priority: boolean | { show: boolean, values: object }`** — card priority

    :::tip
    Activate **priority** to show the corresponding control in the editor. To configure this control, use the [**combo** or **select**](#combo-select-and-multiselect-types) types only.
    :::

- **`headerFields: [ { key: string, label: string, css: string } ]`** — custom card fields

The following snippet shows how to configure `cardShape` with users, priority, and a custom field:

~~~jsx {12-35,42}
const users = [ // users data
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const cardPriority = [ // card priority data
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
If you don't configure `cardShape`, Kanban uses the [**defaultCardShape**](api/config/js_kanban_cardshape_config.md#default-config) parameters.
:::

## Editor

:::info
You can display the editor as a **sidebar** or **modal window** using the [`editor.placement`](api/config/js_kanban_editor_config.md) property.
:::

The editor lets users view and modify card data. Configure its fields using the [`editorShape`](api/config/js_kanban_editorshape_config.md) property. The available field types are:

- [**combo**, **select**, and **multiselect**](#combo-select-and-multiselect-types)
- [**color**](#color-type)
- [**text** and **textarea**](#text-and-textarea-types)
- [**progress**](#progress-type)
- [**files**](#files-type)
- [**date** and **dateRange**](#date-and-daterange-types)
- [**comments**](#comments-type)
- [**links**](#links-type)

### Combo, Select, and Multiselect types

To add a combo, select, or multiselect field to the editor, pass the type and a `values` array:

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
For **multiselect** and **combo** types, you can also specify a path to a preview image via the **avatar** property:

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

### Color type

The `color` type renders a color picker with a predefined set of swatches. You can also add a clear button via `config.clear`:

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

Use the `config` object to control placeholder text, focus behavior, and disabled state:

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

Use `config` to set the min, max, and step values for the progress slider:

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

The `files` type adds a file upload control to the editor. Set `uploadURL` to the endpoint that handles the upload.

#### Configure upload URL as a string

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

#### Configure upload URL as a function

Use a function when you need to add custom headers, such as an authorization token:

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

### Date and DateRange types

Pass a `format` string to control how dates display in the editor.

The following snippet shows how to configure the **date** field type:

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

The example below shows how to configure the **dateRange** type, which captures a start and end date in a single field:

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

### Comments type

The `comments` type adds a threaded discussion panel to the editor. Set `placement` to `"page"` to expand comments in the full card view, or `"editor"` to keep them inline:

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

### Links type

The `links` type adds a list of card dependencies to the editor. Use `confirmDeletion` to show a dialog before removing a link:

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

### Bind editor fields to card fields

:::info
To connect an editor field to a card field, give the `editorShape` entry a `key` value that matches the field key in `cardShape`. For built-in fields, set that key to `true` in `cardShape`. For custom fields, include the key in the `headerFields` array. You can also provide initial card data through the same key.

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
If you don't configure `editorShape`, Kanban uses the [**defaultEditorShape**](api/config/js_kanban_editorshape_config.md#default-config) parameters. The default controls appear in the editor only when you activate the corresponding card fields in `cardShape`.
:::

### Configure the editor

The [`editor`](api/config/js_kanban_editor_config.md) property controls editor behavior:

- **`autoSave`** — saves card changes automatically without requiring the user to submit.
- **`debounce`** — sets the autosave delay in milliseconds. Works only when `autoSave: true`.

~~~jsx {6-9}
// create Kanban
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

The Toolbar provides search, sort, undo/redo, and controls for adding columns and rows. Initialize it in a separate container and pass a reference to the board's `api`:

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

To control which items appear in the toolbar, use the **`items`** array. You can add, remove, or replace built-in controls:

~~~jsx {6-51}
// create Kanban
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
To hide a toolbar control, remove the corresponding string from the **items** array.
:::

## Example

The following example shows how to configure cards, editor, and toolbar together:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
