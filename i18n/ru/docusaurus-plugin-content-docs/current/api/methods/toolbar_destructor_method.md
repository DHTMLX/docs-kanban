---
sidebar_label: destructor()
title: Метод destructor
description: Вы можете узнать о методе destructor в Toolbar в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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