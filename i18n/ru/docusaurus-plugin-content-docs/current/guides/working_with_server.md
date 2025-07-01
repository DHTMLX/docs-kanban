---
sidebar_label: Работа с сервером
title: Работа с сервером
description: В документации по DHTMLX JavaScript Kanban вы узнаете, как работать с сервером. Ознакомьтесь с руководствами для разработчиков и API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную версию DHTMLX Kanban.
---

# Работа с сервером

JavaScript Kanban может работать как с клиентскими, так и с серверными данными. Для работы на стороне сервера не требуется особых требований к бэкенду - Kanban может подключаться к любой серверной платформе, поддерживающей REST API.

:::info
Виджет поставляется с готовыми вариантами бэкенда на **Go** и **Node**, но также поддерживаются и собственные серверные скрипты.
:::

## RestDataProvider

JavaScript Kanban предоставляет сервис **RestDataProvider**, который полностью поддерживает REST API для работы с сервером. С помощью этого сервиса вы сможете легко взаимодействовать с сервером и выполнять следующие действия с данными:

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

Сервис **RestDataProvider** включает в себя несколько REST-методов для динамической загрузки данных:

- [`getCards()`](/api/provider/rest_methods/js_kanban_getcards_method.md) - возвращает Promise с ***данными карточек***
- [`getColumns()`](/api/provider/rest_methods/js_kanban_getcolumns_method.md) - возвращает Promise с ***данными колонок***
- [`getLinks()`](/api/provider/rest_methods/js_kanban_getlinks_method.md) - возвращает Promise с ***данными связей***
- [`getRows()`](/api/provider/rest_methods/js_kanban_getrows_method.md) - возвращает Promise с ***данными строк***
- [`getUsers()`](/api/provider/rest_methods/js_kanban_getusers_method.md) - возвращает Promise с ***данными пользователей***

## Взаимодействие с бэкендом

Чтобы подключить Kanban к серверу, просто подключите **RestDataProvider** к вашим серверным скриптам. Если вы используете встроенные бэкенды, они доступны по следующим ссылкам:

- [**Go**](https://github.com/web-widgets/kanban-go) backend
- [**Node**](https://github.com/web-widgets/kanban-node) backend

Вы также можете реализовать собственный бэкенд.

:::tip
Если вы используете собственный бэкенд, ознакомьтесь с разделом [**REST API routes**](/api/overview/rest_routes_overview/) для получения подробностей.
:::

Подключить **RestDataProvider** к серверу очень просто: используйте конструктор **kanban.RestDataProvider** и передайте ему **URL** сервера.

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
Чтобы включить операции с данными, такие как добавление или удаление элементов, и отправку запросов на сервер, **RestDataProvider** необходимо добавить в цепочку **Event Bus** с помощью метода [**api.setNext()**](/api/internal/js_kanban_setnext_method.md).
:::

### Пример

Пример подключения **RestDataProvider** к бэкенду на **Go** и загрузки данных с сервера:

<iframe src="https://snippet.dhtmlx.com/f25y0809?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Мультипользовательский бэкенд

Доски Kanban популярны среди компаний любого размера, а поддержка нескольких пользователей делает работу еще удобнее. Благодаря этой функции несколько пользователей могут одновременно управлять одними и теми же карточками Kanban в реальном времени - без перезагрузки страницы. Это обеспечивает более эффективное взаимодействие и своевременное обновление изменений для всех участников.

Чтобы настроить мультипользовательский бэкенд, сначала авторизуйтесь на сервере перед инициализацией Kanban. Для этого можно использовать простую функцию `login(url: string)`:

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

Данная функция реализует демонстрационную авторизацию - каждый пользователь авторизуется с ID 1. После входа сервер возвращает токен, который следует добавлять во все последующие запросы. Для этого используйте метод `RestDataProvider.setHeaders()`, чтобы добавить кастомные заголовки ко всем запросам. По умолчанию сервер ожидает токен в заголовке `"Remote-Token":<value>`:

~~~js {}
login(url).then(token => {
    // инициализация rest provider
    const restProvider = new kanban.RestDataProvider(url);
    // установка токена в кастомный заголовок
    restProvder.setHeaders({
        "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
    });
    
    // инициализация виджета...
});
~~~

После получения токена можно инициализировать Kanban следующим образом:

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
    
    // инициализация мультипользователя...
});
~~~

После инициализации виджета необходимо добавить WebSocket для прослушивания серверных событий. Пример:

~~~js {}
// инициализация мультипользователя...

// получение клиентских обработчиков для серверных событий
const handlers = kanbanUpdates(
    board.api,
    restProvider.getIDResolver()
);
// подключение к серверным событиям
const events = new RemoteEvents(url + "/api/v1", token);
// привязка обработчиков к серверным событиям
events.on(handlers);
~~~

