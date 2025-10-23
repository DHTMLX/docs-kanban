---
sidebar_label: api.getState()
title: Метод getState
description: Вы можете ознакомиться с методом getState в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# api.getState()

### Описание

@short: Получает объект с свойствами StateStore Kanban

### Использование

~~~jsx {}
api.getState(): object;
~~~

### Возвращаемое значение

Метод возвращает объект со следующими параметрами:

~~~jsx {}
{
    cardHeight: number | null,
    cards: array,
    cardShape: object,
    columnKey: string,
    columns: array,
    columnShape: object,
    currentUser: number | string | null,
    links: array,
    readonly: object,
    rowKey: string,
    rows: array,
    rowShape: object,
    editorShape: array,
    history: object,
    search: object,
    selected: array,
    sort: object,

    // удалённые параметры
    /*    
        fromAreaMeta: object,
        dropAreaItemsCoords: array,
        dropAreasCoords: array,
        overAreaMeta: object,
        before: string | number,
        dragItemId: string | number,
        dragItemsCoords: array,
        overAreaId: string | number,
    /*

    // приватные параметры
    /*
        edit -> _edit: object,
        layout -> layout: string,
        cardsMap -> _cardsMap: object,
        cardsMeta -> _cardsMeta: object,
        areasMeta -> _areasMeta: object,
        scroll -> _scroll: object,
    */
}
~~~

:::warning
Эти свойства состояния доступны только для чтения. Не изменяйте их, чтобы избежать непредсказуемого поведения!
:::

### Пример

~~~jsx {7-12}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// получаем состояние Kanban
const state = board.api.getState();
console.log(state.cards); // вывод данных карточек
console.log(state.columns); // вывод данных колонок
console.log(state.rows); // вывод данных строк
console.log(state.cardShape); // вывод конфигурации карточек
//...
~~~

**Изменения:** Метод был обновлён в версии v1.7