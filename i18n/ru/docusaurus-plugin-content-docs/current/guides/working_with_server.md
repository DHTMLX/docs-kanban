---
sidebar_label: Работа с сервером
title: Работа с сервером
description: Вы можете узнать, как работать с сервером, в документации по JavaScript Kanban от DHTMLX. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# Работа с сервером

JavaScript Kanban позволяет работать как с клиентскими, так и с серверными данными. Виджет не предъявляет особых требований к backend-части. Его можно легко подключить к любой серверной платформе, поддерживающей REST API (RESTful API).

:::info
По умолчанию виджет поставляется с встроенным backend на **Go** и **Node**. Однако вы также можете использовать свои собственные серверные скрипты.
:::

## RestDataProvider

В JavaScript Kanban имеется сервис **RestDataProvider**, который полностью поддерживает REST API для взаимодействия с backend. Он позволяет работать с сервером и выполнять следующие операции с данными:

- ***"add-card"***
- ***"add-column"***
- ***"add-comment"***
- ***"add-row"***
- ***"add-link"***
- ***"delete-card"***
- ***"delete-column"***
- ***"delete-comment"***
- ***"delete-row"***
- ***"delete-link"***
- ***"move-card"***
- ***"move-column"***
- ***"move-row"***
- ***"update-card"***
- ***"update-column"***
- ***"update-comment"***
- ***"update-row"***

## REST-методы

Сервис **RestDataProvider** включает специальные REST-методы для динамической загрузки данных:

- [`getCards()`](api/provider/rest_methods/js_kanban_getcards_method.md) – возвращает promise с ***данными карточек***
- [`getColumns()`](api/provider/rest_methods/js_kanban_getcolumns_method.md) – возвращает promise с ***данными колонок***
- [`getLinks()`](api/provider/rest_methods/js_kanban_getlinks_method.md) – возвращает promise с ***данными связей***
- [`getRows()`](api/provider/rest_methods/js_kanban_getrows_method.md) – возвращает promise с ***данными строк***
- [`getUsers()`](api/provider/rest_methods/js_kanban_getusers_method.md) – возвращает promise с ***данными пользователей***

## Взаимодействие с backend

Чтобы взаимодействовать с сервером, необходимо подключить **RestDataProvider** к соответствующим серверным скриптам. Если вы хотите использовать встроенный backend, необходимые скрипты можно найти в следующих репозиториях:

- backend на [**Go**](https://github.com/web-widgets/kanban-go)
- backend на [**Node**](https://github.com/web-widgets/kanban-node)

или создать свой собственный backend.

:::tip
Если вы используете собственный backend, обратитесь к разделу [**REST API routes**](api/overview/rest_routes_overview.md) для получения дополнительной информации!
:::

Для подключения **RestDataProvider** к backend необходимо вызвать конструктор **kanban.RestDataProvider**, передав соответствующий **URL** в качестве параметра.

~~~js {1-2,27}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getUsers(),
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getLinks(),
    restProvider.getRows()
]).then(([users, cards, columns, links, rows]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        links,
        rows,
        rowKey: "type",
        editorShape: [
            ...kanban.defaultEditorShape,
            {
                type: "multiselect", 
                key: "users",
                label: "Users",
                values: users
            }
        ]
    });
    board.api.setNext(restProvider);
});
~~~

:::info
Для выполнения операций с данными (*добавление*, *удаление* и др.) и отправки соответствующих запросов на сервер необходимо включить **RestDataProvider** в порядок **Event Bus** с помощью метода [**api.setNext()**](api/internal/js_kanban_setnext_method.md).
:::

### Пример

В этом примере показано, как подключить **RestDataProvider** к backend на **Go** и загрузить данные с сервера:

<iframe src="https://snippet.dhtmlx.com/f25y0809?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Мультипользовательский backend

Инструменты управления проектами, такие как наш Kanban, востребованы компаниями любого размера. Поэтому важно обеспечить удобную работу для нескольких пользователей. Новая функция позволяет пользователям эффективно управлять одними и теми же карточками на доске Kanban в реальном времени, без перезагрузки страницы. Благодаря этому конечные пользователи могут совместно работать и быть в курсе действий друг друга, что повышает продуктивность и удовлетворенность.

Для реализации мультипользовательского backend необходимо пройти авторизацию на сервере до инициализации Kanban. Для этого можно создать функцию `login(url: string)`:

