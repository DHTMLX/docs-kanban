---
sidebar_label: getCards()
title: API REST-метода getCards
description: Ознакомьтесь с API REST-метода getCards для DHTMLX Kanban. Узнайте, как получить промис с данными карточек.
---

# getCards()

### Описание

@short: Возвращает промис с данными карточек

:::info
Метод **getCards()** является частью сервиса **RestDataProvider**, предназначенного для работы с сервером
:::

### Использование

~~~jsx {}
getCards(): promise;
~~~

### Возвращаемое значение

Метод **getCards()** отправляет запрос на сервер с помощью метода **GET** и возвращает **промис** с данными карточек

### Пример

~~~jsx {2,5}
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