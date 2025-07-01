---
sidebar_label: deleteRow()
title: Метод deleteRow
description: Вы можете узнать о методе deleteRow в документации по библиотеке DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# deleteRow()

### Описание

@short: Удаляет указанную строку из хранилища данных Kanban.

### Использование

~~~jsx {}
deleteRow({ id: string | number }): void;
~~~

### Параметры

- `id` - (обязательный) идентификатор строки, которую необходимо удалить

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
