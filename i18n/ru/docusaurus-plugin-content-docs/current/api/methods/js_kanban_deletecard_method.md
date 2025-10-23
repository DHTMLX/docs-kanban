---
sidebar_label: deleteCard()
title: Метод deleteCard
description: В документации библиотеки DHTMLX JavaScript Kanban вы можете узнать о методе deleteCard. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# deleteCard()

### Описание

@short: Удаляет указанную карточку из хранилища данных Kanban

### Использование

~~~jsx {}
deleteCard({ id: string | number }): void;
~~~

### Параметры

- `id` - (обязательный) идентификатор карточки, которую необходимо удалить

### Пример

~~~jsx {7}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// удаляем карточку по её id
board.deleteCard({ id: 1 });
~~~