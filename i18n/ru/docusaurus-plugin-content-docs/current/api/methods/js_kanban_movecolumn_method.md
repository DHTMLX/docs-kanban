---
sidebar_label: moveColumn()
title: Метод moveColumn
description: Вы можете узнать о методе moveColumn в документации JavaScript-библиотеки DHTMLX Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# moveColumn()

### Описание

@short: Перемещает колонку на новую позицию внутри доски.

### Использование

~~~jsx {}
moveColumn({
    id: string | number,
    before: string | number
}): void;
~~~

### Параметры

- `id` - (обязательный) идентификатор колонки, которую нужно переместить
- `before` - (обязательный) идентификатор колонки, перед которой будет вставлена перемещаемая колонка

### Пример

~~~jsx {7-10}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// перемещаем колонку "backlog" и помещаем её перед колонкой "done"
board.moveColumn({
    id: "backlog",
    before: "done"
});
~~~

**Журнал изменений:** Метод был добавлен в версии v1.1
