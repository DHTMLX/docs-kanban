---
sidebar_label: duplicate-card
title: Событие duplicate-card
description: Вы можете узнать о событии duplicate-card в документации к JavaScript библиотеке DHTMLX Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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