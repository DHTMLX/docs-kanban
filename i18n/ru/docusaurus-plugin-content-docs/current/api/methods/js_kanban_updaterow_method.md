---
sidebar_label: updateRow()
title: Метод updateRow
description: В документации библиотеки DHTMLX JavaScript Kanban вы можете узнать о методе updateRow. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# updateRow()

### Описание

@short: Обновляет данные строки по её ID

### Использование

~~~jsx {}
updateRow({
    id: string | number,
    row?: object,
    replace?: boolean
}): void;
~~~

### Параметры

- `id` - (обязательный) ID строки, которую нужно обновить
- `row` - (необязательный) новый объект данных строки. Полный список параметров **row** доступен [**здесь**](api/config/js_kanban_rows_config.md)
- `replace` - (необязательный) включает или отключает полную замену данных

    :::note
    Если параметр `replace` установлен в *true*, старые данные будут полностью заменены новыми. В противном случае метод обновит только переданные значения.
    :::

### Пример

~~~jsx {8-15}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// обновляем данные строки с ID "feature"
board.updateRow({
    id: "feature",
    row: {
        label: "Обновленная строка",
        collapsed: true
    },
    replace: true
});
~~~

**История изменений**:
- Параметры **id** и **row** были добавлены в версии v1.1
- Параметр **replace** был добавлен в версии v1.3