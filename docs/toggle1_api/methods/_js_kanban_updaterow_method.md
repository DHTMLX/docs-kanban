<details>
<summary markdown="span"> <b>updateRow()</b> - updates the row data by its ID</summary>

### Usage

`updateRow: (data: object) => void;`

### Parameters

- `data: object` - the new data object of the current row

:::note
Note, the ID of the row to be updated is required. Besides ID you can specify only the row label.
:::

### Example

```jsx
// update a label of the row with the "feature" ID
kanban.updateRow({
	id: "feature",
	label: "New Row"
});
```
</details>
