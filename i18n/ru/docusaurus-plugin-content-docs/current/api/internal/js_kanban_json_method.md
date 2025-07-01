---
sidebar_label: export.json()
title: Метод json
description: Вы можете узнать о методе json в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# export.json()

### Описание

@short: Сохраняет данные Kanban в виде JSON-файла

### Использование

~~~jsx {}
export.json(): void;
~~~

:::info
Этот метод сохраняет данные доски Kanban в JSON-файл со следующим форматом:
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
// создать Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// экспортировать данные Kanban в JSON
board.export.json(); // => { "cards": [...], "columns": [...], "rows": [] }
~~~

**Изменения:** Метод был добавлен в версии v1.3
