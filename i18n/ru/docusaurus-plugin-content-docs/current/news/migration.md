---
sidebar_label: Миграция на новые версии
title: Миграция на новые версии
description: Узнайте о миграции на новые версии в документации по DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и API-справочником, попробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# Миграция на новые версии

## 1.5.13 -> 1.6.0

В меню были изменены CSS-классы:

~~~jsx
    .menu -> .wx-menu
    .item -> .wx-item
    .icon -> .wx-icon
    .value -> .wx-value
~~~

## 1.5.12 -> 1.5.13

Были обновлены CSS-классы, используемые редактором:

~~~jsx
    .modal -> .wx-modal
    .window -> .wx-window
    .modal .window .buttons -> .wx-modal .wx-window .wx-buttons
    .combo -> .wx-combo
    .combo -> .wx-multicombo
    .item -> .wx-item
    .color-picker -> .wx-colorselect
    .colors -> .wx-colors
    .slider -> .wx-slider
    .datepicker -> .wx-datepicker
    .calendar -> .wx-calendar
    .calendar .days .day.out -> .wx-calendar .wx-days .wx-day.wx-out
    .combo .tag -> .multicombo .wx-tag
    .dropdown -> .wx-dropdown
    .dropdown .item -> .wx-dropdown .wx-item
    .clear -> .wx-clear
~~~

## 1.5.6 -> 1.5.7

### Api

#### Методы

- Метод [`setLocale`](/api/methods/toolbar_setlocale_method) для тулбара Kanban теперь использует новый способ применения локали:

~~~jsx {6} title="До v1.5.7"
    // создать Kanban
    const board = new kanban.Kanban("#root", {...});
    // создать Toolbar
    const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
    // применить локаль "de" к Toolbar
    toolbar.setLocale(de); // или null для сброса локали на стандартную (en)
~~~

~~~jsx {6} title="С v1.5.7"
    // создать Kanban
    const board = new kanban.Kanban("#root", {...});
    // создать Toolbar
    const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
    // применить локаль "de" к Toolbar
    toolbar.setLocale(de, board.api);
~~~

## 1.4 -> 1.5

### Api

#### Свойства

- Свойство [`columnShape`](/api/config/js_kanban_columnshape_config) в Kanban было обновлено:

~~~jsx {} title="До v1.5"
        {
            menu: {
                show: true,
                items: [
                    {
                        label: "Update", ...
                    }
                ]
                // другие параметры
            }
        }
~~~

~~~jsx {11} title="С v1.5"
        {
            menu: {
                show: true,
                items: [
                    {
                        text: "Update", ...
                    }
                ]
                // другие параметры
            },
            fixedHeaders: true
        }
~~~

## 1.3 -> 1.4

### Api

#### Свойства

- Свойство [`editorShape`](/api/config/js_kanban_editorshape_config) для Kanban теперь работает так:

~~~jsx {} title="До v1.4"
        {
            type: "date",
            key: "start_date",
            label: "Start date"
        },
        // другие параметры
~~~

~~~jsx {5,7-21} title="С v1.4"
        {
            type: "date", // либо можно использовать тип "dateRange"
            key: "start_date",
            label: "Date Range"
            format: "%d/%m/%y"
        },
        {
            type: "comments",
            key: "comments",
            label: "Comments",
            config: {
                format: "%M %d",
                placement: "page", // или "editor"
                html: true,
            },
        },
        {
            type: "links",
            key: "links",
            label: "Links",
        },
        // другие параметры
~~~

- Обновление свойства [`cardShape`](/api/config/js_kanban_cardshape_config):

~~~jsx {} title="До v1.4"
        {
            label: true,
            description: true,
            menu: {
                items: [
                    {
                        label: "Delete", ...
                    }
                ]
            }
            // другие параметры
        }
~~~

~~~jsx {7,11-13} title="С v1.4"
        {
            label: true,
            description: true,
            menu: {
                items: [
                    {
                        text: "Delete", ...
                    }
                ]
            },
            votes: true,
            comments: true,
            css: (card) => card.type == "feature" ? "green" : "red",
            // другие параметры
        }
~~~

- Обновление свойства [`columnShape`](/api/config/js_kanban_columnshape_config):

~~~jsx {} title="До v1.4"
        {
            menu: {
                show: true,
                items: [
                    {
                        label: "Delete", ...
                    }
                ]
                // другие параметры
            }
        }
~~~

