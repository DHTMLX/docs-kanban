---
sidebar_label: cardShape
title: cardShape Config
description: Explore the cardShape config in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code samples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# cardShape

### Description

@short: Optional. Settings object that controls how cards look.

### Usage

```jsx {}
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
                onClick?: ({ id, item, card }) => void
            },
            {...}
        ] | ({ card, store }) => array | boolean
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
```

### Parameters

:::info
Sometimes, parameters can be set using a **short** or **extended** form. For example:

```jsx {3,6}
    label: boolean | { show?: boolean }
    // short form
    label: true
    // or
    // extended form
    label: { show: true }
```

:::

The **cardShape** object lets you control how cards appear by configuring these fields:

- `label` - (optional) toggles the **label** field visibility
- `description` - (optional) toggles the **description** field visibility
- `progress` - (optional) toggles the **progress** field visibility
- `attached` - (optional) toggles the **attachment** field visibility
- `cover` - (optional) toggles the **card picture** visibility
- `comments` - (optional) toggles displaying **comments** on cards
- `confirmDeletion` - (optional) toggles the **confirmation dialog** for card deletion
- `start_date` - (optional) configures the **start date** field
  - `show` - (optional) toggles the start date visibility
  - `format` - (optional) sets the date format. See available options [here](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
- `end_date` - (optional) configures the **end date** field
  - `show` - (optional) toggles the end date visibility
  - `format` - (optional) sets the date format. See available options [here](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
- `color` - (optional) configures the **top color line** of the card
  - `show` - (optional) toggles the color line visibility
  - `values` - (optional) an array of HEX color codes
- `menu` - (optional) configures the **card context menu**
  - `show` - (optional) enables or disables the context menu
  - `items` - (optional) an array of menu item objects with these properties:
    - `id` - (optional) menu item ID. Use these for built-in actions:
  - **_"set-edit"_** - edit card name
  - **_"delete-card"_** - delete card - `icon` - (optional) icon class name (e.g., _mdi-delete_) - `text` - (optional) menu item label - `disabled` - (optional) enables or disables the menu item - `onClick` - (optional) callback function receiving:
  - **_id_** - menu item ID
  - **_item_** - menu item data
  - **_card_** - target card data

:::info
You can also provide a custom function for `items` that receives:

- **_card_** - current card data
- **_store_** - _dataStore_ object

This lets you customize or hide the menu for specific cards by returning _null_ or _false_:

```jsx {}
items: ({ card, store }) => {
  if (card.id === 1) return false;
  return [
    { id: "set-edit", icon: "wxi-edit", label: "Edit" },
    { id: "delete-card", icon: "wxi-delete", label: "Delete" },
  ];
};
```

:::

- `users` - (optional) configures the **users** field
  - `show` - (optional) toggles assigned users visibility
  - `values` - (required) array of user objects:
    - `id` - (required) user ID
    - `label` - (optional) user name
    - `avatar` - (optional) path to user avatar
  - `maxCount` - (optional) max number of users shown on a card or **_false_** for unlimited

  Setting `maxCount` controls how many assigned users appear on the card. Setting it to `false` displays all assigned users.

:::info
The **_users_** field is off by default. To enable it, set `show` to `true` and provide user data in `values`. To assign users via the editor, configure the appropriate control in [`editorShape`](/api/config/js_kanban_editorshape_config.md#--parameters-for-combo-select-and-multiselect-types). Use **_select_** for single user or **_multiselect_** for multiple users.

```jsx {}
  cardShape: {
    users: {
      show: true,
      values: [
        { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
        { id: 2, label: "Aaron Short" }
      ],
  maxCount: 4 // limits display to 4 users per card
  }
  }
```

:::

- `priority` - (optional) configures the **priority** field
  - `show` - (optional) toggles priority visibility
  - `values` - (optional) array of priority objects:
    - `id` - (required) priority ID
    - `label` - (optional) priority name
    - `color` - (required) HEX color code
- `votes` - (optional) configures **votes** feature
  - `show` - (optional) toggles vote icon on cards and in editor
  - `clickable` - (optional) if `true`, users can vote by clicking the icon on the card; otherwise, voting is only possible via the editor
- `css` - function returning a CSS class to conditionally style cards
- `headerFields` - (optional) array of objects defining **custom fields**
  - `key` - (required) custom field key, used when configuring the editor via [editorShape](../js_kanban_editorshape_config)
  - `label` - (optional) custom field label
  - `css` - (optional) CSS class for the custom field

:::info
If you don't set card options via **cardShape**, default parameters from **defaultCardShape** will apply.
:::

### Default config

```jsx {}
const defaultPriorities = [
    { id: 1, color: "#FE6158", label: "High" },
    { id: 2, color: "#F1B941", label: "Medium" },
    { id: 3, color: "#77D257", label: "Low" }
];

const defaultColors = ["#33B0B4", "#0096FA", "#F1B941"];

export const getDefaultCardMenuItems = ({ store }: { store: DataStore }) => {
    const { readonly } = store.getState();
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
```

### Example

```jsx {14-49,54}
const users = [
  // sample users data
  { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
  { id: 2, label: "Aaron Short" },
];

const cardPriority = [
  // sample priority data
  { id: 1, color: "#FF5252", label: "high" },
  { id: 2, color: "#FFC975", label: "medium" },
  { id: 3, color: "#0AB169", label: "low" },
];

const cardColors = ["#65D3B3", "#FFC975", "#58C3FE"];

const cardShape = {
  // card display settings
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
    values: cardColors,
  },
  users: {
    show: true,
    values: users,
    maxCount: false,
  },
  priority: {
    show: true,
    values: cardPriority,
  },
  votes: {
    show: true,
    clickable: true,
  },
  css: (card) => (card.type == "feature" ? "green" : "red"),
  headerFields: [
    {
      // custom field example
      key: "sprint",
      css: "custom_style",
      label: "Sprint",
    },
  ],
};

new kanban.Kanban("#root", {
  cards,
  columns,
  cardShape,
  // other parameters
});
```

**Change log:**

- The **_comments_**, **_css_**, and **_votes_** options were added in v1.4
- The **_menu.items[0].label_** option was renamed to **_menu.items[0].text_** in v1.4
- The **_users.maxCount_** and **_votes.clickable_** options were added in v1.6

**Related articles:** [Configuration](/guides/configuration#cards)

**Related samples:**

- [Kanban. Swimlanes, comments, votes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
- [Kanban. Highlighting outdated and active tasks](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban)
- [Kanban. Styling cards](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)
- [Kanban. Unlimited user assignments per task](https://snippet.dhtmlx.com/w205dvzg?tag=kanban)
