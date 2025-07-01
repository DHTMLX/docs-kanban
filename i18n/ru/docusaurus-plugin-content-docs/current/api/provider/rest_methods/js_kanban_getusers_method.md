---
sidebar_label: getUsers()
title: REST-метод getUsers
description: Вы можете узнать о REST-методе getUsers в документации JavaScript-библиотеки DHTMLX Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# getUsers()

### Описание

@short: Получает promise, содержащий данные пользователей

:::info
Метод **getUsers()** является частью сервиса **RestDataProvider**, предназначенного для взаимодействия с сервером
:::

### Использование

~~~jsx {}
getUsers(): promise;
~~~

### Возвращаемое значение

Метод **getUsers()** выполняет **GET**-запрос к серверу и возвращает **promise**, который разрешается с данными пользователей

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

**История изменений:** Этот метод был введён в версии 1.3

**Связанные статьи:** [Работа с сервером](../../../../guides/working_with_server)
