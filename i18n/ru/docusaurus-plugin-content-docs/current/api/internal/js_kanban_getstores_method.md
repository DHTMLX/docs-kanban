---
sidebar_label: api.getStores()
title: Метод getStores
description: Вы можете узнать о методе getStores в документации библиотеки DHTMLX JavaScript Kanban. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# api.getStores()

### Описание

@short: Получает объект, содержащий свойства DataStore Канбана.

### Использование

~~~jsx {}
api.getStores(): object;
~~~

### Возвращаемое значение

Этот метод возвращает объект, включающий параметры **DataStore**:

~~~jsx {}
{
    data: DataStore // ( объект параметров )
}
~~~

### Пример

~~~jsx {7}
// создаём Канбан
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// получаем объект DataStore Канбана
const store = board.api.getStores();
console.log(store);
~~~

**Журнал изменений:** Метод был обновлён в версии v1.2
