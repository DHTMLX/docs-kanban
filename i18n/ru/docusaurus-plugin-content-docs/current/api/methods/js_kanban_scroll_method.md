---
sidebar_label: scroll()
title: Метод scroll
description: Вы можете узнать о методе scroll в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# scroll()

### Описание

@short: Прокручивает Kanban к указанному элементу

### Использование

~~~jsx {}
scroll({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}): void;
~~~

### Параметры

- `id` - (обязательный) ID целевого элемента
- `to` - (обязательный) тип целевого элемента. Доступные значения: "column", "row" и "card"
- `options` - (необязательный) объект с параметрами прокрутки. Полный список параметров прокрутки можно найти [здесь](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

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

**История изменений:** Метод был добавлен в версии v1.2