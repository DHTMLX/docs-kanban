---
sidebar_label: Toggle2 API overview
title: Toggle2 API Overview
description: You can have an API overview of the JavaScript Kanban library in the documentation. Browse developer guides and API reference, try out code examples and live demos.
---

# API overview

## Constructor

~~~js
const { Kanban } = app;
const kanban = new Kanban("#root", {
	columns,
    cards
});
~~~

Parameters:

- an HTML container (or the ID of an HTML container)
- a hash of config options (check below)

## JS Kanban Methods

<details>
<summary markdown="span"><b>addCard()</b> - adds a new card into JS Kanban</summary>

### addCard()

```
addCard: ({
	rowId: string,
	colId: string,
	overCardId: string,
	card: object
}) => void;
```

<h3>Parameters</h3>

- `rowId: string` - the **ID** of the target row
- `colId: string` - the **ID** of the target column
- `overCardId: string` - the **ID** of the card, before which the new card will be placed
- `card: object` - the data object of the new card

<h3>Example</h3>

```jsx
	// add new card into the "backlog" column
	kanban.addCard({
		colId: "backlog",
		card: { label: "New card" }
	});
```
</details>

<details>
<summary markdown="span"><b>addColumn()</b> - adds a new column into JS Kanban</summary>

### addColumn()

`addColumn: () => void;`

<h3>Example</h3>

```jsx
// add new column
kanban.addColumn();
```
</details>

<details>
<summary markdown="span"><b>addRow()</b> - adds a new row into JS Kanban</summary>

### addRow()

`addRow: () => void;`

<h3>Example</h3>

```jsx
// add new row
kanban.addRow();
```
</details>

<details>
<summary markdown="span"> <b>deleteCard()</b> - removes the specified card from datastore of JS Kanban</summary>

### deleteCard()

`deleteCard: ({ id: string }) => void;`

<h3>Parameters</h3>

- `id: string` - the **ID** of the card to be deleted

<h3>Example</h3>

```jsx
// remove card by its id
kanban.deleteCard({ id: "1" });
```
</details>

<details>
<summary markdown="span"> <b>destructor()</b> - removes all HTML elements of the JS Kanban, and detaches all related events</summary>

### destructor()

`destructor: () => void;`

<h3>Example</h3>

```jsx
// remove JS Kanban
kanban.destructor();
```
</details>

<details>
<summary markdown="span"> <b>getAreaCards()</b> - gets the array of the data objects of all cards of the column</summary>

### getAreaCards()

`getAreaCards: ( colId: string, rowId: string ) => array;`

<h3>Parameters</h3>

- `colId: string` - the **ID** of the target column (*mandatory*)
- `rowId?: string` - the **ID** of the target row

<h3>Returns</h3>

The method returns the object array of the cards

:::info
If JS Kanban includes **columns** without **rows**, the method requires only the ***colId*** parameter. In this case, the method returns the array of the data objects of all cards of this column.

If JS Kanban includes **columns** and **rows**, the method requires both the ***colId*** and ***rowId*** parameters. In this case, the method returns the array of the data objects of the cards of only these column and row.
:::

<h3>Example</h3>

```jsx
// get the array of the data objects of the cards of the specified column and row
kanban.getAreaCards("column_id", "row_id");
```
</details>

<details>
<summary markdown="span"> <b>getCard()</b> - gets the data object of the card with the specified ID</summary>

### getCard()

`getCard: (id: any) => object;`

<h3>Parameters</h3>

- `id: any` - the **ID** of the target card

<h3>Returns</h3>

The method returns the data object of the card with the specified ID

<h3>Example</h3>

```jsx
// get the data object of the card by its ID
kanban.getCard("card_id");
```
</details>

<details>
<summary markdown="span"> <b>getSelection()</b> - gets an array of IDs of the selected cards</summary>

### getSelection()

`getSelection: () => array;`


<h3>Returns</h3>

The method returns an array of IDs of the selected cards

<h3>Example</h3>

```jsx
// get an array of IDs of the selected cards
kanban.getSelection();
```
</details>

<details>
<summary markdown="span"> <b>moveCard()</b> - Moves the card to the specified column (and row)</summary>

### moveCard()

```
moveCard: ({
	id: string,
	colId: string,
	rowId: string,
	overCardId: string
}) => void;
```

<h3>Parameters</h3>

- `id: string` - the **ID** of the card that is moved
- `colId: string` - the **ID** of the target column the card is placed
- `rowId: string` - the **ID** of the target row the card is placed
- `overCardId: string` - the **ID** of the card, before which the new card is placed  

<h3>Example</h3>

```jsx
// move the card with an "1" ID
// the item will be placed in the "inprogress" column and "feature" row,  before the card with "8" ID
kanban.moveCard({
	id: 1,
	colId: "inprogress",
	rowId: "feature",
	overCardId: 8
});
```
</details>

<details>
<summary markdown="span"> <b>parse()</b> - parses data into JS Kanban</summary>

### parse()

`parse: ({
	column: object,
	row: object,
	cards: object
}) => void;`

<h3>Parameters</h3>

- `column: object` - the object of the columns data
- `row: object` - the object of the rows data
- `cards: object` - the object of the cards data

<h3>Details</h3>

:::info
To parse data via the **parse()** method, you need to reset initial data in the constructor of JS Kanban.

```jsx
const kanban = new Kanban("kanban_container", {
	// resets initial data, to parse new ones
	columns: [],
	cards: [],
	rows: []
});
```
:::

