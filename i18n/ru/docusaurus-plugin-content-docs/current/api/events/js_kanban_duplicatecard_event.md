---
sidebar_label: duplicate-card
title: Событие duplicate-card
description: Ознакомьтесь с событием duplicate-card из документации JavaScript библиотеки Kanban от DHTMLX. Изучите руководства для разработчиков, справочник API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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

Колбэк для события **duplicate-card** получает объект со следующими свойствами:

- `id` - (обязательно) ID дублируемой карточки
- `card` - (необязательно) объект данных для новой карточки. Полный список параметров карточек доступен [здесь](/api/config/js_kanban_cards_config.md)
- `select` - (необязательно) определяет, будет ли новая карточка выделена или нет

:::info
Для работы с внутренними событиями вы можете использовать [**методы Event Bus**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// слушаем событие "duplicate-card"
board.api.on("duplicate-card", (obj) => {
    console.log(obj);
});
~~~

**История изменений:** Параметр `select` был добавлен в версии v1.5.10
