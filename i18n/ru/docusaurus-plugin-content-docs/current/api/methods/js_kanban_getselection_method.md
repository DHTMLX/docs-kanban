---
sidebar_label: getSelection()
title: API метода getSelection
description: Ознакомьтесь с API метода getSelection для DHTMLX Kanban. Узнайте, как получить ID выделенных в данный момент карточек.
---

# getSelection()

### Описание

@short: Возвращает массив с ID выбранных карточек

### Использование

~~~jsx {}
getSelection(): array;
~~~

### Возвращаемое значение

Метод возвращает массив с ID выбранных карточек

### Пример

~~~jsx {7}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// получает массив с ID выбранных карточек
board.getSelection();
~~~