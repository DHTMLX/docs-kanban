---
sidebar_label: getRows()
title: API REST-метода getRows
description: Ознакомьтесь с API REST-метода getRows для DHTMLX Kanban. Узнайте, как получить промис с данными строк.
---

# getRows()

### Описание

@short: Получает promise с данными строк

:::info
Метод **getRows()** является частью сервиса **RestDataProvider**, предназначенного для работы с сервером
:::

### Использование

~~~jsx {}
getRows(): promise;
~~~

### Возвращает

Метод **getRows()** отправляет запрос на сервер методом **GET** и возвращает **promise** с данными строк

### Пример

~~~jsx {2,7}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getRows()
]).then(([cards, columns, rows]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        rows,
        rowKey: "type"
    });
    board.api.setNext(restProvider);
});
~~~

**Связанные статьи:** [Работа с сервером](guides/working_with_server.md)