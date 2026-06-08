---
sidebar_label: moveColumn()
title: API метода moveColumn
description: Ознакомьтесь с API метода moveColumn для DHTMLX Kanban. Узнайте, как переместить колонку на новую позицию.
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