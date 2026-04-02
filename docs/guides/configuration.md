---
sidebar_label: Configuration
title: Configuration
description: You can learn about the configuration in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Configuration

You can configure the *Kanban* appearance and functionality via the following properties:

- [`cardShape`](api/config/js_kanban_cardshape_config.md) — configure the cards appearance
- [`editorShape`](api/config/js_kanban_editorshape_config.md) — configure the editor fields
- [`editor`](api/config/js_kanban_editor_config.md) — configure the editor appearance and behaviour
- [`renderType`](api/config/js_kanban_rendertype_config.md), [`scrollType`](api/config/js_kanban_scrolltype_config.md) — configure rendering and scrolling
- [`history`](api/config/js_kanban_history_config.md) — configure the Kanban history
- [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) — customize the card appearance
    - *Refer to the [**Customization**](guides/customization.md) section for details!*
- [`locale`](api/config/js_kanban_locale_config.md) — apply the desired locale
    - *Refer to the [**Localization**](guides/localization.md) section for details!*
- [`cards`](api/config/js_kanban_cards_config.md), [`columns`](api/config/js_kanban_columns_config.md), [`rows`](api/config/js_kanban_rows_config.md), [`links`](api/config/js_kanban_links_config.md) — load data for cards, columns, rows, and links
    - *Refer to the [**Working with data**](guides/working_with_data.md) section for details!*

## Cards

The Kanban board displays cards distributed into columns and rows. Use the [`cardShape`](api/config/js_kanban_cardshape_config.md) property to control which fields appear on each card:

- `label: boolean` — card label

    :::tip
    Activate the `label` parameter to show the corresponding input in the editor. Configure the editor field with the [`text` or `textarea`](#text-and-textarea-types) type.
    :::

- `description: boolean` — card description

    :::tip
    Activate the `description` parameter to show the corresponding input in the editor. Configure the editor field with the [`text` or `textarea`](#text-and-textarea-types) type.
    :::

- `progress: boolean` — card progress

    :::tip
    Activate the `progress` parameter to show the corresponding control in the editor. Configure the editor control with the [`progress`](#progress-type) type.
    :::

- `start_date: boolean` — start date
- `end_date: boolean` — end date

    :::tip
    Activate `start_date` and `end_date` parameters to show the corresponding controls in the editor. Configure these editor controls with the [`date`](#date-and-daterange-types) type.
    :::

- `menu: boolean` — card context menu
- `attached: boolean` — card attachment

    :::tip
    Activate the `attached` parameter to show the file attachment field in the editor. Configure the editor control with the [`files`](#files-type) type.
    :::

- `color: boolean` — card color (top color line)

    :::tip
    Activate the `color` parameter to show the corresponding colorpicker in the editor. Configure the editor with the [`color`](#color-type) type.
    :::

- `cover: boolean` — card cover (*preview image*)
- `comments: boolean` — card comments
- `confirmDeletion: boolean` — confirmation dialog for card deletion
- `votes: boolean | { show: boolean, clicable: true }` — card votes
- `users: boolean | { show: boolean, values: object, maxCount: number | false }` — card assignment (users)

    :::tip
    Activate the `users` parameter to show the assignment control in the editor. To assign a single user, configure the editor with the [`combo` or `select`](#combo-select-and-multiselect-types) type. For multiple users, use [`multiselect`](#combo-select-and-multiselect-types).
    :::

- `priority: boolean | { show: boolean, values: object }` — card priority

    :::tip
    Activate the `priority` parameter to show the corresponding control in the editor. Configure the editor with the [`combo` or `select`](#combo-select-and-multiselect-types) type only.
    :::

- `headerFields: [ { key: string, label: string, css: string } ]` — *custom fields*

The code snippet below configures the `cardShape` object with users, priority, and custom header fields:

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
If you do not specify card settings via the [`cardShape`](api/config/js_kanban_cardshape_config.md) property, the widget applies a [`defaultCardShape`](api/config/js_kanban_cardshape_config.md#default-config) set of parameters.
:::

## Editor

:::info
You can display the editor as the *sidebar* or *modal window* through the [`editor.placement`](api/config/js_kanban_editor_config.md) property.
:::

The Kanban editor allows users to change card data. Use the [`editorShape`](api/config/js_kanban_editorshape_config.md) property to configure the editor fields (controls). You can use the following types of editor fields:

- [`combo`, `select`, and `multiselect`](#combo-select-and-multiselect-types)
- [`color`](#color-type)
- [`text` and `textarea`](#text-and-textarea-types)
- [`progress`](#progress-type)
- [`files`](#files-type)
- [`date` and `dataRange`](#date-and-daterange-types)
- [`comments`](#comments-type)
- [`links`](#links-type)

### Combo, Select and Multiselect types

The following code snippet uses the `combo` type to configure the editor field for selecting a value from a predefined list:

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
        // settings for other fields
    ]
});
~~~

:::info
For `multiselect` and `combo` types you can specify a path to the preview image via the `avatar` property:

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
    // settings for other fields
]
~~~

[**Kanban. Limiting assignments to one user only**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban)
:::

### Color type

The following code snippet uses the `color` type to configure the editor field for picking a card color:

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
        // settings for other fields
    ]
});
~~~

### Text and Textarea types

The following code snippet uses the `text` type to configure the editor field for entering a single-line or multi-line text value:

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
        // settings for other fields
    ]
});
~~~

### Progress type

The following code snippet uses the `progress` type to configure the editor field for tracking card completion:

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
        // settings for other fields
    ]
});
~~~

### Files type

The following code snippet uses the `files` type to configure the editor field for attaching files to a card:

#### Configure the Upload Url as String

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
        // settings for other fields
    ]
});
~~~

#### Configuring Upload Url as Function

The following code snippet uses a function as the `uploadURL` value to handle file uploads with custom headers:

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

The following code snippet uses the `date` type to configure the editor field for setting a single date:

~~~jsx {3-8}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "date", 
            key: "start_date",
            label: "Start date",
            format: "%d/%m/%y"
        },
        // settings for other fields
    ]
});
~~~

