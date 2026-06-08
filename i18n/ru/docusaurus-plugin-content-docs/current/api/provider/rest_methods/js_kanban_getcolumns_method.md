---
sidebar_label: getColumns()
title: API REST-метода getColumns
description: Ознакомьтесь с API REST-метода getColumns для DHTMLX Kanban. Узнайте, как получить промис с данными колонок.
---

# getColumns()

### Описание

@short: Получает promise с данными колонок

:::info
Метод **getColumns()** является частью сервиса **RestDataProvider**, предназначенного для работы с сервером
:::

### Использование

~~~jsx {}
getColumns(): promise;
~~~

### Возвращает

Метод **getColumns()** отправляет запрос на сервер методом **GET** и возвращает **promise** с данными колонок

### Пример

~~~jsx {2,6}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns()
]).then(([cards, columns]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns
    });
    board.api.setNext(restProvider);
});
~~~

**Связанные статьи:** [Работа с сервером](guides/working_with_server.md)