~~~jsx {6,11} title="С v1.4"
        {
            menu: {
                show: true,
                items: [
                    {
                        text: "Delete", ...
                    }
                ]
                // другие параметры
            },
            css: (column, cards) => column.id == "feature" && cards.length < 5 ? "green" : "red"
        }
~~~

- Обновление свойства [`rowShape`](/api/config/js_kanban_rowshape_config):

~~~jsx {} title="До v1.4"
        {
            menu: {
                show: true,
                items: [
                    {
                        label: "Delete", ...
                    }
                ]
                // другие параметры
            }
        }
~~~

~~~jsx {6,11} title="С v1.4"
        {
            menu: {
                show: true,
                items: [
                    {
                        text: "Delete", ...
                    }
                ]
                // другие параметры
            },
            css: (row, cards) => row.id == "task" && cards.length < 5 ? "green" : "red",
        }
~~~

- Свойство [`cards`](/api/config/js_kanban_cards_config) теперь выглядит так:

~~~jsx {} title="До v1.4"
        [
            {
                id: 1,
                label: "Integration with React",
                description: "Some description",
                // другие параметры
            }, ...
        ]
~~~

~~~jsx {6-18} title="С v1.4"
        [
            {
                id: 1,
                label: "Integration with React",
                description: "Some description",
                css: "red",
                votes: [4,6,9],
                comments: [
                    {
                        id: 1,
                        userId: 9,
                        cardId: 6,
                        text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays.",
                        date: new Date(),
                    },{...}
                ]
                // другие параметры
            }, ...
        ]
~~~

- Свойство [`columns`](/api/config/js_kanban_columns_config) теперь содержит новые опции:

~~~jsx {} title="До v1.4"
        [
            {
                id: "inprogress",
                label: "In progress",
                // другие параметры
            }, ...
        ]
~~~

~~~jsx {5-11} title="С v1.4"
        [
            {
                id: "inprogress",
                label: "In progress",
                css: "red",
                overlay: template(`
                    <div class="blockOverlay disable-drop">
                        <span class="disable-drop-header">Drop is not allowed</span>
                        <span class="disable-drop-description">Only testers can move cards to this
                            column</span>
                    </div>`)
                // другие параметры
            }, ...
        ]
~~~

- Свойство [`rows`](/api/config/js_kanban_rows_config) теперь поддерживает опцию css:

~~~jsx {} title="До v1.4"
        [
            {
                id: "features",
                label: "Features",
                // другие параметры
            }, ...
        ]
~~~

~~~jsx {5} title="С v1.4"
        [
            {
                id: "features",
                label: "Features",
                css: "green"
                // другие параметры
            }, ...
        ]
~~~

- Обновление свойства [`cardTemplate`](/api/config/js_kanban_cardtemplate_config):

~~~jsx {} title="До v1.4"
        const cardTemplate = ({ cardFields, selected, dragging, cardShape }) => {
            if (selected) {
                return `
                    <div class="custom-card" style="padding:20px">
                        <div class="status-color" style="background:${cardFields.color}"></div>
                        Selected:${cardFields.label}
                    </div>
                `;
            }
        }

        new kanban.Kanban("#root", {
            cards,
            columns,
            cardTemplate
        });
~~~

~~~jsx {6-8} title="С v1.4"
        const cardTemplate = ({ cardFields, selected, dragging, cardShape }) => {
            if (selected) {
                return `
                    <div class="custom-card" style="padding:20px">
                        <div class="status-color" style="background:${cardFields.color}"></div>
                        <div data-menu-id=${cardFields.id} >
                            <i class="wxi-dots-v"></i>
                        </div>
                        Selected:${cardFields.label}
                    </div>
                `;
            }
        }

        new kanban.Kanban("#root", {
            cards,
            columns,
            cardTemplate: kanban.template(card => cardTemplate(card)),
            // другие параметры
        });
~~~

- Контрол **sort** в [`items`](/api/config/toolbar_items_config) тулбара Kanban изменил стиль:

