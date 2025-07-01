---
sidebar_label: getCards()
title: REST-метод getCards
description: Вы можете узнать о REST-методе getCards в документации JavaScript-библиотеки DHTMLX Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# getCards()

### Описание

@short: Возвращает promise с данными карточек

:::info
Метод **getCards()** принадлежит сервису **RestDataProvider**, который предназначен для работы с серверными запросами.
:::

### Использование

~~~jsx {}
getCards(): promise;
~~~

### Возвращаемое значение

Метод **getCards()** выполняет **GET**-запрос к серверу и возвращает **promise** с данными карточек.

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

**Связанные статьи:** [Работа с сервером](../../../../guides/working_with_server)
