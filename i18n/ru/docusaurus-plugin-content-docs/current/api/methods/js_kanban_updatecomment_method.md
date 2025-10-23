---
sidebar_label: updateComment()
title: Метод updateComment
description: Ознакомьтесь с методом updateComment в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# updateComment()

### Описание

@short: Обновляет комментарий карточки по его ID

### Использование

~~~jsx {}
updateComment({
    id?: string | number, 
    cardId: string | number, 
    comment: {
        id?: string | number, 
        cardId?: string | number, 
        text?: string, 
        date?: Date, 
        html?: string 
    }
}): void;
~~~

### Параметры

- `id` -  (необязательно) ID комментария, который нужно обновить
- `cardId` - (обязательно) ID карточки, комментарий которой нужно обновить
- `comment` - (обязательно) объект конфигурации обновляемого комментария. Здесь можно указать следующие параметры:
    - `id` -  (необязательно) ID обновляемого комментария
    - `cardId` - (необязательно) ID карточки, к которой будет добавлен обновлённый комментарий
    - `text` - (необязательно) текст обновляемого комментария
    - `date` - (необязательно) дата обновляемого комментария
    - `html` - (необязательно) HTML-разметка обновляемого комментария. Включите свойство `html` в конфигурации [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type), чтобы отображать HTML-разметку вместо текста

### Пример

~~~jsx {7-17}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// обновляем комментарий
board.updateComment({
    id: 1,
    cardId: 1,
    comment: {
        id: 2,
        cardId: 4,
        text: "", 
        date: new Date("01/08/2021"),
        html: "<b>Updated comment</b>"
    }
});
~~~

**История изменений:** Метод добавлен в версии v1.4