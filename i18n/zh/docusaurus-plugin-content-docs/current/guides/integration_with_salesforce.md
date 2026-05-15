---
sidebar_label: 与 Salesforce 集成
title: 与 Salesforce 集成
description: 了解如何将 DHTMLX Kanban 集成到 Salesforce。本指南解释了在 Salesforce Lightning 组件中顺利运行所需的 HTML 设置和环境配置。
---

# 与 Salesforce 集成

:::tip
本指南假设您已熟悉 [Salesforce](https://www.salesforce.com/) 的基本概念和模式。如需了解背景知识，请参考 [Salesforce 文档](https://developer.salesforce.com/docs)。
:::

DHTMLX Kanban 兼容 [Salesforce](https://www.salesforce.com/) 平台。完整代码示例可在 [GitHub](https://github.com/DHTMLX/salesforce-lwc-demo) 上查看。

:::note
Kanban 组件会自动检测 Salesforce 环境，并在内部配置集成逻辑。在大多数情况下，您无需手动调用任何 [Salesforce 专用方法](#salesforce-专用方法)。
:::

## 环境准备

如需将 Kanban 添加到 Salesforce 项目中，请在 *根* 容器上添加 `data-wx-root="true"` HTML 属性。库将通过此属性定位 Kanban 和 Toolbar 的主挂载节点：

~~~html title="kanban.html"
<template>
    <div id="wx-root" data-wx-root="true" class="kanban-wrapper" tabindex="0">
        <div class="sf_toolbar" lwc:dom="manual" data-wx-portal-root="1"></div>
        <div class="sf_kanban" lwc:dom="manual" data-wx-portal-root="1"></div>
    </div>
</template>
~~~

带有 `data-wx-portal-root="1"` 属性的嵌套元素作为 DHTMLX 组件（Toolbar、Kanban）的容器。

## Salesforce 环境 API

DHTMLX Kanban 提供 `salesForceEnv` 辅助类，包含用于手动控制 Salesforce 环境的方法。可按如下方式导入该辅助类：

~~~jsx {4}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv
} from "@dhx/trial-kanban";
~~~

:::note
通常情况下，无需使用 Salesforce 专用方法。仅在自动检测失败时将其作为备用方案使用。
:::

### Salesforce 专用方法

`salesForceEnv` 辅助类提供以下方法：

| 方法                                                           | 描述                                                            |
| :------------------------------------------------------------- | :-------------------------------------------------------------- |
| `salesForceEnv.detect()`                                       | 检测 Kanban 是否运行在 Salesforce 内部                          |
| `salesForceEnv.addGlobalEvent(eventName, handler, htmlElement)`| 将全局事件绑定到第一个可用的 HTML 元素                          |
| `salesForceEnv.getTopNode()`                                   | 返回 Salesforce DOM 层级中第一个可用的 HTML 元素                |

以下代码片段导入辅助类并运行检测：

~~~jsx {4,7}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv
} from "@dhx/trial-kanban";

salesForceEnv.detect();
~~~

### 额外导出函数

| 函数                  | 描述                                                         |
| :------------------- | :----------------------------------------------------------- |
| `enableSalesForce()` | 当自动检测不可用时，手动设置 Salesforce 环境                  |

以下代码片段导入 `enableSalesForce()` 并强制启用 Salesforce 环境：

~~~jsx {5,8}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv,
    enableSalesForce
} from "@dhx/trial-kanban";

enableSalesForce();
~~~

## 工作流程步骤

1. 在您的 LWC 容器上添加 `data-wx-root="true"` 属性。
2. 导入并初始化 Kanban 和 Toolbar（Toolbar 为可选）。
3. Kanban 会自动检测 Salesforce 上下文并应用内部配置。
4. 除非您的应用在非标准嵌入场景下运行，否则无需调用 `enableSalesForce()` 函数或使用 `salesForceEnv` 方法。

### 示例

以下代码片段在 LWC 组件中初始化 Kanban 和 Toolbar：

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

DHTMLX Kanban 现已集成到 Salesforce Lightning 环境中。该组件自动处理 LWC 内的 DOM 层级和事件绑定。您可以继续通过标准 API 配置 Kanban，自定义外观和行为。完整示例可在 [GitHub](https://github.com/DHTMLX/salesforce-lwc-demo) 上查看。
