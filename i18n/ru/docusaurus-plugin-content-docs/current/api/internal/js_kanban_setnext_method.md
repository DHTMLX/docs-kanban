---
sidebar_label: api.setNext()
title: Метод setNext
description: Вы можете ознакомиться с методом setNext в документации по библиотеке DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# api.setNext()

### Описание

@short: Позволяет вставить конкретное действие в последовательность Event Bus.

### Использование

~~~jsx {}
api.setNext(next: any): void;
~~~

### Параметры

- `next` - (обязательно) действие, которое будет добавлено в последовательность **Event Bus**

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
Включение **RestDataProvider** в последовательность **Event Bus** необходимо для обработки операций с данными, таких как **добавление**, **удаление**, а также для отправки соответствующих запросов на сервер.
:::
