---
sidebar_label: getIDResolver()
title: API REST-метода getIDResolver
description: Ознакомьтесь с API REST-метода getIDResolver для DHTMLX Kanban. Узнайте, как преобразовывать временные клиентские ID в серверные.
---

# getIDResolver()

### Описание

@short: Возвращает функцию, которая преобразует временные клиентские ID в серверные ID

:::info
Метод `getIDResolver()` является частью сервиса **RestDataProvider**, предназначенного для работы с сервером.
:::

### Использование

~~~jsx {}
getIDResolver(): (id: string | number, type: number) => string | number;
~~~

### Возвращаемое значение

Метод возвращает функцию `idResolver(id, type)`:

- `id` — ID сущности для преобразования (временный клиентский ID или обычный ID)
- `type` — тип модели, которому принадлежит ID:
    - `1` — карточка (`CardID`)
    - `2` — строка (`RowID`)
    - `3` — колонка (`ColumnID`)
    - `4` — связь (`LinkID`)
    - `5` — комментарий (`CommentID`)

Когда клиент создаёт новую сущность (карточку, колонку, строку, связь, комментарий), `RestDataProvider` присваивает ей временный клиентский ID и запоминает серверный ID, возвращённый сервером. Функция `idResolver(id, type)` возвращает серверный ID для любого временного ID, который она хранит. Для ID, уже совпадающих с серверными, функция возвращает их без изменений.

### Пример

Наиболее распространённый сценарий использования — подключение `RestDataProvider` к `kanbanUpdates` в многопользовательской конфигурации, чтобы серверные события, адресованные серверным ID, корректно применялись к сущностям, которые ещё существуют на клиенте под временными ID:

~~~jsx {6-9}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

// other initialization...

const handlers = kanbanUpdates(
    board.api,
    restProvider.getIDResolver()
);

const events = new kanban.RemoteEvents(url + "/api/v1", token);
events.on(handlers);
~~~

Та же функция-резолвер может использоваться внутри пользовательских обработчиков, передаваемых в `RemoteEvents.on()`. См. [Настройка серверных событий](guides/working_with_server.md/#customize-server-events) для полного примера.

**Связанные статьи:** [Работа с сервером: многопользовательский бэкенд](guides/working_with_server.md/#multiuser-backend)
