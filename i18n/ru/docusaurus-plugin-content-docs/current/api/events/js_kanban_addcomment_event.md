---
sidebar_label: add-comment
title: Событие add-comment
description: Изучите событие add-comment в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков, справочниками по API, попробуйте примеры и живые демо, а также получите бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# add-comment

### Описание

@short: Срабатывает при добавлении нового комментария

### Использование

~~~jsx {}
"add-comment": ({
    id?: string | number,
    cardId: string | number,
    comment: {
        text?: string,
        date?: Date,
        html?: string
    },
    skipProvider?: boolean
}) => void;
~~~

### Параметры

Объект, передаваемый в коллбэк для события **add-comment**, содержит следующие свойства:

- `id` -  (необязательно) ID, присвоенный новому комментарию
- `cardId` - (обязательно) ID карточки, к которой добавляется комментарий
- `comment` - (обязательно) объект, описывающий детали нового комментария. Может включать:
    - `text` - (необязательно) текстовое содержимое комментария
    - `date` - (необязательно) дата создания комментария
    - `html` - (необязательно) HTML-содержимое комментария. Для включения рендеринга HTML вместо текста необходимо активировать свойство `html` в конфигурации [`editorShape`](/api/config/js_kanban_editorshape_config/#--параметры-для-типа-comments)
- `skipProvider` - (необязательно) управляет тем, будет ли предотвращён запрос к серверу

:::info
Для управления внутренней обработкой событий обратитесь к [**Event Bus methods**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаём Канбан
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "add-comment"
board.api.on("add-comment", (obj) => {
    console.log(obj.comment);
});
~~~

**История изменений:** Это событие было добавлено в версии v1.4
