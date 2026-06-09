---
sidebar_label: setEdit()
title: Метод setEdit API
description: Изучите API метода setEdit для DHTMLX Kanban. Узнайте, как переключать редактор карточки.
---

# setEdit()

### Описание

@short: Переключает редактор Kanban

### Использование

~~~jsx {}
setEdit({ cardId: string | number } | null): void;
~~~

### Параметры

Метод может принимать значение *null* или объект со следующим параметром:

- `cardId` - (обязательный) ID карточки, которую нужно отредактировать

:::note
Чтобы закрыть редактор, вызовите метод **setEdit()** со значением ***null***
:::

### Пример

~~~jsx {7}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// открыть редактор для карточки по её ID
board.setEdit({ cardId: 1 });
~~~

**История изменений:** Метод был добавлен в версии v1.2