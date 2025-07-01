---
sidebar_label: GET /rows
title: GET /rows
description: Изучите REST-маршрут GET /rows в документации JavaScript библиотеки DHTMLX Kanban. Ознакомьтесь с руководствами для разработчиков, справочниками API, попробуйте живые демо и образцы кода, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# GET `/rows`

### Описание

@short: Получает данные для всех строк и возвращает JSON-объект, содержащий массив объектов данных строк (swimlane).

Этот маршрут обрабатывает **HTTP GET** запросы, отправленные на эндпоинт `/rows`.

### Тело запроса

Тело запроса не требуется.

### Ответ

Ответ представляет собой JSON-объект, который включает массив объектов данных строк.

Пример:

~~~json
[
    {
        "id": 1,
        "label": "Feature",
        "collapsed": false
    },
    {
        "id": 2,
        "label": "Task",
        "collapsed": false
    }
]
~~~

Другой пример возвращаемого объекта смотрите в разделе [**rows**](/api/config/js_kanban_rows_config.md).

HTTP статус код указывает, успешен ли был запрос (response.status == 200) или произошла ошибка (response.status == 500).

---

**Связанные статьи**:
- [Работа с сервером](/guides/working_with_server.md)
- [getRows()](/api/provider/rest_methods/js_kanban_getrows_method.md)
