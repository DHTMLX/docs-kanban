---
sidebar_label: duplicateCard()
title: API метода duplicateCard
description: Ознакомьтесь с API метода duplicateCard для DHTMLX Kanban. Узнайте, как дублировать карточку по её ID.
---

# duplicateCard()

### Описание

@short: Дублирует карточку по заданному ID

### Использование

~~~jsx {}
duplicateCard({
    id: string | number,
    card?: object,
    select?: boolean
}): void;
~~~

### Параметры

- `id` - (обязательный) ID карточки, которую нужно дублировать
- `card` - (необязательный) объект данных новой карточки. Полный список параметров карточки доступен [**здесь**](api/config/js_kanban_cards_config.md)
- `select` - (необязательный) включает или отключает выделение вновь добавленной карточки

### Пример

~~~jsx {7-10}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// дублируем карточку с ID 1
board.duplicateCard({
    id: 1,
    card: { label: "Duplicated card" },
    select: true
});
~~~

**История изменений:** Параметр `select` был добавлен в версии v1.5.10