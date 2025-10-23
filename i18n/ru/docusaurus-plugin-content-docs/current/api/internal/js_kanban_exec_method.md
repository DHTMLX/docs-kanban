---
sidebar_label: api.exec()
title: Метод exec
description: Вы можете ознакомиться с методом exec в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# api.exec()

### Описание

@short: Позволяет запускать внутренние события

### Использование

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### Параметры

- `event` - (обязательный) событие, которое нужно вызвать
- `config` - (обязательный) объект конфигурации с параметрами (см. событие, которое нужно вызвать)

### События

:::info
Полный список внутренних событий Kanban можно найти [**здесь**](api/overview/main_overview.md/#kanban-events)
:::

### Пример

~~~jsx {7,9-12}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// выбираем карточку с ID 1
board.api.exec("select-card", { id: 1 });
// добавляем новую карточку без отправки изменений на сервер
board.api.exec("add-card", { 
    columnId: "backlog",
    skipProvider: true, 
});
~~~

**Связанный пример:** [Kanban. Сохранение сортировки](https://snippet.dhtmlx.com/74nyuv14?tag=kanban)