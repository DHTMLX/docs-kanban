---
sidebar_label: api.getState()
title: Метод getState
description: Вы можете ознакомиться с методом getState в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# api.getState()

### Описание

@short: Получает объект, содержащий свойства StateStore канбана.

### Использование

~~~jsx {}
api.getState(): object;
~~~

### Возвращаемое значение

Этот метод возвращает объект со следующими свойствами:

~~~jsx {}
{    
    areasMeta: object, 
    before: string | number, 
    cardHeight: number | null, 
    cards: array,
    cardShape: object,
    cardsMap: object,
    cardsMeta: object,
    columnKey: string,
    columns: array,
    columnShape: object,
    currentUser: number | string | null,
    dragItemId: string | number, 
    dragItemsCoords: array, 
    edit: object,
    history: object,
    layout: string,
    links: array,
    overAreaId: string | number, 
    readonly: object,
    rowKey: string,
    rows: array,
    rowShape: object,
    scroll: object,
    search: object,
    selected: array, 
    sort: object,
    // устаревшие параметры
    fromAreaMeta: object, // удалён в v.1.2
    editorShape: array, // удалён в v.1.4
    dropAreaItemsCoords: array, // устарел в v1.4
    dropAreasCoords: array, // устарел в v1.4 
    overAreaMeta: object, // устарел в v1.4
}
~~~

### Пример

~~~jsx {7-12}
// создаём канбан
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// получаем текущий State канбана
const state = board.api.getState();
console.log(state.cards); // выводит данные карточек
console.log(state.columns); // выводит данные колонок
console.log(state.rows); // выводит данные рядов
console.log(state.cardShape); // выводит конфигурацию карточек
//...
~~~

**Журнал изменений:**
Метод был обновлён в версии v1.4. Были устаревшими следующие параметры:
- ***dropAreaItemsCoords***
- ***dropAreasCoords***
- ***overAreaMeta***
Параметр ***editorShape*** был удалён
