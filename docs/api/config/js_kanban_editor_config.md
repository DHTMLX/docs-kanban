---
sidebar_label: editor
title: editor Config
description: You can learn about the editor config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# editor

### Description

@short: Optional. An object of settings for configuring the Kanban editor

### Usage

~~~jsx {}
editor?: {
	show?: boolean,
	placement?: "sidebar" | "modal",
	autoSave?: boolean,
	debounce?: number
}; 
~~~

### Parameters

- `show` - (optional) shows/hides the editor
- `placement` - (optional) defines the place the editor is displayed. Here you can specify the following values:
	- ***"sidebar"*** - the editor is displayed in a sidebar on the right
	- ***"modal"*** - the editor is displayed in a separate window
- `autoSave` - (optional) enables/disables an autosave mode of editor
- `debounce` - (optional) time of delay of autosaving data (works with the ***autoSave: true*** parameter only)

### Default config

~~~jsx {}
editor: {
	show: true,
	placement: "sidebar",
	autoSave: true,
	debounce: 100
}
~~~

### Example

~~~jsx {4-9}
new kanban.Kanban("#root", {
	columns,
	cards,
	editor: {
		show: true,
		placement: "modal",
		autoSave: true,
		debounce: 2000
	}
	// other parameters
});
~~~

**Change log:** The ***show*** and ***placement*** parameters were added in v1.4
