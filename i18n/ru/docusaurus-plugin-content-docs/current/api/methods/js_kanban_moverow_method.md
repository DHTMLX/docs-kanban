---
sidebar_label: moveRow()
title: API метода moveRow
description: Ознакомьтесь с API метода moveRow для DHTMLX Kanban. Узнайте, как переместить строку на новую позицию.
---

# moveRow()

### Описание

@short: Перемещает строку на новую позицию

### Использование

~~~jsx {}
moveRow({
    id: string | number,
    before?: string | number
}): void;
~~~

### Параметры

- `id` - (обязательный) ID строки, которую нужно переместить
- `before` - (необязательный) ID строки, перед которой будет размещена перемещаемая строка. Если параметр `before` не указан, строка будет помещена в конец доски

### Пример

~~~jsx {8-11}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    row
});
// перемещаем дорожку "task" и размещаем её перед (выше) дорожки "feature"
board.moveRow({
    id: "task",
    before: "feature"
});
~~~

**История изменений:** Метод был добавлен в версии v1.1