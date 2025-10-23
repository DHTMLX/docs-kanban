---
sidebar_label: deleteColumn()
title: Метод deleteColumn
description: Вы можете узнать о методе deleteColumn в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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