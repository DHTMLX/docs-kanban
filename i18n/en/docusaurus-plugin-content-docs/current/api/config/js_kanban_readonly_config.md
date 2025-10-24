---
sidebar_label: readonly
title: readonly Config
description: Explore the readonly config in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code samples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# readonly

### Description

@short: Optional. Controls whether editing, adding, selecting, and dragging cards are enabled or disabled.

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

There are two ways to set up the **readonly mode**: using a **short** or an **extended** configuration.

The **short** option:
- `readonly` - (optional) toggles the **readonly mode** for Kanban on or off.

The **extended** option:
- `readonly` - (optional) an object with detailed settings, where you can specify:
    - `edit` - (optional) enables or disables **editing** of cards
    - `add` - (optional) enables or disables **adding** new cards
    - `select` - (optional) enables or disables **selecting** cards
    - `dnd` - (optional) enables or disables **dragging** cards

### Default config

~~~jsx {}
readonly: false // readonly mode is off by default
//or
readonly: {
    edit: true, // editing is allowed
    add: true, // adding is allowed
    select: true, // selecting is allowed
    dnd: true // dragging is allowed
}
~~~

### Example

~~~jsx {4-9}
new kanban.Kanban("#root", {
    cards,
    columns,
    readonly: {
        edit: false, // editing is turned off
        add: true, // adding is turned on
        select: false, // selecting is turned off
        dnd: true // dragging is turned on
    },
    // other parameters
});
~~~

**Related sample:** [Readonly mode](https://snippet.dhtmlx.com/b8x84yln?tag=kanban)