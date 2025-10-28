---
sidebar_label: Configuration
title: Configuration
description: You can learn about the configuration in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Configuration

The *Kanban* board can be customized in both looks and features using its API. There are plenty of parameters to help set things up the way you want:

- Change how cards look using the [`cardShape`](api/config/js_kanban_cardshape_config.md) property
- Set up which fields appear in the editor with the [`editorShape`](api/config/js_kanban_editorshape_config.md) property
- Adjust how the editor works using the [`editor`](api/config/js_kanban_editor_config.md) property
- Choose how Kanban renders and scrolls with [`renderType`](api/config/js_kanban_rendertype_config.md) and [`scrollType`](api/config/js_kanban_scrolltype_config.md)
- Manage Kanban’s history through the [`history`](api/config/js_kanban_history_config.md) property
- Personalize card templates using [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md)
    - *For more details, check out the [**Customization**](guides/customization.md) section*
- Set the language with the [`locale`](api/config/js_kanban_locale_config.md) property
    - *For more about this, see the [**Localization**](guides/localization.md) section*
- Load cards, columns, rows, and links by passing data to the [`cards`](api/config/js_kanban_cards_config.md), [`columns`](api/config/js_kanban_columns_config.md), [`rows`](api/config/js_kanban_rows_config.md), and [`links`](api/config/js_kanban_links_config.md) properties
    - *More info can be found in the [**Working with data**](guides/working_with_data.md) section*

## Cards

On a Kanban board, *cards* are organized into *columns* and *rows*. The [`cardShape`](api/config/js_kanban_cardshape_config.md) property lets you decide what fields appear on each card. Some common fields you can toggle on or off include:

- Card label, using `label: boolean`
- Card description, using `description: boolean`

    :::tip
    The **label** and **description** fields can be edited right in the Kanban editor. If you turn these on, matching inputs will show up in the editor automatically. To fine-tune these inputs, you can use the [**text** and **textarea**](#text-and-textarea-types) field types.
    :::

- Card progress, with `progress: boolean`

    :::tip
    The **progress** field is controlled through the Kanban editor as well. If enabled, a matching control shows up in the editor. To customize it, use the [**progress**](#progress-type) type.
    :::

- Start date, using `start_date: boolean`
- End date, using `end_date: boolean`

    :::tip
    Both **start date** and **end date** fields are managed through the editor. If you enable them, controls appear automatically. To configure them, use the [**date**](#date-and-daterange-types) type.
    :::

- Card context menu, with `menu: boolean`
- Card attachment, using `attached: boolean`

    :::tip
    You can attach files to a card using the editor’s field. To set this up, use the [**files**](#files-type) type.
    :::

- Card color, with `color: boolean`

    :::tip
    The color line at the top of a card can be set in the editor. If **color** is enabled, a color picker appears in the editor. To adjust this, use the [**color**](#color-type) type.
    :::

- Card cover image, with `cover: boolean`
- Card comments, using `comments: boolean`
- Confirmation dialog for card deletion, with `confirmDeletion: boolean`
- Card voting, using `votes: boolean | { show: boolean, clicable: true }`
- Card assignment (users), with `users: boolean | { show: boolean, values: object, maxCount: number | false }`

    :::tip
    Assigning users to a card is done through the editor. To assign one user, use the [**combo** or **select**](#combo-select-and-multiselect-types) types. For multiple users, go with [**multiselect**](#combo-select-and-multiselect-types).
    :::

- Card priority, with `priority: boolean | { show: boolean, values: object }`

    :::tip
    Priorities can be managed through the editor too. With **priority** enabled, a control appears in the editor. Only [**combo** or **select**](#combo-select-and-multiselect-types) types work for this.
    :::

- *Custom fields*, using `headerFields: [ { key: string, label: string, css: string } ]`

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
If you don’t set up card fields using [`cardShape`](api/config/js_kanban_cardshape_config.md), Kanban will use its [**defaultCardShape**](api/config/js_kanban_cardshape_config.md#default-config) settings!
:::

## Editor

:::info
The Editor can show up as a **sidebar** or a **modal window**. Use the [`editor.placement`](api/config/js_kanban_editor_config.md) property to pick which one!
:::

The Kanban *Editor* is where card details are managed. To set up which fields show up in the editor, use the [`editorShape`](api/config/js_kanban_editorshape_config.md) property. Here are the editor field types you can use:

- [**combo**, **select**, and **multiselect**](#combo-select-and-multiselect-types)
- [**color**](#color-type)
- [**text** and **textarea**](#text-and-textarea-types)
- [**progress**](#progress-type)
- [**files**](#files-type)
- [**date** and **dataRange**](#date-and-daterange-types)
- [**comments**](#comments-type)
- [**links**](#links-type)

### Combo, Select and Multiselect types

Editor fields for **combo**, **select**, and **multiselect** are set up like this:

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
For **"multiselect"** and **"combo"** fields, you can also add a preview image using the **avatar** property:

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

To add a **color** picker field in the editor, set it up like this:

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

To add **text** or **textarea** fields to the editor, use this setup:

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

A **progress** field in the editor can be configured like this:

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

To let users attach files, set up a **files** field in one of two ways:

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

### Date and DateRange types

To add a **date** field to the editor:

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

For a **dateRange** field, use:

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

To enable **comments** in the editor:

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

To let users add **links** in the editor:

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
To connect an editor field to a card field, set the **key** in the [`editorShape`](api/config/js_kanban_editorshape_config.md) property (like `key: "editor_field_key"`). For built-in fields, that key should be set to *true* in [`cardShape`](api/config/js_kanban_cardshape_config.md). For custom fields, add it to the **headerFields** array. You can also use this key to set initial data for a field.

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
If you don’t set up editor fields with [`editorShape`](api/config/js_kanban_editorshape_config.md), Kanban uses its [**defaultEditorShape**](api/config/js_kanban_editorshape_config.md#default-config) settings. In this case, default controls and inputs only show up in the editor after you enable the matching card fields using [`cardShape`](api/config/js_kanban_cardshape_config.md).
:::

### Configuring the editor

The [`editor`](api/config/js_kanban_editor_config.md) property can be used to tweak how the editor works:

- Turn on/off autosave with *`editor.autoSave`*
- Set a delay for autosaving via *`editor.debounce`* (only works if ***autoSave: true*** is set)

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

The Kanban **Toolbar** includes a search bar for finding cards, as well as controls for sorting cards and adding new columns or rows. To show the Toolbar, initialize it in a separate container using **kanban.Toolbar()**.

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

Toolbar controls (showing, hiding, or customizing them) are managed through the **items** property:

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
To hide Toolbar controls, just remove their strings from the **items** array.
:::

## Example

Here’s a snippet that shows how to set up **Cards**, the **Editor**, and the **Toolbar** in Kanban:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>