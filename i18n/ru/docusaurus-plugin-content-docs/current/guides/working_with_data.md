---
sidebar_label: Работа с данными
title: Работа с данными
description: Изучите, как работать с данными в документации по DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Работа с данными

Это руководство охватывает операции с данными в Kanban: загрузку начальных данных, чтение и экспорт данных, изменение cards, columns, rows и links, а также управление комментариями и выделением.

## Загрузка начальных данных

При инициализации Kanban передайте начальные данные через свойства [`columns`](api/config/js_kanban_columns_config.md), [`cards`](api/config/js_kanban_cards_config.md), [`rows`](api/config/js_kanban_rows_config.md) и [`links`](api/config/js_kanban_links_config.md).

Следующий пример кода передаёт данные columns, cards, rows и links в конструктор Kanban:

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

// инициализация Kanban с начальными данными
new kanban.Kanban("#root", {
    columns, 
    cards, 
    rows,
    links 
});
~~~

## Загрузка данных из локального источника {#load-data-from-a-local-source}

Используйте [`setConfig()`](api/methods/js_kanban_setconfig_method.md) или [`parse()`](api/methods/js_kanban_parse_method.md) для загрузки данных columns, rows, cards и links после инициализации:

~~~js {4}
const board = new kanban.Kanban("#root", {});

// загрузка данных в Kanban
board.setConfig({ columns, cards, rows });

// или board.parse({ columns, cards, rows });
~~~

## Синхронизация данных с Gantt и Scheduler

Информацию об интеграции с несколькими виджетами см. в разделе [Интеграция с виджетами DHTMLX](guides/integration.md#gantt-and-scheduler).

## Получение данных

- [`getAreaCards()`](api/methods/js_kanban_getareacards_method.md) — возвращает объекты данных всех cards в указанной column (и, опционально, row)
- [`getColumnCards()`](api/methods/js_kanban_getcolumncards_method.md) — возвращает объекты данных всех cards в указанной column
- [`getCard()`](api/methods/js_kanban_getcard_method.md) — возвращает объект данных card по ID
- [`serialize()`](api/methods/js_kanban_serialize_method.md) — возвращает данные Kanban в виде JSON-объекта

## Получение состояния

- [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) — возвращает реактивные свойства *DataStore*
- [`api.getState()`](api/internal/js_kanban_getstate_method.md) — возвращает текущие свойства *DataStore*
- [`api.getStores()`](api/internal/js_kanban_getstores_method.md) — возвращает `{ data: DataStore }`

## Экспорт данных

- [`export.json()`](api/internal/js_kanban_json_method.md) — скачивает данные Kanban в виде JSON-файла

## Добавление новых элементов

- [`addCard()`](api/methods/js_kanban_addcard_method.md) — добавляет новую card
- [`addColumn()`](api/methods/js_kanban_addcolumn_method.md) — добавляет новую column
- [`addRow()`](api/methods/js_kanban_addrow_method.md) — добавляет новую row
- [`duplicateCard()`](api/methods/js_kanban_duplicatecard_method.md) — дублирует card по ID

## Обновление элементов

- [`updateCard()`](api/methods/js_kanban_updatecard_method.md) — обновляет card по ID
- [`updateColumn()`](api/methods/js_kanban_updatecolumn_method.md) — обновляет column по ID
- [`updateRow()`](api/methods/js_kanban_updaterow_method.md) — обновляет row по ID

## Удаление элементов

- [`deleteCard()`](api/methods/js_kanban_deletecard_method.md) — удаляет card по ID
- [`deleteColumn()`](api/methods/js_kanban_deletecolumn_method.md) — удаляет column по ID
- [`deleteRow()`](api/methods/js_kanban_deleterow_method.md) — удаляет row по ID

## Перемещение элементов

- [`moveCard()`](api/methods/js_kanban_movecard_method.md) — перемещает card в указанную column и row
- [`moveColumn()`](api/methods/js_kanban_movecolumn_method.md) — перемещает column на новую позицию
- [`moveRow()`](api/methods/js_kanban_moverow_method.md) — перемещает row на новую позицию

## Управление комментариями

- [`addComment()`](api/methods/js_kanban_addcomment_method.md) — добавляет комментарий к card по ID
- [`updateComment()`](api/methods/js_kanban_updatecomment_method.md) — обновляет комментарий по ID
- [`deleteComment()`](api/methods/js_kanban_deletecomment_method.md) — удаляет комментарий по ID

## Управление links

- [`addLink()`](api/methods/js_kanban_addlink_method.md) — добавляет новый link между cards
- [`deleteLink()`](api/methods/js_kanban_deletelink_method.md) — удаляет link по ID

## Управление выделением cards

- [`getSelection()`](api/methods/js_kanban_getselection_method.md) — возвращает ID выбранных в данный момент cards
- [`selectCard()`](api/methods/js_kanban_selectcard_method.md) — выделяет card по ID
- [`unselectCard()`](api/methods/js_kanban_unselectcard_method.md) — снимает выделение с card по ID

## Пример

Следующий пример использует API Kanban для работы с данными во время выполнения:

<iframe src="https://snippet.dhtmlx.com/61crsls3?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
