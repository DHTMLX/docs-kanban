---
sidebar_label: deleteComment()
title: Метод deleteComment
description: В документации по библиотеке DHTMLX JavaScript Kanban вы можете узнать о методе deleteComment. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# deleteComment()

### Описание

@short: Удаляет комментарий из карточки по его ID

### Использование

~~~jsx {}
deleteComment({
    id?: string | number, 
    cardId: string | number
}): void;
~~~

### Параметры

- `id` -  (необязательно) ID комментария, который необходимо удалить
- `cardId` - (обязательно) ID карточки, содержащей комментарий

### Пример

~~~jsx {7-10}
// создаём Kanban
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

**История изменений:** Метод добавлен в версии v1.4
