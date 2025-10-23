---
sidebar_label: export.json()
title: Метод json
description: Вы можете узнать о методе json в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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