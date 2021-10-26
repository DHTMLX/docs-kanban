<details>
<summary markdown="span"> <b>deleteCard()</b> - removes the specified card from datastore of JS Kanban</summary>

### Usage

`deleteCard: ({ id: string }) => void;`

### Parameters

- `id: string` - the **ID** of the card to be deleted

### Example

```jsx
// remove card by its id
kanban.deleteCard({ id: "1" });
```
</details>