~~~jsx {} title="До v1.4"
        [
            { // пользовательский контрол сортировки
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
        ]
~~~

~~~jsx {6,11} title="С v1.4"
        [
            { // пользовательский контрол сортировки
                type: "sort",
                options: [
                    {
                        text: "Sort by label",
                        by: "label",
                        dir: "asc"
                    },
                    {
                        text: "Sort by description",
                        by: "description",
                        dir: "desc"
                    }
                ]
            },
        ]
~~~

#### Методы

- Метод [`api.getState()`](/api/internal/js_kanban_getstate_method) в Kanban теперь возвращает меньше свойств:

~~~jsx {25-27} title="До v1.4"
api.getState();
// метод возвращает объект со следующими свойствами
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
    edit: object,
    editorShape: array,
    fromAreaMeta: object,
    overAreaId: string | number,
    readonly: object,
    rowKey: string,
    rows: array,
    scroll: object,
    search: object,
    selected: array,
    sort: object,
    dropAreaItemsCoords: array,
    dropAreasCoords: array,
    overAreaMeta: object,
}*/
~~~

~~~jsx {} title="С v1.4"
api.getState();
// метод возвращает объект со следующими свойствами
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
    edit: object,
    editorShape: array,
    fromAreaMeta: object,
    overAreaId: string | number,
    readonly: object,
    rowKey: string,
    rows: array,
    scroll: object,
    search: object,
    selected: array,
    sort: object,
}*/
~~~

## 1.2 -> 1.3

### Api

#### Свойства

- Свойство [`editorShape`](/api/config/js_kanban_editorshape_config) теперь поддерживает параметр ***dateRange***:

~~~jsx {} title="До v1.3"
        {
            type: "date",
            key: "start_date",
            label: "Start date"
        },
        // другие параметры
~~~

~~~jsx {} title="С v1.3"
        {
            type: "dateRange", // либо можно использовать тип "date"
            key: {
                start: "start_date",
                end: "end_date"
            },
            label: "Date Range"
        },
        // другие параметры
~~~

- Свойство [`items`](/api/config/toolbar_items_config) тулбара теперь включает "undo" и "redo":

~~~jsx {} title="До v1.3"
items: [
    "search",
    "spacer",
    "sort",
    "addColumn",
    "addRow"
]
~~~

~~~jsx {4-5} title="С v1.3"
items: [
    "search",
    "spacer",
    "undo",
    "redo",
    "sort",
    "addColumn",
    "addRow"
]
~~~

#### Методы

- Метод [`updateCard()`](/api/methods/js_kanban_updatecard_method) теперь принимает дополнительную опцию:

~~~jsx {} title="До v1.3"
updateCard({
    id: 1,
    card: {
        label: "New Label",
        row: "feature",
        column: "inprogress",
        /*другие параметры*/
    }
});
~~~

~~~jsx {9} title="С v1.3"
updateCard({
    id: 1,
    card: {
        label: "New Label",
        row: "feature",
        column: "inprogress",
        /*другие параметры*/
    },
    replace: true
});
~~~

- Метод [`updateColumn()`](/api/methods/js_kanban_updatecolumn_method) также поддерживает новый аргумент:

~~~jsx {} title="До v1.3"
updateColumn({
    id: "backlog",
    column: {
        label: "Updated column",
        limit: 3,
        strictLimit: 3,
        collapsed: true
    }
});
~~~

~~~jsx {9} title="С v1.3"
updateColumn({
    id: "backlog",
    column: {
        label: "Updated column",
        limit: 3,
        strictLimit: 3,
        collapsed: true
    },
    replace: true
});
~~~

- Метод [`updateRow()`](/api/methods/js_kanban_updaterow_method) теперь включает опцию replace:

~~~jsx {} title="До v1.3"
updateRow({
    id: "feature",
    row: {
        label: "Updated row",
        collapsed: true
    },
});
~~~

~~~jsx {7} title="С v1.3"
updateColumn({
    id: "feature",
    row: {
        label: "Updated row",
        collapsed: true
    },
    replace: true
});
~~~

## 1.1 -> 1.2

### Api

#### Свойства

- Свойство [`cardShape`](/api/config/js_kanban_cardshape_config) было улучшено:

    - для параметра ***menu***

~~~jsx {} title="До v1.2"
    menu: true,
    //или
    menu: { show: true }
    // другие параметры
~~~

