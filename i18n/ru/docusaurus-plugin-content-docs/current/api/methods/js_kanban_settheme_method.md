---
sidebar_label: setTheme()
title: Метод setTheme
description: Вы можете узнать о методе setTheme в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# setTheme()

### Описание

@short: Динамически применяет новую тему к Kanban (с переинициализацией)

### Использование

~~~jsx {}
setTheme({
    name?: string, // "material" (по умолчанию) | "willow" | "willow-dark"
    fonts?: boolean
}): void;
~~~

### Параметры

- `name` - (необязательный) имя темы, которая будет применена к Kanban. Доступно 3 темы:
    - "material" (*по умолчанию*)
    - "willow"
    - "willow-dark"
- `fonts` - (необязательный) включает или отключает загрузку шрифтов с CDN (шрифт wxi)

:::tip
Для задания начальной темы можно использовать свойство [`theme`](api/config/js_kanban_theme_config.md).
:::

### Пример

~~~jsx {6}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    // начальные параметры конфигурации
});
// устанавливаем тему "willow"
board.setTheme({ name: "willow", font: false });
~~~

**Изменения:** Метод добавлен в версии v1.6

**Связанные статьи:** [Стилизация](guides/stylization.md)

**Связанный пример:** [Kanban. Изменение темы через CSS-класс](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)