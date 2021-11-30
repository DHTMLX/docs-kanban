---
sidebar_label: cardTemplate
title: Kanban cardTemplate property
description: You can learn about the cardTemplate property in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# cardTemplate

### Description

Returns and applies a new HTML **template** of the card

### Usage

```js
function cardTemplate({ cardFields, selected, dragging, cardShape }){
	return "HTML template of the card";
}
```
### Parameters

- `cardFields: object` - gets the data object of the card
- `selected: boolean` - gets the selecting state of the card
- `dragging: boolean` - gets the dragging state of the card
- `cardShape: object` - gets the configuration object of the card

### Example

```jsx {21}
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
	...,
	cardTemplate
});
```

**Related article:** [Customization](../../../guides/customization#custom-cards)
