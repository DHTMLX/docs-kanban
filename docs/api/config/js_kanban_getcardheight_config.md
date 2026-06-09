---
sidebar_label: getCardHeight
title: getCardHeight Config API
description: Read the getCardHeight configuration API for DHTMLX Kanban. Learn how to set a function that returns an estimated card height.
---

# getCardHeight

### Description

@short: Optional. A function that returns an estimated height of a card

The `getCardHeight` function is used by the widget to estimate card heights when the [`cardHeight`](api/config/js_kanban_cardheight_config.md) property is not set and the board is configured with [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) and [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md). The estimated heights let the widget render the scrollbar correctly before the actual cards are measured in the DOM.

:::info
If you set the [`cardHeight`](api/config/js_kanban_cardheight_config.md) property, the widget uses the fixed height and `getCardHeight` is not called. Setting `cardHeight` is the recommended way to combine `renderType: "lazy"` with `scrollType: "column"`.
:::

### Usage

~~~jsx {}
getCardHeight?: (cardShape: object, card: object, cardWidth: number) => number;
~~~

### Parameters

The callback function takes the following arguments:

- `cardShape` - the configuration object of the card (the [`cardShape`](api/config/js_kanban_cardshape_config.md) property)
- `card` - the data object of the card
- `cardWidth` - the current width of the card in pixels

The function must return a number — the estimated height of the card in pixels.

### Default config

By default, the widget uses a built-in function that approximates card height based on the visible fields declared in [`cardShape`](api/config/js_kanban_cardshape_config.md) and the data stored in the card. This default works for boards that rely on the built-in card layout.

If you provide a custom [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md), the built-in approximation can no longer predict the actual height of the rendered markup. In this case, specify a custom `getCardHeight` function that returns the height of the rendered template, or set a static [`cardHeight`](api/config/js_kanban_cardheight_config.md) instead.

### Example

The example below provides a custom `getCardHeight` function for a board with a custom card template:

~~~jsx {15-22,27}
const cardTemplate = ({ cardFields }) => {
    const { label, description } = cardFields;
    return `
        <div class="custom-card" style="padding:20px">
            <div class="custom-label">${label}</div>
            <div class="custom-description">${description || ""}</div>
        </div>
    `;
};

new kanban.Kanban("#root", {
    cards,
    columns,
    renderType: "lazy",
    scrollType: "column",
    cardTemplate: kanban.template(card => cardTemplate(card)),
    getCardHeight: (cardShape, card, cardWidth) => {
        // estimate the height of the custom template
        let height = 60; // base padding + label line
        if (card.description) {
            height += Math.ceil(card.description.length / 40) * 18;
        }
        return height;
    },
    // other parameters
});
~~~

**Related articles:** [Configuration](guides/configuration.md#rendering-and-scrolling)
