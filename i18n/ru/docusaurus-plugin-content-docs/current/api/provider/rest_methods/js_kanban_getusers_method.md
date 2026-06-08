---
sidebar_label: getUsers()
title: API REST-метода getUsers
description: Ознакомьтесь с API REST-метода getUsers для DHTMLX Kanban. Узнайте, как получить промис с данными пользователей.
---

# getUsers()

### Описание

@short: Возвращает promise с данными пользователей

:::info
Метод **getUsers()** является частью сервиса **RestDataProvider**, предназначенного для работы с сервером
:::

### Использование

~~~jsx {}
getUsers(): promise;
~~~

### Возвращаемое значение

Метод **getUsers()** отправляет запрос на сервер методом **GET** и возвращает **promise** с данными пользователей.

### Пример

~~~jsx {2,8,21}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getRows(),
    restProvider.getUsers(),
]).then(([cards, columns, rows, users]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        rows,
        rowKey: "type",
        editorShape: [
            ...kanban.defaultEditorShape,
            {
                type: "multiselect", 
                key: "users",
                label: "Users",
                values: users
            }
        ]
    });
    board.api.setNext(restProvider);
});
~~~

**Журнал изменений:** Метод был добавлен в версии v1.3

**Связанные статьи:** [Работа с сервером](guides/working_with_server.md)