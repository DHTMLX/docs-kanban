---
sidebar_label: deleteCard()
title: API метода deleteCard
description: Ознакомьтесь с API метода deleteCard для DHTMLX Kanban. Узнайте, как удалить карточку с доски по её ID.
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