---
sidebar_label: destructor()
title: Метод destructor
description: Вы можете ознакомиться с методом destructor в документации по библиотеке DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# destructor()

### Описание

@short: Очищает все HTML-элементы доски Kanban и удаляет все связанные обработчики событий.

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
