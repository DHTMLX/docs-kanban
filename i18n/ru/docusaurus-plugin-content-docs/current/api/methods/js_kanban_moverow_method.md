---
sidebar_label: moveRow()
title: Метод moveRow
description: Вы можете узнать о методе moveRow в документации JavaScript-библиотеки DHTMLX Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# moveRow()

### Описание

@short: Перемещает строку на новое место внутри доски.

### Использование

~~~jsx {}
moveRow({
    id: string | number,
    before: string | number
}): void;
~~~

### Параметры

- `id` - (обязательно) идентификатор строки, которую нужно переместить
- `before` - (обязательно) идентификатор строки, перед которой будет размещена перемещаемая строка

### Пример

~~~jsx {8-11}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    row
});
// перемещаем дорожку "task" и размещаем её перед "feature"
board.moveRow({
    id: "task",
    before: "feature"
});
~~~

**Журнал изменений:** Метод был добавлен в версии v1.1
