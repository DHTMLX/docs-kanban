---
sidebar\_label: Integration with Salesforce
title: Integration with Salesforce
description: Learn how to integrate DHTMLX Kanban into Salesforce. This guide explains the required HTML setup and environment configuration for smooth operation inside Salesforce Lightning components.
---

# Integration with Salesforce

:::tip
You should be familiar with the basic concepts and patterns of [**Salesforce**](https://www.salesforce.com/) before reading this documentation. To refresh your knowledge, please refer to the [**Salesforce documentation**](https://developer.salesforce.com/docs).
:::

DHTMLX Kanban is compatible with [Salesforce](https://www.salesforce.com/) platform. We have prepared code examples on how to add DHTMLX Kanban into Salesforce environment. For more information, refer to the corresponding [Example on GitHub](https://github.com/DHTMLX/salesforce-lwc-demo).

:::note
The JavaScript Kanban widget automatically detects that it operates within a [Salesforce](https://www.salesforce.com/) environment and configures the integration logic internally. In most cases, you do not need to call any [Salesforce-specific methods](#selesforce-specific-methods) manually.
:::

## Preparing environment

If you want to add Kanban into your Salesforce project, you need to mark the *root* container with the `data-wx-root="true"` HTML attribute. This attribute allows the library to locate the main node for mounting **Kanban** and **Toolbar** widgets.

```html title="kanban.html"
<template>
    <div id="wx-root" data-wx-root="true" class="kanban-wrapper" tabindex="0">
        <div class="sf_toolbar" lwc:dom="manual" data-wx-portal-root="1"></div>
        <div class="sf_kanban" lwc:dom="manual" data-wx-portal-root="1"></div>
    </div>
</template>
```

Nested elements marked with the `data-wx-portal-root="1"` attribute serve as containers for DHTMLX components (for example, **Toolbar** and **Kanban**).

## Salesforce environment API

The DHTMLX Kanban includes the `salesForceEnv` helper class that stores methods for manual control of the Salesforce environment. You can import the `salesForceEnv` helper class as follows:

```jsx {4}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv
} from "@dhx/trial-kanban";
```

:::note
Normally, salesforce-specific methods are not required, but they can be available only as a fallback in case automatic detection fails.
:::

### Salesforce-specific methods

You can use the following methods of the `salesForceEnv` helper class: 

| Method                                                           | Description                                                                    |
| :--------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| `salesForceEnv.detect()`                                         | Detects whether the Kanban is running inside Salesforce                        |
| `salesForceEnv.addGlobalEvent(eventName, handler, htmlElement)`  | Attaches a global event to the first available `HTMLElement`                   |
| `salesForceEnv.getTopNode()`                                     | Returns the first available `HTMLElement` inside the Salesforce DOM hierarchy  |

### Additional exported function

| Function             | Description                                                                       |
| :------------------- | :-------------------------------------------------------------------------------- |
| `enableSalesForce()` | Manually sets the Salesforce environment when automatic detection is unavailable  |

## Workflow steps

1. Add the `data-wx-root="true"` attribute to your LWC container
2. Import and initialize DHTMLX Kanban and Toolbar (optionaly)
3. The JavaScript Kanban widget automatically detects the Salesforce context and applies internal configuration
4. You do not need to call the `enableSalesForce()` function or use `salesForceEnv` methods unless your app runs in a non-standard embedding scenario

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

Now the DHTMLX Kanban component is fully integrated into your **Salesforce Lightning** environment. The widget automatically handles DOM hierarchy and event binding inside LWC. You can continue configuring Kanban through its standard API and customize Kanban appearance and logic according to your project needs. The final example you can find on [**GitHub**](https://github.com/DHTMLX/salesforce-lwc-demo).
