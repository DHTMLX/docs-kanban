---
sidebar_label: $meta
title: Параметр $meta
description: Узнайте о параметре $meta в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# $meta

### Описание

@short: Объект дополнительных настроек для конфигурации методов и событий Kanban

:::important
Объект `$meta` содержит дополнительный набор параметров, используемых для настройки методов на основе событий Kanban!
:::

### Использование

~~~jsx {}
$meta?: {
    skipHistory?: boolean
};
~~~

### Параметры

Объект `$meta` включает следующий параметр:

- `skipHistory` - (необязательный) включает или отключает пропуск операций в истории Kanban

### Пример

~~~jsx {11-13}
// создаем Kanban
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

**Журнал изменений:** Параметр `$meta` был добавлен в версии v1.3

**Связанный материал:** [`history`](api/config/js_kanban_history_config.md)