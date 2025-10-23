---
sidebar_label: addComment()
title: Метод addComment
description: Вы можете узнать о методе addComment в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# addComment()

### Описание

@short: Добавляет новый комментарий к указанной карточке по её ID

### Использование

~~~jsx {}
addComment({
    id?: string | number,
    cardId: string | number,
    comment: {
        text?: string,
        date?: Date,
        html?: string
    }
}): void;
~~~

### Параметры

- `id` -  (необязательно) ID нового комментария
- `cardId` - (обязательно) ID карточки, к которой нужно добавить комментарий
- `comment` - (обязательно) объект конфигурации нового комментария. Здесь можно указать следующие параметры:
    - `text` - (необязательно) текст нового комментария
    - `date` - (необязательно) дата нового комментария
    - `html` - (необязательно) HTML-разметка нового комментария. Включите свойство `html` в конфигурации [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type), чтобы отображать HTML-разметку вместо текста

### Пример

~~~jsx {7-15}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// добавляем новый комментарий
board.addComment({
    id: 1,
    cardId: 1,
    comment: {
        text: "", 
        date: new Date("01/07/2021"),
        html: "<b>Важный комментарий</b>"
    }
});
~~~

**История изменений:** Метод был добавлен в версии v1.4