---
sidebar_label: getHandlers()
title: API REST-метода getHandlers
description: Ознакомьтесь с API REST-метода getHandlers для DHTMLX Kanban. Узнайте, как получить обработчики действий по умолчанию, используемые для отправки операций на сервер.
---

# getHandlers()

### Описание

@short: Возвращает обработчики действий по умолчанию, используемые RestDataProvider для отправки операций с данными на сервер

:::info
Метод **getHandlers()** является частью сервиса **RestDataProvider**, предназначенного для работы с сервером.
:::

### Применение

~~~jsx {}
getHandlers(): object;
~~~

### Возвращаемое значение

Метод `getHandlers()` возвращает объект, который сопоставляет [операции с данными, поддерживаемые `RestDataProvider`](guides/working_with_server.md/#restdataprovider), с запросами, которые провайдер отправляет на сервер.

Возвращаемый объект — это карта действий по умолчанию, используемая внутри `RestDataProvider`. Переопределите этот метод, чтобы добавить собственные обработчики или заменить стандартные на пользовательскую логику.

### Пример

Чтобы расширить обработчики по умолчанию собственными, создайте класс, наследующий `RestDataProvider`, и переопределите `getHandlers()`. Всегда вызывайте `super.getHandlers()` из переопределённого метода, чтобы сохранить обработчики по умолчанию:

~~~jsx {3-11}
const url = "https://some_backend_url";

class MyDataProvider extends kanban.RestDataProvider {
    getHandlers() {
        const handlers = super.getHandlers();
        return {
            ...handlers,
            // custom or overridden handlers go here
        };
    }
}

const restProvider = new MyDataProvider(url);
board.api.setNext(restProvider);
~~~

:::warning
Не копируйте обработчики по умолчанию в переопределение вручную. Содержимое карты действий по умолчанию может меняться между версиями; вызов `super.getHandlers()` гарантирует, что ваши пользовательские обработчики будут объединены поверх актуальных значений по умолчанию.
:::

**Связанные статьи:** [Работа с сервером](guides/working_with_server.md)
