---
sidebar_label: deleteColumn()
title: API метода deleteColumn
description: Ознакомьтесь с API метода deleteColumn для DHTMLX Kanban. Узнайте, как удалить колонку с доски по её ID.
---

# deleteColumn()

### Описание

@short: Удаляет указанную колонку из хранилища данных Kanban

### Использование

~~~jsx {}
deleteColumn({ id: string | number }): void;
~~~

### Параметры

- `id` - (обязательно) ID колонки, которую необходимо удалить

### Пример

~~~jsx {7}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// удаляем колонку по её id
board.deleteColumn({ id: "backlog" });
~~~