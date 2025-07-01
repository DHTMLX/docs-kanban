---
sidebar_label: deleteColumn()
title: Метод deleteColumn
description: Вы можете узнать о методе deleteColumn в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# deleteColumn()

### Описание

@short: Удаляет указанный столбец из хранилища данных Kanban.

### Использование

~~~jsx {}
deleteColumn({ id: string | number }): void;
~~~

### Параметры

- `id` - (обязательный) ID столбца, который необходимо удалить

### Пример

~~~jsx {7}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// удаляем столбец по его id
board.deleteColumn({ id: "backlog" });
~~~
