---
sidebar_label: editor
title: editor Config
description: Explore the editor configuration in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code examples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# editor

### Description

@short: Optional. Contains settings for customizing the Kanban editor

### Usage

~~~jsx {}
editor?: {
    autoSave?: boolean,
    debounce?: number,
    placement?: "sidebar" | "modal"
}; 
~~~

### Parameters

- `autoSave` - (optional) turns the autosave feature on or off
- `debounce` - (optional) sets the delay time before autosaving data (effective only when ***autoSave: true***)
- `placement` - (optional) defines where the editor appears. Possible values are:
    - `"sidebar"` - shows the editor as a sidebar
    - `"modal"` - shows the editor in a modal window

### Default config

~~~jsx {}
editor: {
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
        autoSave: true,
        debounce: 2000,
        placement: "modal"
    }
    // other parameters
});
~~~

**Change log:** The `placement` option was introduced in v1.6

**Related samples:** [Kanban. Opening the editor in a modal window](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban)