- `handlers` - клиентские функции для обработки событий от сервера
- `events` - объект для подключения к серверу и прослушивания событий
- `RemoteEvents.on(handlers)` - связывает обработчики с серверными событиями

Добавление мультипользовательского бэкенда значительно упрощает совместную работу и позволяет мгновенно видеть изменения в интерфейсе.

### Пример

Пример настройки мультипользовательского бэкенда для отображения изменений пользователей в реальном времени:

<iframe src="https://snippet.dhtmlx.com/xw6g6qd6?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Кастомизация серверных событий

Вы можете настроить обработку серверных событий. Для этого передайте собственный объект **handlers** в метод `RemoteEvents.on(handlers)`. Структура объекта **handlers** выглядит так:

~~~js {}
{
    "cards": cardsHandler: function(obj: any),
    "columns": columnsHandler: function(obj: any),
    "links": linksHandler: function(obj: any),
    "rows": rowsHandler: function(obj: any),
}
~~~

Когда на сервере что-то меняется, он возвращает название изменённого элемента, которое может отличаться в зависимости от логики бэкенда.

Обновления на клиенте передаются через аргумент **obj** функции `function(obj: any)`. Тип операции указывается в поле `type: string`, возможные значения:

- Для **cards**: `"add-card"`, `"update-card"`, `"delete-card"`, `"move-card"`
- Для **columns**: `"add-column"`, `"update-column"`, `"delete-column"`, `"move-column"`
- Для **links**: `"add-link"`, `"delete-link"`
- Для **rows**: `"add-row"`, `"update-row"`, `"delete-row"`, `"move-row"`

Пример кода:

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

// добавление своих обработчиков
const handlers = {
   cards: cardsHandler,
};

const remoteEvents = new kanban.RemoteEvents(remoteEventsURL, token);
remoteEvents.on(handlers);
~~~

Метод `RestDataProvider.getIDResolver()` возвращает функцию для синхронизации идентификаторов клиента и сервера. Когда вы создаёте новый элемент (*card/column/row*) на клиенте, он получает временный ID, а реальный серверный ID сохраняется в store. Функция `idResolver()` помогает поддерживать соответствие этих ID. Сигнатура: `idResolver(id: TID, type: number)`.

Значения для `type`:

- `CardID` - 1,
- `RowID` - 2,
- `ColumnID` - 3

Чтобы избежать повторных запросов на сервер, используйте флаг `skipProvider: true` при вызове `board.api.exec()`.

После подключения кастомных обработчиков вы полностью управляете тем, как серверные события обрабатываются на клиенте.

## Группировка двух и более статусов в одну колонку

Иногда требуется отображать карточки с разными статусами в одной колонке (например, объединить *To do* и *Unassigned* в одну колонку).

Для этого добавьте собственное поле (например, **status**), в котором будет храниться текущий статус карточки. Поле **column** - общее для группы статусов.

Далее определите правила группировки карточек. Например, можно объединить статусы следующим образом:

- *todo*, *unassigned* - для колонки **Open**
- *dev*, *testing* - для колонки **Inprogress**
- *merged*, *released* - для колонки **Done**

Есть два подхода к реализации такой группировки:

- [На стороне сервера](#группировка-на-стороне-сервера)
- [На стороне сервера + клиента](#группировка-на-стороне-сервера--клиента)

### Группировка на стороне сервера

Если вы реализуете группировку на сервере, то сервер должен уметь отправлять данные клиенту через [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) (см. раздел [Мультипользовательский бэкенд](#мультипользовательский-бэкенд)).

Когда сервер получает запрос на обновление карточки, он должен проверить поле **status**. Например, на [Go](https://go.dev/) это может выглядеть так:

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
      // если колонка изменилась через статус,
      // нужно уведомить клиента о перемещении карточки

      // обновить индекс карточки
      updateCardIndex(&c)

      // уведомить клиента об изменении колонки
      ws.Publish("card-update", &c)
   }
   // ...
}
~~~

Таким образом, при изменении статуса карточки логика на сервере присваивает ей нужную колонку и уведомляет клиента по WebSockets о необходимости переместить карточку.

### Группировка на стороне сервера + клиента

В смешанном варианте сервер формирует правила группировки, а клиент определяет по статусу, в какую колонку поместить карточку.

~~~js
const groupingRules = await fetch("http://server.com/rules");
~~~

Пример набора правил:

~~~json
{
   "open": ["todo", "unassigned"],
   "progress": ["dev", "testing"],
   "done": ["merged", "released"],
}
~~~

Далее добавьте на клиенте логику проверки статуса карточки и перемещения её в нужную колонку:

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

Таким образом, вы контролируете отображение карточек в колонках на основе других полей.

### Пример

Пример использования серверной логики для группировки двух и более статусов в одну колонку в реальном времени:

<iframe src="https://snippet.dhtmlx.com/habbz6mf?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
