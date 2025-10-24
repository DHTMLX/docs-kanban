---
sidebar_label: setLocale()
title: Метод setLocale
description: Вы можете узнать о методе setLocale в документации по JavaScript библиотеке DHTMLX Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# setLocale()

### Описание

@short: Применяет новую локаль к Kanban

### Использование

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Параметры

- `null` - (опционально) сбрасывает локаль на значение по умолчанию (*английский*)
- `locale` - (опционально) объект данных новой локали, которая будет применена

:::info
Используйте метод `setLocale()` для применения новой локали только к Kanban. Чтобы сбросить Kanban на локаль по умолчанию, вызовите метод `setLocale()` без аргументов (или с значением *null*). Для применения новой локали только к Toolbar используйте метод [`toolbar.setLocale()`](api/methods/toolbar_setlocale_method.md).
:::

### Пример

~~~jsx {7,9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
});
// применяем локаль "de" к Kanban
board.setLocale(kanban.locales["de"]);
// применяем локаль по умолчанию к Kanban
board.setLocale(); // или board.setLocale(null);
~~~

**Журнал изменений:** Метод обновлён в версии v1.2

**Связанные статьи:** [Локализация](guides/localization.md)