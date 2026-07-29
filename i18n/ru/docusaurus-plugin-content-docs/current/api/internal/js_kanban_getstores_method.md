---
sidebar_label: api.getStores()
title: API метода getStores
description: Ознакомьтесь с API метода getStores для DHTMLX Kanban. Узнайте, как получить объект с параметрами DataStore доски.
---

# api.getStores()

### Описание

@short: Получает объект с параметрами DataStore Kanban

### Использование

~~~jsx {}
api.getStores(): object;
~~~

### Возвращаемое значение

Метод возвращает объект с параметрами **DataStore**:

~~~jsx {}
{
    data: DataStore // ( объект параметров )
}
~~~

### Пример

~~~jsx {7}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// получаем объект DataStore Kanban
const store = board.api.getStores();
console.log(store);
~~~

**Журнал изменений:** Метод был обновлён в v1.2