<h3>Example</h3>

```jsx
// parse data into JS Kanban
kanban.parse({
	columns,
	rows,
	cards
});
```
</details>

<details>
<summary markdown="span"> <b>removeSearch()</b> - Clears highlighting and *removes values of the search bar?*</summary>

### removeSearch()

`removeSearch: () => void;`

<h3>Example</h3>

```jsx
// clear highlighting and removes the search bar value
kanban.removeSearch();
```
</details>

<details>
<summary markdown="span"> <b>selectCard()</b> - selects the card by its ID</summary>

### selectCard()

`selectCard: ({ id: string, groupMode: boolean }) => void;`

<h3>Parameters</h3>

- `id: string` - the **ID** of the selected card
- `groupMode: boolean` - ???

<h3>Details</h3>

...

<h3>Example</h3>

```jsx
// select the card by its ID
kanban.selectCard({
	id: 1,
	groupMode: true
});
```
</details>

<details>
<summary markdown="span"> <b>serialize()</b> - serializes JS Kanban data to JSON</summary>

### serialize()

`serialize: () => object;`

<h3>Returns</h3>

The method returns the object of JS Kanban data  

```jsx
{
	cards: [{...}, {...}, ...],
	rows: [{...}, {...}, ...],
	columns: [{...}, {...}, ...]
}
```

<h3>Example</h3>

```jsx
// get the object of the JS Kanban data
kanban.serialize();
```
</details>

<details>
<summary markdown="span"> <b>setConfig()</b> - Sets the configuration parameters of the JS Kanban widget </summary>

### setConfig()

`setConfig: (config: object) => void;`

<h3>Parameters</h3>

- `config: object` - the object of the JS Kanban configuration

<h3>Details</h3>

Using this method, you can set the configuration parameters of the JS Kanban widget as well as load data to it.

<h3>Example</h3>

```jsx
// set the configuration parameters of the JS Kanban widget
kanban.setConfig({
	editorAutoSave: false,
	stage: "stage",
	lane: "type",
	cardShape,
	editorShape,
	/*other parameters*/
});
```
</details>

<details>
<summary markdown="span"> <b>setLocale()</b> - sets new locale to the JS Kanban widget</summary>

### setLocale()

`setLocale: (data: object) => void;`

<h3>Parameters</h3>

- `data: object` - the data object of the new locale (built in or custom)

<h3>Details</h3>

Using this method, you can set a built-in locale as well as a custom one.

<h3>Example</h3>

```jsx
const { Kanban, en, ru, cn } = app;
const kanban = new Kanban("#root", {
	columns,
    cards
});

// set ru locale
kanban.setLocale(ru);
```
</details>

<details>
<summary markdown="span"> <b>setSearch()</b> - looks for the needed cards by the required parameters</summary>

### setSearch()

`setSearch: ({ value: string, by: string }) => void;`

<h3>Parameters</h3>

- `value: string` - the value to search
- `by: string` - the card field for searching

<h3>Details</h3>

Using this method, you can search for the needed cards by the required parameter.

<h3>Example</h3>

```jsx
// highlight the cards that match the parameters
kanban.setSearch({ value: "Integration", by: "label" });
```
</details>

<details>
<summary markdown="span"> <b>unselectCard()</b> - unselects card(s) by its ID</summary>

### unselectCard()

`unselectCard: ({ id: string }) => void;`

<h3>Parameters</h3>

- `id: string` - the **ID** of the card to be unselected

<h3>Details</h3>

To unselect all cards, call the **unselectCard()** method without parameters.

<h3>Example</h3>

```jsx
// unselect the card whth the "1" ID
kanban.unselectCard({ id: "1" });
```
</details>

<details>
<summary markdown="span"> <b>updateCard()</b> - updates the card data by its ID</summary>

### updateCard()

`updateCard: (data: object) => void;`

<h3>Parameters</h3>

- `data: object` - the new data object of the current card

:::note
Note, the ID of the card to be updated is required. Other card parameters you can find here (!!! Добавить ссылочку).
:::

<h3>Example</h3>

```jsx
// update data of the card with the "1" ID
kanban.updateCard({
	id: "1",
	label: "New Label",
	lane: "task",
	stage: "inprogress"
	/*other parameters*/
});
```
</details>

<details>
<summary markdown="span"> <b>updateColumn()</b> - updates the column data by its ID</summary>

### updateColumn()

`updateColumn: (data: object) => void;`

<h3>Parameters</h3>

- `data: object` - the new data object of the current column

:::note
Note, the ID of the column to be updated is required. Besides ID you can specify only the column label.
:::

<h3>Example</h3>

```jsx
// update a label of the column with the "backlog" ID
kanban.updateColumn({
	id: "backlog",
	label: "New Column"
});
```
</details>

<details>
<summary markdown="span"> <b>updateRow()</b> - updates the row data by its ID </summary>

### updateRow()

`updateRow: (data: object) => void;`

<h3>Parameters</h3>

- `data: object` - the new data object of the current row

:::note
Note, the ID of the row to be updated is required. Besides ID you can specify only the row label.
:::

<h3>Example</h3>

```jsx
// update a label of the row with the "feature" ID
kanban.updateRow({
	id: "feature",
	label: "New Row"
});
```
</details>

## JS Kanban Inner Methods
... List of Methods

## JS Kanban Properties
... List of Properties
