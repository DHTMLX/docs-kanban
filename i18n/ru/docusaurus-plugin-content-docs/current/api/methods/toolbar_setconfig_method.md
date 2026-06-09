---
sidebar_label: setConfig()
title: API метода setConfig компонента Toolbar
description: Ознакомьтесь с API метода setConfig компонента Toolbar для DHTMLX Kanban. Узнайте, как обновить конфигурацию Toolbar во время выполнения.
---

# setConfig()

### Описание

@short: Устанавливает новые параметры конфигурации панели инструментов (Toolbar)

### Использование

~~~jsx {}
setConfig(config: object): void;
~~~

### Параметры

- `config` - (обязательный) объект конфигурации Toolbar. Полный список свойств смотрите [здесь](api/overview/main_overview.md#toolbar-properties)

:::note
Метод изменяет только те параметры, которые вы передали.
:::

### Пример

~~~jsx {6-8}
// создаём Kanban
const board = new kanban.Kanban("#root", {});
// создаём Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// устанавливаем новые параметры конфигурации Toolbar
toolbar.setConfig({
    items: ["search", "spacer", "sort"]
});
~~~