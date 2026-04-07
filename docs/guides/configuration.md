---
sidebar_label: Configuration
title: Configuration
description: You can learn about the configuration in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Configuration

You can configure the Kanban appearance and functionality via the following properties:

- [`cardShape`](api/config/js_kanban_cardshape_config.md) — configure cards appearance
- [`editorShape`](api/config/js_kanban_editorshape_config.md) — configure editor fields
- [`editor`](api/config/js_kanban_editor_config.md) — configure editor behavior
- [`columnShape`](api/config/js_kanban_columnshape_config.md) — configure columns appearance
- [`rowShape`](api/config/js_kanban_rowshape_config.md) — configure rows appearance
- [`renderType`](api/config/js_kanban_rendertype_config.md), [`scrollType`](api/config/js_kanban_scrolltype_config.md) — configure rendering and scrolling
- [`history`](api/config/js_kanban_history_config.md) — configure Kanban history
- [`readonly`](api/config/js_kanban_readonly_config.md) — enable or disable readonly mode
- [`currentUser`](api/config/js_kanban_currentuser_config.md) — set the current user ID for comments
- [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) — customize card appearance. See [Customization](guides/customization.md) for details.
- [`locale`](api/config/js_kanban_locale_config.md) — apply a locale. See [Localization](guides/localization.md) for details.
- [`cards`](api/config/js_kanban_cards_config.md), [`columns`](api/config/js_kanban_columns_config.md), [`rows`](api/config/js_kanban_rows_config.md), [`links`](api/config/js_kanban_links_config.md) — load data for cards, columns, rows, and links. See [Working with data](guides/working_with_data.md) for details.

## Cards

The Kanban board consists of cards distributed into columns and rows. Use the [`cardShape`](api/config/js_kanban_cardshape_config.md) property to configure the card appearance. Configure the following card fields:

