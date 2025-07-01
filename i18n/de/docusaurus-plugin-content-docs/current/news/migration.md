---
sidebar_label: Migration zu neueren Versionen
title: Migration zu neueren Versionen
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Migration zu neueren Versionen. Durchstöbern Sie Entwickleranleitungen und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Migration zu neueren Versionen

## 1.5.13 -> 1.6.0

Es wurden einige Änderungen an den CSS-Klassen für das Menü vorgenommen:

~~~jsx
    .menu -> .wx-menu
    .item -> .wx-item
    .icon -> .wx-icon
    .value -> .wx-value
~~~

## 1.5.12 -> 1.5.13

Die vom Editor verwendeten CSS-Klassen wurden aktualisiert:

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

### API

#### Methoden

- Die [`setLocale`](/api/methods/toolbar_setlocale_method)-Methode für die Kanban-Toolbar hat eine neue Möglichkeit, ein Locale anzuwenden:

~~~jsx {6} title="Vor v1.5.7"
    // Kanban erstellen
    const board = new kanban.Kanban("#root", {...});
    // Toolbar erstellen
    const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
    // "de"-Locale auf Toolbar anwenden
    toolbar.setLocale(de); // oder null, um die Locale auf die Standardversion (en) zurückzusetzen
~~~

~~~jsx {6} title="Ab v1.5.7"
    // Kanban erstellen
    const board = new kanban.Kanban("#root", {...});
    // Toolbar erstellen
    const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
    // "de"-Locale auf Toolbar anwenden
    toolbar.setLocale(de, board.api);
~~~

## 1.4 -> 1.5

### API

#### Eigenschaften

- Die [`columnShape`](/api/config/js_kanban_columnshape_config)-Eigenschaft in Kanban wurde geändert:

~~~jsx {} title="Vor v1.5"
        {
            menu: {
                show: true,
                items: [
                    {
                        label: "Update", ...
                    }
                ]
                // weitere Parameter
            }
        }
~~~

~~~jsx {11} title="Ab v1.5"
        {
            menu: {
                show: true,
                items: [
                    {
                        text: "Update", ...
                    }
                ]
                // weitere Parameter
            },
            fixedHeaders: true
        }
~~~

## 1.3 -> 1.4

### API

#### Eigenschaften

- Die [`editorShape`](/api/config/js_kanban_editorshape_config)-Eigenschaft für Kanban funktioniert nun wie folgt:

~~~jsx {} title="Vor v1.4"
        {
            type: "date",
            key: "start_date",
            label: "Start date"
        },
        // weitere Parameter
~~~

~~~jsx {5,7-21} title="Ab v1.4"
        {
            type: "date", // oder Sie können auch den Typ "dateRange" verwenden
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
                placement: "page", // oder "editor"
                html: true,
            },
        },
        {
            type: "links",
            key: "links",
            label: "Links",
        },
        // weitere Parameter
~~~

- Aktualisierung der [`cardShape`](/api/config/js_kanban_cardshape_config)-Eigenschaft:

~~~jsx {} title="Vor v1.4"
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
            // weitere Parameter
        }
~~~

~~~jsx {7,11-13} title="Ab v1.4"
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
            // weitere Parameter
        }
~~~

- Aktualisierung der [`columnShape`](/api/config/js_kanban_columnshape_config)-Eigenschaft:

~~~jsx {} title="Vor v1.4"
        {
            menu: {
                show: true,
                items: [
                    {
                        label: "Delete", ...
                    }
                ]
                // weitere Parameter
            }
        }
~~~

~~~jsx {6,11} title="Ab v1.4"
        {
            menu: {
                show: true,
                items: [
                    {
                        text: "Delete", ...
                    }
                ]
                // weitere Parameter
            },
            css: (column, cards) => column.id == "feature" && cards.length < 5 ? "green" : "red"
        }
~~~

- Aktualisierung der [`rowShape`](/api/config/js_kanban_rowshape_config)-Eigenschaft:

~~~jsx {} title="Vor v1.4"
        {
            menu: {
                show: true,
                items: [
                    {
                        label: "Delete", ...
                    }
                ]
                // weitere Parameter
            }
        }
~~~

~~~jsx {6,11} title="Ab v1.4"
        {
            menu: {
                show: true,
                items: [
                    {
                        text: "Delete", ...
                    }
                ]
                // weitere Parameter
            },
            css: (row, cards) => row.id == "task" && cards.length < 5 ? "green" : "red",
        }
