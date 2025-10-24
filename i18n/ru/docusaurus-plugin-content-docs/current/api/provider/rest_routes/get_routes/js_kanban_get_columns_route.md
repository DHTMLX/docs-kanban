---
sidebar_label: GET /columns
title: GET /columns
description: Вы можете узнать о REST маршруте GET /columns в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# GET `/columns`

### Описание

@short: Получает данные обо всех колонках и возвращает json объект с массивом объектов с данными колонок

Маршрут обрабатывает **HTTP GET** запрос, сделанный по пути `/columns`.

### Тело запроса

Тело запроса не требуется.

### Ответ

Маршрут возвращает json объект с массивом объектов с данными колонок.

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

Для другого примера возвращаемого объекта перейдите к разделу [**columns**](api/config/js_kanban_columns_config.md).

HTTP статус код показывает, успешен ли запрос (response.status == 200) или произошла ошибка (response.status == 500).

---

**Связанные статьи**:
- [Работа с сервером](guides/working_with_server.md)
- [getColumns()](api/provider/rest_methods/js_kanban_getcolumns_method.md)