---
sidebar_label: delete-column
title: Событие delete-column
description: Ознакомьтесь с событием delete-column в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков, справочные материалы по API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# delete-column

### Описание

@short: Срабатывает при удалении колонки

### Использование

~~~jsx {}
"delete-column": ({ 
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Параметры

Коллбек для события **delete-column** получает объект со следующими свойствами:

- `id` - (обязательный) ID удаляемой колонки
- `skipProvider` - (необязательный) контролирует, отправляется ли запрос на сервер или нет

:::info
Для управления внутренними событиями смотрите раздел [**Event Bus methods**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "delete-column" 
board.api.on("delete-column", (obj) => {
    console.log(obj.id);
});
~~~
