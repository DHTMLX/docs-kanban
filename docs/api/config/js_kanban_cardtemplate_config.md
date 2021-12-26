---
sidebar_label: cardTemplate
title: cardTemplate Config
description: You can learn about the cardTemplate config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# cardTemplate

### Description

@short: returns and applies a new HTML template of the card

### Usage

~~~jsx
function cardTemplate ({ cardFields, selected, dragging, cardShape }){
	return "HTML template of the card";
}
~~~

### Parameters

- `cardFields` - gets the data object of the card
- `selected` - gets the selecting state of the card
- `dragging` - gets the dragging state of the card
- `cardShape` - gets the configuration object of the card

### Example

~~~jsx {1-17,22}
function cardTemplate({ cardFields, selected, dragging, cardShape }){
	const { label, color } = cardFields;
	if (selected) {
		return `
			<div class="custom-card" style="padding:20px">
				<div class="status-color" style="background:${color}"></div>
				Selected:${label}
			</div>
		`;
	}
	return `
		<div class="custom-card" style="padding:20px">
			<div class="status-color" style="background:${color}"></div>
			${label}
		</div>
	`;
}

new kanban.Kanban("#root", {
	cards,
	columns,
	cardTemplate
	// other parameters
});
~~~

**Related articles:** [Customization](../../../guides/customization#custom-cards)
