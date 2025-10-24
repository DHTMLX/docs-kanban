---
sidebar_label: api.detach()
title: Метод detach
description: Вы можете узнать о методе detach в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# api.detach()

## Описание

@short: Позволяет удалить/отсоединить обработчик события

## Использование

~~~jsx
api.detach(tag: number | string | symbol ): void;
~~~

## Параметры

- `tag` - тег, используемый для идентификации обработчика события при его создании

### Пример

~~~jsx {11}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

board.api.on("move-card", ({ id, columnId }) => {
    console.log("Переместить карточку");
}, { tag: "move" });

board.api.detach("move");
~~~

**История изменений**: Внутренний метод был добавлен в версии v1.7