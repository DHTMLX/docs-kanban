---
sidebar_label: update-comment
title: Событие update-comment
description: Вы можете узнать о событии update-comment в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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

Обратный вызов события **update-comment** принимает объект со следующими параметрами:

- `id` -  (необязательный) ID комментария, который будет обновлён
- `cardId` - (обязательный) ID карточки, в которой будет обновлён комментарий
- `comment` - (обязательный) объект конфигурации обновляемого комментария. Здесь можно указать следующие параметры:
    - `id` -  (необязательный) ID обновляемого комментария
    - `cardId` - (необязательный) ID карточки, к которой будет добавлен обновлённый комментарий
    - `text` - (необязательный) текст обновлённого комментария
    - `date` - (необязательный) дата обновлённого комментария
    - `html` - (необязательный) HTML-разметка обновлённого комментария. Включите свойство `html` в конфиге [`editorShape`](/api/config/js_kanban_editorshape_config/#--параметры-для-типа-comments), чтобы отображать HTML-разметку вместо текста
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
// подписываемся на событие "update-comment"
board.api.on("update-comment", (obj) => {
    console.log(obj.comment);
});
~~~

**История изменений:** Событие добавлено в версии v1.4