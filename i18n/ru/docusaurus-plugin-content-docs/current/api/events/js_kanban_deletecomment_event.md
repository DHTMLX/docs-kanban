---
sidebar_label: delete-comment
title: Событие delete-comment
description: Узнайте о событии delete-comment в документации библиотеки DHTMLX JavaScript Kanban. Изучите руководства для разработчиков, справочники по API, попробуйте примеры кода и живые демонстрации, а также получите бесплатный 30-дневный пробный период DHTMLX Kanban.
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

Объект, передаваемый в колбэк события **delete-comment**, содержит следующие свойства:

- `id` -  (необязательно) ID удаляемого комментария
- `cardId` - (обязательно) ID карточки, содержащей комментарий
- `skipProvider` - (необязательно) управляет запретом отправки запроса на сервер

:::info
Для управления внутренними событиями можно использовать [**методы Event Bus**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаём Канбан
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "delete-comment"
board.api.on("delete-comment", (obj) => {
    console.log(obj.id);
});
~~~

**Журнал изменений:** Это событие было добавлено в версии v1.4
