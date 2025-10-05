---
sidebar_label: updateCard()
title: updateCard Method
description: You can learn about the updateCard method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# updateCard()

### Description

@short: Updates the card data by its ID

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
- `card` - (optional) the new data object of the card. The full list of the card parameters can be found [**here**](api/config/js_kanban_cards_config.md)
- `replace` - (optional) enables/disables fully data replacing

    :::note
    If you set the `replace` parameter to *true*, the old data will be fully replaced by the new ones. Otherwise, the method will update only the values you passed.
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
