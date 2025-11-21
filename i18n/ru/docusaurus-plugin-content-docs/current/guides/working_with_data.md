---
sidebar_label: Работа с данными
title: Работа с данными
description: Изучите, как работать с данными в документации по DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Работа с данными

## Загрузка начальных данных

При инициализации Kanban вы можете передать начальные данные для [**columns**](api/config/js_kanban_columns_config.md), [**cards**](api/config/js_kanban_cards_config.md), [**rows**](api/config/js_kanban_rows_config.md) и [**links**](api/config/js_kanban_links_config.md).

~~~jsx {1,17,81,94,106-109}
const columns = [ // данные для columns
    {
        label: "Backlog",
        id: "backlog"
    },
    {
        label: "In progress",
        id: "inprogress"
    },
    {
        label: "Testing",
        id: "testing"
    },
    {...}
];

const cards = [ // данные для cards
    {
        id: 1,
        label: "Integration with React",
        priority: 1,
        color: "#65D3B3",
        description: "Some description...",

        start_date: new Date("01/05/2021"),
        end_date: new Date("01/15/2021"),

        progress: 25,
        users: [1,2,3,4],
        sprint: "1.0",
        column: "backlog",
        type: "feature",
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
    },
    {
        id: 2,
        label: "Archive the cards/boards ",
        priority: 2,
        color: "#FFC975",

        start_date: new Date("01/05/2021"),
        end_date: new Date("01/15/2021"),

        sprint: "1.0",
        column: "backlog",
        type: "feature"
    },
    {
        label: "Searching and filtering",
        priority: 1,
        color: "#65D3B3",

        start_date: new Date("01/05/2021"),

        sprint: "1.2",
        column: "backlog",
        type: "task"
    },
    {
        label: "Set the tasks priorities",
        priority: 2,
        color: "#58C3FE",

        sprint: "1.2",
        column: "inprogress",
        type: "feature"
    },
    {...}
];

const rows = [ // данные для rows
    {
        label: "Feature",
        id: "feature"
    },
    {
        label: "Task",
        id: "task",
        collapsed: true
    },
    {...}
];

const links = [
    {
        id: "link_1",
        source: 1,
        target: 2,
        relation: "relatesTo",
    },
    {...}
];

// инициализация Kanban с начальными данными для columns, cards и rows
new kanban.Kanban("#root", {
    columns, 
    cards, 
    rows,
    links 
});
~~~

## Загрузка данных из локального источника

Чтобы загрузить данные для ***columns***, ***rows***, ***cards*** и ***links*** из локального источника, вы можете использовать метод [`setConfig()`](api/methods/js_kanban_setconfig_method.md) или [`parse()`](api/methods/js_kanban_parse_method.md).

~~~js {4}
const board = new kanban.Kanban("#root", {});

// загрузка данных в Kanban
board.setConfig({ columns, cards, rows });

// или board.parse({ columns, cards, rows });
~~~

## Синхронизация данных Kanban с Gantt и Scheduler

В этом примере показано, как синхронизировать данные Kanban с другими виджетами DHTMLX, а именно с [**Gantt**](https://dhtmlx.com/docs/products/dhtmlxGantt/) и [**Scheduler**](https://dhtmlx.com/docs/products/dhtmlxScheduler/):

<iframe src="https://snippet.dhtmlx.com/i7j5668s?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Получение данных Kanban

Для получения данных Kanban вы можете использовать следующие методы:

- [`getAreaCards()`](api/methods/js_kanban_getareacards_method.md) - возвращает массив с объектами данных всех cards указанной колонки (и строки)
- [`getCard()`](api/methods/js_kanban_getcard_method.md) - возвращает объект данных card по заданному ID
- [`serialize()`](api/methods/js_kanban_serialize_method.md) - сериализует данные Kanban в JSON

## Получение состояния Kanban

Для получения состояния Kanban вы можете использовать следующие методы:

- [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) - возвращает объект с реактивными свойствами *StateStore*
- [`api.getState()`](api/internal/js_kanban_getstate_method.md) - возвращает объект с текущими свойствами *StateStore*
- [`api.getStores()`](api/internal/js_kanban_getstores_method.md) - возвращает объект с *StateStore* и *DataStore*

## Экспорт данных Kanban

Для экспорта данных Kanban вы можете использовать следующий метод:

- [`export.json()`](api/internal/js_kanban_json_method.md) - экспортирует данные Kanban в JSON-файл

## Добавление новых элементов

Для добавления новых *cards*, *columns* и *rows* используйте следующие методы:

- [`addCard()`](api/methods/js_kanban_addcard_method.md) - добавляет новую card в Kanban
- [`addColumn()`](api/methods/js_kanban_addcolumn_method.md) - добавляет новую column в Kanban
- [`addRow()`](api/methods/js_kanban_addrow_method.md) - добавляет новую row в Kanban

## Обновление элементов

Для обновления *cards*, *columns* и *rows* используйте следующие методы:

- [`updateCard()`](api/methods/js_kanban_updatecard_method.md) - обновляет данные card по заданному ID
- [`updateColumn()`](api/methods/js_kanban_updatecolumn_method.md) - обновляет данные column по заданному ID
- [`updateRow()`](api/methods/js_kanban_updaterow_method.md) - обновляет данные row по заданному ID

## Удаление элементов

Для удаления *cards*, *columns* и *rows* используйте следующие методы:

- [`deleteCard()`](api/methods/js_kanban_deletecard_method.md) - удаляет card из Kanban по заданному ID
- [`deleteColumn()`](api/methods/js_kanban_deletecolumn_method.md) - удаляет column из Kanban по заданному ID
- [`deleteRow()`](api/methods/js_kanban_deleterow_method.md) - удаляет row из Kanban по заданному ID

## Перемещение элементов

Для перемещения *cards*, *columns* и *rows* используйте следующие методы:

- [`moveCard()`](api/methods/js_kanban_movecard_method.md) - перемещает card в нужную column и row
- [`moveColumn()`](api/methods/js_kanban_movecolumn_method.md) - перемещает column в нужную позицию
- [`moveRow()`](api/methods/js_kanban_moverow_method.md) - перемещает row в нужную позицию

## Пример

В этом примере показано, как использовать API Kanban для работы с данными:

<iframe src="https://snippet.dhtmlx.com/61crsls3?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
