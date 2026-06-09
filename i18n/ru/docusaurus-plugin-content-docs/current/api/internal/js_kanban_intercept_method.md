---
sidebar_label: api.intercept()
title: API метода intercept
description: Ознакомьтесь с API метода intercept для DHTMLX Kanban. Узнайте, как перехватывать, изменять или блокировать события доски до их применения.
---

# api.intercept()

### Описание

@short: Позволяет перехватывать и предотвращать внутренние события

### Использование

~~~jsx {}
api.intercept(
    event: string,
    callback: function,
    config?: { intercept?: boolean, tag?: number | string | symbol }
): void;
~~~

### Параметры

- `event` - (обязательно) событие, которое должно быть вызвано
- `callback` - (обязательно) функция обратного вызова, которая будет выполнена (аргументы callback зависят от вызываемого события)
- `config` - (необязательно) объект, содержащий следующие параметры:
    - `intercept` - (необязательно) если при создании слушателя события установить `intercept: true`, этот слушатель будет выполнен раньше всех остальных
    - `tag` - (необязательно) тег действия. Вы можете использовать имя тега для удаления обработчика действия через метод [`detach`](api/internal/js_kanban_detach_method.md)

### События

:::info
Полный список внутренних событий Kanban доступен [**здесь**](api/overview/main_overview.md/#kanban-events)
:::

### Пример

~~~jsx {7-11}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// разрешаем перемещать карточки только в колонку с ID "done"
board.api.intercept("move-card", ({ id, columnId }) => {
    if(columnId !== "done" ){
        return false;
    }
}, {tag: "move"});
~~~

**История изменений**: параметры **config.tag** и **config.intercept** были добавлены в версии v1.7