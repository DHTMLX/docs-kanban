---
sidebar_label: items
title: items Config
description: Explore the (Toolbar) items configuration in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# items

### Description

@short: Optional. An array containing controls arranged on the Kanban Toolbar

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

The **items** array accepts the following options:

:::info
#### To use a *default search bar*, simply specify the `"search"` string.
#### To use a *custom search bar*, provide an object with these properties:

- `type` - (required) control type (*"search"*)
- `options` - (optional) an array defining search parameters. Each object (*search option*) can include:
    - `id` - (required) key of the card field to search by
    - `label` - (required) name shown in the search bar selector dropdown
    - `searchRule` (optional) - a custom function to define search logic. It receives:
        - ***card*** - the card data object
        - ***value*** - the search input value
        - ***by*** - the card field key being searched
- `searchResult` - (optional) a template for customizing search result display

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
#### To use a *default sort control*, just specify the `"sort"` string.
#### To use a *custom sort control*, provide an object with these options:

- `type` - (required) control type (*"sort"*)
- `options` - (optional) an array defining sort parameters. Each object (*sort option*) can include:
    - `text` - (required) name shown in the sort selector dropdown
    - `by` - (optional) card field key to sort by, either a *string* or *function* returning the field
    - `dir` - (optional) sort direction, either *"asc"* or *"desc"*

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

- `"spacer"` - adds empty space between controls
- `"undo"` - control for undoing the last action (one click steps back)
- `"redo"` - control for redoing the last undone action (one click steps forward)
- `"addColumn"` - control for adding new columns
- `"addRow"` - control for adding new rows
- `custom_control` - (optional) custom control(s) can be added as a **string** or **function**. See the [Customization](guides/customization.md#custom-toolbar) section for details.

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
- The ***items.options[0].label*** parameter for the **sort** control was renamed to ***items.options[0].text*** in v1.4
- The ***items.searchResult*** parameter for the **"search"** control was added in v1.6

**Related articles:** [Configuration](guides/configuration.md#toolbar) and [Customization](guides/customization.md#custom-toolbar)

**Related samples:**
- [Kanban. Custom toolbar](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)
- [Kanban. Customization of suggestions in search results](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban)