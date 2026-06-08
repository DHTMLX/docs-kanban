---
sidebar_label: destructor()
title: API метода destructor
description: Ознакомьтесь с API метода destructor для DHTMLX Kanban. Узнайте, как уничтожить доску и отключить все связанные обработчики событий.
---

# destructor()

### Описание

@short: Удаляет все HTML-элементы Kanban и отключает все связанные события

### Использование

~~~jsx {}
destructor(): void;
~~~

### Пример

~~~jsx {7}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// удаляем Kanban
board.destructor();
~~~