---
sidebar_label: deleteCard()
title: Метод deleteCard
description: В документации библиотеки DHTMLX JavaScript Kanban вы можете узнать о методе deleteCard. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# deleteCard()

### Описание

@short: Удаляет конкретную карточку из хранилища Kanban.

### Использование

~~~jsx {}
deleteCard({ id: string | number }): void;
~~~

### Параметры

- `id` - (обязательный) уникальный идентификатор карточки для удаления

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
