<details>
<summary markdown="span"> <b>moveCard()</b> - Moves the card to the specified column (and row)</summary>

### Usage

```
moveCard: ({
	id: string,
	colId: string,
	rowId: string,
	overCardId: string
}) => void;
```

### Parameters

- `id: string` - the **ID** of the card that is moved
- `colId: string` - the **ID** of the target column the card is placed
- `rowId: string` - the **ID** of the target row the card is placed
- `overCardId: string` - the **ID** of the card, before which the new card is placed  

### Example

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
