---
sidebar_label: export.json()
title: API метода json
description: Ознакомьтесь с API метода json для DHTMLX Kanban. Узнайте, как экспортировать данные доски и работать со структурами задач в формате JSON.
---

# export.json()

### Описание

@short: Экспортирует данные Kanban в JSON-файл

### Использование

~~~jsx {}
export.json(): void;
~~~

:::info
Метод экспортирует данные Kanban в JSON-файл со следующей структурой:
~~~jsx {}
{
    "cards": [],
    "columns": [],
    "rows": []
}
~~~
:::

### Пример

~~~jsx {7}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// экспортируем данные Kanban в JSON
board.export.json(); // => { "cards": [...], "columns": [...], "rows": [] }
~~~

**История изменений:** Метод был добавлен в версии v1.3