---
sidebar_label: DELETE /cards/{id}/comments/{id}
title: API REST-маршрута DELETE /cards/{cardId}/comments/{commentId}
description: Ознакомьтесь с API REST-маршрута DELETE /cards/{cardId}/comments/{commentId} для DHTMLX Kanban. Узнайте, как удалить комментарий с карточки.
---

# DELETE `/cards/{cardId}/comments/{commentId}`

### Описание

@short: Удаляет комментарий с карточки

Этот маршрут обрабатывает **HTTP DELETE** запрос, отправленный по пути `cards/{cardId}/comments/{commentId}`.

### Параметры пути

В строке запроса передаются следующие параметры:

| Имя          | Тип         | Описание |
| ------------ | ----------- | -------- |
| `cardId`     |  number     | *Обязательно*. ID карточки, из которой будет удалён комментарий. |
| `commentId`  |  number     | *Обязательно*. ID комментария, который необходимо удалить. |

### Тело запроса

Тело запроса не требуется.

### Ответ

Сервер возвращает JSON объект с ID пользователя, который удалил комментарий.

Пример:

~~~json
{
    "id": 4
}
~~~

HTTP статус код указывает, был ли запрос успешным (response.status == 200) или произошла ошибка (response.status == 500).

---

**Связанные статьи**: [Работа с сервером](guides/working_with_server.md)