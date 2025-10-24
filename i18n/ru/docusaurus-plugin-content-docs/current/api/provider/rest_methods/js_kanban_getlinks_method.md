---
sidebar_label: getLinks()
title: REST-метод getLinks
description: Вы можете ознакомиться с REST-методом getLinks в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# getLinks()

### Описание

@short: Возвращает promise с данными ссылок

:::info
Метод **getLinks()** является частью сервиса **RestDataProvider**, предназначенного для работы с сервером
:::

### Использование

~~~jsx {}
getLinks(): promise;
~~~

### Возвращает

Метод **getLinks()** отправляет запрос на сервер с использованием метода **GET** и возвращает **promise** с данными ссылок.

### Пример

~~~jsx {2,7}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getLinks(),
]).then(([cards, columns, links]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        links
    });
    board.api.setNext(restProvider);
});
~~~

**История изменений:** Метод был добавлен в версии v1.5

**Связанные статьи:** [Работа с сервером](guides/working_with_server.md)