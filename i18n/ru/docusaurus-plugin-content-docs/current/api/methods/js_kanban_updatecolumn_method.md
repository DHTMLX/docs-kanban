---
sidebar_label: updateColumn()
title: API метода updateColumn
description: Ознакомьтесь с API метода updateColumn для DHTMLX Kanban. Узнайте, как обновлять свойства, стили и настройки меню колонки.
---

# updateColumn()

### Описание

@short: Обновляет данные колонки по её ID

### Использование

~~~jsx {}
updateColumn({
    id: string | number,
    column?: object,
    replace?: boolean
}): void;
~~~

### Параметры

- `id` - (обязательный) ID колонки, которую необходимо обновить
- `column` - (необязательный) новый объект данных колонки. Полный список параметров **column** можно найти [**здесь**](api/config/js_kanban_columns_config.md)
- `replace` - (необязательный) включает/отключает полную замену данных

    :::note
    Если параметр `replace` установлен в *true*, старые данные будут полностью заменены новыми. В противном случае метод обновит только переданные значения.
    :::

### Пример

~~~jsx {7-16}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// обновляем данные колонки с ID "backlog"
board.updateColumn({
    id: "backlog",
    column: {
        label: "Обновлённая колонка",
        limit: 3,
        strictLimit: 3,
        collapsed: true
    },
    replace: true
});
~~~

**История изменений**:
- Параметры **id** и **column** были добавлены в версии v1.1
- Параметр **replace** был добавлен в версии v1.3