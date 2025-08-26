---
sidebar_label: items
title: items Config
description: Explore the (Toolbar) items config in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, code examples, live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# items

### Description

@short: Optional. An array containing controls arranged on the Kanban Toolbar.

### Usage

~~~jsx {}
items?: [
    "search" | {
        // search parameters
        type: "search",
        options?: [
            {
                id: string,
                label: string,
                searchRule?: (card, value, by) => {
                    return boolean
                }
            }, {...}
        ],
        resultTemplate?: template(searchResult => {
            return "The HTML template of the search result";
        }) 
    },
    "sort" | {
        // sort parameters
        type: "sort",
        options?: [
            {    
                text: string,
                by?: string, // by?: ((card: object) => any),
                dir?: "asc" | "desc"
            }, {...}
        ]  
    },
    "spacer",
    "undo",
    "redo",
    "addColumn",
    "addRow",
    custom_control // string or function
];
~~~

### Parameters

In the **items** array, you can include the following parameters:

:::info
#### To add a *default search bar*, just use the string `"search"`.
#### To configure a *custom search bar*, provide an object with these parameters:

- `type` - (required) specifies the control type (*"search"*)
- `options` - (optional) an array defining search parameters. Each object (*search option*) can include:
    - `id` - (required) the card field key used for searching
    - `label` - (required) the option name displayed in the search bar's dropdown
    - `searchRule` (optional) - a custom function to define search criteria. It receives:
  - ***card*** - the card data object
  - ***value*** - the search input value
  - ***by*** - the card field key used for searching
- `searchResult` - (optional) a template for customizing how search results appear

~~~jsx
items: [
    "search", // default search bar
    // other controls
]

// or 

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
    // other controls
]
~~~
:::

:::info
#### To add a *default sort control*, just use the string `"sort"`.
#### To configure a *custom sort control*, provide an object with the following parameters:

- `type` - (required) specifies the control type (*"sort"*)
- `options` - (optional) an array defining sort parameters. Each object (*sort option*) can include:
    - `text` - (required) the option name shown in the sort dropdown
    - `by` - (optional) the card field key or a function used for sorting
    - `dir` - (optional) the sort direction, either *"asc"* or *"desc"*

~~~jsx
items: [
    "sort", // default sort control
    // other controls
]
// or 
items: [
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
    }, {...} // other controls
]
~~~
:::

- `"spacer"` - inserts an empty space between controls
- `"undo"` - control to undo actions (one click steps back)
- `"redo"` - control to redo actions (one click steps forward)
- `"addColumn"` - control to add new columns
- `"addRow"` - control to add new rows
- `custom_control` - (optional) a custom control, which can be a **string** or **function**. For details, see the [Customization](/guides/customization/#custom-toolbar) section.

### Example

~~~jsx {8-24}
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

new kanban.Toolbar("#toolbar", {
    api: board.api,
    items: [
        {
            type: "search",
            resultTemplate: kanban.template(searchResult => {
                return `<div class="list-item">
                            <div class="list-item-text">${searchResult.result.label}</div>
                            ${searchResult.result.description ? `<div class="list-item-text item-description">${searchResult.result.description}</div>` : ""}
                        </div>`
            })
        },
        "spacer",
        "sort",
        "undo",
        "redo", 
        "addColumn",
        "addRow"
    ]
});
~~~

**Change log:**

- The *"Undo"* and *"Redo"* controls were introduced in v1.3
- The ***items.options[0].label*** parameter in the **sort** control was renamed to ***items.options[0].text*** in v1.4
- The ***items.searchResult*** parameter for the **"search"** control was added in v1.6

**Related articles:** [Configuration](/guides/configuration/#toolbar) and [Customization](/guides/customization/#custom-toolbar)

**Related sample:**
- [Kanban. Custom toolbar](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)
- [Kanban. Customization of suggestions in search results](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban)
