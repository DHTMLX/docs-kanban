---
sidebar_label: setHeaders()
title: setHeaders REST Method
description: Вы можете узнать о методе setHeaders REST в документации библиотеки DHTMLX JavaScript Kanban. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# setHeaders()

### Описание

@short: Устанавливает пользовательские HTTP-заголовки, которые RestDataProvider добавляет к каждому запросу, отправляемому на сервер

:::info
Метод `setHeaders()` является частью сервиса **RestDataProvider**, предназначенного для работы с сервером.
:::

### Использование

~~~jsx {}
setHeaders(headers: object): void;
~~~

### Параметры

- `headers` - (обязательный) объект, ключи которого являются именами заголовков, а значения — значениями заголовков. Заголовки добавляются к стандартному заголовку `Content-Type: application/json` при каждом запросе, отправляемом через [`send()`](api/provider/rest_methods/js_kanban_send_method.md).

### Пример

Наиболее распространённый сценарий использования — добавление токена авторизации к каждому запросу:

~~~jsx {4-6}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

restProvider.setHeaders({
    "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
});
~~~

Чтобы задать заголовки только для конкретного запроса, а не для каждого, передайте их в качестве четвёртого аргумента в [`send()`](api/provider/rest_methods/js_kanban_send_method.md).

**Связанные статьи:** [Работа с сервером: Многопользовательский бэкенд](guides/working_with_server.md/#multiuser-backend)
