---
sidebar_label: getColumns()
title: REST метод getColumns
description: Вы можете узнать о REST методе getColumns в документации JavaScript библиотеки DHTMLX Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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