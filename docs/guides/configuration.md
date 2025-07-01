---
sidebar_label: Configuration
title: Configuration
description: You can learn about the configuration in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Configuration

The *Kanban* widget can be customized in both look and features using its API. There are a variety of options you can tweak, such as:

- Adjust how cards look with the [`cardShape`](/api/config/js_kanban_cardshape_config) property
- Set up the editor fields using the [`editorShape`](/api/config/js_kanban_editorshape_config) property
- Control the editor's behavior with the [`editor`](/api/config/js_kanban_editor_config) property
- Manage rendering and scrolling through [`renderType`](/api/config/js_kanban_rendertype_config) and [`scrollType`](/api/config/js_kanban_scrolltype_config)
- Keep track of changes with the [`history`](/api/config/js_kanban_history_config) property
- Personalize card appearance using the [`cardTemplate`](/api/config/js_kanban_cardtemplate_config) property
  - *(The [**Customization**](/guides/customization) section covers this in detail)*
- Change the language with the [`locale`](/api/config/js_kanban_locale_config) property
  - *(See [**Localization**](/guides/localization) for more info)*
- Load data for cards, columns, rows, and links through the corresponding [`cards`](/api/config/js_kanban_cards_config), [`columns`](/api/config/js_kanban_columns_config), [`rows`](/api/config/js_kanban_rows_config), and [`links`](/api/config/js_kanban_links_config) properties
  - *(Check out [**Working with data**](/guides/working_with_data) for more details)*

## Cards

In Kanban, cards are organized into columns and rows. You can control how cards look and what info they display using the [`cardShape`](/api/config/js_kanban_cardshape_config) property. There are several built-in fields you can choose to show or hide, including:

- Card label using the `label: boolean` option
- Card description using the `description: boolean` option

:::tip
Both the **label** and **description** fields can be edited through the Kanban editor. Turning them on will make the corresponding inputs visible automatically. These inputs are set up through the [**text** and **textarea**](#text-and-textarea-types) types.
:::

- Progress bar using `progress: boolean`

:::tip
The **progress** field can also be managed from the Kanban editor. If enabled, its control will show up automatically. This is configured using the [**progress**](#progress-type) type.
:::

- Start date with `start_date: boolean`
- End date with `end_date: boolean`

:::tip
Both **start date** and **end date** are managed with controls in the Kanban editor. If these are active, their controls will appear automatically. Use the [**date**](#date-and-daterange-types) type to set them up.
:::

- Card context menu using `menu: boolean`
- Attachments with `attached: boolean`

:::tip
Cards can have files attached through the Kanban editor. This is handled by the [**files**](#files-type) type.
:::

- Card color using `color: boolean`

:::tip
The **top color line** on a card is managed with a control in the Kanban editor. When **color** is enabled, a color picker will automatically appear. This uses the [**color**](#color-type) type.
:::

- Card cover image (preview) via `cover: boolean`
- Comments on cards using `comments: boolean`
- Confirmation dialog for deleting cards with `confirmDeletion: boolean`
- Votes on cards using `votes: boolean | { show: boolean, clicable: true }`
- User assignments using `users: boolean | { show: boolean, values: object, maxCount: number | false }`

:::tip
Assigning users to cards is done through a control in the Kanban editor. To let users pick just one assignee, use the [**combo** or **select**](#combo-select-and-multiselect-types) types. For multiple assignees, use the [**multiselect**](#combo-select-and-multiselect-types) type.
:::

- Priority field using `priority: boolean | { show: boolean, values: object }`

:::tip
Card **priority** can be set with a control in the Kanban editor. Turning on **priority** makes the control show up automatically. Only the [**combo** or **select**](#combo-select-and-multiselect-types) types are used here.
:::

- *Custom fields* can be added in `headerFields: [ { key: string, label: string, css: string } ]`

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
If you don't define your own card settings through [`cardShape`](/api/config/js_kanban_cardshape_config), Kanban will use the [**defaultCardShape**](/api/config/js_kanban_cardshape_config/#default-config) settings!
:::

## Editor

:::info
You can have the Editor show up as a **sidebar** or **modal window** by setting the [`editor.placement`](/api/config/js_kanban_editor_config) property!
:::

The Kanban *Editor* is where card details get managed. You can set up which fields show in the editor by using the [`editorShape`](/api/config/js_kanban_editorshape_config) property. The available field types include:

- [**combo**, **select**, and **multiselect**](#combo-select-and-multiselect-types)
- [**color**](#color-type)
- [**text** and **textarea**](#text-and-textarea-types)
- [**progress**](#progress-type)
- [**files**](#files-type)
- [**date** and **dataRange**](#date-and-daterange-types)
- [**comments**](#comments-type)
- [**links**](#links-type)

### Combo, Select and Multiselect types

Editor fields of these types are set up like this:

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
For editor fields of **"multiselect"** and **"combo"** you can include a preview image by setting the **avatar** property:

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

To set up a color picker in the editor, use:

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

Add text fields or multi-line inputs like this:

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

Progress bars in the editor are set like this:

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

Set up file uploads in the editor in two ways:

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
                            rec.id = data.id;
                            return data;
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

Add date pickers or date ranges like this:

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

For a date range:

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

Include a comments field in the editor like this:

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

To allow adding links in the editor, use:

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
To connect an editor field to a card field, set the **key** in the [`editorShape`](/api/config/js_kanban_editorshape_config) object (`key: "editor_field_key"`). For built-in card fields, make sure this key is set to *true* in [`cardShape`](/api/config/js_kanban_cardshape_config). For custom fields, add it to the **headerFields** array. You can also set the initial value for any field with this key.

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
If no editor settings are defined via [`editorShape`](/api/config/js_kanban_editorshape_config), the widget falls back to [**defaultEditorShape**](/api/config/js_kanban_editorshape_config/#default-config). The default inputs and controls will then only appear if you turn on the matching card fields in [`cardShape`](/api/config/js_kanban_cardshape_config).
:::

### Configuring the editor

You can tweak editor behavior using the [`editor`](/api/config/js_kanban_editor_config) property:

- Turn autosave on or off with *`editor.autoSave`*
- Set the autosave delay using *`editor.debounce`* (only works if ***autoSave: true*** is on)

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

The Kanban **Toolbar** comes with a search bar (for finding cards), controls for sorting, and buttons to add new columns or rows. To use the Toolbar, initialize it in a separate container using **kanban.Toolbar()**.

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

Toolbar controls can be shown, hidden, or customized with the **items** property:

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
If you want to hide some Toolbar controls, just remove their strings from the **items** array.
:::

## Example

Here's a snippet showing how to set up **Cards**, **Editor**, and **Toolbar** for Kanban:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
