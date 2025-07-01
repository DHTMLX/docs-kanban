---
sidebar_label: update-comment
title: Событие update-comment
description: Узнайте о событии update-comment в библиотеке DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочниками API, изучите примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# update-comment

### Описание

@short: Срабатывает при обновлении комментария

### Использование

~~~jsx {}
"update-comment": ({
    id?: string | number, 
    cardId: string | number, 
    comment: {
        id?: string | number, 
        cardId?: string | number, 
        text?: string, 
        date?: Date, 
        html?: string 
    },
    skipProvider?: boolean
}) => void;
~~~

### Параметры

Колбэк для события **update-comment** получает объект с такими параметрами:

- `id` - (необязательно) ID обновляемого комментария
- `cardId` - (обязательно) ID карточки, в которой находится комментарий
- `comment` - (обязательно) объект с обновлёнными данными комментария. Может содержать:
    - `id` - (необязательно) ID обновлённого комментария
    - `cardId` - (необязательно) ID карточки, к которой будет добавлен обновлённый комментарий
    - `text` - (необязательно) текст обновлённого комментария
    - `date` - (необязательно) дата обновлённого комментария
    - `html` - (необязательно) HTML-разметка обновлённого комментария. Чтобы отображать HTML вместо текста, необходимо включить свойство `html` в конфигурации [`editorShape`](/api/config/js_kanban_editorshape_config/#--параметры-для-типа-comments)
- `skipProvider` - (необязательно) управляет тем, будет ли запрос на обновление отправлен на сервер

:::info
Для управления внутренними событиями можно использовать [**методы Event Bus**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "update-comment"
board.api.on("update-comment", (obj) => {
    console.log(obj.comment);
});
~~~

**История изменений:** Событие было добавлено в версии v1.4
