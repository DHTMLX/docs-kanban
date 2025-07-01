---
sidebar_label: updateColumn()
title: Метод updateColumn
description: Изучите метод updateColumn в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков, API ссылками, примерами кода, живыми демо и получите бесплатный 30-дневный пробный период DHTMLX Kanban.
---

# updateColumn()

### Описание

@short: Изменяет данные колонки по её ID

### Использование

~~~jsx {}
updateColumn({
    id: string | number,
    column?: object,
    replace?: boolean
}): void;
~~~

### Параметры

- `id` - (обязательный) указывает ID колонки, которую нужно обновить
- `column` - (необязательный) объект, содержащий новые данные для колонки. Полный список параметров **column** доступен [**здесь**](/api/config/js_kanban_columns_config.md)
- `replace` - (необязательный) определяет, нужно ли полностью заменить существующие данные

:::note
Если `replace` установлен в *true*, существующие данные будут полностью заменены новыми. В противном случае будут обновлены только переданные значения.
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

**Журнал изменений**:
- Параметры **id** и **column** были введены в версии v1.1
- Параметр **replace** добавлен в версии v1.3
