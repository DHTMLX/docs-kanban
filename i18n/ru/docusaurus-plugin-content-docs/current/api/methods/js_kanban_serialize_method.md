---
sidebar_label: serialize()
title: Метод serialize API
description: Изучите API метода serialize для DHTMLX Kanban. Узнайте, как сериализовать данные доски в JSON.
---

# serialize()

### Описание

@short: Сериализует данные Kanban в JSON

### Использование

~~~jsx {}
serialize(): object;
~~~

### Возвращает

Метод возвращает объект с данными Kanban  

~~~jsx {}
{
    cards: [{...}, {...}, ...],
    rows: [{...}, {...}, ...],
    columns: [{...}, {...}, ...],
    links: [{...}, {...}, ...]
}
~~~

### Пример

~~~jsx {7}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// получаем объект с данными Kanban
board.serialize();
~~~