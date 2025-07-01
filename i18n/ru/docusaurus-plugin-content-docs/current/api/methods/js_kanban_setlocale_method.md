---
sidebar_label: setLocale()
title: Метод setLocale
description: Вы можете ознакомиться с методом setLocale в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# setLocale()

### Описание

@short: Устанавливает новую локализацию для компонента Kanban

### Использование

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Параметры

- `null` - (необязательно) сбрасывает локализацию обратно на значение по умолчанию (*английский*)
- `locale` - (необязательно) объект, задающий новые данные локализации для применения

:::info
Метод `setLocale()` предназначен для обновления локализации именно для Kanban. Чтобы вернуть Kanban к локализации по умолчанию, просто вызовите `setLocale()` без аргументов (или передайте *null*). Если необходимо изменить локализацию только для Toolbar, используйте метод [`toolbar.setLocale()`](/api/methods/toolbar_setlocale_method.md).
:::

### Пример

~~~jsx {7,9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
});
// устанавливаем локализацию "de" для Kanban
board.setLocale(de);
// сбрасываем Kanban к локализации по умолчанию
board.setLocale(); // или board.setLocale(null);
~~~

**История изменений:** Этот метод был обновлён в версии 1.2

**Связанные статьи:** [Локализация](/guides/localization.md)
