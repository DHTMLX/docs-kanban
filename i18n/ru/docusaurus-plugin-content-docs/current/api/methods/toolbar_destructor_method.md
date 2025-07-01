---
sidebar_label: destructor()
title: Метод destructor
description: Ознакомьтесь с методом destructor панели инструментов (Toolbar) в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# destructor()

### Описание

@short: Выполняет очистку, удаляя все HTML-элементы панели инструментов и отсоединяя все связанные события.

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
