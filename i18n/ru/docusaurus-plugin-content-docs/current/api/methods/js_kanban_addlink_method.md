---
sidebar_label: addLink()
title: Метод addLink
description: Вы можете узнать о методе addLink в документации библиотеки DHTMLX JavaScript Kanban. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# addLink()

### Описание

@short: Добавляет новую ссылку в Kanban

### Использование

~~~jsx {}
addLink({
    id?: string | number,
    link: object
}): void;
~~~

### Параметры

- `id` - (необязательный) ID новой ссылки
- `link` - (обязательный) объект данных новой ссылки. Полный список параметров ссылки доступен [здесь](api/config/js_kanban_links_config.md)

### Пример

~~~jsx {7-14}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// добавляем новую ссылку
board.addLink({
    id: 3,
    link: {
        source: 4,
        target: 6,
        relation: "relatesTo",
    }
});
~~~

**История изменений:** Метод добавлен в версии v1.5