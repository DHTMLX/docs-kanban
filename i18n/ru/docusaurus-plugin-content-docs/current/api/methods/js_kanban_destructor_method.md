---
sidebar_label: destructor()
title: Метод destructor
description: Вы можете узнать о методе destructor в документации JavaScript-библиотеки DHTMLX Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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