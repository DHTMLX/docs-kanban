---
sidebar_label: delete-vote
title: Событие delete-vote
description: В документации библиотеки DHTMLX JavaScript Kanban вы можете узнать о событии delete-vote. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# delete-vote

### Описание

@short: Срабатывает, когда пользователь удаляет голос с карточки

### Использование

~~~jsx {}
"delete-vote": ({
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Параметры

Обработчик события **delete-vote** принимает объект со следующими параметрами:

- `cardId` - (обязательно) ID карточки, с которой нужно удалить голос
- `skipProvider` - (необязательно) включает или отключает предотвращение отправки запроса на сервер

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
// подписываемся на событие "delete-vote"
board.api.on("delete-vote", (obj) => {
    console.log(obj.cardId);
});
~~~

**История изменений:** Событие было добавлено в версии v1.4