---
sidebar_label: cardTemplate
title: cardTemplate Config
description: Learn all about the cardTemplate config in the DHTMLX JavaScript Kanban library docs. Explore developer guides and API references, experiment with code samples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# cardTemplate

### Description

@short: Optional. Generates and applies a custom HTML template for the card.

### Usage

~~~jsx
function cardTemplate ({ cardFields, selected, dragging, cardShape }){
    return "HTML template of the card";
};
~~~

### Parameters

The callback function receives an object with these properties:

- `cardFields` - contains the card's data
- `selected` - indicates if the card is selected
- `dragging` - indicates if the card is being dragged
- `cardShape` - the card's configuration object

:::important
To add a context menu to the card template, include a custom icon in the markup and use the `data-menu-id=${cardFields.id}` attribute as shown in the example below.
:::

### Example

~~~jsx {1-23,28}
const cardTemplate = ({ cardFields, selected, dragging, cardShape }) => {
    const { label, color, id } = cardFields;
    if (selected) {
        return `
            <div class="custom-card" style="padding:20px">
                <div class="status-color" style="background:${color}"></div>
                <div data-menu-id=${id} >
                    <i class="wxi-dots-v"></i>
                </div>
                Selected:${label}
            </div>
        `;
    }
    return `
        <div class="custom-card" style="padding:20px">
            <div class="status-color" style="background:${color}"></div>
            <div data-menu-id=${id} >
                <i class="wxi-dots-v"></i>
            </div>
            ${label}
        </div>
    `;
}

new kanban.Kanban("#root", {
    cards,
    columns,
    cardTemplate: kanban.template(card => cardTemplate(card)),
    // other parameters
});
~~~

**Change log:** Context menu support was introduced in v1.4

**Related articles:** [Customization](/guides/customization#custom-cards)

**Related sample:** [Kanban. Custom card](https://snippet.dhtmlx.com/8rhdq81d?tag=kanban)
