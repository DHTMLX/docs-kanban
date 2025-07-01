---
sidebar_label: cards
title: cards Config
description: You can learn about the cards config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# cards

### Description

@short: Optional. An array of objects containing the cards data

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

Each card can include the following parameters:

- `id` - (optional) card **ID** used to manage the card through related methods
- `label` - (optional) text label shown in the **Label** field
- `description` - (optional) description text shown in the **Description** field
- `progress` - (optional) progress bar value, ranging from 0 to 100, displayed in the **Progress bar** field
- `start_date` - (optional) start date as a Date object (avoid string dates), shown in the **Start date** field
- `end_date` - (optional) end date as a Date object (avoid string dates), shown in the **End date** field
- `attached` - (optional) array with details of attached files, shown in the **Attachment** field. Each object may include:
	- `id` - (required) attached file **ID**
    - `url` - (optional) file path
    - `previewURL` - (optional) preview image path
    - `coverURL` - (optional) image path set as cover
    - `name` - (optional) file name
    - `isCover` - (optional) when **true**, the cover image is loaded from the "coverURL"
- `color` - (optional) HEX color code representing the card's top line color
- `users` - (optional) either an **array** of user IDs for multiple users or a **string | number** for a single user. To assign users, define an array with user data in the [cardShape.users](../js_kanban_cardshape_config) property. Users appear in the **Users** field

:::info
`users?: array` - use an **array** of user **IDs** when using the [**multiselect**](../js_kanban_editorshape_config/#--parameters-for-combo-select-and-multiselect-types) editor type for multiple user assignments

`users?: string | number` - specify a single user **ID** when using the [**combo** or **select**](../js_kanban_editorshape_config/#--parameters-for-combo-select-and-multiselect-types) editor types for single user assignment
:::

- `priority` - (optional) priority **ID** of the card. Define an array of priorities in the [cardShape.priority](../js_kanban_cardshape_config) property. Displayed in the **Priority** field
- `css` - (optional) custom CSS styles for the card
- `votes` - (optional) array of user IDs who voted
- `comments` - (optional) array of comment objects with:
    - `id` - (required) comment **ID**
    - `userId` - (required) user **ID** of the commenter
    - `cardId` - (required) card **ID** the comment belongs to
    - `text` - (optional) comment text, which can include HTML markup
    - `date` - (optional) Date object representing when the comment was posted (not updated after edits)
- `custom_key` - (optional) any custom key for the card. This can be used to position the card within columns or rows, see the [columnKey](../js_kanban_columnkey_config) and [rowKey](../js_kanban_rowkey_config) properties

:::info
To load new card data dynamically, the [**parse()**](../../methods/js_kanban_parse_method) method can be used.
:::

### Example

~~~jsx {1-40,44}
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
                isCover: true
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
- [Working with data](/guides/working_with_data)
- [updateCard()](/api/methods/js_kanban_updatecard_method.md)

**Related sample:** [Kanban. Styling cards](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)
