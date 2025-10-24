---
sidebar_label: editor
title: editor Config
description: You can find details about the editor config in the DHTMLX JavaScript Kanban library documentation. Explore developer guides and API reference, check out code examples and live demos, and download a free 30-day trial version of DHTMLX Kanban.
---

# editor

### Description

@short: Optional. Contains settings to customize the Kanban editor

### Usage

~~~jsx {}
editor?: {
    show?: boolean,
    autoSave?: boolean,
    debounce?: number,
    placement?: "sidebar" | "modal"
}; 
~~~

### Parameters

- `show` - (optional) - turns the editor on or off
- `autoSave` - (optional) toggles the autosave feature of the editor
- `debounce` - (optional) sets the delay time for autosaving data (only applies when ***autoSave: true***)
- `placement` - (optional) defines where the editor appears. Possible values:
    - `"sidebar"` - shows the editor as a sidebar
    - `"modal"` - shows the editor in a modal window

### Default config

~~~jsx {}
editor: {
    show: true,
    debounce: 100,
    autoSave: true,
    placement: "sidebar"
}
~~~

### Example

~~~jsx {4-8}
new kanban.Kanban("#root", {
    columns,
    cards,
    editor: {
        show: true
        autoSave: true,
        debounce: 2000,
        placement: "modal"
    }
    // other parameters
});
~~~

**Change log:** The `placement` option was introduced in version 1.6

**Related samples:** [Kanban. Opening the editor in a modal window](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban)