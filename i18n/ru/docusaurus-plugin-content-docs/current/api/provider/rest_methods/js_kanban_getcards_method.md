---
sidebar_label: getCards()
title: REST метод getCards
description: Вы можете узнать о REST методе getCards в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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