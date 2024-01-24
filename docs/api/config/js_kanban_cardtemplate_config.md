---
sidebar_label: cardTemplate
title: cardTemplate Config
description: You can learn about the cardTemplate config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# cardTemplate

### Description

@short: Optional. Returns and applies a new HTML template of the card

### Usage

~~~jsx
function cardTemplate ({ cardFields, selected, dragging, cardShape }){
    return "HTML template of the card";
};
~~~

### Parameters

The callback function takes an object with the following parameters:

- `cardFields` - the data object of the card
- `selected` - the selecting state of the card
- `dragging` - the dragging state of the card
- `cardShape` - the configuration object of the card

:::important
If you need to include a context menu into the card template, specify a custom icon in the template markup and provide the `data-menu-id=${cardFields.id}` expression as shown in the example below.
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

**Change log:** The ability to display context menu was added in v1.4

**Related articles:** [Customization](../../../guides/customization#custom-cards)

**Related sample:** [Kanban. Custom card](https://snippet.dhtmlx.com/8rhdq81d?tag=kanban)