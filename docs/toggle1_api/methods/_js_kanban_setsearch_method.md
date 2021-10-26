<details>
<summary markdown="span"> <b>setSearch()</b> - looks for the needed cards by the required parameters</summary>

### Usage

`setSearch: ({ value: string, by: string }) => void;`

### Parameters

- `value: string` - the value to search
- `by: string` - the card field for searching

### Details

Using this method, you can search for the needed cards by the required parameter.

### Example

```jsx
// highlight the cards that match the parameters
kanban.setSearch({ value: "Integration", by: "label" });
```
</details>
