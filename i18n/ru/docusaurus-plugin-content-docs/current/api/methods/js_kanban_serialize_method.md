---
sidebar_label: serialize()
title: Метод serialize
description: Вы можете узнать о методе serialize в документации JavaScript-библиотеки DHTMLX Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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