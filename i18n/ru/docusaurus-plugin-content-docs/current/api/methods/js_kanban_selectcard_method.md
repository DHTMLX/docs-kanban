---
sidebar_label: selectCard()
title: Метод selectCard
description: Вы можете ознакомиться с методом selectCard в документации JavaScript-библиотеки DHTMLX Kanban. Просмотрите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# selectCard()

### Описание

@short: Выделяет карточку по заданному ID.

### Использование

~~~jsx {}
selectCard({
    id: string | number,
    groupMode?: boolean
}): void;
~~~

### Параметры

- `id` - (обязательный) ID карточки, которую нужно выделить  
- `groupMode` - (необязательный) включает возможность выделения нескольких карточек одновременно (по умолчанию **false**)

:::info
Когда **groupMode** установлен в **true**, метод **selectCard()** сохраняет текущее выделение и добавляет новую карточку к выделенным.
:::

### Пример

~~~jsx {7-10}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// выделяем карточку с ID 1
board.selectCard({
    id: 1,
    groupMode: true
});
~~~
