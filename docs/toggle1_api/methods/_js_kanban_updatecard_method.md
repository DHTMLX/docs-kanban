<details>
<summary markdown="span"> <b>updateCard()</b> - updates the card data by its ID</summary>

### Usage

`updateCard: (data: object) => void;`

### Parameters

- `data: object` - the new data object of the current card

:::note
Note, the ID of the card to be updated is required. Other card parameters you can find here (!!! Добавить ссылочку).
:::

### Example

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
