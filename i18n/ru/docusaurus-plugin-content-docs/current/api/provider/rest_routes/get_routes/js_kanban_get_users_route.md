---
sidebar_label: GET /users
title: GET /users
description: Вы можете узнать о REST-маршруте GET /users в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# GET `/users`

### Описание

@short: Получает данные обо всех пользователях и возвращает json-объект с массивом объектов пользователей

Маршрут обрабатывает **HTTP GET** запрос, сделанный по пути `/users`.

### Тело запроса

Тело запроса не требуется.

### Ответ

Маршрут возвращает json-объект с массивом объектов, содержащих данные пользователей.

Пример:

~~~json
[
    {
        "id": 1,
        "label": "Jhon",
        "avatar": "https://serv.com/images/jhon.png"
    },
    {
        "id": 2,
        "label": "Ben",
        "avatar": "https://serv.com/images/ben.png"
    },
    {
        "id": 3,
        "label": "Alex",
        "avatar": "https://serv.com/images/alex.png"
    }
]
~~~

Другой пример возвращаемого объекта смотрите в разделе [**cardShape**](api/config/js_kanban_cardshape_config.md).

HTTP статус код показывает, успешен ли запрос (response.status == 200) или произошла ошибка (response.status == 500).

---

**Связанные статьи**:
- [Работа с сервером](guides/working_with_server.md)
- [getUsers()](api/provider/rest_methods/js_kanban_getusers_method.md)