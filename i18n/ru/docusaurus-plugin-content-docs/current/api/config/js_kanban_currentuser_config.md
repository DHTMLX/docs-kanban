---
sidebar_label: currentUser
title: API конфигурации currentUser
description: Ознакомьтесь с API конфигурации currentUser для DHTMLX Kanban. Узнайте, как задавать активных пользователей для комментариев, голосований и совместной работы.
---

# currentUser

### Описание

@short: Необязательно. ID текущего пользователя

:::note
ID текущего пользователя должен соответствовать одному из ID, указанных в свойстве [`cardShape.users`](api/config/js_kanban_cardshape_config.md). Если этот ID не указан, комментарии будут доступны только для чтения.
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

**История изменений:** Свойство было добавлено в версии v1.4

**Связанный пример:** [Kanban. Swimlanes, comments, votes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)