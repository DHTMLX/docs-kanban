---
sidebar_label: deleteLink()
title: Метод deleteLink
description: Вы можете узнать о методе deleteLink в документации JavaScript библиотеки DHTMLX Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# deleteLink()

### Описание

@short: Удаляет указанный линк из хранилища данных Kanban

### Использование

~~~jsx {}
deleteLink({ id: string | number }): void;
~~~

### Параметры

- `id` - (обязательный) ID линка, который нужно удалить

### Пример

~~~jsx {8}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links,
});
// удаляем линк по его id
board.deleteLink({ id: 5 });
~~~

**История изменений:** Метод был добавлен в версии v1.5