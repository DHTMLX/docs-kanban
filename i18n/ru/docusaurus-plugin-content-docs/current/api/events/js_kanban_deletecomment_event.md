---
sidebar_label: delete-comment
title: Событие delete-comment
description: Вы можете узнать о событии delete-comment в документации JavaScript-библиотеки DHTMLX Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# delete-comment

### Описание

@short: Срабатывает при удалении комментария к карточке

### Использование

~~~jsx {}
"delete-comment": ({
    id?: string | number, 
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Параметры

Обратный вызов события **delete-comment** принимает объект со следующими параметрами:

- `id` -  (необязательно) ID комментария, который нужно удалить
- `cardId` - (обязательно) ID карточки, комментарий которой нужно удалить
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
// подписываемся на событие "delete-comment"
board.api.on("delete-comment", (obj) => {
    console.log(obj.id);
});
~~~

**История изменений:** Событие добавлено в версии v1.4