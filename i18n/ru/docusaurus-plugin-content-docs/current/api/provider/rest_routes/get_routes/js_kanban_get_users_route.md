---
sidebar_label: GET /users
title: GET /users
description: Изучите REST-эндпоинт GET /users в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков, справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# GET `/users`

### Описание

@short: Получает данные обо всех пользователях и возвращает JSON-объект, содержащий массив объектов пользователей.

Этот эндпоинт обрабатывает **HTTP GET** запросы, отправленные на URL `/users`.

### Тело запроса

Тело запроса не требуется.

### Ответ

Ответ содержит JSON-массив объектов с данными пользователей.

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

Другой пример возвращаемого объекта смотрите в разделе [**cardShape**](/api/config/js_kanban_cardshape_config.md).

HTTP-код состояния указывает, был ли запрос успешным (response.status == 200) или произошла ошибка (response.status == 500).

---

**Связанные статьи**:
- [Работа с сервером](/guides/working_with_server.md)
- [getUsers()](/api/provider/rest_methods/js_kanban_getusers_method.md)
