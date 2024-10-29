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
    autoSave?: boolean,
    debounce?: number,
    placement?: "sidebar" | "modal"
}; 
~~~

### Parameters

- `autoSave` - (optional) enables/disables an autosave mode of editor
- `debounce` - (optional) time of delay of autosaving data (works with the ***autoSave: true*** parameter only)
- `placement` - (optional) specifies the editor placement. You can set the following values:
    - `"sidebar"` - displays the editor as a sidebar
    - `"modal"` - displays the editor as a modal window

### Default config

~~~jsx {}
editor: {
    autoSave: true,
    debounce: 100
    placement: "sidebar"
}
~~~

### Example

~~~jsx {4-8}
new kanban.Kanban("#root", {
    columns,
    cards,
    editor: {
        autoSave: true,
        debounce: 2000,
        placement: "modal"
    }
    // other parameters
});
~~~

**Change log:** The `placement` parameter was added in v1.6

**Related samples:** [Kanban. Opening the editor in a modal window](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban)
