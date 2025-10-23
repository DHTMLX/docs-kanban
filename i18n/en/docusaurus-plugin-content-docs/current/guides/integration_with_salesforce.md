---
sidebar\_label: Integration with Salesforce
title: Integration with Salesforce
description: Learn how to integrate DHTMLX Kanban into Salesforce. This guide explains the required HTML setup and environment configuration for smooth operation inside Salesforce Lightning components.
---

# Integration with Salesforce

:::tip
It helps to know the basics of [**Salesforce**](https://www.salesforce.com/) before checking out this guide. If you want to brush up, take a look at the [**Salesforce documentation**](https://developer.salesforce.com/docs).
:::

DHTMLX Kanban works well with the [Salesforce](https://www.salesforce.com/) platform. There are some code examples below that show how to bring DHTMLX Kanban into a Salesforce environment. If you want to see more, check out the [Example on GitHub](https://github.com/DHTMLX/salesforce-lwc-demo).

:::note
The JavaScript Kanban widget can tell when it's running inside [**Salesforce**](https://www.salesforce.com/) and sets up the integration on its own. Usually, there's no need to use any [**Salesforce-specific methods**](#salesforce-specific-methods) by hand.
:::

## Preparing environment

To add Kanban to a Salesforce project, just add the *root* container with the `data-wx-root="true"` HTML attribute. This helps the library find the main spot for mounting the **Kanban** and **Toolbar** widgets.

```html title="kanban.html"
<template>
    <div id="wx-root" data-wx-root="true" class="kanban-wrapper" tabindex="0">
        <div class="sf_toolbar" lwc:dom="manual" data-wx-portal-root="1"></div>
        <div class="sf_kanban" lwc:dom="manual" data-wx-portal-root="1"></div>
    </div>
</template>
```

Any child elements with the `data-wx-portal-root="1"` attribute are used as containers for DHTMLX components like **Toolbar** and **Kanban**.

## Salesforce environment API

DHTMLX Kanban comes with a `salesForceEnv` helper class with methods for managing the Salesforce environment manually. To use it, import the `salesForceEnv` helper like this:

```jsx {4}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv
} from "@dhx/trial-kanban";
```

:::note
Normally, you won't need these Salesforce-specific methods, but they're there if the automatic detection doesn't work out.
:::

### Salesforce-specific methods

Here are the methods you get with the `salesForceEnv` helper class:

| Method                                                           | Description                                                                    |
| :--------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| `salesForceEnv.detect()`                                         | Checks if Kanban is running inside Salesforce                                  |
| `salesForceEnv.addGlobalEvent(eventName, handler, htmlElement)`  | Adds a global event to the first available HTML element                        |
| `salesForceEnv.getTopNode()`                                     | Gets the first available HTML element inside the Salesforce DOM hierarchy       |

```jsx {4,7}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv
} from "@dhx/trial-kanban";

salesForceEnv.detect();
```

### Additional exported function

| Function             | Description                                                                       |
| :------------------- | :-------------------------------------------------------------------------------- |
| `enableSalesForce()` | Lets you manually set the Salesforce environment if automatic detection doesn't work |

```jsx {5,8}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv,
    enableSalesForce
} from "@dhx/trial-kanban";

enableSalesForce();
```

## Workflow steps

1. Add the `data-wx-root="true"` attribute to your LWC container
2. Import and set up DHTMLX Kanban and Toolbar (this part's optional)
3. The JavaScript Kanban widget will spot the Salesforce context and configure itself
4. There's no need to use `enableSalesForce()` or the `salesForceEnv` methods unless you're dealing with a special embedding situation

### Example

```jsx title="kanban.js"
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default class KanbanLWC {
    connectedCallback() {
        const kanban_container = this.template.querySelector(".sf_kanban");
        const toolbar_container = this.template.querySelector(".sf_toolbar");
        const kanban = new Kanban(kanban_container, { /* configuration properties */ });
        const toolbar = new Toolbar(toolbar_container, { api: kanban.api });
    }
}
```

With this setup, DHTMLX Kanban is fully integrated into your **Salesforce Lightning** environment. The widget takes care of DOM hierarchy and event binding inside LWC for you. You can keep customizing Kanban through its regular API and tweak its look and logic to fit your project. If you want to see a finished example, head over to [**GitHub**](https://github.com/DHTMLX/salesforce-lwc-demo).