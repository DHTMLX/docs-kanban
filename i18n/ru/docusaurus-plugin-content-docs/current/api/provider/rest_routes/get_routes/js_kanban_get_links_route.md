---
sidebar_label: GET /links
title: API REST-маршрута GET /links
description: Ознакомьтесь с REST-маршрутом GET /links для DHTMLX Kanban. Узнайте, как получить данные обо всех связях в виде JSON-массива.
---

# GET `/links`

### Описание

@short: Получает данные обо всех ссылках и возвращает json объект с массивом объектов ссылок

Этот маршрут обрабатывает **HTTP GET** запрос, сделанный по пути `/links`.

### Тело запроса

Тело запроса не требуется.

### Ответ

Маршрут возвращает json объект с массивом всех объектов ссылок.

Пример:

~~~json
[
    {
        "id": 1,
        "source": 2,
        "target": 5,
        "relation": "relatesTo",
    },
    {
        "id": 2,
        "source": 4,
        "target": 9,
        "relation": "relatesTo",
    },
]
~~~

Для другого примера возвращаемого объекта перейдите к разделу [**links**](api/config/js_kanban_links_config.md).

HTTP статус код показывает, успешен ли запрос (response.status == 200) или произошла ошибка (response.status == 500).

---

**Связанные статьи**:
- [Работа с сервером](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)