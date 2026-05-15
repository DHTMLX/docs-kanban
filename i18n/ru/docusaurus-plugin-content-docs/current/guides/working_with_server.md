---
sidebar_label: Работа с сервером
title: Работа с сервером
description: Вы можете узнать, как работать с сервером, в документации по JavaScript Kanban от DHTMLX. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# Работа с сервером

JavaScript Kanban поддерживает как клиентские, так и серверные данные. Виджет не предъявляет особых требований к backend и подключается к любой платформе, предоставляющей REST (RESTful) API.

:::info
Виджет поставляется со встроенными backend-серверами на Go и Node. Вы также можете использовать собственные серверные скрипты.
:::

## RestDataProvider

В JavaScript Kanban включён сервис `RestDataProvider`, который полностью поддерживает REST API для взаимодействия с backend. Провайдер отправляет и принимает следующие операции с данными:

- `"add-card"`
- `"add-column"`
- `"add-comment"`
- `"add-row"`
- `"add-link"`
- `"delete-card"`
- `"delete-column"`
- `"delete-comment"`
- `"delete-row"`
- `"delete-link"`
- `"move-card"`
- `"move-column"`
- `"move-row"`
- `"update-card"`
- `"update-column"`
- `"update-comment"`
- `"update-row"`
- `"add-vote"`
- `"delete-vote"`

## REST-методы

Сервис `RestDataProvider` предоставляет следующие REST-методы для динамической загрузки данных:

- [`getCards()`](api/provider/rest_methods/js_kanban_getcards_method.md) — возвращает promise с данными карточек
- [`getColumns()`](api/provider/rest_methods/js_kanban_getcolumns_method.md) — возвращает promise с данными колонок
- [`getLinks()`](api/provider/rest_methods/js_kanban_getlinks_method.md) — возвращает promise с данными связей
- [`getRows()`](api/provider/rest_methods/js_kanban_getrows_method.md) — возвращает promise с данными строк
- [`getUsers()`](api/provider/rest_methods/js_kanban_getusers_method.md) — возвращает promise с данными пользователей
- [`send()`](api/provider/rest_methods/js_kanban_send_method.md) — отправляет произвольный HTTP-запрос и возвращает promise

## Взаимодействие с backend

Чтобы взаимодействовать с сервером, подключите `RestDataProvider` к серверным скриптам. Используйте один из встроенных backend-серверов или создайте свой:

