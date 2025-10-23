---
sidebar_label: send()
title: Метод send()
description: Вы можете узнать о методе send() в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# send()

### Описание

@short: Отправляет необходимый HTTP-запрос на сервер и возвращает promise с данными или без них в зависимости от запроса

Все запросы к серверу выполняются с помощью метода **send()**, который является частью сервиса [**RestDataProvider**](guides/working_with_server.md/#restdataprovider).

### Использование

~~~js
send(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | string,
    data?: object,
    headers?: object,
): promise;
~~~

### Параметры

| Имя         | Тип         | Описание |
| ----------- | ----------- | -------- |
| `url`       | string      | *Обязательный*. Путь к серверу, на который отправляется запрос. |
| `method`    | string      | *Обязательный*. Тип HTTP-метода (GET, POST, PUT, DELETE). |
| `data`      | object      | *Необязательный*. Параметры, отправляемые на сервер. По умолчанию отправляются параметры из срабатывающего события. Вы можете добавить дополнительные параметры с помощью пользовательского объекта. См. [Пример](#examples) ниже. |
| `headers`   | object      | *Необязательный*. Заголовок по умолчанию — **Content-Type** с значением *application/json*. Дополнительные заголовки можно добавить через параметр **customHeaders**. См. [Пример](#examples) ниже. |

### Ответ

Метод возвращает объект promise с данными или без них, в зависимости от запроса.

Promise возвращается при успешном статусе запроса. В случае неудачного запроса клиент выбрасывает ошибку.

Вы можете настроить, что будет возвращено. Для обработки ответа при неудачном запросе используйте метод **catch** возвращаемого promise.

~~~jsx
restDataProvider.send(url, method, data)
.then(data => {
   ... // успех: обработать данные
})
.catch(err => {
    ... // обработчик ошибок
});
~~~

### Примеры

Ниже приведён пример, как отправить запрос с дополнительными параметрами помимо стандартных:

~~~jsx {14-20}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns()
]).then(([cards, columns]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        // параметры конфигурации
    });

    board.api.on("add-card", obj => {
        obj.custom = "custom prop";
        restProvider.send(`cards`, "POST", obj).then(data => {
            board.api.parse({ cards: data });
            return Promise.resolve();
        });
    });

   board.api.setNext(restProvider);
});
~~~

Следующие примеры показывают, как добавить дополнительные заголовки в метод **send()**.

~~~js
const customHeaders = {
    "Authorization": "Bearer",
    "Custom header": "some value",
};

board.api.on("add-cards", obj => {
    restDataProvider.send("cards", "POST", obj, customHeaders);
});
~~~

Или вы можете добавить заголовки, переопределив RestDataProvider, что даст вам больше контроля над данными, которые вы отправляете на сервер:

~~~jsx {3-8}
const url = "https://some_backend_url";

class MyDataProvider extends RestDataProvider {
    send(url, method, data, headers) {
        headers = { ...headers, "SomeToken": "abc" };
        return super.send(url, method, data, headers);
    }
}

board.api.setNext(new MyDataProvider(url));
~~~

---

**Связанные статьи:** [Работа с сервером](guides/working_with_server.md)