~~~js {}
const login = (url) => {
    var token = sessionStorage.getItem("login-token");
    if (token) {
        return Promise.resolve(token);
    }

    return fetch(url + "/login?id=1")
        .then(raw => raw.text())
        .then(token => {
            sessionStorage.setItem("login-token", token);
            return token;
        });
};
~~~

Эта функция только симулирует авторизацию, и все пользователи будут авторизованы с ID 1. После успешной авторизации сервер отправляет токен, который необходимо использовать в каждом последующем запросе к серверу. Для автоматической передачи токена используется функция `RestDataProvider.setHeaders()`. Она добавляет пользовательские заголовки к запросам. По умолчанию наш сервер сохраняет токен в заголовке `"Remote-Token":<value>`:

~~~js {}
login(url).then(token => {
    // инициализация rest provider
    const restProvider = new kanban.RestDataProvider(url);
    // установка токена в пользовательский заголовок
    restProvder.setHeaders({
        "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
    });
    
    // инициализация виджета...
});
~~~

После получения токена необходимо инициализировать виджет. Это можно сделать следующим образом:

~~~js {}
// инициализация виджета...
Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getLinks(),
    restProvider.getRows(),
]).then(([cards, columns, links, rows]) => {
    const board = new Kanban("#root", {
        cards,
        columns,
        links,
        rows,
        rowKey: "row",
        cardShape,
        editorShape,
    });

    // сохранение данных с клиента на сервер
    board.api.setNext(restProvider);
    
    // инициализация мультипользовательского режима...
});
~~~

После инициализации виджета необходимо добавить WebSocket для прослушивания событий от сервера. Это можно сделать так:

~~~js {}
// инициализация мультипользовательского режима...

// получить клиентские обработчики для серверных событий
const handlers = kanbanUpdates(
    board.api,
    restProvider.getIDResolver()
);
// подключение к серверным событиям
const events = new RemoteEvents(url + "/api/v1", token);
// назначить клиентские обработчики на серверные события
events.on(handlers);
~~~

- `handlers` — клиентские обработчики, реагирующие на события сервера
- `events` — объект, который подключается к серверу и слушает все входящие события
- `RemoteEvents.on(handlers)` — применяет клиентские обработчики к серверным событиям

После интеграции мультипользовательского backend в ваше приложение вы сможете упростить совместную работу пользователей и позволить им отслеживать любые изменения через UI в реальном времени.

### Пример

В этом примере показано, как настроить мультипользовательский backend для отслеживания изменений других пользователей в реальном времени:

<iframe src="https://snippet.dhtmlx.com/xw6g6qd6?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Кастомизация серверных событий

Вы можете определить собственную логику обработки серверных событий. Для этого нужно передать объект **handlers** в метод `RemoteEvents.on(handlers)`. Объект **handlers** должен иметь следующую структуру:

~~~js {}
{
    "cards": cardsHandler: function(obj: any),
    "columns": columnsHandler: function(obj: any),
    "links": linksHandler: function(obj: any),
    "rows": rowsHandler: function(obj: any),
}
~~~

Когда на сервере происходит какое-либо изменение, он возвращает имя измененного элемента. Эти имена могут различаться в зависимости от серверной логики.

Обновлённые на клиенте данные будут находиться в аргументе **obj** функции `function(obj: any)`. Для указания операции есть поле `type: string`. Оно может принимать следующие значения:

- Для **cards**: `"add-card"`, `"update-card"`, `"delete-card"`, `"move-card"`
- Для **columns**: `"add-column"`, `"update-column"`, `"delete-column"`, `"move-column"`
- Для **links**: `"add-link"`, `"delete-link"`
- Для **rows**: `"add-row"`, `"update-row"`, `"delete-row"`, `"move-row"`

В следующем примере кода показаны детали реализации:

~~~js {}
// инициализация kanban
const board = new kanban.Kanban(...);
const restProvider = new kanban.RestDataProvider(url);
const idResolver = restProvider.getIDResolver();
const TypeCard = 1;
const TypeRow = 2;
const TypeCol = 3;

const cardsHandler = (obj: any) => {
    obj.card.id = idResolver(obj.card.id, TypeCard);
    obj.card.row = idResolver(obj.card.row, TypeRow);
    obj.card.column = idResolver(obj.card.column, TypeColumn);
    switch (obj.type) {
        case "add-card":
            board.api.exec("add-card", {
                card: obj.card,
                select: false,
                skipProvider: true, // предотвращает отправку запроса на сервер с клиента
            })
            break;
        // другие операции
    }
}

// добавление пользовательских обработчиков
const handlers = {
   cards: cardsHandler,
};

