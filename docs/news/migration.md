---
sidebar_label: Migration to newer versions
title: Migration to Newer Versions
description: You can learn about the Migration to Newer Versions in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Migration to newer versions

## 1.0 -> 1.1

### Api

#### Properties

- The [`columns`](../../api/config/js_kanban_columns_config) property was extended by the new parameters. Starting from v1.1, you can use the ***collapsed, limit*** and ***strictLimit*** configurations.

~~~jsx title="Before v1.1"
const columns = [
    { 
        label: "Backlog", 
        id: "backlog"
    }, ...
];
~~~

~~~jsx {5-7,12} title="From v1.1"
const columns = [
    { 
        label: "Backlog", 
        id: "backlog",
        collapsed: true,
        limit: 3,
        strictLimit: true 
    }, ...
];

new kanban.Kanban("#root", {
    columns,
    // other parameters
});
~~~

- The ***color*** parameter of the [`cardShape`](../../api/config/js_kanban_cardshape_config) property was updated.

~~~jsx {4-7} title="Before v1.1"
const cardShape = {
    color: {
        show: true,
        values: [
            { id: 1, color: "#65D3B3", label: "red" },
            { id: 2, color: "#FFC975", label: "green" }
        ]
    }
};
~~~

~~~jsx {4,9} title="From v1.1"
const cardShape = {
    color: { 
        show: true,
        values: ["#65D3B3", "#FFC975", "#58C3FE"] 
    } 
};

new kanban.Kanban("#root", {
    cardShape
    // other parameters
});
~~~

#### Methods

- The [`addColumn`](../../api/methods/js_kanban_addcolumn_method) method (and [`add-column`](../../api/events/js_kanban_addcolumn_event) event) was updated:

~~~jsx {} title="Before v1.1"
addColumn(column_data_object);
~~~

~~~jsx {2-7} title="From v1.1"
addColumn({
    id: "backlog",
    column: {
        label: "Backlog",
        collapsed: false,
        ...
    }
});
~~~

- The [`addRow`](../../api/methods/js_kanban_addrow_method) method (and [`add-row`](../../api/events/js_kanban_addrow_event) event) was updated:

~~~jsx {} title="Before v1.1"
addRow(row_data_object);
~~~

~~~jsx {2-7} title="From v1.1"
addRow({
    id: "feature",
    row: {
        label: "Feature",
        collapsed: false,
        ...
    }
});
~~~

- The [`updateColumn`](../../api/methods/js_kanban_updatecolumn_method) method (and [`update-column`](../../api/events/js_kanban_updatecolumn_event) event) was updated:

~~~jsx {} title="Before v1.1"
updateColumn(column_data_object);
~~~

~~~jsx {2-7} title="From v1.1"
updateColumn({
    id: "backlog",
    column: {
        label: "Backlog",
        collapsed: true,
        ...
    }
});
~~~

- The [`updateRow`](../../api/methods/js_kanban_updaterow_method) method (and [`update-row`](../../api/events/js_kanban_updaterow_event) event)  was updated:

~~~jsx {} title="Before v1.1"
updateRow(row_data_object);
~~~

~~~jsx {2-7} title="From v1.1"
updateRow({
    id: "feature",
    row: {
        label: "Feature",
        collapsed: true,
        ...
    }
});
~~~

- The [`updateCard`](../../api/methods/js_kanban_updatecard_method) method (and [`update-card`](../../api/events/js_kanban_updatecard_event) event) was updated:

~~~jsx {} title="Before v1.1"
updateCard(card_data_object);
~~~

~~~jsx {2-7} title="From v1.1"
updateCard({
    id: 1,
    card: {
        label: "Volvo XC 70",
        progress: 26
        ...
    }
});
~~~

- The [`parse`](../../api/methods/js_kanban_parse_method) method  was updated:

~~~jsx {3-5,8-12} title="Before v1.1"
// you need to reset initial data befor parsing new one
const board = new kanban.Kanban("#root", {
    columns: [],
    cards: [],
    rows: []
});

board.parse({
    columns,
    cards,
    rows
});
~~~

~~~jsx {} title="From v1.1"
// you don't need to reset initial data befor parsing new one
const board = new kanban.Kanban("#root", {});

board.parse({
    columns,
    cards,
    rows
});
~~~