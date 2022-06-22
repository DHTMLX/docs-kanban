---
sidebar_label: Migration to newer versions
title: Migration to Newer Versions
description: You can learn about the Migration to Newer Versions in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Migration to newer versions

## 1.1 -> 1.2 (Inprogress)

### Api

#### Properties

- The [`cardShape`](../../api/config/js_kanban_cardshape_config) property of Kanban was updated in the following way:

    - the ***menu*** parameter

    ~~~jsx {} title="Before v1.2"
    menu: true,
    // other parameters
    ~~~

    ~~~jsx {3-12} title="From v1.2"
    menu: { // or menu: true
        show: true,
        items: ({ card, store }) => {
            if(card.id === 1){
                return false;
            } else {
                return [
                    { id: "set-edit", icon: "wxi-edit", label: "Edit" },
                    { id: "delete-card", icon: "wxi-delete", label: "Delete" }
                ];
            } 
        }
    },
    // other parameters
    ~~~

    - the ***users*** parameter

    ~~~jsx {7} title="Before v1.2"
    users: {
        show: true,
        values: [
            { 
                id: 1, 
                label: "John Smith", 
                path: "../assets/user.jpg" 
            },
        ]
    },
    // other parameters
    ~~~

    ~~~jsx {7} title="From v1.2"
    users: {
        show: true,
        values: [
            { 
                id: 1, 
                label: "John Smith", 
                avatar: "../assets/user.jpg" 
            },
        ]
    },
    // other parameters
    ~~~

    - the ***start_date*** and ***end_date*** parameters 

    ~~~jsx {} title="Before v1.2"
    start_date: true,
    end_date: true,
    // other parameters
    ~~~

    ~~~jsx {3,7} title="From v1.2"
    start_date: {
        show: true,
        format: "%d.%m.%Y"
    },
    end_date: {
        show: true,
        format: "%d.%m.%Y"
    },
    // other parameters
    ~~~

- The [`editorShape`](../../api/config/js_kanban_editorshape_config) property of Kanban was updated in the following way:

~~~jsx {8} title="Before v1.2"
{
    type: "multiselect", 
    key: "users", 
    label: "Users",
    values: [
        { 
            id: 1, label: "Alan", 
            path: "preview_image_path_1.png" 
        },
    ]
},
// settings of other fields
~~~

~~~jsx {8} title="From v1.2"
{
    type: "multiselect", 
    key: "users", 
    label: "Users",
    values: [
        { 
            id: 1, label: "Alan", 
            avatar: "preview_image_path_1.png" 
        },
    ]
},
// settings of other fields
~~~

- The [`items`](../../api/config/toolbar_items_config) property of Toolbar was updated in the following way:

~~~jsx {} title="Before v1.2"
items: [
    "search",
    "controls"
]
~~~

~~~jsx {} title="From v1.2"
items: [
    { // or "search",
        type: "search",
        options: [
            {
                id: "label",
                label: "By label"
            },
            {
                id: "start_date",
                label: "By date",
                searchRule: (card, value, by) => {
                    const date = card[by];
                    return date?.toString().includes(value);
                }
            }
        ]
    },
    "spacer",
    { // or "sort",
        type: "sort",
        options: [
            {
                label: "Sort by label",
                by: "label",
                dir: "asc"
            },
            {
                label: "Sort by description",
                by: "description",
                dir: "desc"
            }
        ]
    }, 
    "addColumn",
    "addRow"
]
~~~

#### Methods

- The [`setLocale()`](../../api/methods/js_kanban_setlocale_method) method of Kanban and [`setLocale()`](../../api/methods/toolbar_setlocale_method) method of Toolbar were updated:

~~~jsx {} title="Before v1.2"
setLocale(kanban.en); // reset to default locale
~~~

~~~jsx {} title="From v1.2"
setLocale(null); // reset to default locale
~~~

- The [`api.getReactiveState()`](../../api/internal/js_kanban_getreactivestate_method) method of Kanban was updated:

~~~jsx {} title="Before v1.2"
api.getReactiveState();
// the method returns an object with the following properties
/*{
    dragItemId: {
        subscribe: any,
        update: any,
        set: any
    },
    before: {...},
    overAreaId: {...},
    overAreaMeta: {...},
    dropAreaItemsCoords: {...},
    dropAreasCoords: {...},
    dragItemsCoords: {...},
    selected: {...}
}*/
~~~

~~~jsx {} title="From v1.2"
api.getReactiveState();
// the method returns an object with the following properties
/*{
    areasMeta: {
        subscribe: any,
        update: any,
        set: any
    },
    before: {...}, 
    cardShape: {...},
    cards: {...},
    cardsMap: {...},
    cardsMeta: {...},
    columnKey: {...},
    columns: {...},
    dragItemId: {...}, 
    dragItemsCoords: {...}, 
    dropAreaItemsCoords: {...}, 
    dropAreasCoords: {...}, 
    edit: {...},
    editorShape: {...},
    fromAreaMeta: {...},
    overAreaId: {...}, 
    overAreaMeta: {...},
    readonly: {...},
    rowKey: {...},
    rows: {...},
    scroll: {...},
    search: {...},
    selected: {...}, 
    sort: {...}
}*/
~~~

- The [`api.getState()`](../../api/internal/js_kanban_getstate_method) method of Kanban was updated:

~~~jsx {} title="Before v1.2"
api.getState();
// the method returns an object with the following properties
/*{
    dragItemId: string | number,
    before: string | number,
    overAreaId: string | number,
    overAreaMeta: object,
    dropAreaItemsCoords: array,
    dropAreasCoords: array,
    dragItemsCoords: array,
    selected: array
}*/
~~~

~~~jsx {} title="From v1.2"
api.getState();
// the method returns an object with the following properties
/*{
    areasMeta: object, 
    before: string | number, 
    cardShape: object,
    cards: array,
    cardsMap: object,
    cardsMeta: object,
    columnKey: string,
    columns: array,
    dragItemId: string | number, 
    dragItemsCoords: array, 
    dropAreaItemsCoords: array, 
    dropAreasCoords: array, 
    edit: object,
    editorShape: array,
    fromAreaMeta: object,
    overAreaId: string | number, 
    overAreaMeta: object,
    readonly: object,
    rowKey: string,
    rows: array,
    scroll: object,
    search: object,
    selected: array, 
    sort: object
}*/
~~~

- The [`api.getStores()`](../../api/internal/js_kanban_getstores_method) method of Kanban was updated:

~~~jsx {} title="Before v1.2"
api.getStores();
// the method returns an object with the following stores
/*{
    state: StateStore, // ( object )
    data: DataStore // ( object )
}*/
~~~

~~~jsx {} title="From v1.2"
api.getStores();
// the method returns an object with the following properties
/*{
    state: StateStore, // ( object )
}*/
~~~

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