---
sidebar_label: getLinks()
title: REST-метод getLinks
description: Вы можете узнать о REST-методе getLinks в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# getLinks()

### Описание

@short: Возвращает промис с данными о связях

:::info
Метод **getLinks()** принадлежит сервису **RestDataProvider**, предназначенному для взаимодействия с сервером.
:::

### Использование

~~~jsx {}
getLinks(): promise;
~~~

### Возвращаемое значение

Метод **getLinks()** отправляет **GET**-запрос на сервер и возвращает **промис**, который разрешается с данными о связях.

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

**Журнал изменений:** Этот метод был добавлен в версии 1.5

**Связанные статьи:** [Работа с сервером](../../../../guides/working_with_server)
