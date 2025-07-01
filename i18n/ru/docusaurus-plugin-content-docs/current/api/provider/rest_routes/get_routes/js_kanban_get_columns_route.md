---
sidebar_label: GET /columns
title: GET /columns
description: В этом разделе описан REST-маршрут GET /columns в документации по библиотеке DHTMLX JavaScript Kanban. Включает руководства для разработчиков, справочник API, примеры кода, живые демо и предлагает бесплатный 30-дневный пробный период DHTMLX Kanban.
---

# GET `/columns`

### Описание

@short: Получает информацию обо всех колонках и возвращает JSON-объект, содержащий массив данных колонок.

Этот маршрут обрабатывает **HTTP GET** запросы, отправленные на конечную точку `/columns`.

### Тело запроса

Тело запроса не требуется.

### Ответ

Ответ содержит JSON-объект с массивом объектов данных колонок.

Пример:

~~~json
[
    {
        "id": 1,
        "label": "Backlog",
        "collapsed": false
    },
    {
        "id": 2,
        "label": "In Progress",
        "collapsed": false
    },
    {
        "id": 3,
        "label": "Testing",
        "collapsed": false
    },
    {
        "id": 4,
        "label": "Done",
        "collapsed": false
    }
]
~~~

Другой пример возвращаемого объекта можно найти в разделе [**columns**](/api/config/js_kanban_columns_config.md).

HTTP статус код указывает, был ли запрос успешным (response.status == 200) или произошла ошибка (response.status == 500).

---

**Связанные статьи**:
- [Работа с сервером](/guides/working_with_server.md)
- [getColumns()](/api/provider/rest_methods/js_kanban_getcolumns_method.md)
