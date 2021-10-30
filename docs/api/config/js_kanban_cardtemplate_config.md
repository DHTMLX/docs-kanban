---
sidebar_label: cardTemplate
title: JS Kanban cardTemplate property
description: You can learn about the cardTemplate property in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# cardTemplate

### Description

Returns and applies a new HTML **template** of the card

### Usage

```js
function cardTemplate({ data, selected, dragging, cardShape }) {
	return "HTML template of the card";
}
```
### Parameters

- `data: object` - gets the data object of the card
- `selected: boolean` - gets the selecting state of the card
- `dragging: boolean` - gets the dragging state of the card
- `cardShape: object` - gets the configuration object of the card

### Example

```jsx {26}
function cardTemplate({ data, selected, dragging, cardShape }) {
	const { label } = data;
	const cover = cardShape?.cover?.values?.find(
		color => color.id === data.cover
	);
	if (selected) {
		console.log(cardShape);
		return `
			<div class="custom-card" style="padding:20px">
				<div class="status-color" style="background:${cover.color}"></div>
				Selected:${label}
			</div>
		`;
	}else{
		return `
			<div class="custom-card" style="padding:20px">
				<div class="status-color" style="background:${cover.color}"></div>
				${label}
			</div>
		`;
	}
}

new kanban.Kanban("#root", {
	...,
	cardTemplate
});
```
