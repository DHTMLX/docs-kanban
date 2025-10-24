---
sidebar_label: delete-card
title: Событие delete-card
description: Вы можете узнать о событии delete-card в документации по JavaScript библиотеке Kanban от DHTMLX. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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

Колбэк события **delete-card** принимает объект со следующими параметрами:

- `id` - (обязательный) ID карточки, которую необходимо удалить
- `skipProvider` - (необязательный) включает/отключает предотвращение отправки запроса на сервер

:::info
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/main_overview.md/#event-bus-methods)
:::

### Пример

~~~jsx {7-9}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "delete-card"
board.api.on("delete-card", (obj) => {
    console.log(obj.id);
});
~~~