---
sidebar_label: getUsers()
title: REST-метод getUsers
description: Вы можете ознакомиться с REST-методом getUsers в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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