---
sidebar_label: deleteLink()
title: API метода deleteLink
description: Ознакомьтесь с API метода deleteLink для DHTMLX Kanban. Узнайте, как удалить линк с доски по его ID.
---

# deleteLink()

### Описание

@short: Удаляет указанный линк из хранилища данных Kanban

### Использование

~~~jsx {}
deleteLink({ id: string | number }): void;
~~~

### Параметры

- `id` - (обязательный) ID линка, который нужно удалить

### Пример

~~~jsx {8}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links,
});
// удаляем линк по его id
board.deleteLink({ id: 5 });
~~~

**История изменений:** Метод был добавлен в версии v1.5