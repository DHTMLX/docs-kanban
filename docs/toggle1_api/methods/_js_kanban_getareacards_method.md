<details>
<summary markdown="span"> <b>getAreaCards()</b> - gets the array of the data objects of all cards of the column</summary>

### Usage

`getAreaCards: ( colId: string, rowId: string ) => array;`

### Parameters

- `colId: string` - the **ID** of the target column (*mandatory*)
- `rowId?: string` - the **ID** of the target row

### Returns

The method returns the object array of the cards

:::info
If JS Kanban includes **columns** without **rows**, the method requires only the ***colId*** parameter. In this case, the method returns the array of the data objects of all cards of this column.

If JS Kanban includes **columns** and **rows**, the method requires both the ***colId*** and ***rowId*** parameters. In this case, the method returns the array of the data objects of the cards of only these column and row.
:::

### Example

```jsx
// get the array of the data objects of the cards of the specified column and row
kanban.getAreaCards("column_id", "row_id");
```
</details>
