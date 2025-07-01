---
sidebar_label: addLink()
title: Метод addLink
description: В документации по библиотеке DHTMLX JavaScript Kanban вы можете узнать о методе addLink. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# addLink()

### Описание

@short: Вставляет новую ссылку на доску Kanban.

### Использование

~~~jsx {}
addLink({
    id?: string | number,
    link: object
}): void;
~~~

### Параметры

- `id` - (необязательно) идентификатор для новой ссылки
- `link` - (обязательно) объект с данными, представляющий новую ссылку. Полный список параметров ссылки доступен [здесь](/api/config/js_kanban_links_config.md)

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
        masterId: 4,
        slaveId: 6,
        relation: "relatesTo",
    }
});
~~~

**Журнал изменений:** Этот метод был введён в версии v1.5