const remoteEvents = new kanban.RemoteEvents(remoteEventsURL, token);
remoteEvents.on(handlers);
~~~

Метод `RestDataProvider.getIDResolver()` возвращает функцию, необходимую для синхронизации client ID с server ID. Когда на клиенте создаётся новый объект (*card/column/row/link*), у него будет временный ID и соответствующий server ID в хранилище. Функция `idResolver()` позволяет синхронизировать client ID с server ID. Формат функции: `idResolver(id: TID, type: number)`

Аргумент `type` — это тип модели, который принимает следующие значения:

- `CardID` — 1,
- `RowID` — 2,
- `ColumnID` — 3
- `LinkID` — 4

Чтобы предотвратить отправку запроса на сервер, при вызове метода `board.api.exec()` используйте флаг `skipProvider: true`.

И последний шаг — применить пользовательские обработчики к серверным событиям. Таким образом, вы можете создавать свои обработчики серверных событий.

## Группировка двух и более статусов в одну колонку

В этом разделе показано, как отобразить карточки из разных колонок в одной колонке (например, общая колонка для карточек со статусами *To do* и *Unassigned*).

Для реализации такой группировки нужно добавить пользовательское поле (например, **status**). Это поле будет хранить текущий статус карточки. В поле **column** будет храниться общий статус.

Далее необходимо создать определённые правила группировки карточек. В нашем случае карточки будут группироваться в определённые колонки по следующим статусам:

- *todo*, *unassigned* — статусы для колонки **Open**
- *dev*, *testing* — статусы для колонки **Inprogress**
- *merged*, *released* — статусы для колонки **Done**

Есть два способа реализовать такую группировку карточек в одну колонку по двум и более статусам:

- [На стороне сервера](#server-side-grouping)
- [На стороне сервера + клиента](#server-side--client-side-grouping)

### Группировка на стороне сервера

Если вы хотите реализовать группировку на стороне сервера, ваш сервер должен иметь возможность отправлять данные на клиент через [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) (см. раздел [Мультипользовательский backend](#multiuser-backend)).

В месте, где сервер обрабатывает запрос на обновление карточки, необходимо проверить поле **status**. В нашем примере используется язык [Go](https://go.dev/), но вы можете применять любые backend-технологии.

~~~go
func Update(id int, c Card) error {
   // ...
   oldColumn := c.Column
   s := data.Status
   if s == "todo" || s == "unassigned" {
      c.Column = "open"
   } else if s == "dev" || s == "testing" {
      c.Column = "inprogress"
   } else if s == "merged" || s == "released" {
      c.Column = "done"
   }

   db.Save(&c)

   if oldColumn != c.Column {
      // если колонка была обновлена по полю status,
      // клиенту нужно сообщить, что карточку надо переместить в соответствующую колонку

      // нужно обновить индекс карточки
      updateCardIndex(&c)

      // уведомить клиента о необходимости обновления колонки
      ws.Publish("card-update", &c)
   }
   // ...
}
~~~

Таким образом, когда пользователь меняет значение поля status, серверная логика проверяет значение и помещает карточку в нужную колонку. После этого сервер через WebSocket уведомляет клиента, что карточку нужно переместить в другую колонку.

### Группировка на стороне сервера + клиента

Для смешанного подхода сервер + клиент необходимо получить правила группировки с сервера. Согласно этим правилам клиент сможет определить, в какую колонку переместить карточку в зависимости от значения поля status.

~~~js
const groupingRules = await fetch("http://server.com/rules");
~~~

Например, можно задать такие правила:

~~~json
{
   "open": ["todo", "unassigned"],
   "progress": ["dev", "testing"],
   "done": ["merged", "released"],
}
~~~

Далее нужно реализовать логику, которая будет проверять изменения карточки и перемещать её в нужную колонку:

~~~js
const updateColumn = card => {
   for (let col in groupingRules) {
      if (groupingRules[col].includes(card.status)) {
         card.column = col;
         break;
      }
   }
};

kanban.api.intercept("move-card", ev => {
   kanban.api.exec("update-card", {
      id: ev.id,
      card: { status: groupingRules[ev.columnId][0],
   });
});

kanban.api.intercept("update-card", ev => {
   updateColumn(ev.card);
});
~~~

Таким образом, можно определить определённые колонки для карточек в зависимости от других полей.

### Пример

В этом примере показано, как настроить серверную часть для группировки двух и более статусов в одну колонку в реальном времени:

<iframe src="https://snippet.dhtmlx.com/habbz6mf?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>