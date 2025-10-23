---
sidebar_label: GET /rows
title: GET /rows
description: Вы можете узнать о REST-маршруте GET /rows в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# GET `/rows`

### Описание

@short: Получает данные обо всех строках и возвращает json-объект с массивом объектов с данными строк (swimlanes)

Маршрут обрабатывает **HTTP GET** запрос, отправленный на путь `/rows`.

### Тело запроса

Тело запроса не требуется.

### Ответ

Маршрут возвращает json-объект с массивом объектов с данными строк.

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

Другой пример возвращаемого объекта смотрите в разделе [**rows**](api/config/js_kanban_rows_config.md).

HTTP статус-код показывает, успешно ли выполнен запрос (response.status == 200) или произошла ошибка (response.status == 500).

---

**Связанные статьи**:
- [Работа с сервером](guides/working_with_server.md)
- [getRows()](api/provider/rest_methods/js_kanban_getrows_method.md)