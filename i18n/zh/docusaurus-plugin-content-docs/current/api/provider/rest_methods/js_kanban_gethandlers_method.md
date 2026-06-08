---
sidebar_label: getHandlers()
title: getHandlers REST 方法 API
description: 阅读 DHTMLX Kanban 的 getHandlers REST 方法 API。了解如何获取向服务器发送操作的默认处理程序。
---

# getHandlers()

### 描述

@short: 返回 RestDataProvider 用于向服务器发送数据操作的默认操作处理程序

:::info
**getHandlers()** 方法是用于与服务器交互的 **RestDataProvider** 服务的一部分。
:::

### 用法

~~~jsx {}
getHandlers(): object;
~~~

### 返回值

`getHandlers()` 方法返回一个对象，该对象将 [`RestDataProvider` 支持的数据操作](guides/working_with_server.md/#restdataprovider)映射到提供程序发送到服务器的请求。

返回的对象是 `RestDataProvider` 内部使用的默认操作映射。可以通过覆盖此方法来添加自定义处理程序，或使用自定义逻辑替换默认处理程序。

### 示例

要使用自定义处理程序扩展默认处理程序，请创建一个继承 `RestDataProvider` 的类并覆盖 `getHandlers()`。始终在覆盖中调用 `super.getHandlers()` 以保留默认处理程序：

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
请勿手动将默认处理程序复制到覆盖中。默认操作映射的内容可能在版本之间发生变化；调用 `super.getHandlers()` 可确保您的自定义处理程序始终合并在当前默认值之上。
:::

**相关文章：** [与服务器配合使用](guides/working_with_server.md)
