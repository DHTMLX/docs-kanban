---
sidebar_label: updateCard()
title: updateCard Method
description: You can learn about the updateCard method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# updateCard()

### Description

@short: Modifies the card data using its ID

### Usage

~~~jsx {}
updateCard({
    id: string | number,
    card?: object,
    replace?: boolean
}): void;
~~~

### Parameters

- `id` - (required) the ID of the card to update
- `card` - (optional) the new data object for the card. You can find the complete list of card parameters [**here**](api/config/js_kanban_cards_config.md)
- `replace` - (optional) controls whether to completely replace the existing data

    :::note
    Setting the `replace` parameter to *true* will overwrite the old data entirely with the new one. If not set or false, only the provided fields will be updated.
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
- The **id** and **card** parameters were added in v1.1
- The **replace** parameter was added in v1.3