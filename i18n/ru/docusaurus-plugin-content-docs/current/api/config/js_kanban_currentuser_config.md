---
sidebar_label: currentUser
title: currentUser Конфигурация
description: Вы можете ознакомиться с конфигурацией currentUser в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, тестируйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# currentUser

### Описание

@short: Необязательно. Представляет ID текущего пользователя

:::note
ID текущего пользователя должен совпадать с одним из ID, указанных в свойстве [`cardShape.users`](/api/config/js_kanban_cardshape_config.md). Если этот ID не указан, комментарии будут доступны только в режиме чтения.
:::

### Использование

~~~jsx {}
currentUser?: string | number; 
~~~

### Пример

~~~jsx {4}
new kanban.Kanban("#root", {
    cards,
    columns,
    currentUser: 1,
    // другие параметры
});
~~~

**Журнал изменений:** Это свойство было введено в версии 1.4

**Связанный пример:** [Kanban. Swimlanes, comments, votes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
