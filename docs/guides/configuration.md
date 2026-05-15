---
sidebar_label: Configuration
title: Configuration
description: You can learn about the configuration in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Configuration

You can configure the Kanban appearance and functionality with the following properties:

- [`cardShape`](api/config/js_kanban_cardshape_config.md) — set up card appearance and built-in fields
- [`editorShape`](api/config/js_kanban_editorshape_config.md) — define editor fields
- [`editor`](api/config/js_kanban_editor_config.md) — control editor visibility, autosave, and placement
- [`renderType`](api/config/js_kanban_rendertype_config.md), [`scrollType`](api/config/js_kanban_scrolltype_config.md) — adjust card rendering and board scrolling
- [`history`](api/config/js_kanban_history_config.md) — manage history of card operations
- [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) — customize card appearance (see the [Customization](guides/customization.md) section)
- [`locale`](api/config/js_kanban_locale_config.md) — apply a locale (see the [Localization](guides/localization.md) section)
- [`cards`](api/config/js_kanban_cards_config.md), [`columns`](api/config/js_kanban_columns_config.md), [`rows`](api/config/js_kanban_rows_config.md), [`links`](api/config/js_kanban_links_config.md) — load data for cards, columns, rows, and links (see the [Working with data](guides/working_with_data.md) section)

## Cards

The Kanban board consists of cards distributed into columns and rows. Use the [`cardShape`](api/config/js_kanban_cardshape_config.md) property to configure card appearance and built-in fields:

