---
sidebar_label: updateColumn()
title: Метод updateColumn
description: Вы можете узнать о методе updateColumn в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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