---
sidebar_label: api.getReactiveState()
title: Метод getReactiveState
description: Вы можете узнать о методе getReactiveState в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# api.getReactiveState()

### Описание

@short: Получает объект с реактивными свойствами Kanban

### Использование

~~~jsx {}
api.getReactiveState(): object;
~~~

### Возвращаемое значение

Метод возвращает объект со следующими параметрами:

~~~jsx {}
{
    cardHeight: {...},
    cardShape: {...},
    cards: {...},
    columnKey: {...},
    columnShape: {...},
    columns: {...},
    currentUser: {...},
    history: {...},
    links: {...},
    readonly: {...},
    rowKey: {...},
    rowShape: {...},
    editorShape: {...},
    rows: {...},
    search: {...},
    selected: {...},
    sort: {...},

    // удалённые параметры
    /*  
        fromAreaMeta: {...},
        dropAreaItemsCoords: {...},
        dropAreasCoords: {...},
        overAreaMeta: {...},  
        before: {...},
        dragItemId: {...},
        dragItemsCoords: {...},
        overAreaId: {...},
    /*

    // приватные параметры
    /*
        edit -> _edit: {...},
        layout -> layout: {...},
        cardsMap -> _cardsMap: {...},
        cardsMeta -> _cardsMeta: {...},
        areasMeta -> _areasMeta: {...},
        scroll -> _scroll: {...},
    */
}
~~~  

:::warning
Эти свойства состояния доступны только для чтения. Не изменяйте их, чтобы избежать непредвиденного поведения!
:::

### Пример

~~~jsx {7-37}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// получаем реактивное состояние Kanban
const state = board.api.getReactiveState();

// подписываемся на изменения columns и выводим массив колонок
state.columns.subscribe((data) => {
    console.log(data);
});

// подписываемся на изменения cards и выводим массив карточек
state.cards.subscribe((data) => {
    console.log(data);
});

// подписываемся на изменения rows и выводим массив рядов
state.rows.subscribe((data) => {
    console.log(data);
});

// подписываемся на выбор карточек и выводим ID выбранных карточек
state.selected.subscribe((data) => {
    console.log(data);
});
~~~

**История изменений:** Метод был обновлён в версии v1.7