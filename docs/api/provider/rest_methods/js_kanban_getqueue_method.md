---
sidebar_label: getQueue()
title: getQueue REST Method API
description: Read the getQueue REST method API for DHTMLX Kanban. Learn how to get the internal queue of actions RestDataProvider processes.
---

# getQueue()

### Description

@short: Returns the internal queue of actions that RestDataProvider processes

:::info
The `getQueue()` method is a part of the **RestDataProvider** service intended for working with server.
:::

### Usage

~~~jsx {}
getQueue(): object;
~~~

### Returns

The method returns the internal `ActionQueue` instance used by `RestDataProvider` to process data operations sent to the server. The queue is responsible for:

- buffering actions until pending requests resolve
- assigning temporary client-side IDs to newly created entities and replacing them with backend IDs once the server responds

The queue is used internally by other methods of `RestDataProvider`. The most common indirect use is via [`getIDResolver()`](api/provider/rest_methods/js_kanban_getidresolver_method.md), which is built on top of the queue's ID-resolution logic.

You normally do not need to call `getQueue()` directly. Use this method only when you need fine-grained access to the queue (for example, when implementing advanced custom synchronization between the client and the server).

**Related articles:** [Working with server](guides/working_with_server.md)
