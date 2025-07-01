---
sidebar_label: scroll()
title: Метод scroll
description: Ознакомьтесь с методом scroll в документации библиотеки DHTMLX JavaScript Kanban. Изучите руководства для разработчиков, справочники по API, примеры кода, живые демо и скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# scroll()

### Описание

@short: Перемещает вид Kanban к определённому элементу

### Использование

~~~jsx {}
scroll({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}): void;
~~~

### Параметры

- `id` - (обязательный) ID элемента, к которому нужно прокрутить
- `to` - (обязательный) указывает тип элемента для прокрутки; может быть "column", "row" или "card"
- `options` - (необязательный) объект с настройками прокрутки. Полный список доступных параметров доступен [здесь](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

### Пример

~~~jsx {7-15}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// прокручиваем Kanban к карточке с ID 246
board.scroll({
    id: 246,
    to: "card",
    options: {
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    }
});
~~~

**Журнал изменений:** Этот метод был добавлен в версии 1.2
