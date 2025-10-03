---
sidebar_label: readonly
title: readonly Config
description: You can learn about the readonly config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# readonly

### Description

@short: Optional. Enables/disables editing, adding, selecting, dragging the cards

### Usage

~~~js {}
readonly?: boolean;
//or
readonly?: {
    edit?: boolean,
    add?: boolean,
    select?: boolean,
    dnd?: boolean
};
~~~

### Parameters

To configure the **readonly mode**, you can use the **short** or **extended** parameters.

The **short** parameter:
- `readonly` - (optional) enables/disables **readonly mode** of Kanban

The **extended** parameters:
- `readonly` - (optional) an object with extended settings. Here you can specify the following parameters:
    - `edit` - (optional) enables/disables **editing** of the cards
    - `add` - (optional) enables/disables **adding** of the new cards
    - `select` - (optional) enables/disables **selecting** of the cards
    - `dnd` - (optional) enables/disables **dragging** of the cards

### Default config

~~~jsx {}
readonly: false // readonly mode is disabled
//or
readonly: {
    edit: true, // editing is enabled
    add: true, // adding is enabled
    select: true, // selecting is enabled
    dnd: true // dragging is enabled
}
~~~

### Example

~~~jsx {4-9}
new kanban.Kanban("#root", {
    cards,
    columns,
    readonly: {
        edit: false, // disable editing
        add: true, // enable adding
        select: false, // disable selecting
        dnd: true // enable dragging
    },
    // other parameters
});
~~~

**Related sample:** [Readonly mode](https://snippet.dhtmlx.com/b8x84yln?tag=kanban)
