---
sidebar_label: undo
title: Событие undo
description: Вы можете узнать о событии undo в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# undo

### Описание

@short: Срабатывает при отмене последней операции в Kanban

### Использование

~~~jsx {}
"undo": () => void;
~~~

:::info
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/main_overview.md/#event-bus-methods)
:::

### Пример

~~~jsx {7-9}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "undo"
board.api.on("undo", () => {
    console.log("Операция отменена");
});
~~~

**История изменений**: Событие было добавлено в версии v1.7