- [Go](https://github.com/web-widgets/kanban-go)
- [Node](https://github.com/web-widgets/kanban-node)

:::tip
Для собственного backend обратитесь к справочнику [REST API routes](api/overview/rest_routes_overview.md).
:::

Для подключения `RestDataProvider` к backend вызовите конструктор `kanban.RestDataProvider`, передав URL backend. Следующий фрагмент кода создаёт провайдер, загружает начальные данные и привязывает провайдер к Event Bus Kanban:

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
Добавьте `RestDataProvider` в Event Bus через метод [`api.setNext()`](api/internal/js_kanban_setnext_method.md). Этот шаг позволяет операциям с данными (добавление, удаление и т. д.) инициировать соответствующие запросы на сервер.
:::

### Пример

Следующее демо подключает `RestDataProvider` к backend на Go и загружает данные с сервера:

<iframe src="https://snippet.dhtmlx.com/f25y0809?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Мультипользовательский backend

Мультипользовательский backend позволяет нескольким пользователям редактировать одну и ту же доску Kanban в реальном времени без перезагрузки страницы. Виджет подключается к серверу через WebSocket, а пользовательские обработчики применяют входящие изменения к доске Kanban.

Чтобы включить мультипользовательский backend, авторизуйте пользователя на сервере до инициализации Kanban. Следующая функция `login(url)` получает и кэширует токен сессии:

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

Функция симулирует авторизацию (в демо URL входа жёстко задаёт `id=1`, поэтому каждая сессия использует ID `1`). После успешной авторизации сервер возвращает токен, который должен включаться в каждый последующий запрос.

Чтобы прикрепить токен к каждому запросу, вызовите `RestDataProvider.setHeaders()`. По умолчанию сервер хранит токен в заголовке `"Remote-Token": <value>`:

~~~js {}
login(url).then(token => {
    // инициализация rest provider
    const restProvider = new kanban.RestDataProvider(url);
    // установка токена в пользовательский заголовок
    restProvider.setHeaders({
        "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
    });
    
    // инициализация виджета...
});
~~~

После получения токена инициализируйте виджет. Следующий фрагмент кода загружает данные и создаёт доску Kanban:

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

После создания доски подключите WebSocket для прослушивания событий от сервера. Следующий фрагмент кода подключает обработчики `RemoteEvents`:

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

В фрагменте используются следующие идентификаторы:

- `handlers` — клиентские обработчики для серверных событий
- `events` — экземпляр `RemoteEvents`, прослушивающий входящие события от сервера

Вызов `events.on(handlers)` регистрирует клиентские обработчики для серверных событий. Теперь виджет отражает изменения на стороне сервера в реальном времени.

### Пример

Следующее демо настраивает мультипользовательский backend для отслеживания изменений других пользователей в реальном времени:

<iframe src="https://snippet.dhtmlx.com/xw6g6qd6?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Кастомизация серверных событий

Чтобы определить пользовательскую логику обработки серверных событий, передайте объект `handlers` в метод `RemoteEvents.on(handlers)`. Объект имеет следующую структуру:

~~~ts {}
{
    cards?: (obj: any) => void;
    columns?: (obj: any) => void;
    links?: (obj: any) => void;
    rows?: (obj: any) => void;
    comments?: (obj: any) => void;
    votes?: (obj: any) => void;
}
~~~

После изменения на сервере ответ содержит имя изменённого элемента. Имена зависят от серверной логики.

Обновлённые данные на стороне клиента поступают в аргумент `obj` калбэка `function(obj: any)`. Поле `type: string` указывает операцию. Допустимые значения:

- Для cards: `"add-card"`, `"update-card"`, `"delete-card"`, `"move-card"`
- Для columns: `"add-column"`, `"update-column"`, `"delete-column"`, `"move-column"`
- Для links: `"add-link"`, `"delete-link"`
- Для rows: `"add-row"`, `"update-row"`, `"delete-row"`, `"move-row"`
- Для comments: `"add-comment"`, `"update-comment"`, `"delete-comment"`
- Для votes: `"add-vote"`, `"delete-vote"`

Следующий фрагмент кода показывает реализацию:

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
    obj.card.column = idResolver(obj.card.column, TypeCol);
    switch (obj.type) {
        case "add-card":
            board.api.exec("add-card", {
                card: obj.card,
                select: false,
                skipProvider: true, // prevent the client from sending the request to the server
            })
            break;
        // other operations
    }
}

// добавление пользовательских обработчиков
const handlers = {
   cards: cardsHandler,
};

const remoteEvents = new kanban.RemoteEvents(remoteEventsURL, token);
remoteEvents.on(handlers);
~~~

Метод `RestDataProvider.getIDResolver()` возвращает функцию, которая синхронизирует client ID с server ID. Когда клиент создаёт новый объект (карточку, колонку, строку или связь), объект получает временный ID вместе с server ID, хранящимся в хранилище данных. Функция `idResolver(id: TID, type: number)` разрешает временный ID в server ID.

Аргумент `type` определяет тип модели:

- `CardID` — `1`
- `RowID` — `2`
- `ColumnID` — `3`
- `LinkID` — `4`
- `CommentID` — `5`

Чтобы предотвратить отправку запроса на сервер, передайте `skipProvider: true` при вызове `board.api.exec()`. Вызов `remoteEvents.on(handlers)` регистрирует пользовательские обработчики.

## Группировка статусов в одну колонку

Отображайте карточки из разных колонок в одной колонке. Например, можно использовать единую колонку для карточек со статусами `todo` и `unassigned`.

Для реализации группировки добавьте пользовательское поле (например, `status`), которое хранит текущий статус карточки. В поле `column` хранится общий статус.

Определите правила группировки. В примере ниже используются следующие статусы:

- `todo`, `unassigned` — для колонки **Open**
- `dev`, `testing` — для колонки **Inprogress**
- `merged`, `released` — для колонки **Done**

Доступны два варианта реализации:

- [Группировка на сервере](#group-on-the-server)
- [Смешанная группировка на сервере и клиенте](#server-side-client-side-grouping)

### Группировка на сервере {#group-on-the-server}

Группировка на стороне сервера требует, чтобы сервер мог передавать данные на клиент через [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) (см. раздел [Мультипользовательский backend](#мультипользовательский-backend)).

При обработке запроса на обновление карточки проверьте поле `status`. Пример ниже использует [Go](https://go.dev/), но подходит любой backend.

Следующий фрагмент кода сопоставляет поле `status` с целевой колонкой на сервере:

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
      // if the column has been updated by the status field,
      // notify the client to move the card to the corresponding column

      // update the index of the card
      updateCardIndex(&c)

      // notify the client to update the column
      ws.Publish("card-update", &c)
   }
   // ...
}
~~~

Когда пользователь меняет поле status, сервер проверяет значение и помещает карточку в целевую колонку. Затем сервер через WebSocket уведомляет клиента о необходимости переместить карточку.

### Смешанная группировка на сервере и клиенте {#server-side-client-side-grouping}

Для смешанного подхода (сервер + клиент) загрузите правила группировки с сервера. Клиент использует эти правила для определения целевой колонки на основе поля `status`.

Следующий фрагмент кода загружает правила:

~~~js
const groupingRules = await fetch("http://server.com/rules");
~~~

Объект правил имеет следующий формат:

~~~json
{
   "open": ["todo", "unassigned"],
   "progress": ["dev", "testing"],
   "done": ["merged", "released"],
}
~~~

Определите логику, которая проверяет изменения карточки и перемещает её в нужную колонку. Следующий фрагмент кода перехватывает события `move-card` и `update-card`:

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
      card: { status: groupingRules[ev.columnId][0] },
   });
});

kanban.api.intercept("update-card", ev => {
   updateColumn(ev.card);
});
~~~

Этот подход назначает колонки на основе значений других полей.

### Пример

Следующее демо настраивает серверную часть для группировки двух и более статусов в одну колонку в реальном времени:

<iframe src="https://snippet.dhtmlx.com/habbz6mf?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
