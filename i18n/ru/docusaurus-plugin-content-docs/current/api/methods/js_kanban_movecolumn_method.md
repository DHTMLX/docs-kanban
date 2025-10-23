---
sidebar_label: moveColumn()
title: Метод moveColumn
description: Вы можете узнать о методе moveColumn в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# moveColumn()

### Описание

@short: Перемещает колонку на новую позицию

### Использование

~~~jsx {}
moveColumn({
    id: string | number,
    before?: string | number
}): void;
~~~

### Параметры

- `id` - (обязательный) ID колонки, которую нужно переместить
- `before` - (необязательный) ID колонки, перед которой будет размещена перемещаемая колонка. Если параметр `before` не указан, колонка будет помещена в конец доски

### Пример

~~~jsx {7-10}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// перемещаем колонку "backlog" и размещаем её перед колонкой "done"
board.moveColumn({
    id: "backlog",
    before: "done"
});
~~~

**История изменений:** Метод был добавлен в версии v1.1