---
sidebar_label: getRows()
title: REST метод getRows
description: Вы можете узнать о REST методе getRows в документации JavaScript библиотеки DHTMLX Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# getRows()

### Описание

@short: Возвращает промис с данными строк

:::info
Метод **getRows()** является частью сервиса **RestDataProvider**, предназначенного для взаимодействия с сервером
:::

### Использование

~~~jsx {}
getRows(): promise;
~~~

### Возвращает

Метод **getRows()** выполняет **GET** запрос к серверу и возвращает **промис**, который разрешается с данными строк

### Пример

~~~jsx {2,7}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getRows()
]).then(([cards, columns, rows]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        rows,
        rowKey: "type"
    });
    board.api.setNext(restProvider);
});
~~~

**Связанные статьи:** [Работа с сервером](../../../../guides/working_with_server)
