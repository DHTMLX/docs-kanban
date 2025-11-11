---
sidebar_label: cards
title: cards Config
description: Explore the cards configuration in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try live demos and code examples, and download a free 30-day trial of DHTMLX Kanban.
---

# cards

### Description

@short: Optional. An array of objects holding the cards data

### Usage

~~~jsx {}
cards?: [
    {
        id?: string | number,
        label?: string,
        description?: string,
        progress?: number,
        start_date?: Date,
        end_date?: Date,
        attached?: [
            {
                id: string | number,
                url?: string,
                previewURL?: string,
                coverURL?: string,
                name?: string,
                isCover?: boolean
                size?: number
            }, {...}
        ],
        color?: string,
        users?: array | string | number,
            // users?: array - for multiple users, if you use the "multiselect" editor type to assign users
            // users?: string | number - for a single user, if you use the "combo" or "select" editor type to assign a user
        priority?: string | number,
        css?: string,
        votes?: array,
        comments?: [
            {
                id: string | number,
                userId: string | number,
                cardId: string | number,
                text?: string,
                date?: Date,
            }, {...}
        ], 
        [custom_key: string]?: any
    }, {...} // other cards data
];
~~~

### Parameters

Each card can include the following parameters (data):

- `id` - (optional) the card's **ID**. This is used for managing the card through related methods
- `label` - (optional) the card's label, shown in the **Label** field
- `description` - (optional) a description for the card, displayed in the **Description** field
- `progress` - (optional) progress bar value from 0 to 100. Displayed in the **Progress bar** field
- `start_date` - (optional) a Date object representing the start date (avoid using string dates). Shown in the **Start date** field
- `end_date` - (optional) a Date object representing the end date (avoid using string dates). Shown in the **End date** field
- `attached` - (optional) an array of objects representing attached files. Shown in the **Attachment** field. Each object can include:
	- `id` - (required) the **ID** of the attached file
    - `url` - (optional) the file path
    - `previewURL` - (optional) path to the preview image
    - `coverURL` - (optional) path to the cover image
    - `name` - (optional) file name
    - `isCover` - (optional) if **true**, sets the cover image using the "coverURL"
    - `size` - (optional) file size in bytes
- `color` - (optional) a HEX color code, which sets the color of the card's top line
- `users` - (optional) either an **array** of user IDs for multiple assigned users or a **string | number** for a single assigned user. To assign users, define an array of user data in the [cardShape.users](api/config/js_kanban_cardshape_config.md) property. These users appear in the **Users** field

:::info
`users?: array` - use an **array** of user **ID**s when using the [**multiselect**](api/config/js_kanban_editorshape_config.md#--parameters-for-combo-select-and-multiselect-types) editor type to assign multiple users

`users?: string | number` - use a single **ID** when using the [**combo** or **select**](api/config/js_kanban_editorshape_config.md#--parameters-for-combo-select-and-multiselect-types) editor types to assign one user
:::

- `priority` - (optional) the card's priority **ID**. Define an array with priority data in the [cardShape.priority](api/config/js_kanban_cardshape_config.md) property. Displayed in the **Priority** field
- `css` - (optional) custom CSS styles for the individual card
- `votes` - (optional) an array of user IDs representing votes
- `comments` - (optional) an array of comment objects. Each comment can have:
    - `id` - (required) the comment's **ID**
    - `userId` - (required) user **ID** who posted the comment
    - `cardId` - (required) the card's **ID** the comment belongs to
    - `text` - (optional) the comment text, which may include HTML markup
    - `date` - (optional) a Date object representing when the comment was posted (not updated after edits)
- `custom_key` - (optional) custom keys for placing the card into specific columns or rows. See [columnKey](../js_kanban_columnkey_config) and [rowKey](api/config/js_kanban_rowkey_config.md) properties

:::info
To dynamically load new card data, you can use the [**setConfig()**](api/methods/js_kanban_setconfig_method.md) or [**parse()**](api/methods/js_kanban_parse_method.md) method!
:::

### Example

~~~jsx {1-41,45}
const cards = [
    {
        id: 1,
        label: "Integration with React",
        description: "Some description",
        progress: 25,
        start_date: new Date("02/24/2022"),
        end_date: new Date("02/24/2023"),
        attached: [
            {
                id: 234,
                url: "../assets/img-1.jpg",
                previewURL: "../assets/img-1.jpg",
                coverURL: "../assets/img-1.jpg",
                name: "img-1.jpg",
                isCover: true,
                size: 11979
            }, {...} // other attached files data
        ],
        color: "#65D3B3",
        users: [1,2],
        votes: [3,6,8],
        comments: [
            {
                id: 1,
                userId: 1,
                cardId: 1,
                text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. ",
                date: new Date(),
            }, {...} // other comments
        ],
        priority: 1,
        // custom field to place the card into the "feature" row 
        // the rowKey config needs to be set to the "type" value
        type: "feature",
        // custom field to place the card into the "backlog" column 
        // the columnKey config needs to be set to the "stage" value
        stage: "backlog",
        css: "red",
    }, {...} // other cards data
];

new kanban.Kanban("#root", {
    columns,
    cards,
    // other parameters
});
~~~

**Change log:** The ***css***, ***comments***, and ***votes*** parameters were introduced in v1.4

**Related articles:**
- [Working with data](guides/working_with_data.md)
- [updateCard()](api/methods/js_kanban_updatecard_method.md)

**Related sample:** [Kanban. Styling cards](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)