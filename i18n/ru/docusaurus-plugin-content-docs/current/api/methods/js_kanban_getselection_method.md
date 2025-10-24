---
sidebar_label: getSelection()
title: Метод getSelection
description: Вы можете узнать о методе getSelection в документации JavaScript-библиотеки DHTMLX Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и интерактивные демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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