~~~

- Die [`cards`](/api/config/js_kanban_cards_config)-Eigenschaft hat nun folgendes Format:

~~~jsx {} title="Vor v1.4"
        [
            {
                id: 1,
                label: "Integration with React",
                description: "Some description",
                // weitere Parameter
            }, ...
        ]
~~~

~~~jsx {6-18} title="Ab v1.4"
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
                // weitere Parameter
            }, ...
        ]
~~~

- Die [`columns`](/api/config/js_kanban_columns_config)-Eigenschaft enthält jetzt neue Optionen:

~~~jsx {} title="Vor v1.4"
        [
            {
                id: "inprogress",
                label: "In progress",
                // weitere Parameter
            }, ...
        ]
~~~

~~~jsx {5-11} title="Ab v1.4"
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
                // weitere Parameter
            }, ...
        ]
~~~

- Die [`rows`](/api/config/js_kanban_rows_config)-Eigenschaft ermöglicht jetzt eine css-Option:

~~~jsx {} title="Vor v1.4"
        [
            {
                id: "features",
                label: "Features",
                // weitere Parameter
            }, ...
        ]
~~~

~~~jsx {5} title="Ab v1.4"
        [
            {
                id: "features",
                label: "Features",
                css: "green"
                // weitere Parameter
            }, ...
        ]
~~~

- Die [`cardTemplate`](/api/config/js_kanban_cardtemplate_config)-Eigenschaft wurde aktualisiert:

~~~jsx {} title="Vor v1.4"
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

~~~jsx {6-8} title="Ab v1.4"
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
            // weitere Parameter
        });
~~~

- Das **Sortier**-Steuerelement in [`items`](/api/config/toolbar_items_config) für die Kanban-Toolbar hat jetzt einen neuen Stil:

