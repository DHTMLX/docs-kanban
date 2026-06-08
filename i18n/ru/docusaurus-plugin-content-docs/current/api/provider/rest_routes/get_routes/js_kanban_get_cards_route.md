---
sidebar_label: GET /cards
title: API REST-маршрута GET /cards
description: Ознакомьтесь с REST-маршрутом GET /cards для DHTMLX Kanban. Узнайте, как получить данные обо всех карточках в виде JSON-массива.
---

# GET `/cards`

### Описание

@short: Получает данные обо всех карточках и возвращает json-объект с массивом объектов карточек

Маршрут обрабатывает **HTTP GET** запрос, сделанный по пути `/cards`.

### Тело запроса

Тело запроса не требуется.

### Ответ

Маршрут возвращает json-объект с массивом всех объектов карточек.

Пример:

~~~json
[
    {
        "id": 4,
        "label": "Set the tasks priorities",
        "description": "",
        "column": 2,
        "row": 1,
        "start_date": "2018-01-01T00:00:00Z",
        "end_date": null,
        "progress": 75,
        "attached": [],
        "color": "#FFC975",
        "users": []
    },
    {
        "id": 5,
        "label": "Custom icons",
        "description": "",
        "column": 2,
        "row": 2,
        "start_date": "2019-01-01T00:00:00Z",
        "end_date": null,
        "progress": 0,
        "attached": [],
        "color": "#65D3B3",
        "users": []
    },
    {
        "id": 6,
        "label": "Integration with Gantt",
        "description": "",
        "column": 2,
        "row": 2,
        "start_date": "2020-01-01T00:00:00Z",
        "end_date": null,
        "progress": 75,
        "attached": [],
        "color": "#FFC975",
        "users": []
    },
]
~~~

:::note
Даты начала и окончания события должны соответствовать ISO формату **yyyy-MM-dd'T'HH:mm:ss.SSSXXX**
:::

Для другого примера возвращаемого объекта смотрите раздел [**cards**](api/config/js_kanban_cards_config.md).

HTTP статус-код показывает, был ли запрос успешным (response.status == 200) или завершился с ошибкой (response.status == 500).

---

**Связанные статьи**:
- [Работа с сервером](guides/working_with_server.md)
- [getCards()](api/provider/rest_methods/js_kanban_getcards_method.md)