---
sidebar_label: move-column
title: Событие move-column
description: Вы можете узнать о событии move-column в документации JavaScript библиотеки DHTMLX Kanban. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# move-column

### Описание

@short: Срабатывает при перемещении колонки

### Использование

~~~jsx {}
"move-column": ({
    id: string | number,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Параметры

Колбэк события **move-column** принимает объект со следующими параметрами:

- `id` - (обязательно) ID колонки, которую нужно переместить
- `before` - (необязательно) ID колонки, перед которой будет размещена перемещаемая колонка. Если параметр `before` не указан, колонка будет размещена в конце доски
- `skipProvider` - (необязательно) включает/отключает предотвращение отправки запроса на сервер

:::info
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/main_overview.md/#event-bus-methods)
:::

### Пример

~~~jsx {7-9}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "move-column"
board.api.on("move-column", (obj) => {
    console.log(obj);
});
~~~

**История изменений:** Событие добавлено в версии v1.1