---
sidebar_label: api.getStores()
title: Метод getStores
description: Вы можете узнать о методе getStores в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# api.getStores()

### Описание

@short: Получает объект с параметрами DataStore Kanban

### Использование

~~~jsx {}
api.getStores(): object;
~~~

### Возвращает

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

**Изменения:** Метод был обновлён в версии v1.2