The following code snippet uses the `dateRange` type to configure the editor field for setting start and end dates:

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
        // settings for other fields
    ]
});
~~~

### Comments type

The following code snippet uses the `comments` type to configure the editor field for adding and editing card comments:

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
        // settings for other fields
    ]
});
~~~

### Links type

The following code snippet uses the `links` type to configure the editor field for managing links between cards:

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
        // settings for other fields
    ]
});
~~~

### Bind editor fields to card fields

:::info
To link the editor field to the corresponding card field, provide special `key` in the [`editorShape`](api/config/js_kanban_editorshape_config.md) property (`key: "editor_field_key"`). The value of this key needs to be set to `true` in the [`cardShape`](api/config/js_kanban_cardshape_config.md) property (for built-in card fields) or specified in the `headerFields` array (for custom card fields). You can provide initial data of any field via this key as well.

The following code snippet binds editor fields to both built-in and custom card fields:

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
If you do not specify editor settings via the [`editorShape`](api/config/js_kanban_editorshape_config.md) property, the widget applies the [`defaultEditorShape`](api/config/js_kanban_editorshape_config.md#default-config) set of parameters. In this case, the editor displays default controls and inputs only after you activate the corresponding card fields via the [`cardShape`](api/config/js_kanban_cardshape_config.md) property.
:::

### Configure the editor

Use the [`editor`](api/config/js_kanban_editor_config.md) property to configure the editor appearance and behavior:

- enables/disables an autosave mode of the editor via the `editor.autoSave` property
- specify a delay time of autosaving data via the `editor.debounce` property (works with the `autoSave: true` parameter only)

The following code snippet enables autosave with a 2-second debounce delay:

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

**Toolbar** of Kanban includes the searchbar for *searching cards* and controls for *sorting cards* and *adding new columns and rows*. Initialize Toolbar in a separate container using the `kanban.Toolbar()` constructor:

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

You can manage (*hide/show/customize*) the Toolbar controls through the `items` property:

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
To hide some of the Toolbar controls, remove the corresponding string(s) from the `items` array.
:::

## Example

In this snippet you can see how to configure the *Cards*, *Editor* and *Toolbar* of Kanban:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