- `label: boolean | { show }` — card label, edited with the [`text`](#text-and-textarea-types) type
- `description: boolean | { show }` — card description, edited with the [`textarea`](#text-and-textarea-types) type
- `progress: boolean | { show }` — card progress, edited with the [`progress`](#progress-type) type
- `start_date: boolean | { show, format }` — card start date, edited with the [`date`](#date-and-daterange-types) type
- `end_date: boolean | { show, format }` — card end date, edited with the [`date`](#date-and-daterange-types) type
- `menu: boolean | { show, items }` — card context menu
- `attached: boolean | { show }` — card attachment, edited with the [`files`](#files-type) type
- `color: boolean | { show, values }` — top color line of the card, edited with the [`color`](#color-type) type
- `cover: boolean | { show }` — card preview image
- `comments: boolean | { show }` — card comments
- `confirmDeletion: boolean | { show }` — confirmation dialog for card deletion
- `votes: boolean | { show, clickable }` — card votes
- `users: boolean | { show, values, maxCount }` — users assigned to the card, edited with the [`combo`, `select`, or `multiselect`](#combo-select-and-multiselect-types) types
- `priority: boolean | { show, values }` — card priority, edited with the [`combo` or `select`](#combo-select-and-multiselect-types) type
- `css: (card) => string` — function that returns a CSS class applied to a card conditionally
- `headerFields: [{ key, label, css }]` — custom card fields

:::tip
When you activate a field in `cardShape`, the editor displays the matching control automatically. Configure each control through the [`editorShape`](api/config/js_kanban_editorshape_config.md) property — see [Editor](#editor) for the available types.
:::

The following code snippet configures cards with custom users, priorities, and a custom header field:

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
If you do not specify card settings through the [`cardShape`](api/config/js_kanban_cardshape_config.md) property, the widget falls back to [`defaultCardShape`](api/config/js_kanban_cardshape_config.md#default-config).
:::

## Editor

The Kanban editor contains fields for managing card data. Use the [`editorShape`](api/config/js_kanban_editorshape_config.md) property to configure editor fields. The following field types are available:

- [`combo`, `select`, `multiselect`](#combo-select-and-multiselect-types) — dropdown options
- [`color`](#color-type) — color picker
- [`text`, `textarea`](#text-and-textarea-types) — text inputs
- [`progress`](#progress-type) — progress slider
- [`files`](#files-type) — file uploader
- [`date`, `dateRange`](#date-and-daterange-types) — single date or date range
- [`comments`](#comments-type) — card comments
- [`links`](#links-type) — card links

:::info
Display the editor as a sidebar or modal window with the [`editor.placement`](api/config/js_kanban_editor_config.md) property.
:::

### Combo, select, and multiselect types

The following code snippet configures a dropdown for picking a card priority:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "combo", // or "select" and "multiselect"
            key: "priority", // use the "priority" key in the "cardShape" property
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
For `multiselect` and `combo` fields, set a path to the preview image through the `avatar` property:

~~~jsx {3,9,13}
editorShape: [
    {
        type: "multiselect", // or "combo"
        key: "users", // use the "users" key in the "cardShape" property
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

The following code snippet configures the editor field for picking a card color:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "color", 
            key: "color", // use the "color" key in the "cardShape" property
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

### Text and textarea types

The following code snippet configures the editor field for entering a card label:

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

The following code snippet configures the editor field for setting card progress:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "progress", 
            key: "progress", // use the "progress" key in the "cardShape" property
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

Set the `uploadURL` parameter to a string for a basic upload, or to a function for a custom request.

#### Configure upload URL as string

The following code snippet uses a string URL for the file uploader:

~~~jsx {4-15}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "files", 
            key: "attached", // use the "attached" key in the "cardShape" property
            label: "Attachment",
            uploadURL: url + "/uploads", // set URL as string
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

#### Configure upload URL as function

Pass a function to `uploadURL` to add custom headers, tokens, or response handling. The following code snippet sends each file with a bearer token:

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

### Date and dateRange types

The following code snippet configures the editor field for a single date:

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

The following code snippet configures the editor field for a start/end date range:

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

The following code snippet configures the comments field of the editor:

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

The following code snippet configures the links field of the editor:

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

Each editor field links to a card field through a shared `key`. Set the same `key` value in the [`editorShape`](api/config/js_kanban_editorshape_config.md) entry and in the [`cardShape`](api/config/js_kanban_cardshape_config.md) property. For built-in card fields, set the key to `true`. For custom fields, list the key in the `headerFields` array. The same key supplies initial card data.

The following code snippet binds the `label` and `note` editor fields to the matching card fields:

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
    label: true, // built-in field key
    headerFields: [
        {
            key: "note", // custom field key
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

:::note
If you do not specify editor settings through the [`editorShape`](api/config/js_kanban_editorshape_config.md) property, the widget falls back to [`defaultEditorShape`](api/config/js_kanban_editorshape_config.md#default-config). The default controls and inputs appear in the editor only after you activate the corresponding card fields through the [`cardShape`](api/config/js_kanban_cardshape_config.md) property.
:::

### Configure editor behavior

The [`editor`](api/config/js_kanban_editor_config.md) property controls editor visibility, autosave, and placement:

- [`editor.show`](api/config/js_kanban_editor_config.md) — enable or disable the editor
- [`editor.placement`](api/config/js_kanban_editor_config.md) — display the editor as a `"sidebar"` or `"modal"` window
- [`editor.autoSave`](api/config/js_kanban_editor_config.md) — enable or disable autosave mode
- [`editor.debounce`](api/config/js_kanban_editor_config.md) — delay before autosaving (applies only with `autoSave: true`)

The following code snippet enables autosave with a 2-second delay:

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

## Rendering and scrolling

The Kanban widget renders all cards and scrolls the entire board by default. For boards with many cards, switch to lazy rendering or per-column scrolling:

- [`renderType`](api/config/js_kanban_rendertype_config.md) — set to `"lazy"` to render only the cards visible on the board
- [`scrollType`](api/config/js_kanban_scrolltype_config.md) — set to `"column"` to scroll each column independently

The following code snippet enables lazy rendering and per-column scrolling:

~~~jsx {5-7}
new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    renderType: "lazy",
    scrollType: "column",
    cardHeight: 150
});
~~~

:::important
When you combine `renderType: "lazy"` with any `scrollType`, set a static height for cards through the [`cardHeight`](api/config/js_kanban_cardheight_config.md) property. Without `cardHeight`, lazy rendering does not display cards correctly.
:::

## History of changes

Kanban tracks card operations and exposes undo and redo controls on the Toolbar. Use the [`history`](api/config/js_kanban_history_config.md) property to disable this behavior.

The following code snippet disables history tracking:

~~~jsx {4}
new kanban.Kanban("#root", {
    columns,
    cards,
    history: false
});
~~~

:::tip
To skip individual operations from history, pass the [`$meta`](api/common/js_kanban_meta_parameter.md) parameter to methods or events.
:::

## Toolbar

The Kanban Toolbar provides a searchbar, sort controls, and controls for adding columns and rows. Initialize the Toolbar in a separate container with the `kanban.Toolbar()` constructor.

The following code snippet creates a Toolbar bound to the Kanban instance:

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

Use the [`items`](api/config/toolbar_items_config.md) property to show, hide, or customize Toolbar controls. The following code snippet sets a custom searchbar, undo and redo controls, a custom sort, and column and row controls:

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
        "undo", // undo card operations in the history
        "redo", // redo card operations in the history
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
Remove a control from the `items` array to hide that control.
:::

## Example

The following snippet configures the cards, editor, and Toolbar of Kanban:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
