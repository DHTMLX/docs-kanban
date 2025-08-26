---
sidebar_label: updateCard()
title: updateCard Method
description: Explore the updateCard method in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code examples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# updateCard()

### Description

@short: Updates a card's data by its ID

### Usage

~~~jsx {}
updateCard({
    id: string | number,
    card?: object,
    replace?: boolean
}): void;
~~~

### Parameters

- `id` - (required) the ID of the card to be updated
- `card` - (optional) an object containing the updated data for the card. A full list of card parameters is available [**here**](/api/config/js_kanban_cards_config)
- `replace` - (optional) controls whether the existing data is fully replaced

:::note
Setting `replace` to *true* will completely overwrite the old data with the new data. Otherwise, only the properties you provide will be updated.
:::

### Example

~~~jsx {7-16}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// update card data with the 1 ID
board.updateCard({
    id: 1,
    card: {
        label: "New Label",
        row: "feature",
        column: "inprogress",
        /*other parameters*/
    },
    replace: true
});
~~~

**Change log**:
- The **id** and **card** parameters were introduced in v1.1
- The **replace** parameter was added in v1.3
