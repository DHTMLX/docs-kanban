---
sidebar_label: items
title: items Config
description: You can learn about the (Toolbar) items config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# items

### Description

@short: Optional. An array with controls arranged on Toolbar of Kanban 

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

In the **items** array you can specify the following parameters:

:::info
#### To set a *default searchbar*, you can specify a `"search"` string.
#### To set a *custom searchbar*, you can specify an object with the following parameters:

- `type` - (required) a type of control (*"search"*)
- `options` - (optional) an array of objects, that define the search parameters. For each object (*search option*) you can specify the following parameters:
    - `id` - (required) a key of card field, by which the cards will be searched
    - `label` - (required) a name of option, used in  a dropdown list of the search bar selector
    - `searchRule` (optional) - a custom function that allows defining search rules. It takes the following arguments:
        - ***card*** - an object of the card data
        - ***value*** - a searched value, specified in the search bar
        - ***by*** - a key of card field, by which the cards will be searched
- `searchResult` - (optional) a template for displaying the custom search result

~~~jsx
items: [
    "search", // default searchbar
    // other controls
]

// or 

items: [
    { // custom searchbar
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
#### To set a *default sort control*, you can specify a `"sort"` string.
#### To set a *custom sort control*, you can specify an object with the following parameters:

- `type` - (required) a type of control (*"sort"*)
- `options` - (optional) an array of objects, that define the sort parameters. For each object (*sort option*) you can specify the following parameters:
    - `text` - (required) a name of option, used in a dropdown list of the sort selector
    - `by` - (optional) a key of card field, by which the cards will be sorted. This parameter can be set to the *string* or *function* value. The function needs to return the card field for sorting
    - `dir` - (optional) an order of sorting. The possible values are *"asc"* and *"desc"*

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
    },
    // other controls
]
~~~
:::

- `"spacer"` - an empty space between controls
- `"undo"` - a control for managing history (one click makes one step back)
- `"redo"` - a control for managing history (one click makes one step forward)
- `"addColumn"` - a control for adding new columns
- `"addRow"` - a control for adding new rows
- `custom_control` - (optional) custom control. Here you can specify the custom control(s) both as a **string** or **function**. See the [Customization](../../../guides/customization#custom-toolbar) section

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

- The *"Undo"* and *"Redo"* controls were added in v1.3
- The ***items.options[0].label*** parameter of the **sort** control was replaced by the ***items.options[0].text*** parameter in v1.4
- The ***items.searchResult*** parameter of the **"search"** control was added in v2.0

**Related articles:** [Configuration](../../../guides/configuration#toolbar) and [Customization](../../../guides/customization#custom-toolbar)

**Related sample:** [Kanban. Custom toolbar](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)
