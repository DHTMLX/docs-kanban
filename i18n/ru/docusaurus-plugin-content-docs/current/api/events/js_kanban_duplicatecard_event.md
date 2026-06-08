---
sidebar_label: duplicate-card
title: API события duplicate-card
description: Ознакомьтесь с API события duplicate-card для DHTMLX Kanban. Узнайте, как обрабатывать событие, срабатывающее при дублировании карточки.
---

# duplicate-card

### Описание

@short: Срабатывает при дублировании карточки

### Использование

~~~jsx {}
"duplicate-card": ({
    id: string | number,
    card?: object,
    select?: boolean
}) => void;
~~~

### Параметры

Колбэк события **duplicate-card** принимает объект со следующими параметрами:

- `id` - (обязательный) ID карточки, которую нужно продублировать
- `card` - (необязательный) объект с данными новой карточки. Полный список параметров карточки доступен [здесь](api/config/js_kanban_cards_config.md)
- `select` - (необязательный) включает/выключает выделение вновь добавленной карточки

:::info
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/main_overview.md/#event-bus-methods)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "duplicate-card"
board.api.on("duplicate-card", (obj) => {
    console.log(obj);
});
~~~

**История изменений:** Параметр `select` был добавлен в версии v1.5.10