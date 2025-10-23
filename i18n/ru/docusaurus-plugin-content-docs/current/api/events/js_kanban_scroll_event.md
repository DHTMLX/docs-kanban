---
sidebar_label: scroll
title: Событие scroll
description: Вы можете ознакомиться с событием scroll в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# scroll

### Описание

@short: Срабатывает при прокрутке к указанным элементам

### Использование

~~~jsx {}
"scroll": ({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}) => void;
~~~

### Параметры

Колбэк события **scroll** принимает объект со следующими параметрами:

- `id` - (обязательный) ID целевого элемента
- `to` - (обязательный) тип целевого элемента. Доступные значения: *"column"*, *"row"* и *"card"*
- `options` - (необязательный) объект с параметрами прокрутки. Полный список параметров прокрутки доступен [здесь](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

:::info
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/main_overview.md/#event-bus-methods)
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

**Журнал изменений:** Событие было добавлено в версии v1.2