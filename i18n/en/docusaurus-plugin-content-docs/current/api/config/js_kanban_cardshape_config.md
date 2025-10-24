---
sidebar_label: cardShape
title: cardShape Config
description: Explore the cardShape configuration in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, live demos, and grab a free 30-day trial of DHTMLX Kanban.
---

# cardShape

### Description

@short: Optional. Settings object to customize the appearance of cards

### Usage

~~~jsx {}
cardShape?: {
    label?: boolean | { show?: boolean },
    description?: boolean | { show?: boolean },
    progress?: boolean | { show?: boolean },
    attached?: boolean | { show?: boolean },
    cover?: boolean | { show?: boolean },
    comments?: boolean | { show?: boolean },
    confirmDeletion?: boolean | { show?: boolean },
    start_date?: boolean | { 
        show?: boolean,
        format?: string 
    },
    end_date?: boolean | { 
        show?: boolean,
        format?: string
    },
    color?: boolean | { 
        show?: boolean,
        values?: array  
    },
    menu?: boolean | {
        show?: boolean, 
        items?: [
            {
                id?: string,
                icon?: string,
                text?: string,
                disabled? boolean,
                onClick?: ({ id, item, card }) => void,
                data?: array // an array of menu subitems
            }, 
            {...}
        ] | ({ card, readonly }) => array | null
    },
    users?: boolean | {
        show?: boolean,
        values: [
            {
                id: string | number,
                label?: string,
                avatar?: string
            },
            {...} // other users data
        ],
        maxCount?: number | false
    },
    priority?: boolean | {
        show?: boolean,
        values?: [
            {
                id: string | number,
                label?: string,
                color: string
            },
            {...} // other priorities data
        ]
    },    
    votes?: boolean | { 
        show?: boolean,
        clickable?: boolean
    }, 
    css?: (card) => string,
    headerFields?: [
        {
            key: string,
            label?: string,
            css?: string
        },
        {...} // other fields data
    ]
};
~~~

### Parameters

:::info
Sometimes, parameters can be set using either a **short** or **extended** format. Here's how it looks:

~~~jsx {3,6}
    label: boolean | { show?: boolean }
    // short format
    label: true
    // or
    // extended format
    label: { show: true }
~~~
:::

The **cardShape** object lets you customize various aspects of the card's look through these options:

