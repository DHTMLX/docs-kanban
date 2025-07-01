---
sidebar_label: setConfig()
title: Метод setConfig
description: В документации библиотеки DHTMLX JavaScript Kanban вы можете узнать о методе setConfig объекта Toolbar. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# setConfig()

### Описание

@short: Обновляет Toolbar с новыми настройками конфигурации

### Использование

~~~jsx {}
setConfig(config: object): void;
~~~

### Параметры

- `config` - (обязательно) объект, содержащий параметры конфигурации Toolbar. Полный список свойств можно найти [здесь](/api/overview/main_overview.md#свойства-toolbar)

:::note
Будут обновлены только те параметры, которые указаны в объекте.
:::

### Пример

~~~jsx {6-8}
// создаём Kanban
const board = new kanban.Kanban("#root", {});
// создаём Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// обновляем конфигурацию Toolbar с новыми параметрами
toolbar.setConfig({
    items: ["search", "spacer", "sort"]
});
~~~
