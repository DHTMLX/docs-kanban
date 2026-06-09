---
sidebar_label: DELETE /links
title: API REST-маршрута DELETE /links
description: Ознакомьтесь с REST-маршрутом DELETE /links для DHTMLX Kanban. Узнайте, как удалить связь.
---

# DELETE `/links`

### Описание

@short: Удаляет данные о связи

Маршрут обрабатывает **HTTP DELETE** запрос, отправленный по пути `/links/{id}`.

### Параметры пути

Следующий параметр передается в строке запроса:

| Имя  | Тип     | Описание                            |
| ---- | ------- | --------------------------------- |
| `id` | number  | *Обязательный*. ID связи для удаления. |

### Тело запроса

Тело запроса не требуется.

### Ответ

Данные в ответе не возвращаются. HTTP статус код указывает, успешно ли выполнен запрос (response.status == 200) или произошла ошибка (response.status == 500).

---

**Связанные статьи**:
- [Работа с сервером](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](api/config/js_kanban_links_config.md)