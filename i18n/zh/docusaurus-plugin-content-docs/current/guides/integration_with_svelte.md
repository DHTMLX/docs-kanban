---
sidebar_label: 与 Svelte 集成
title: 与 Svelte 集成
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解与 Svelte 的集成。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费评估版本。
---

# 与 Svelte 集成

:::tip
本指南假设您已熟悉 Svelte 的概念和模式。如需了解相关背景，请参阅 [Svelte documentation](https://svelte.dev/docs/svelte/overview)。
:::

DHTMLX Kanban 与 Svelte 兼容。完整的代码示例可在 [GitHub](https://github.com/DHTMLX/svelte-kanban-demo) 上找到。

## 创建项目

:::info
在创建项目之前，请先安装 [Vite](https://vite.dev/)（可选）和 [Node.js](https://nodejs.org/en/)。
:::

通过以下两种方式之一创建 Svelte 项目：

- 使用 [SvelteKit](https://kit.svelte.dev/) — 推荐
- 使用 Svelte 和 Vite（不使用 SvelteKit）— 运行：

~~~json
npm create vite@latest
~~~

详细信息请参阅 [Svelte documentation](https://svelte.dev/docs/svelte/overview)。

### 安装依赖

将项目命名为 *my-svelte-kanban-app*，并进入应用目录：

~~~json
cd my-svelte-kanban-app
~~~

使用以下任一包管理器安装依赖并启动开发服务器：

- 使用 [yarn](https://yarnpkg.com/)：

~~~json
yarn
yarn start
~~~

- 使用 [npm](https://www.npmjs.com/)：

~~~json
npm install
npm run dev
~~~

应用将在本地地址运行（例如 `http://localhost:3000`）。

## 创建 Kanban

停止开发服务器并安装 Kanban 包。

### 步骤 1. 安装包

下载 [**trial Kanban package**](/how_to_start/#install-kanban-via-npm-or-yarn)，并按照 README 文件中的步骤操作。试用版可使用 30 天。

### 步骤 2. 创建组件

创建一个用于挂载 Kanban 和 Toolbar 的 Svelte 组件。在 *src/* 目录下新建 *Kanban.svelte* 文件。

#### 导入源文件

打开 *Kanban.svelte* 并导入 Kanban 源文件。导入路径取决于所用的包版本：

- 使用从本地文件夹安装的 PRO 版本时：

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

如果包附带压缩后的源文件，请将 CSS 文件导入为 *kanban.min.css*。

- 使用试用版时：

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

本教程使用 Kanban 的试用版。

#### 设置容器并初始化 Kanban

要显示带有 Toolbar 的 Kanban，需创建两个容器并调用相应的构造函数。以下代码片段在 `onMount()` 中绑定容器并实例化组件：

~~~html {3,6,10-11,13-17,27-28} title="Kanban.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

let toolbar_container, kanban_container; // initialize containers for Kanban and Toolbar
let kanban, toolbar;

onMount(() => {
    // initialize the Kanban component
    kanban = new Kanban(kanban_container, {})

    // initialize the Toolbar component
    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // provide Kanban inner API
        // other configuration properties
    })
});

onDestroy(() => {
    kanban.destructor(); // destroy Kanban
    toolbar.destructor(); // destroy Toolbar
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

#### 加载数据

要向 Kanban 填充数据，需提供一组数据集。在 *src/* 目录下创建 *data.js* 文件：

~~~jsx {2,14,37,48} title="data.js"
export function getData() {
    const columns = [
        {
            label: "Backlog",
            id: "backlog"
        },
        {
            label: "In progress",
            id: "inprogress"
        },
        // ...
    ];

    const cards = [
        {
            id: 1,
            label: "Integration with Angular/React",
            priority: 1,
            color: "#65D3B3",
            start_date: new Date("01/07/2021"),
            users: [3, 2],
            column: "backlog",
            type: "feature",
        },
        {
            label: "Archive the cards/boards",
            priority: 3,
            color: "#58C3FE",
            users: [4],
            progress: 1,
            column: "backlog",
            type: "feature",
        },
        // ...
    ];

    const rows = [
        {
            label: "Feature",
            id: "feature",
        },
        {
            label: "Task",
            id: "task",
        }
    ];

    return { columns, cards, rows };
}
~~~

打开 *App.svelte*，导入数据集，并将数据作为 props 传递给新的 `<Kanban/>` 组件：

~~~html {3,5,8} title="App.svelte"
<script>
import Kanban from "./Kanban.svelte";
import { getData } from "./data.js";

const { cards, columns, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

打开 *Kanban.svelte*，将传入的 props 应用到 Kanban 配置对象中：

~~~html {6-8,15-17} title="Kanban.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Kanban, Toolbar, defaultEditorShape } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export let columns;
export let cards;
export let rows;

let toolbar_container, kanban_container;
let kanban, toolbar;

onMount(() => {
    kanban = new Kanban(kanban_container, {
        columns, 
        cards,
        rows,
        rowKey: "type",
        // other configuration properties
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // provide Kanban inner API
        // other configuration properties
    })
});

onDestroy(() => {
    kanban.destructor(); 
    toolbar.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

或者，在创建实例后，在 `onMount()` 中使用 [`setConfig()`](/api/methods/js_kanban_setconfig_method/) 或 [`parse()`](/api/methods/js_kanban_parse_method/) 加载数据：

~~~html {6-8,27} title="Kanban.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Kanban, Toolbar} from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export let columns;
export let cards;
export let rows;

let toolbar_container, kanban_container; 
let kanban, toolbar;

onMount(() => {
    kanban = new Kanban(kanban_container, {
        columns: [],
        cards: [],
        rows: [],
        rowKey: "type",
        // other configuration properties
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // provide Kanban inner API
        // other configuration properties
    })

    kanban.setConfig({ columns, cards, rows });
    // or kanban.parse({ columns, cards, rows });
});

onDestroy(() => {
    kanban.destructor(); 
    toolbar.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

Kanban 组件现已就绪。当元素渲染时，Kanban 会使用数据进行初始化。完整的支持配置属性列表请参阅 [Kanban API 参考](/api/overview/properties_overview/)。

#### 事件处理

用户在 Kanban 中的操作会触发事件。通过监听事件来响应特定操作。完整列表请参阅 [Kanban 事件参考](/api/overview/events_overview/)。

打开 *Kanban.svelte*，扩展 `onMount()` 回调：

~~~html {8-10} title="Kanban.svelte"
<script>
// ...
let kanban;

onMount(() => {
    kanban = new Kanban(kanban_container, {})

    kanban.api.on("add-card", (obj) => {
        console.log(obj.columnId);
    });
});

onDestroy(() => {
    kanban.destructor();
});
</script>

// ...
~~~

### 步骤 3. 将 Kanban 添加到应用

要注册组件，打开 *App.svelte* 并替换默认代码：

~~~html title="App.svelte"
<script>
    import Kanban from "./Kanban.svelte";
    import { getData } from "./data.js";
    
    const { columns, cards, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

运行应用，在页面上查看已填充数据的 Kanban 看板。

import trial from '@site/static/img/trial_kanban.png';

<img
  src={trial}
  alt="Kanban with Svelte"
  className="img_border"
/>

完整项目请参见 [GitHub](https://github.com/DHTMLX/svelte-kanban-demo)。
