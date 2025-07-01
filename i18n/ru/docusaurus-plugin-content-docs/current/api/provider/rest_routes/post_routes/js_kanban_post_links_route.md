---
sidebar_label: POST /links
title: POST /links
description: Изучите маршрут REST POST /links в документации JavaScript библиотеки DHTMLX Kanban. Ознакомьтесь с руководствами разработчика, справочниками API, примерами кода, живыми демо и скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# POST `/links`

### Описание

@short: Добавляет новую ссылку и возвращает JSON-объект с ID новой ссылки

Этот маршрут обрабатывает **HTTP POST** запросы, отправленные на конечную точку `/links`.

### Тело запроса

Сервер ожидает JSON-объект со следующими свойствами:

| Имя         | Тип                    | Описание |
| ----------- | ---------------------- | -------- |
| `masterId`  |  *number* или *string* | *Обязательно*. ID мастер-ссылки. |
| `slaveId`   |  *number* или *string* | *Обязательно*. ID подчинённой ссылки. |
| `relation`  |  *string*              | *Обязательно*. Определяет тип отношения, которое представляет ссылка. |

Пример:

~~~json
{
    "masterId": 1,
    "slaveId": 2,
    "relation": "relatesTo",
}
~~~

### Ответ

В ответ возвращается JSON-объект с ID вновь созданной ссылки.

Пример:

~~~json
{ 
   "id": 1
}
~~~

HTTP-статус код указывает на успешность запроса (response.status == 200) или на ошибку (response.status == 500).

---

**Связанные статьи**:
- [Работа с сервером](/guides/working_with_server.md)
- [getLinks()](/api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](/api/config/js_kanban_links_config.md)