- `label` - (optional) toggles visibility of the **label** field
- `description` - (optional) toggles visibility of the **description** field
- `progress` - (optional) toggles visibility of the **progress** field
- `attached` - (optional) toggles visibility of the **attachment** field
- `cover` - (optional) toggles visibility of the **card image**
- `comments` - (optional) toggles visibility of **comments** on cards
- `confirmDeletion` - (optional) toggles the **confirmation dialog** for deleting cards
- `start_date` - (optional) settings for the **start date** field
    - `show` - (optional) toggles visibility of the start date
    - `format` - (optional) defines the date format, with options listed [here](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
- `end_date` - (optional) settings for the **end date** field
    - `show` - (optional) toggles visibility of the end date
    - `format` - (optional) defines the date format, with options listed [here](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
- `color` - (optional) settings for the **top color line** on the card
    - `show` - (optional) toggles visibility of the top color line
    - `values` - (optional) array of valid HEX color codes
- `menu` - (optional) settings for the **card context menu**, including:
    - `show` - (optional) enables or disables the context menu
    - `items` - (optional) array of menu item objects, each supporting:
        - `id` - (optional) menu item ID. Built-in actions include:
            - ***"set-edit"*** for editing the card name
            - ***"delete-card"*** for deleting the card
        - `icon` - (optional) icon class name (e.g., *mdi-delete*)
        - `text` - (optional) menu item label
        - `disabled` - (optional) boolean to enable or disable the item
        - `onClick` - (optional) callback function receiving:
            - ***id*** - current menu item ID
            - ***item*** - current menu item data object
            - ***card*** - target card data object
        - `data` - (optional) array of submenu items

    :::info
    You can also provide a function for `menu.items` that receives:
    - ***card*** - current card data object
    - ***readonly*** - readonly state properties ([details](api/internal/js_kanban_getstate_method.md))

    This function lets you customize or disable the menu for specific cards by returning an array or *null*/*false*:

    ~~~jsx {}
    items: ({ card, readonly }) => {
        if (card.id === 1){
            return false;
        }  

        const menu = [];

        if (!readonly.delete){
            menu.push({ 
                id: "delete-card", icon: "wxi-delete", label: "Delete"
            });
        }
            
        if (!readonly.edit){
            menu.push({ 
                id: "set-edit", icon: "wxi-edit", label: "Edit"
            });
        }
        return menu.length ? menu : null;
    }
    ~~~
    :::

- `users` - (optional) settings for the **users** field
    - `show` - (optional) toggles visibility of assigned users
    - `values` - (required) array of user objects, each including:
        - `id` - (required) user ID
        - `label` - (optional) user name
        - `avatar` - (optional) user avatar image path
    - `maxCount` - (optional) maximum number of users shown on the card, or ***false*** to show all

    You can specify a number for `maxCount` to limit how many users appear on a card. Setting it to `false` will display all assigned users.

    :::info
    The ***users*** field is off by default. To activate it, set `show` to `true` and provide user data in `values`. To assign users through the editor, configure the relevant control via the [`editorShape`](api/config/js_kanban_editorshape_config.md#--parameters-for-combo-select-and-multiselect-types) property. Use the ***select*** type for single user assignment or ***multiselect*** for multiple users.

    ~~~jsx {}
    cardShape: {
        users: {
            show: true,
            values: [
                { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
                { id: 2, label: "Aaron Short" }
            ],
            maxCount: 4 // only 4 users shown on the card
        }
    }
    ~~~
    :::

- `priority` - (optional) settings for the **priority** field
    - `show` - (optional) toggles visibility of the card priority
    - `values` - (optional) array of priority objects, each including:
        - `id` - (required) priority ID
        - `label` - (optional) priority name
        - `color` - (required) valid HEX color code
- `votes` - (optional) controls the **votes** feature
    - `show` - (optional) toggles visibility of the vote icon on cards and in the editor
    - `clickable` - (optional) if true, users can vote directly on the card; otherwise, voting is only available via the editor
- `css` - a function that returns a CSS class name to apply conditionally to cards
- `headerFields` - (optional) array of custom field objects, each with:
    - `key` - (required) custom field key, used in editor configuration via [editorShape](api/config/js_kanban_editorshape_config.md)
    - `label` - (optional) custom field label
    - `css` - (optional) CSS class for the custom field

:::info
If you don't specify card settings via **cardShape**, the widget uses the **defaultCardShape** parameters automatically.
:::

### Default config

~~~jsx {}
const defaultPriorities = [
    { id: 1, color: "#FE6158", label: "High" },
    { id: 2, color: "#F1B941", label: "Medium" },
    { id: 3, color: "#77D257", label: "Low" }
];

const defaultColors = ["#33B0B4", "#0096FA", "#F1B941"];

export const getDefaultCardMenuItems = ({ readonly }: { readonly: DataStore }) => {
    const { readonly } = readonly.getState();
    const baseItems = [
        { id: "duplicate-card", icon: "wxi-content-copy", text: "Duplicate" },
        { id: "delete-card", icon: "wxi-delete-outline", text: "Delete" }
    ];

    if (!readonly?.select && readonly?.edit) {
        return [
            { id: "set-edit", icon: "wxi-edit-outline", text: "Edit" },
            ...baseItems,
        ];
    }
    return baseItems;
};

const defaultCardShape = {
    label: { show: true },
    description: { show: false },
    progress: { show: false },
    start_date: { show: false },
    end_date: { show: false },
    users: { show: false },
    confirmDeletion: { show: true },
    priority: { 
        show: false,
        values: defaultPriorities
    },
    color: { 
        show: false,
        values: defaultColors
    },
    cover: { show: false },
    attached: { show: false },
    menu: { show: true }
};
~~~

### Example

~~~jsx {14-49,54}
const users = [ // users data
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // card priority data
    { id: 1, color: "#FF5252", label: "high" },
    { id: 2, color: "#FFC975", label: "medium" },
    { id: 3, color: "#0AB169", label: "low" }
];

const cardColors = ["#65D3B3", "#FFC975", "#58C3FE"];

const cardShape = { // card settings
    label: true,
    description: true,
    progress: true,
    start_date: true,
    end_date: true,
    menu: true,
    attached: true,
    cover: false,
    comments: false,
    confirmDeletion: false,
    color: {
        show: true,
        values: cardColors
    },
    users: {
        show: true,
        values: users,
        maxCount: false
    },
    priority: {
        show: true,
        values: cardPriority
    },
    votes: {
        show: true,
        clickable: true
    },
    css: (card) => card.type == "feature" ? "green" : "red",
    headerFields: [
        {   // custom field
            key: "sprint",
            css: "custom_style",
            label: "Sprint"
        }
    ]
};

new kanban.Kanban("#root", {
    cards,
    columns,
    cardShape,
    // other parameters
});
~~~

**Change log:**
- Added ***comments***, ***css***, and ***votes*** parameters in v1.4
- Replaced ***menu.items[0].label*** with ***menu.items[0].text*** in v1.4
- Replaced ***menu.items[0].items*** with ***menu.items[0].data*** in v1.4
- Introduced ***users.maxCount*** and ***votes.clickable*** in v1.6
- Removed ***menu.items[0].label*** and ***menu.items[0].items*** in v1.7
- Updated ***menu.items*** function: replaced **store** parameter with **readonly** in v1.7

**Related articles:** [Configuration](guides/configuration.md#cards)

**Related samples:**
- [Kanban. Swimlanes, comments, votes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
- [Kanban. Highlighting outdated and active tasks](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban)
- [Kanban. Styling cards](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)
- [Kanban. Unlimited user assignments per task](https://snippet.dhtmlx.com/w205dvzg?tag=kanban)