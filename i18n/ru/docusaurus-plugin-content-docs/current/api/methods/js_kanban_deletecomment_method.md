---
sidebar_label: deleteComment()
title: Метод deleteComment
description: Вы можете узнать о методе deleteComment в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# deleteComment()

### Описание

@short: Удаляет комментарий карточки по его ID

### Использование

~~~jsx {}
deleteComment({
    id: string | number, 
    cardId: string | number
}): void;
~~~

### Параметры

- `id` - (обязательный) ID комментария, который нужно удалить
- `cardId` - (обязательный) ID карточки, у которой нужно удалить комментарий

### Пример

~~~jsx {7-10}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// удаляем комментарий
board.deleteComment({
    id: 1,
    cardId: 1,
});
~~~

**История изменений:** Метод был добавлен в версии v1.4