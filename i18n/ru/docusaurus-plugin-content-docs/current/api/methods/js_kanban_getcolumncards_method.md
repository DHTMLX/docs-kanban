---
sidebar_label: getColumnCards()
title: Метод getColumnCards
description: Вы можете узнать о методе getColumnCards в документации библиотеки DHTMLX JavaScript Kanban. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# getColumnCards()

### Описание

@short: Получает массив, содержащий объекты данных всех карточек в указанной колонке

### Использование

~~~jsx {}
getColumnCards(id: string | number): array;
~~~

### Параметры

- `id` - (обязательный) ID целевой колонки

### Возвращаемое значение

Метод возвращает массив, содержащий объекты данных всех карточек в указанной колонке

### Пример

~~~jsx {7}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// получаем объекты данных всех карточек в колонке с ID 1
const cards_data = board.getColumnCards(1);
console.log(cards_data);
~~~

**История изменений**: Метод был добавлен в версии v1.7