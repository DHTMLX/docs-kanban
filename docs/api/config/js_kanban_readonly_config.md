---
sidebar_label: readonly
title: readonly Config
description: Explore the readonly config in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code examples and live demos, and get a free 30-day trial of DHTMLX Kanban.
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

There are two ways to set up **readonly mode**: using the **short** or the **extended** format.

The **short** format:
- `readonly` - (optional) turns **readonly mode** on or off for the Kanban.

The **extended** format:
- `readonly` - (optional) an object with detailed settings. It accepts:
    - `edit` - (optional) turns **card editing** on or off.
    - `add` - (optional) turns **adding new cards** on or off.
    - `select` - (optional) turns **card selection** on or off.
    - `dnd` - (optional) turns **dragging cards** on or off.

### Default config

~~~jsx {}
readonly: false // readonly mode is off by default
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
        edit: false, // editing disabled
        add: true, // adding enabled
        select: false, // selecting disabled
        dnd: true // dragging enabled
    },
    // other parameters
});
~~~

**Related sample:** [Readonly mode](https://snippet.dhtmlx.com/b8x84yln?tag=kanban)
