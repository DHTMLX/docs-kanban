---
sidebar_label: Integration with Salesforce
title: Integration with Salesforce
description: Learn how to integrate DHTMLX Kanban into Salesforce. This guide explains the required HTML setup and environment configuration for smooth operation inside Salesforce Lightning components.
---

# Integration with Salesforce

:::tip
This guide assumes familiarity with [Salesforce](https://www.salesforce.com/) concepts and patterns. For background, see the [Salesforce documentation](https://developer.salesforce.com/docs).
:::

DHTMLX Kanban is compatible with the [Salesforce](https://www.salesforce.com/) platform. The full code example is available on [GitHub](https://github.com/DHTMLX/salesforce-lwc-demo).

:::note
The Kanban widget detects the Salesforce environment and configures the integration logic internally. In most cases, you do not need to call any [Salesforce-specific methods](#salesforce-specific-methods) manually.
:::

## Prepare the environment

To add Kanban to a Salesforce project, mark the *root* container with the `data-wx-root="true"` HTML attribute. The library uses this attribute to locate the main mount node for Kanban and the Toolbar:

~~~html title="kanban.html"
<template>
    <div id="wx-root" data-wx-root="true" class="kanban-wrapper" tabindex="0">
        <div class="sf_toolbar" lwc:dom="manual" data-wx-portal-root="1"></div>
        <div class="sf_kanban" lwc:dom="manual" data-wx-portal-root="1"></div>
    </div>
</template>
~~~

Nested elements marked with the `data-wx-portal-root="1"` attribute serve as containers for the DHTMLX components (Toolbar, Kanban).

## Salesforce environment API

DHTMLX Kanban exposes the `salesForceEnv` helper class with methods for manual control of the Salesforce environment. Import the helper as follows:

~~~jsx {4}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv
} from "@dhx/trial-kanban";
~~~

:::note
Salesforce-specific methods are typically not required. Use them as a fallback when automatic detection fails.
:::

### Salesforce-specific methods

The `salesForceEnv` helper class exposes the following methods:

| Method                                                           | Description                                                                    |
| :--------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| `salesForceEnv.detect()`                                         | Detects whether Kanban is running inside Salesforce                            |
| `salesForceEnv.addGlobalEvent(eventName, handler, htmlElement)`  | Attaches a global event to the first available HTML element                    |
| `salesForceEnv.getTopNode()`                                     | Returns the first available HTML element inside the Salesforce DOM hierarchy   |

The following code snippet imports the helper and runs the detection check:

~~~jsx {4,7}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv
} from "@dhx/trial-kanban";

salesForceEnv.detect();
~~~

### Additional exported function

| Function             | Description                                                                       |
| :------------------- | :-------------------------------------------------------------------------------- |
| `enableSalesForce()` | Manually sets the Salesforce environment when automatic detection is unavailable  |

The following code snippet imports `enableSalesForce()` and forces the Salesforce environment:

~~~jsx {5,8}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv,
    enableSalesForce
} from "@dhx/trial-kanban";

enableSalesForce();
~~~

## Workflow steps

1. Add the `data-wx-root="true"` attribute to your LWC container.
2. Import and initialize Kanban and the Toolbar (Toolbar is optional).
3. Kanban detects the Salesforce context and applies internal configuration automatically.
4. Skip the `enableSalesForce()` call and `salesForceEnv` methods unless the app runs in a non-standard embedding scenario.

### Example

The following code snippet initializes Kanban and the Toolbar inside an LWC component:

~~~jsx title="kanban.js"
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
~~~

DHTMLX Kanban is now integrated into the Salesforce Lightning environment. The widget handles the DOM hierarchy and event binding inside LWC. Continue configuring Kanban through its standard API to customize appearance and behavior. The full example is available on [GitHub](https://github.com/DHTMLX/salesforce-lwc-demo).
