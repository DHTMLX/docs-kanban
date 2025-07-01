---
sidebar_label: DELETE /links
title: DELETE /links
description: В этом разделе рассматривается REST-маршрут DELETE /links в библиотеке DHTMLX JavaScript Kanban. Включает руководства для разработчиков, справочник API, примеры, живые демо и бесплатный 30-дневный пробный период DHTMLX Kanban.
---

# DELETE `/links`

### Описание

@short: Удаляет запись ссылки

Этот эндпоинт обрабатывает **HTTP DELETE** запрос, отправляемый на `/links/{id}`.

### Параметры пути

В URL запроса включён следующий параметр:

| Имя  | Тип     | Описание                                    |
| ---- | ------- | ------------------------------------------- |
| `id` | number  | *Обязательно*. Идентификатор ссылки, которую нужно удалить. |

### Тело запроса

Тело запроса не требуется.

### Ответ

Содержимое не возвращается. HTTP-статус код указывает на успех (response.status == 200) или ошибку (response.status == 500).

---

**Связанные статьи**:
- [Работа с сервером](/guides/working_with_server.md)
- [getLinks()](/api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](/api/config/js_kanban_links_config.md)
