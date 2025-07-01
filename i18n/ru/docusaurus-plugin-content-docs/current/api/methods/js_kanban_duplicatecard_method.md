---
sidebar_label: duplicateCard()
title: Метод duplicateCard
description: Вы можете узнать о методе duplicateCard в документации библиотеки DHTMLX JavaScript Kanban. Просмотрите руководства для разработчиков и справочник по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# duplicateCard()

### Описание

@short: Создаёт дубликат карточки на основе заданного ID

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
- `card` - (необязательный) объект данных для новой карточки. Полный список параметров карточки доступен [**здесь**](/api/config/js_kanban_cards_config.md)
- `select` - (необязательный) определяет, будет ли вновь добавленная карточка выделена

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
