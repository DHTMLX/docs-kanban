<details>
<summary markdown="span"> <b>setConfig()</b> - Sets the configuration parameters of the JS Kanban widget </summary>

### Usage

`setConfig: (config: object) => void;`

### Parameters

- `config: object` - the object of the JS Kanban configuration

### Details

Using this method, you can set the configuration parameters of the JS Kanban widget as well as load data to it.

### Example

```jsx
// set the configuration parameters of the JS Kanban widget
kanban.setConfig({
	editorAutoSave: false,
	stage: "stage",
	lane: "type",
	cardShape,
	editorShape,
	/*other parameters*/
});
```
</details>
