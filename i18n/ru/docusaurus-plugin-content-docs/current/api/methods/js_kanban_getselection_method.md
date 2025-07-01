---
sidebar_label: getSelection()
title: Метод getSelection
description: Вы можете узнать о методе getSelection в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# getSelection()

### Описание

@short: Возвращает массив с ID(ами) выбранных карточек

### Использование

~~~jsx {}
getSelection(): array;
~~~

### Возвращает

Этот метод возвращает массив с ID(ами) карточек, которые в данный момент выбраны.

### Пример

~~~jsx {7}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// получает массив с ID выбранных карточек
board.getSelection();
~~~
