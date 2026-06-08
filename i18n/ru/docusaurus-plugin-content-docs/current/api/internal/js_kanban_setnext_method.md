---
sidebar_label: api.setNext()
title: API метода setNext
description: Ознакомьтесь с API метода setNext для DHTMLX Kanban. Узнайте, как подключить API доски к провайдерам данных и серверным потокам.
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