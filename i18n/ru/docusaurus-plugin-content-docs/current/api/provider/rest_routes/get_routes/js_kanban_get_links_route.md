---
sidebar_label: GET /links
title: GET /links
description: Изучите REST-эндпоинт GET /links в документации библиотеки DHTMLX JavaScript Kanban. Получите доступ к руководствам для разработчиков, ознакомьтесь с API, протестируйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# GET `/links`

### Описание

@short: Получает информацию обо всех связях и возвращает JSON-объект, содержащий массив объектов связей.

Этот эндпоинт обрабатывает **HTTP GET** запросы, направленные на путь `/links`.

### Тело запроса

Отправлять тело запроса не требуется.

### Ответ

Ответ содержит JSON-объект с массивом всех объектов связей.

Пример:

~~~json
[
    {
        "id": 1,
        "masterId": 2,
        "slaveId": 5,
        "relation": "relatesTo",
    },
    {
        "id": 2,
        "masterId": 4,
        "slaveId": 9,
        "relation": "relatesTo",
    },
]
~~~

Другой пример возвращаемого объекта можно посмотреть в разделе [**links**](/api/config/js_kanban_links_config.md).

Код статуса HTTP указывает, был ли запрос успешным (response.status == 200) или произошла ошибка (response.status == 500).

---

**Связанные статьи**:
- [Работа с сервером](/guides/working_with_server.md)
- [getLinks()](/api/provider/rest_methods/js_kanban_getlinks_method.md)
