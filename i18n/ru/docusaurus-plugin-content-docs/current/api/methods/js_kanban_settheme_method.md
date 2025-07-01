---
sidebar_label: setTheme()
title: Метод setTheme
description: Узнайте о методе setTheme в документации библиотеки DHTMLX JavaScript Kanban. Изучите руководства для разработчиков и справочники API, поэкспериментируйте с примерами кода и живыми демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# setTheme()

### Описание

@short: Динамически применяет новую тему к доске Kanban (переинициализируя её).

### Использование

~~~jsx {}
setTheme({
    name?: string, // "material" (по умолчанию) | "willow" | "willow-dark"
    fonts?: boolean
}): void;
~~~

### Параметры

- `name` - (необязательно) задаёт тему, которая будет применена к доске Kanban. Доступные опции:
    - "material" (*по умолчанию*)
    - "willow"
    - "willow-dark"
- `fonts` - (необязательно) управляет загрузкой шрифтов с CDN (шрифт wxi).

:::tip
Начальную тему можно установить с помощью свойства [`theme`](../../config/js_kanban_theme_config).
:::

### Пример

~~~jsx {6}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    // параметры начальной конфигурации
});
// применяем тему "willow"
board.setTheme({ name: "willow", font: false });
~~~

**История изменений:** Этот метод был добавлен в версии v1.6

**Связанные статьи:** [Стилизация](/guides/stylization)

**Связанные примеры:**
- [Kanban. Использование тем](https://snippet.dhtmlx.com/jnw54xif?tag=kanban)
- [Kanban. Подключение темы как таблицы стилей](https://snippet.dhtmlx.com/k3iw6ti0?tag=kanban)
- [Kanban. Смена темы через CSS класс](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)
