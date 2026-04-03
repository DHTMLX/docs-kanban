---
sidebar_label: Configuration
title: Configuration
description: You can learn about the configuration in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Configuration

Kanban has three configurable areas: **Cards** (what each card shows), **Editor** (what fields appear when you open a card), and **Toolbar** (the controls above the board).

Cards and Editor are linked by key names. A field on a card maps to an editor control through a shared `key`. If the keys don't match, the editor control won't update the card field. This is the one thing that trips most people up when customizing both at the same time.

The full API for each area:

- [`cardShape`](api/config/js_kanban_cardshape_config.md) — card fields
- [`editorShape`](api/config/js_kanban_editorshape_config.md) — editor controls
- [`editor`](api/config/js_kanban_editor_config.md) — editor behavior (autosave, etc.)
- [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) — custom card rendering → see [Customization](guides/customization.md)
- [`locale`](api/config/js_kanban_locale_config.md) — localization → see [Localization](guides/localization.md)
- [`cards`](api/config/js_kanban_cards_config.md), [`columns`](api/config/js_kanban_columns_config.md), [`rows`](api/config/js_kanban_rows_config.md), [`links`](api/config/js_kanban_links_config.md) — data → see [Working with data](guides/working_with_data.md)

## Cards

Use [`cardShape`](api/config/js_kanban_cardshape_config.md) to control which fields appear on each card. Set a field to `true` to show it, `false` (or omit it) to hide it.

Available fields:

- `label: boolean` — card title

    :::tip
    Managed via the **label** input in the editor. Enable it here and the input appears automatically. Configure it with the [text or textarea](#text-and-textarea-types) editor type.
    :::

- `description: boolean` — card description

    :::tip
    Managed via the **description** input in the editor. Configure it with the [text or textarea](#text-and-textarea-types) editor type.
    :::

- `progress: boolean` — progress bar

    :::tip
    Managed via the **progress** control in the editor. Configure it with the [progress](#progress-type) editor type.
    :::

- `start_date: boolean` — start date
- `end_date: boolean` — end date

    :::tip
    Managed via date controls in the editor. Configure them with the [date](#date-and-daterange-types) editor type.
    :::

- `menu: boolean` — three-dot context menu on the card
- `attached: boolean` — file attachments

    :::tip
    Attach files to any card via the editor. Configure the field with the [files](#files-type) editor type.
    :::

- `color: boolean` — top color bar on the card

    :::tip
    Managed via a color picker in the editor. If enabled, the picker appears automatically. Configure it with the [color](#color-type) editor type.
    :::

- `cover: boolean` — preview image
- `comments: boolean` — comments
- `confirmDeletion: boolean` — confirmation dialog before deleting a card
- `votes: boolean | { show: boolean, clickable: boolean }` — vote counter
- `users: boolean | { show: boolean, values: object, maxCount: number | false }` — assigned users

    :::tip
    Assign one or multiple users via the editor. For a single user, use the [combo or select](#combo-select-and-multiselect-types) type. For multiple users, use [multiselect](#combo-select-and-multiselect-types).
    :::

- `priority: boolean | { show: boolean, values: object }` — priority badge

    :::tip
    Managed via the editor. If enabled, the control appears automatically. Configure it with the [combo or select](#combo-select-and-multiselect-types) types only.
    :::

- `headerFields: [ { key: string, label: string, css: string } ]` — custom fields

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
If you don't set `cardShape`, the widget uses [**defaultCardShape**](api/config/js_kanban_cardshape_config.md#default-config).
:::

## Editor

:::info
Display the Editor as a **sidebar** or **modal window** using the [`editor.placement`](api/config/js_kanban_editor_config.md) property.
:::

Use [`editorShape`](api/config/js_kanban_editorshape_config.md) to define which controls appear in the editor. Each control has a `type`, a `key` that links it to the corresponding card field, and a `label`.

Available types:

- [**combo**, **select**, and **multiselect**](#combo-select-and-multiselect-types)
- [**color**](#color-type)
- [**text** and **textarea**](#text-and-textarea-types)
- [**progress**](#progress-type)
- [**files**](#files-type)
- [**date** and **dateRange**](#date-and-daterange-types)
- [**comments**](#comments-type)
- [**links**](#links-type)

### Combo, Select and Multiselect types

Use `combo`, `select`, or `multiselect` for fields with a predefined list of options (priority, tags, assignees, etc.):

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
`multiselect` and `combo` also support an `avatar` property for preview images:

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

Use `color` to let users pick a color for the card's top bar:

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

Use `text` for single-line inputs and `textarea` for multi-line ones:

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

Use `progress` to render a slider for tracking completion percentage:

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

Use `files` to let users attach files to a card. You can provide the upload URL as a string or as a function for custom request handling.

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

Use a function when you need to add auth headers or transform the response:

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

Use `date` for a single date field:

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

### Comments type

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

The `key` in each `editorShape` object is what connects the editor control to the card field. For built-in fields, the key must be set to `true` in `cardShape`. For custom fields, the key must appear in the `headerFields` array. The same key is also how you provide initial data for that field.

:::info

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
            placeholder: "Enter a useful note here"
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
If you don't set `editorShape`, the widget uses [**defaultEditorShape**](api/config/js_kanban_editorshape_config.md#default-config). In that case, the default controls only appear after you enable the corresponding card fields via `cardShape`.
:::

### Configuring the editor

Use the [`editor`](api/config/js_kanban_editor_config.md) property to configure editor behavior:

- `editor.autoSave` — enable autosave mode
- `editor.debounce` — delay (ms) between edits and save (only applies when `autoSave: true`)

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

The **Toolbar** is a separate component initialized in its own container. It connects to the board via `api`:

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

Use the `items` array to control which controls appear, in what order. Remove a string to hide that control. Pass an object instead of a string to customize it:

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
To hide a Toolbar control, remove its string from the `items` array.
:::

## Example

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
