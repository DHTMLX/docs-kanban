---
sidebar_label: POST /links
title: API REST-маршрута POST /links
description: Ознакомьтесь с API REST-маршрута POST /links для DHTMLX Kanban. Узнайте, как создать новую связь и получить её новый ID.
---

# POST `/links`

### Описание

@short: Создаёт новую ссылку и возвращает json объект с новым ID ссылки

Маршрут обрабатывает **HTTP POST** запрос, отправленный на путь `/links`.

### Тело запроса

Сервер ожидает получить json объект со следующими свойствами:

| Имя         | Тип                    | Описание                         |
| ----------- | ---------------------- | --------------------------------|
| `source`    | *number* или *string*  | *Обязательно*. ID начальной ссылки. |
| `target`    | *number* или *string*  | *Обязательно*. ID конечной ссылки.  |
| `relation`  | *string*               | *Обязательно*. Тип связи, создаваемой ссылкой. |

Пример:

~~~json
{
    "source": 1,
    "target": 2,
    "relation": "relatesTo"
}
~~~

### Ответ

Маршрут возвращает json объект с новым ID ссылки.

Пример:

~~~json
{ 
   "id": 1
}
~~~

HTTP статус код показывает, успешен ли запрос (response.status == 200) или произошла ошибка (response.status == 500).

---

**Связанные статьи**:
- [Работа с сервером](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](api/config/js_kanban_links_config.md)