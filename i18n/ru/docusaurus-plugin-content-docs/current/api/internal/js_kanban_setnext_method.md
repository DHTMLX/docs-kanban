---
sidebar_label: api.setNext()
title: Метод setNext
description: Вы можете узнать о методе setNext в документации по библиотеке DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# api.setNext()

### Описание

@short: Позволяет добавить некоторое действие в порядок Event Bus

### Использование

~~~jsx {}
api.setNext(next: any): void;
~~~

### Параметры

- `next` - (обязательный) действие, которое нужно включить в порядок **Event Bus**  

### Пример

~~~jsx {15}
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
        rowKey: "row"
    });
    board.api.setNext(restProvider);
});
~~~

:::info
Необходимо включить **RestDataProvider** в порядок **Event Bus**, чтобы выполнять операции с данными (**добавление**, **удаление** и т.д.) и отправлять соответствующие запросы на сервер
:::