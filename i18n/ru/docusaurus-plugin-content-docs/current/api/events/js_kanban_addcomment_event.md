---
sidebar_label: add-comment
title: Событие add-comment
description: Вы можете узнать о событии add-comment в документации JavaScript-библиотеки DHTMLX Kanban. Просмотрите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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

Колбэк события **add-comment** принимает объект со следующими параметрами:

- `id` -  (необязательный) ID нового комментария
- `cardId` - (обязательный) ID карточки, к которой добавляется комментарий
- `comment` - (обязательный) объект конфигурации нового комментария. Здесь можно указать следующие параметры:
    - `text` - (необязательный) текст нового комментария
    - `date` - (необязательный) дата нового комментария
    - `html` - (необязательный) HTML-разметка нового комментария. Включите свойство `html` в конфигурации [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type), чтобы отображать HTML-разметку вместо текста
- `skipProvider` - (необязательный) включает/отключает предотвращение отправки запроса на сервер

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
// подписываемся на событие "add-comment"
board.api.on("add-comment", (obj) => {
    console.log(obj.comment);
});
~~~

**Журнал изменений:** Событие добавлено в версии v1.4