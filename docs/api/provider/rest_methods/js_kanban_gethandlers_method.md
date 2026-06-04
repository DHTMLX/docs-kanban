---
sidebar_label: getHandlers()
title: getHandlers REST Method API
description: Read the getHandlers REST method API for DHTMLX Kanban. Learn how to get the default action handlers used to send operations to the server.
---

# getHandlers()

### Description

@short: Returns the default action handlers used by RestDataProvider to send data operations to the server

:::info
The **getHandlers()** method is a part of the **RestDataProvider** service intended for working with server.
:::

### Usage

~~~jsx {}
getHandlers(): object;
~~~

### Returns

The `getHandlers()` method returns an object that maps the [data operations supported by `RestDataProvider`](guides/working_with_server.md/#restdataprovider) to the requests that the provider sends to the server.

The returned object is the default actions map used internally by `RestDataProvider`. Override this method to add custom handlers or replace the default ones with custom logic.

### Example

To extend the default handlers with custom ones, create a class that extends `RestDataProvider` and override `getHandlers()`. Always call `super.getHandlers()` from the override to keep the default handlers in place:

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
Do not copy the default handlers into the override manually. The contents of the default actions map may change between versions; calling `super.getHandlers()` guarantees that your custom handlers stay merged on top of the current defaults.
:::

**Related articles:** [Working with server](guides/working_with_server.md)
