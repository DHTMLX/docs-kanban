---
sidebar_label: add-vote
title: Событие add-vote
description: Вы можете ознакомиться с событием add-vote в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# add-vote

### Описание

@short: Срабатывает, когда пользователь добавляет новый голос

### Использование

~~~jsx {}
"add-vote": ({
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Параметры

Обработчик события **add-vote** принимает объект со следующими параметрами:

- `cardId` - (обязательно) ID карточки, к которой добавляется голос
- `skipProvider` - (необязательно) включает/отключает предотвращение отправки запроса на сервер

:::info
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/main_overview.md/#event-bus-methods)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "add-vote"
board.api.on("add-vote", (obj) => {
    console.log(obj.cardId);
});
~~~

**История изменений:** Событие было добавлено в версии v1.4