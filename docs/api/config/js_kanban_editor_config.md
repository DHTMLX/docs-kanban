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
    debounce?: number
}; 
~~~

### Parameters

- `autoSave` - (optional) enables/disables an autosave mode of editor
- `debounce` - (optional) time of delay of autosaving data (works with the ***autoSave: true*** parameter only)

### Default config

~~~jsx {}
editor: {
    autoSave: true,
    debounce: 100
}
~~~

### Example

~~~jsx {4-7}
new kanban.Kanban("#root", {
    columns,
    cards,
    editor: {
        autoSave: true,
        debounce: 2000
    }
    // other parameters
});
~~~

**Change log:** The property was added in v1.3
