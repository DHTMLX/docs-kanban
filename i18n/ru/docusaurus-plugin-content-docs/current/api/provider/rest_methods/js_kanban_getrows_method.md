---
sidebar_label: getRows()
title: REST метод getRows
description: Вы можете ознакомиться с REST методом getRows в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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