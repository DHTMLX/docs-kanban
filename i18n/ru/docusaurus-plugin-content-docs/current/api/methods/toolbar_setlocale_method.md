---
sidebar_label: setLocale()
title: Метод setLocale
description: В документации по библиотеке DHTMLX JavaScript Kanban вы можете узнать о методе setLocale компонента Toolbar. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# setLocale()

### Описание

@short: Применяет новую локализацию к Toolbar компонента Kanban

### Использование

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Параметры

- `null` - (необязательно) сбрасывает локализацию Toolbar на значение по умолчанию (*английский*)
- `locale` - (необязательно) объект с данными новой локализации, который будет применён к Toolbar

:::info
**Toolbar** Kanban — это отдельный компонент. Используйте метод `toolbar.setLocale()` для применения новой локализации только к Toolbar. Чтобы сбросить локализацию Toolbar на значение по умолчанию, вызовите метод `toolbar.setLocale()` без аргументов (или с *null*). Для применения новой локализации только к Kanban используйте метод [`kanban.setLocale()`](api/methods/js_kanban_setlocale_method.md).
:::

### Пример

~~~jsx {8}
// создаём Kanban
const board = new kanban.Kanban("#root", {});
// создаём Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// применяем локализацию "de" к Kanban
board.setLocale(de);
// применяем локализацию "de" к Toolbar
toolbar.setLocale(de);
~~~

**Изменения:** Параметр **api** был устаревшим начиная с версии v1.6

**Связанные статьи:** [Локализация](guides/localization.md)