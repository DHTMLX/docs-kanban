<details>
<summary markdown="span"> <b>setLocale()</b> - sets new locale to the JS Kanban widget</summary>

### Usage

`setLocale: (data: object) => void;`

### Parameters

- `data: object` - the data object of the new locale (built in or custom)

### Details

Using this method, you can set a built-in locale as well as a custom one.

### Example

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
