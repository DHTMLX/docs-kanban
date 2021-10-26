<details>
<summary markdown="span"> <b>unselectCard()</b> - unselects card(s) by its ID</summary>

### Usage

`unselectCard: ({ id: string }) => void;`

### Parameters

- `id: string` - the **ID** of the card to be unselected

### Details

To unselect all cards, call the **unselectCard()** method without parameters.

### Example

```jsx
// unselect the card whth the "1" ID
kanban.unselectCard({ id: "1" });
```
</details>
