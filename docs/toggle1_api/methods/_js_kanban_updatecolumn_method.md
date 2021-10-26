<details>
<summary markdown="span"> <b>updateColumn()</b> - updates the column data by its ID</summary>

### Usage

`updateColumn: (data: object) => void;`

### Parameters

- `data: object` - the new data object of the current column

:::note
Note, the ID of the column to be updated is required. Besides ID you can specify only the column label.
:::

### Example

```jsx
// update a label of the column with the "backlog" ID
kanban.updateColumn({
	id: "backlog",
	label: "New Column"
});
```
</details>
