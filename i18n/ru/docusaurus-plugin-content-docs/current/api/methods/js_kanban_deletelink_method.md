---
sidebar_label: deleteLink()
title: Метод deleteLink
description: Вы можете узнать о методе deleteLink в документации JavaScript библиотеки DHTMLX Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и интерактивные демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# deleteLink()

### Описание

@short: Удаляет указанную ссылку из хранилища данных Kanban.

### Использование

~~~jsx {}
deleteLink({ id: string | number }): void;
~~~

### Параметры

- `id` - (обязательный) идентификатор ссылки, которую необходимо удалить

### Пример

~~~jsx {8}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links,
});
// удаляем ссылку по её id
board.deleteLink({ id: 5 });
~~~

**История изменений:** Метод был добавлен в версии v1.5
