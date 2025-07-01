---
sidebar_label: delete-card
title: Событие delete-card
description: Изучите событие delete-card в документации библиотеки DHTMLX JavaScript Kanban. Найдите руководства для разработчиков, справочник API, примеры кода, живые демо и скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# delete-card

### Описание

@short: Срабатывает при удалении карточки

### Использование

~~~jsx {}
"delete-card": ({ 
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Параметры

Обработчик события **delete-card** получает объект со следующими свойствами:

- `id` - (обязательный) идентификатор удаляемой карточки
- `skipProvider` - (необязательный) управляет блокировкой отправки запроса на сервер

:::info
Для управления внутренними событиями обратитесь к разделу [**Методы Event Bus**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// слушаем событие "delete-card"
board.api.on("delete-card", (obj) => {
    console.log(obj.id);
});
~~~
