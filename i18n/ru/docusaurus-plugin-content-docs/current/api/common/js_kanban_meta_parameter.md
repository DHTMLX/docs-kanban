---
sidebar_label: $meta
title: Параметр $meta
description: Вы можете ознакомиться с параметром $meta в документации по JavaScript библиотеке DHTMLX Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# $meta

### Описание

@short: Объект с дополнительными настройками для настройки методов и событий Kanban

:::important
Объект `$meta` предоставляет дополнительные параметры, которые помогают конфигурировать методы, связанные с событиями Kanban!
:::

### Использование

~~~jsx {}
$meta?: {
    skipHistory?: boolean
};
~~~

### Параметры

Объект `$meta` содержит следующий параметр:

- `skipHistory` - (необязательный) управляет тем, должна ли операция исключаться из истории Kanban

### Пример

~~~jsx {11-13}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// добавляем новую карточку и пропускаем это действие в истории Kanban
board.addCard({
    id: 1,
    columnId: "backlog",
    card: { label: "New card" },
    $meta: { 
        skipHistory: true 
    }
});
~~~

**Журнал изменений:** Параметр `$meta` был введён в версии v1.3

**Связанная статья:** [`history`](/api/config/js_kanban_history_config.md)