~~~jsx {5-14} title="С v1.2"
    menu: true,
    // или
    menu: {
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
    // другие параметры
~~~

    - для параметра ***users***

~~~jsx {7} title="До v1.2"
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
    // другие параметры
~~~

~~~jsx {7} title="С v1.2"
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
    // другие параметры
~~~

    - для параметров ***start_date*** и ***end_date***

~~~jsx {} title="До v1.2"
    start_date: true,
    end_date: true,
    // другие параметры
~~~

~~~jsx {3,7} title="С v1.2"
    start_date: {
        show: true,
        format: "%d.%m.%Y"
    },
    end_date: {
        show: true,
        format: "%d.%m.%Y"
    },
    // другие параметры
~~~

- Свойство [`editorShape`](/api/config/js_kanban_editorshape_config) теперь использует "avatar" вместо "path":

~~~jsx {8} title="До v1.2"
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
// настройки других полей
~~~

~~~jsx {8} title="С v1.2"
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
// настройки других полей
~~~

- Свойство [`items`](/api/config/toolbar_items_config) тулбара получило новые возможности:

~~~jsx {} title="До v1.2"
items: [
    "search",
    "controls"
]
~~~

~~~jsx {} title="С v1.2"
items: [
    { // или "search",
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
    { // или "sort",
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

#### Методы

- Метод [`setLocale()`](/api/methods/js_kanban_setlocale_method) в Kanban и [`setLocale()`](/api/methods/toolbar_setlocale_method) в Toolbar теперь немного отличаются:

~~~jsx {} title="До v1.2"
setLocale(kanban.en); // сбросить стандартную локаль
~~~

~~~jsx {} title="С v1.2"
setLocale(null); // сбросить стандартную локаль
~~~

- Метод [`api.getReactiveState()`](/api/internal/js_kanban_getreactivestate_method) в Kanban теперь возвращает больше свойств состояния:

~~~jsx {} title="До v1.2"
api.getReactiveState();
// метод возвращает объект со следующими свойствами
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

~~~jsx {} title="С v1.2"
api.getReactiveState();
// метод возвращает объект со следующими свойствами
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

- Метод [`api.getState()`](/api/internal/js_kanban_getstate_method) в Kanban теперь возвращает более детальный объект состояния:

~~~jsx {} title="До v1.2"
api.getState();
// метод возвращает объект со следующими свойствами
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

~~~jsx {} title="С v1.2"
api.getState();
// метод возвращает объект со следующими свойствами
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

- Метод [`api.getStores()`](/api/internal/js_kanban_getstores_method) в Kanban теперь возвращает только стор состояния:

~~~jsx {} title="До v1.2"
api.getStores();
// метод возвращает объект со следующими stores
/*{
    state: StateStore, // ( object )
    data: DataStore // ( object )
}*/
~~~

~~~jsx {} title="С v1.2"
api.getStores();
// метод возвращает объект со следующими свойствами
/*{
    state: StateStore, // ( object )
}*/
~~~

### Локализация

<details>
<summary>До v1.2</summary>

~~~jsx {}
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
const wx = {
    Today: "Today",
    Clear: "Clear",
    Close: "Close"
};
const en = {
    lang: "en",
    __dates: {
        months,
        monthsShort,
        days
    },
    wx,
    kanban: {
        Save: "Save",
        Close: "Close",
        Delete: "Delete",
        Name: "Name",
        Description: "Description",
        Type: "Type",
        "Start date": "Start date",
        "End date": "End date",
        Result: "Result",
        "No results": "No results",
        Search: "Search",
        "Search in": "Search in",
        "Add new row": "Add new row",
        "Add new column": "Add new column",
        "Add new card": "Add new card",
        "Edit card": "Edit card",
        Edit: "Edit",
        Everywhere: "Everywhere",
        Label: "Label",
        Status: "Status",
        Color: "Color",
        Date: "Date",
        Untitled: "Untitled",
        Rename: "Rename"
    }
};
~~~
</details>

<details>
<summary>С v1.2</summary>

~~~jsx {}
const en = {
    kanban: { // переводы элементов Kanban
        "Save": "Save",
        "Close": "Close",
        "Delete": "Delete",
        "Name": "Name",
        "Description": "Description",
        "Type": "Type",
        "Start date": "Start date",
        "End date": "End date",
        "Result": "Result",
        "No results": "No results",
        "Search": "Search",
        "Search in": "Search in",
        "Add new row": "Add new row",
        "Add new column": "Add new column",
        "Add new card": "Add new card",
        "Edit card": "Edit card",
        "Edit": "Edit",
        "Everywhere": "Everywhere",
        "Label": "Label",
        "Status": "Status",
        "Color": "Color",
        "Date": "Date",
        "Untitled": "Untitled",
        "Rename": "Rename",
        "Move up": "Move up",
        "Move down": "Move down",
        "Move left": "Move left",
        "Move right": "Move right",
        "Sort": "Sort",
        "Label (a-z)": "Label (a-z)",
        "Label (z-a)": "Label (z-a)",
        "Description (a-z)": "Description (a-z)",
        "Description (z-a)": "Description (z-a)"
    },
    calendar: { // переводы и настройки календаря
        monthFull: [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ],
        monthShort: [
            "Jan", "Feb", "Mar", "Apr",
            "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"
        ],
        dayFull: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        hours: "Hours",
        minutes: "Minutes",
        done: "Done",
        clear: "Clear",
        today: "Today",
        am: ["am", "AM"],
        pm: ["pm", "PM"],
        weekStart: 7,
        timeFormat: 24
    },
    core: { // переводы элементов ядра
        ok: "OK",
        cancel: "Cancel"
    }
};
~~~
</details>

## 1.0 -> 1.1

### Api

#### Свойства

- Свойство [`columns`](/api/config/js_kanban_columns_config) добавило несколько новых параметров, начиная с v1.1: ***collapsed, limit*** и ***strictLimit***.

~~~jsx title="До v1.1"
const columns = [
    {
        label: "Backlog",
        id: "backlog"
    }, ...
];
~~~

~~~jsx {5-7,12} title="С v1.1"
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
    // другие параметры
});
~~~

- Параметр ***color*** в [`cardShape`](/api/config/js_kanban_cardshape_config) был изменён.

~~~jsx {4-7} title="До v1.1"
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

~~~jsx {4,9} title="С v1.1"
const cardShape = {
    color: {
        show: true,
        values: ["#65D3B3", "#FFC975", "#58C3FE"]
    }
};

new kanban.Kanban("#root", {
    cardShape
    // другие параметры
});
~~~

#### Методы

- Метод [`addColumn`](/api/methods/js_kanban_addcolumn_method) (и событие [`add-column`](/api/events/js_kanban_addcolumn_event)) теперь инициализируется иначе:

~~~jsx {} title="До v1.1"
addColumn(column_data_object);
~~~

~~~jsx {2-7} title="С v1.1"
addColumn({
    id: "backlog",
    column: {
        label: "Backlog",
        collapsed: false,
        ...
    }
});
~~~

- Метод [`addRow`](/api/methods/js_kanban_addrow_method) (и событие [`add-row`](/api/events/js_kanban_addrow_event)) также обновился:

~~~jsx {} title="До v1.1"
addRow(row_data_object);
~~~

~~~jsx {2-7} title="С v1.1"
addRow({
    id: "feature",
    row: {
        label: "Feature",
        collapsed: false,
        ...
    }
});
~~~

- Метод [`updateColumn`](/api/methods/js_kanban_updatecolumn_method) (и событие [`update-column`](/api/events/js_kanban_updatecolumn_event)) изменился следующим образом:

~~~jsx {} title="До v1.1"
updateColumn(column_data_object);
~~~

~~~jsx {2-7} title="С v1.1"
updateColumn({
    id: "backlog",
    column: {
        label: "Backlog",
        collapsed: true,
        ...
    }
});
~~~

- Метод [`updateRow`](/api/methods/js_kanban_updaterow_method) (и событие [`update-row`](/api/events/js_kanban_updaterow_event)) также имеет обновлённый формат:

~~~jsx {} title="До v1.1"
updateRow(row_data_object);
~~~

~~~jsx {2-7} title="С v1.1"
updateRow({
    id: "feature",
    row: {
        label: "Feature",
        collapsed: true,
        ...
    }
});
~~~

- Метод [`updateCard`](/api/methods/js_kanban_updatecard_method) (и событие [`update-card`](/api/events/js_kanban_updatecard_event)) теперь задаётся так:

~~~jsx {} title="До v1.1"
updateCard(card_data_object);
~~~

~~~jsx {2-7} title="С v1.1"
updateCard({
    id: 1,
    card: {
        label: "Volvo XC 70",
        progress: 26
        ...
    }
});
~~~

- Метод [`parse`](/api/methods/js_kanban_parse_method) теперь работает без необходимости сбрасывать начальные данные:

~~~jsx {3-5,8-12} title="До v1.1"
// необходимо сбросить начальные данные перед парсингом новых
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

~~~jsx {} title="С v1.1"
// сбрасывать начальные данные перед парсингом новых не требуется
const board = new kanban.Kanban("#root", {});

board.parse({
    columns,
    cards,
    rows
});
~~~