- `label: boolean` — shows/hides the label field

    :::tip
    Activate `label` to show the corresponding input in the editor. Configure the input with the [`text`](#text-and-textarea-types) type.
    :::

- `description: boolean` — shows/hides the description field

    :::tip
    Activate `description` to show the corresponding input in the editor. Configure the input with the [`textarea`](#text-and-textarea-types) type.
    :::

- `progress: boolean` — shows/hides the progress bar

    :::tip
    Activate `progress` to show the progress control in the editor. Configure the control with the [`progress`](#progress-type) type.
    :::

- `start_date: boolean` — shows/hides the start date

- `end_date: boolean` — shows/hides the end date

    :::tip
    Activate `start_date` and `end_date` to show the corresponding date controls in the editor. Configure them with the [`date`](#date-and-daterange-types) type.
    :::

- `menu: boolean` — shows/hides the card context menu
- `attached: boolean` — shows/hides the attachment field

    :::tip
    Attach files to any card through the editor. Configure the field with the [`files`](#files-type) type.
    :::

- `color: boolean` — shows/hides the top color line

    :::tip
    Activate `color` to show the colorpicker in the editor. Configure the control with the [`color`](#color-type) type.
    :::

- `cover: boolean` — shows/hides the card cover (preview image)
- `comments: boolean` — shows/hides comments on the card

    :::tip
    Set the [`currentUser`](api/config/js_kanban_currentuser_config.md) property to enable comment editing. If you do not set it, comments are available for reading only.
    :::

- `confirmDeletion: boolean` — shows/hides the confirmation dialog for card deletion
- `votes: boolean | { show: boolean, clickable: boolean }` — shows/hides the votes functionality
- `users: boolean | { show: boolean, values: object, maxCount: number | false }` — shows/hides assigned users

    :::tip
    Use the [`combo` or `select`](#combo-select-and-multiselect-types) type to configure the editor control for assigning a single user. Use [`multiselect`](#combo-select-and-multiselect-types) to assign multiple users.
    :::

- `priority: boolean | { show: boolean, values: object }` — shows/hides the priority field

    :::tip
    Activate `priority` to show the priority control in the editor. Configure the control with the [`combo` or `select`](#combo-select-and-multiselect-types) type.
    :::

- `headerFields: [ { key: string, label: string, css: string } ]` — defines custom fields

The following code snippet configures `cardShape` with users, priorities, and a custom header field:

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
            label: "Custom field",
            css: "custom_css_class"
        }
    ]
};

new kanban.Kanban("#root", {
    // cards data
    columns,
    cards,
    // card settings
    cardShape
});
~~~

:::note
If you do not specify the card settings via the [`cardShape`](api/config/js_kanban_cardshape_config.md) property, the widget applies the [`defaultCardShape`](api/config/js_kanban_cardshape_config.md#default-config) parameters.
:::

## Columns

Use the [`columnShape`](api/config/js_kanban_columnshape_config.md) property to configure the column appearance. Configure the following fields:

- `menu` — configures the column context menu
- `fixedHeaders: boolean` — freezes column headers during vertical scroll (`true` by default)
- `css: function` — applies a CSS class to columns conditionally
- `headerTemplate` — HTML template for the column header in the expanded state
- `collapsedTemplate` — HTML template for the column header in the collapsed state
- `confirmDeletion: boolean` — shows/hides the confirmation dialog for column deletion

:::note
If you do not specify the column settings via the [`columnShape`](api/config/js_kanban_columnshape_config.md) property, the widget applies the default column configuration.
:::

## Rows

Use the [`rowShape`](api/config/js_kanban_rowshape_config.md) property to configure the row appearance. Configure the following fields:

- `menu` — configures the row context menu
- `css: function` — applies a CSS class to rows conditionally
- `confirmDeletion: boolean` — shows/hides the confirmation dialog for row deletion

:::note
If you do not specify the row settings via the [`rowShape`](api/config/js_kanban_rowshape_config.md) property, the widget applies the default row configuration.
:::

## Editor

:::info
Display the editor as a `sidebar` or `modal` using the [`editor.placement`](api/config/js_kanban_editor_config.md) property.
:::

The Kanban editor lets users manage card data. Use the [`editorShape`](api/config/js_kanban_editorshape_config.md) property to configure the editor fields. The following field types are available:

- [`combo`, `select`, `multiselect`](#combo-select-and-multiselect-types) — select values from a dropdown list
- [`color`](#color-type) — pick a color from a predefined palette
- [`text`, `textarea`](#text-and-textarea-types) — enter plain text or multiline text
- [`progress`](#progress-type) — set a progress bar value
- [`files`](#files-type) — attach files to a card
- [`date`, `dateRange`](#date-and-daterange-types) — pick a single date or a date range
- [`comments`](#comments-type) — add and manage comments
- [`links`](#links-type) — add and manage links

### Combo, select, and multiselect types

Use the `combo`, `select`, or `multiselect` type to add a dropdown selection field to the editor. The following code snippet uses the `combo` type to configure a priority selector:

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
For the `multiselect` and `combo` types, specify a path to the preview image via the `avatar` property:

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

Use the `color` type to add a colorpicker field to the editor.

The following code snippet uses the `color` type to configure the editor field for picking a card color:

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

Use the `text` or `textarea` type to add a single-line or multiline text input to the editor.

The following code snippet uses the `text` type to configure an editor input field for plain text:

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

Use the `progress` type to add a progress bar control to the editor.

The following code snippet uses the `progress` type to configure the editor field for tracking card progress:

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

Use the `files` type to add a file upload field to the editor. Set the `uploadURL` property as a string or a function.

#### Configure Upload URL as string

The following code snippet configures the file upload field with a static URL:

~~~jsx {4-15}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "files", 
            key: "attached", // use the "attached" key in the "cardShape" property
            label: "Attachment",
            uploadURL: url + "/uploads", // pass the upload URL as a string
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

#### Configure Upload URL as function

The following code snippet configures the file upload field with a function that handles authorization headers:

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

Use the `date` or `dateRange` type to add a date picker field to the editor.

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

The following code snippet uses the `dateRange` type to configure the editor field for setting a date range:

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

Use the `comments` type to add a comments section to the editor.

The following code snippet uses the `comments` type to configure the editor field for adding and managing comments:

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

Use the `links` type to add a link management field to the editor.

The following code snippet uses the `links` type to configure the editor field for adding and managing card links:

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

Link an editor field to a card field by setting a matching `key` in the [`editorShape`](api/config/js_kanban_editorshape_config.md) object.

:::info
Provide a matching `key` in the [`editorShape`](api/config/js_kanban_editorshape_config.md) object to link an editor field to a card field. Set this key to `true` in [`cardShape`](api/config/js_kanban_cardshape_config.md) for built-in fields, or specify it in the `headerFields` array for custom fields. You can also provide initial data for any field through this key.

The following code snippet links a custom `note` field in the editor to the `headerFields` configuration in `cardShape`:

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
If you do not specify the editor settings via the [`editorShape`](api/config/js_kanban_editorshape_config.md) property, the widget applies the [`defaultEditorShape`](api/config/js_kanban_editorshape_config.md#default-config) parameters. The default controls appear in the editor only after you activate the corresponding card fields via [`cardShape`](api/config/js_kanban_cardshape_config.md).
:::

### Configure the editor

Use the [`editor`](api/config/js_kanban_editor_config.md) property to control editor behavior. Configure the following parameters:

- `editor.show: boolean` — enables/disables the editor
- `editor.placement: "sidebar" | "modal"` — displays the editor as a sidebar or modal window
- `editor.autoSave: boolean` — enables/disables autosave mode
- `editor.debounce: number` — sets the delay for autosaving data (requires `autoSave: true`)

The following code snippet enables autosave with a custom delay:

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

The Toolbar includes a search bar and controls for sorting cards and adding columns and rows. Initialize it in a separate container using the `kanban.Toolbar()` constructor.

The following code snippet initializes the Toolbar in a separate container:

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

Use the `items` property to show, hide, or customize the Toolbar controls:

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

## Set readonly mode

Use the [`readonly`](api/config/js_kanban_readonly_config.md) property to disable editing, adding, selecting, or dragging cards. Set it to `true` to enable full readonly mode, or pass an object to control individual operations.

The following code snippet disables editing and selecting while keeping adding and dragging enabled:

~~~jsx
new kanban.Kanban("#root", {
    columns,
    cards,
    readonly: {
        edit: false,
        add: true,
        select: false,
        dnd: true
    }
});
~~~

## Example

The following snippet configures the **Cards**, **Editor**, and **Toolbar**:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
