---
sidebar_label: serialize()
title: Метод serialize
description: Вы можете узнать о методе serialize в документации по библиотеке DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# serialize()

### Описание

@short: Преобразует данные Kanban в формат JSON.

### Использование

~~~jsx {}
serialize(): object;
~~~

### Возвращаемое значение

Этот метод возвращает объект, содержащий данные Kanban:

~~~jsx {}
{
    cards: [{...}, {...}, ...],
    rows: [{...}, {...}, ...],
    columns: [{...}, {...}, ...]
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
