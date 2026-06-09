---
sidebar_label: destructor()
title: API метода destructor компонента Toolbar
description: Ознакомьтесь с API метода destructor компонента Toolbar для DHTMLX Kanban. Узнайте, как уничтожить Toolbar и отключить все связанные обработчики событий.
---

# destructor()

### Описание

@short: Удаляет все HTML-элементы Toolbar и отключает все связанные события

### Использование

~~~jsx {}
destructor(): void;
~~~

### Пример

~~~jsx {6}
// создаём Kanban
const board = new kanban.Kanban("#root", {});
// создаём Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// удаляем Toolbar
toolbar.destructor();
~~~