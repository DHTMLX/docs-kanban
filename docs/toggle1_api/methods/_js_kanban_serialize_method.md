<details>
<summary markdown="span"> <b>serialize()</b> - serializes JS Kanban data to JSON</summary>

### Usage

`serialize: () => object;`

### Returns

The method returns the object of JS Kanban data  

```jsx
{
	cards: [{...}, {...}, ...],
	rows: [{...}, {...}, ...],
	columns: [{...}, {...}, ...]
}
```

### Example

```jsx
// get the object of the JS Kanban data
kanban.serialize();
```
</details>
