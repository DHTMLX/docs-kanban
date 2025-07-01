---
sidebar_label: scroll
title: Событие scroll
description: Изучите событие scroll в документации по JavaScript-библиотеке DHTMLX Kanban. Найдите руководства для разработчиков, справочники по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# scroll

### Описание

@short: Вызывается при прокрутке к указанным элементам

### Использование

~~~jsx {}
"scroll": ({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}) => void;
~~~

### Параметры

Объект, передаваемый в callback для события **scroll**, содержит следующие свойства:

- `id` - (обязательно) ID целевого элемента
- `to` - (обязательно) указывает тип целевого элемента: *"column"*, *"row"*, или *"card"*
- `options` - (необязательно) объект с параметрами прокрутки. Полный список параметров доступен [здесь](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

:::info
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "scroll"
board.api.on("scroll", (obj) => {
    console.log(obj);
});
~~~

**История изменений:** Это событие было добавлено в версии v1.2
