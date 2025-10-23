---
sidebar_label: deleteRow()
title: Метод deleteRow
description: Вы можете узнать о методе deleteRow в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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