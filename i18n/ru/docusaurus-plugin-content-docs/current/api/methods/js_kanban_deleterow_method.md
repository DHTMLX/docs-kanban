---
sidebar_label: deleteRow()
title: API метода deleteRow
description: Ознакомьтесь с API метода deleteRow для DHTMLX Kanban. Узнайте, как удалить строку с доски по её ID.
---

# deleteRow()

### Описание

@short: Удаляет указанную строку из хранилища данных Kanban

### Использование

~~~jsx {}
deleteRow({ id: string | number }): void;
~~~

### Параметры

- `id` - (обязательный) ID строки, которую нужно удалить

### Пример

~~~jsx {7}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// удаляем строку по её id
board.deleteRow({ id: "feature" });
~~~