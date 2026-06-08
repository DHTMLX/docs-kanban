---
sidebar_label: update-column
title: API события update-column
description: Прочитайте API события update-column для DHTMLX Kanban. Узнайте, как обрабатывать событие, возникающее при обновлении данных колонки.
---

# update-column

### Описание

@short: Срабатывает при обновлении данных колонки

### Использование

~~~jsx {}
"update-column": ({
    id: string | number,
    column?: object,
    replace?: boolean,
    skipProvider?: boolean
}) => void;
~~~

### Параметры

Колбэк события **update-column** принимает объект со следующими параметрами:

- `id` - (обязательный) ID колонки, которую нужно обновить
- `column` - (необязательный) новый объект данных колонки. Полный список параметров **column** можно найти [**здесь**](api/config/js_kanban_columns_config.md)
- `replace` - (необязательный) включает/отключает полную замену данных

    :::note
    Если параметр `replace` установлен в *true*, старые данные будут полностью заменены новыми. В противном случае метод обновит только переданные значения.
    :::

- `skipProvider` - (необязательный) включает/отключает предотвращение отправки запроса на сервер

:::info
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/main_overview.md/#event-bus-methods)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "update-column"
board.api.on("update-column", (obj) => {
    console.log(obj);
});
~~~

**История изменений**:
- Параметры **id** и **column** были добавлены в версии v1.1
- Параметр **replace** был добавлен в версии v1.3