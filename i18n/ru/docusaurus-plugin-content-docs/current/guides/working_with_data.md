---
sidebar_label: Работа с данными
title: Работа с данными
description: Изучите, как работать с данными в документации по DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Работа с данными

## Первичная загрузка данных

При настройке Kanban вы можете передать начальные данные для [**колонок**](/api/config/js_kanban_columns_config.md), [**карт**](/api/config/js_kanban_cards_config.md), [**строк**](/api/config/js_kanban_rows_config.md) и [**связей**](/api/config/js_kanban_links_config.md).

~~~jsx {1,17,81,94,106-109}
const columns = [ // данные для колонок
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

const cards = [ // данные для карт
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

const rows = [ // данные для строк
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
        masterId: 1,
        slaveId: 2,
        relation: "relatesTo",
    },
    {...}
];

// инициализация Kanban с начальными данными для колонок, карт и строк
new kanban.Kanban("#root", {
    columns, 
    cards, 
    rows,
    links 
});
~~~

## Загрузка данных из локального источника

Для загрузки данных для ***колонок***, ***строк*** и ***карт*** из локального источника можно использовать метод [`parse()`](/api/methods/js_kanban_parse_method.md). Просто передайте объект с необходимыми данными.

~~~js {4}
const board = new kanban.Kanban("#root", {});

// загрузка данных в Kanban
board.parse({ columns, cards, rows });
~~~

## Синхронизация данных Kanban с Gantt и Scheduler

Ниже приведён пример синхронизации данных Kanban с другими виджетами DHTMLX, такими как [**Gantt**](https://dhtmlx.com/docs/products/dhtmlxGantt/) и [**Scheduler**](https://dhtmlx.com/docs/products/dhtmlxScheduler/):

<iframe src="https://snippet.dhtmlx.com/i7j5668s?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Получение данных Kanban

Существует несколько методов для доступа к данным Kanban:

- [`getAreaCards()`](/api/methods/js_kanban_getareacards_method.md) - возвращает массив с объектами данных для всех карт в определённой колонке (и строке)
- [`getCard()`](/api/methods/js_kanban_getcard_method.md) - возвращает объект данных карты по её ID
- [`serialize()`](/api/methods/js_kanban_serialize_method.md) - сериализует данные Kanban в JSON

## Получение состояния Kanban

Для доступа к состоянию Kanban можно воспользоваться следующими методами:

- [`api.getReactiveState()`](/api/internal/js_kanban_getreactivestate_method.md) - возвращает объект с реактивными свойствами из *StateStore*
- [`api.getState()`](/api/internal/js_kanban_getstate_method.md) - получает объект с текущими свойствами из *StateStore*
- [`api.getStores()`](/api/internal/js_kanban_getstores_method.md) - предоставляет объект с *StateStore* и *DataStore*

## Экспорт данных Kanban

Для экспорта данных Kanban используйте:

- [`export.json()`](/api/internal/js_kanban_json_method.md) - экспортирует данные Kanban в виде JSON-файла

## Добавление новых элементов

Создавать новые *карты*, *колонки* и *строки* можно с помощью следующих методов:

- [`addCard()`](/api/methods/js_kanban_addcard_method.md) - создаёт новую карту в Kanban
- [`addColumn()`](/api/methods/js_kanban_addcolumn_method.md) - создаёт новую колонку в Kanban
- [`addRow()`](/api/methods/js_kanban_addrow_method.md) - создаёт новую строку в Kanban

## Обновление элементов

Для обновления *карт*, *колонок* или *строк* используйте следующие методы:

- [`updateCard()`](/api/methods/js_kanban_updatecard_method.md) - обновляет данные карты по её ID
- [`updateColumn()`](/api/methods/js_kanban_updatecolumn_method.md) - обновляет данные колонки по её ID
- [`updateRow()`](/api/methods/js_kanban_updaterow_method.md) - обновляет данные строки по её ID

## Удаление элементов

Удалять *карты*, *колонки* и *строки* можно с помощью следующих методов:

- [`deleteCard()`](/api/methods/js_kanban_deletecard_method.md) - удаляет карту из Kanban по её ID
- [`deleteColumn()`](/api/methods/js_kanban_deletecolumn_method.md) - удаляет колонку из Kanban по её ID
- [`deleteRow()`](/api/methods/js_kanban_deleterow_method.md) - удаляет строку из Kanban по её ID

## Перемещение элементов

Изменить положение *карт*, *колонок* или *строк* можно с помощью следующих методов:

- [`moveCard()`](/api/methods/js_kanban_movecard_method.md) - перемещает карту в определённую колонку и строку
- [`moveColumn()`](/api/methods/js_kanban_movecolumn_method.md) - перемещает колонку в выбранную позицию
- [`moveRow()`](/api/methods/js_kanban_moverow_method.md) - перемещает строку в выбранную позицию

## Пример

Ниже приведён пример использования Kanban API для управления данными:

<iframe src="https://snippet.dhtmlx.com/61crsls3?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
