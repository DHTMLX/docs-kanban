---
sidebar_label: send()
title: Метод send()
description: Вы можете узнать о методе send() в документации JavaScript-библиотеки DHTMLX Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# send()

### Описание

@short: Этот метод отвечает за отправку необходимых HTTP-запросов на сервер и возвращает promise, который может содержать данные в зависимости от типа запроса.

Все серверные запросы выполняются с помощью метода **send()**, который входит в состав сервиса [**RestDataProvider**](/guides/working_with_server.md/#restdataprovider).

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

| Имя       | Тип        | Описание |
| ----------- | ----------- | ----------- |
| `url`         |  string     | *Обязательный*. Серверный эндпоинт, куда отправляется запрос.            |
| `method`            |string             | *Обязательный*. HTTP-метод для использования (GET, POST, PUT, DELETE).            |
| `data`  | object        | *Необязательный*. Параметры, отправляемые на сервер. По умолчанию отправляются параметры события, но вы можете добавить дополнительные параметры с помощью собственного объекта. См. [Пример](#примеры) ниже. |
| `headers`  |object       | *Необязательный*. Заголовок по умолчанию включает **Content-Type** со значением *application/json*. Дополнительные заголовки можно добавить через параметр **customHeaders**. См. [Пример](#примеры) ниже. |

### Ответ

Метод возвращает promise, который может содержать данные или быть пустым в зависимости от запроса.

Promise разрешается при успешном выполнении запроса. В случае неудачи выбрасывается ошибка.

Вы можете управлять возвращаемыми данными и обрабатывать ошибки с помощью метода **catch** на возвращаемом promise.

~~~jsx
restDataProvider.send(url, method, data)
.then(data => {
   ... // успех: обработка полученных данных
})
.catch(err => {
    ... // обработка ошибок
});
~~~

### Примеры

Ниже пример отправки запроса с дополнительными параметрами вместе с параметрами по умолчанию:

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
        //параметры конфигурации
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

Следующие примеры показывают, как добавить дополнительные заголовки при использовании метода **send()**.

~~~js
const customHeaders = {
    "Authorization": "Bearer",
    "Custom header": "some value",
};

board.api.on("add-cards", obj => {
    restDataProvider.send("cards", "POST", obj, customHeaders);
});
~~~

Альтернативно, заголовки можно добавить, расширяя RestDataProvider, что даёт больше контроля над данными, отправляемыми на сервер:

~~~jsx {3-8}
const url = "https://some_backend_url";

class MyDataProvider extends RestDataProvider {
    send(url, method, data, headers) {
        headers = { ...headers, "SomeToken": "abc" };
        return super.send(url, methods, data, headers);
    }
}

board.api.setNext(new MyDataProvider(url));
~~~

---

**Связанные статьи:** [Работа с сервером](../../../../guides/working_with_server)
