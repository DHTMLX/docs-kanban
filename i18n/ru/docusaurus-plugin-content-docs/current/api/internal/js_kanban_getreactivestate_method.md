---
sidebar_label: api.getReactiveState()
title: Метод getReactiveState
description: Вы можете узнать о методе getReactiveState в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# api.getReactiveState()

### Описание

@short: Возвращает объект, содержащий реактивные свойства доски Kanban.

### Использование

~~~jsx {}
api.getReactiveState(): object;
~~~

### Возвращаемое значение

Этот метод возвращает объект со следующими свойствами:

~~~jsx {}
{
    areasMeta: {
        subscribe: any,
        update: any,
        set: any
    },
    before: {...},
    cardHeight: {...},
    cardShape: {...},
    cards: {...},
    cardsMap: {...},
    cardsMeta: {...},
    columnKey: {...},
    columnShape: {...},
    columns: {...},
    currentUser: {...},
    dragItemId: {...},
    dragItemsCoords: {...},
    edit: {...},
    history: {...},
    layout: {...},
    links: {...},
    overAreaId: {...},
    readonly: {...},
    rowKey: {...},
    rowShape: {...},
    rows: {...},
    scroll: {...},
    search: {...},
    selected: {...},
    sort: {...}
}
~~~  

### Пример

~~~jsx {7-37}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// получаем реактивное состояние доски Kanban
const state = board.api.getReactiveState();

// подписываемся на изменения в columns и выводим обновленный массив
state.columns.subscribe((data) => {
    console.log(data);
});

// подписываемся на изменения в cards и выводим обновленный массив
state.cards.subscribe((data) => {
    console.log(data);
});

// подписываемся на изменения в rows и выводим обновленный массив
state.rows.subscribe((data) => {
    console.log(data);
});

// подписываемся на изменения выбора карточек и выводим выбранные ID карточек
state.selected.subscribe((data) => {
    console.log(data);
});

// устанавливаем новый выбор 
state.selected.set([1, 2]);

// обновляем выбор, добавляя еще один ID карточки
state.selected.update((data) => {
    data.push(3);
    return data;
});
~~~

**История изменений:** Этот метод был обновлен в версии 1.4