~~~jsx {} title="Vor v1.4"
        [
            { // benutzerdefiniertes Sortier-Steuerelement
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

~~~jsx {6,11} title="Ab v1.4"
        [
            { // benutzerdefiniertes Sortier-Steuerelement
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

#### Methoden

- Die [`api.getState()`](/api/internal/js_kanban_getstate_method)-Methode in Kanban gibt jetzt weniger Eigenschaften zurück:

~~~jsx {25-27} title="Vor v1.4"
api.getState();
// die Methode gibt ein Objekt mit folgenden Eigenschaften zurück
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

~~~jsx {} title="Ab v1.4"
api.getState();
// die Methode gibt ein Objekt mit folgenden Eigenschaften zurück
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

### API

#### Eigenschaften

- Die [`editorShape`](/api/config/js_kanban_editorshape_config)-Eigenschaft unterstützt jetzt einen ***dateRange***-Parameter:

~~~jsx {} title="Vor v1.3"
        {
            type: "date",
            key: "start_date",
            label: "Start date"
        },
        // weitere Parameter
~~~

~~~jsx {} title="Ab v1.3"
        {
            type: "dateRange", // alternativ auch Typ "date"
            key: {
                start: "start_date",
                end: "end_date"
            },
            label: "Date Range"
        },
        // weitere Parameter
~~~

- Die [`items`](/api/config/toolbar_items_config)-Eigenschaft der Toolbar umfasst jetzt "undo" und "redo":

~~~jsx {} title="Vor v1.3"
items: [
    "search",
    "spacer",
    "sort",
    "addColumn",
    "addRow"
]
~~~

~~~jsx {4-5} title="Ab v1.3"
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

#### Methoden

- Die [`updateCard()`](/api/methods/js_kanban_updatecard_method)-Methode nimmt jetzt eine zusätzliche Option entgegen:

~~~jsx {} title="Vor v1.3"
updateCard({
    id: 1,
    card: {
        label: "New Label",
        row: "feature",
        column: "inprogress",
        /*weitere Parameter*/
    }
});
~~~

~~~jsx {9} title="Ab v1.3"
updateCard({
    id: 1,
    card: {
        label: "New Label",
        row: "feature",
        column: "inprogress",
        /*weitere Parameter*/
    },
    replace: true
});
~~~

- Die [`updateColumn()`](/api/methods/js_kanban_updatecolumn_method)-Methode unterstützt nun ein weiteres Argument:

~~~jsx {} title="Vor v1.3"
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

~~~jsx {9} title="Ab v1.3"
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

- Die [`updateRow()`](/api/methods/js_kanban_updaterow_method)-Methode beinhaltet jetzt die Option replace:

~~~jsx {} title="Vor v1.3"
updateRow({
    id: "feature",
    row: {
        label: "Updated row",
        collapsed: true
    },
});
~~~

~~~jsx {7} title="Ab v1.3"
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

### API

#### Eigenschaften

- Die [`cardShape`](/api/config/js_kanban_cardshape_config)-Eigenschaft wurde verbessert:

    - für den ***menu***-Parameter

~~~jsx {} title="Vor v1.2"
    menu: true,
    //oder
    menu: { show: true }
    // weitere Parameter
~~~

~~~jsx {5-14} title="Ab v1.2"
    menu: true,
    // oder
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
    // weitere Parameter
~~~

    - für den ***users***-Parameter

~~~jsx {7} title="Vor v1.2"
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
    // weitere Parameter
~~~

~~~jsx {7} title="Ab v1.2"
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
    // weitere Parameter
~~~

    - für ***start_date*** und ***end_date***-Parameter

~~~jsx {} title="Vor v1.2"
    start_date: true,
    end_date: true,
    // weitere Parameter
~~~

~~~jsx {3,7} title="Ab v1.2"
    start_date: {
        show: true,
        format: "%d.%m.%Y"
    },
    end_date: {
        show: true,
        format: "%d.%m.%Y"
    },
    // weitere Parameter
~~~

- Die [`editorShape`](/api/config/js_kanban_editorshape_config)-Eigenschaft verwendet jetzt "avatar" statt "path":

~~~jsx {8} title="Vor v1.2"
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
// Einstellungen anderer Felder
~~~

~~~jsx {8} title="Ab v1.2"
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
// Einstellungen anderer Felder
~~~

- Die [`items`](/api/config/toolbar_items_config)-Eigenschaft der Toolbar bietet neue Funktionen:

~~~jsx {} title="Vor v1.2"
items: [
    "search",
    "controls"
]
~~~

~~~jsx {} title="Ab v1.2"
items: [
    { // oder "search",
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
    { // oder "sort",
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

#### Methoden

- Die [`setLocale()`](/api/methods/js_kanban_setlocale_method)-Methode in Kanban und die [`setLocale()`](/api/methods/toolbar_setlocale_method)-Methode in der Toolbar funktionieren jetzt etwas anders:

~~~jsx {} title="Vor v1.2"
setLocale(kanban.en); // auf Standard-Locale zurücksetzen
~~~

~~~jsx {} title="Ab v1.2"
setLocale(null); // auf Standard-Locale zurücksetzen
~~~

- Die [`api.getReactiveState()`](/api/internal/js_kanban_getreactivestate_method)-Methode in Kanban gibt jetzt mehr Status-Eigenschaften zurück:

~~~jsx {} title="Vor v1.2"
api.getReactiveState();
// die Methode gibt ein Objekt mit folgenden Eigenschaften zurück
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

~~~jsx {} title="Ab v1.2"
api.getReactiveState();
// die Methode gibt ein Objekt mit folgenden Eigenschaften zurück
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

- Die [`api.getState()`](/api/internal/js_kanban_getstate_method)-Methode in Kanban gibt jetzt ein detaillierteres Statusobjekt zurück:

~~~jsx {} title="Vor v1.2"
api.getState();
// die Methode gibt ein Objekt mit folgenden Eigenschaften zurück
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

~~~jsx {} title="Ab v1.2"
api.getState();
// die Methode gibt ein Objekt mit folgenden Eigenschaften zurück
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

- Die [`api.getStores()`](/api/internal/js_kanban_getstores_method)-Methode in Kanban gibt jetzt nur noch den State-Store zurück:

~~~jsx {} title="Vor v1.2"
api.getStores();
// die Methode gibt ein Objekt mit folgenden Stores zurück
/*{
    state: StateStore, // ( object )
    data: DataStore // ( object )
}*/
~~~

~~~jsx {} title="Ab v1.2"
api.getStores();
// die Methode gibt ein Objekt mit folgenden Eigenschaften zurück
/*{
    state: StateStore, // ( object )
}*/
~~~

### Lokalisierung

<details>
<summary>Vor v1.2</summary>

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
<summary>Ab v1.2</summary>

~~~jsx {}
const en = {
    kanban: { // Übersetzungen der Kanban-Beschriftungen
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
    calendar: { // Übersetzungen und Einstellungen des Kalenders
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
    core: { // Übersetzungen der Core-Elemente
        ok: "OK",
        cancel: "Cancel"
    }
};
~~~
</details>

## 1.0 -> 1.1

### API

#### Eigenschaften

- Die [`columns`](/api/config/js_kanban_columns_config)-Eigenschaft enthält ab v1.1 einige zusätzliche Parameter: ***collapsed, limit*** und ***strictLimit***.

~~~jsx title="Vor v1.1"
const columns = [
    {
        label: "Backlog",
        id: "backlog"
    }, ...
];
~~~

~~~jsx {5-7,12} title="Ab v1.1"
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
    // weitere Parameter
});
~~~

- Der ***color***-Parameter in [`cardShape`](/api/config/js_kanban_cardshape_config) wurde angepasst.

~~~jsx {4-7} title="Vor v1.1"
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

~~~jsx {4,9} title="Ab v1.1"
const cardShape = {
    color: {
        show: true,
        values: ["#65D3B3", "#FFC975", "#58C3FE"]
    }
};

new kanban.Kanban("#root", {
    cardShape
    // weitere Parameter
});
~~~

#### Methoden

- Die [`addColumn`](/api/methods/js_kanban_addcolumn_method)-Methode (und [`add-column`](/api/events/js_kanban_addcolumn_event)-Event) wird jetzt etwas anders initialisiert:

~~~jsx {} title="Vor v1.1"
addColumn(column_data_object);
~~~

~~~jsx {2-7} title="Ab v1.1"
addColumn({
    id: "backlog",
    column: {
        label: "Backlog",
        collapsed: false,
        ...
    }
});
~~~

- Die [`addRow`](/api/methods/js_kanban_addrow_method)-Methode (und [`add-row`](/api/events/js_kanban_addrow_event)-Event) wurde ebenfalls aktualisiert:

~~~jsx {} title="Vor v1.1"
addRow(row_data_object);
~~~

~~~jsx {2-7} title="Ab v1.1"
addRow({
    id: "feature",
    row: {
        label: "Feature",
        collapsed: false,
        ...
    }
});
~~~

- Die [`updateColumn`](/api/methods/js_kanban_updatecolumn_method)-Methode (und [`update-column`](/api/events/js_kanban_updatecolumn_event)-Event) wurde wie folgt geändert:

~~~jsx {} title="Vor v1.1"
updateColumn(column_data_object);
~~~

~~~jsx {2-7} title="Ab v1.1"
updateColumn({
    id: "backlog",
    column: {
        label: "Backlog",
        collapsed: true,
        ...
    }
});
~~~

- Die [`updateRow`](/api/methods/js_kanban_updaterow_method)-Methode (und [`update-row`](/api/events/js_kanban_updaterow_event)-Event) hat jetzt auch ein neues Format:

~~~jsx {} title="Vor v1.1"
updateRow(row_data_object);
~~~

~~~jsx {2-7} title="Ab v1.1"
updateRow({
    id: "feature",
    row: {
        label: "Feature",
        collapsed: true,
        ...
    }
});
~~~

- Die [`updateCard`](/api/methods/js_kanban_updatecard_method)-Methode (und [`update-card`](/api/events/js_kanban_updatecard_event)-Event) wird jetzt wie folgt eingerichtet:

~~~jsx {} title="Vor v1.1"
updateCard(card_data_object);
~~~

~~~jsx {2-7} title="Ab v1.1"
updateCard({
    id: 1,
    card: {
        label: "Volvo XC 70",
        progress: 26
        ...
    }
});
~~~

- Die [`parse`](/api/methods/js_kanban_parse_method)-Methode funktioniert jetzt, ohne dass die Anfangsdaten vorher zurückgesetzt werden müssen:

~~~jsx {3-5,8-12} title="Vor v1.1"
// Sie müssen die Anfangsdaten vor dem Parsen neuer Daten zurücksetzen
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

~~~jsx {} title="Ab v1.1"
// Sie müssen die Anfangsdaten vor dem Parsen neuer Daten nicht mehr zurücksetzen
const board = new kanban.Kanban("#root", {});

board.parse({
    columns,
    cards,
    rows
});
~~~
