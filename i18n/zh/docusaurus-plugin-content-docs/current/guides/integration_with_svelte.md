---
sidebar_label: 与 Svelte 集成
title: 与 Svelte 集成
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解与 Svelte 的集成。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费评估版本。
---

# 与 Svelte 集成

:::tip
在阅读本文档之前，您应当熟悉 **Svelte** 的基本概念和模式。如需复习相关知识，请参考 [**Svelte documentation**](https://svelte.dev/docs/svelte/overview)。
:::

DHTMLX Kanban 与 **Svelte** 兼容。我们已准备了如何在 **Svelte** 中使用 DHTMLX Kanban 的代码示例。更多信息请参考 [**Example on GitHub**](https://github.com/DHTMLX/svelte-kanban-demo)。

## 创建项目

:::info
在开始创建新项目之前，请安装 [**Vite**](https://vite.dev/)（可选）和 [**Node.js**](https://nodejs.org/en/)。
:::

创建 **Svelte** 项目有多种方式：

- 您可以使用 [**SvelteKit**](https://kit.svelte.dev/)

或者

- 您也可以使用 **Svelte with Vite**（不使用 SvelteKit）：

~~~json
npm create vite@latest
~~~

详细信息请参考 [相关文档](https://svelte.dev/docs/svelte/overview)。

### 安装依赖

我们将项目命名为 **my-svelte-kanban-app**，并进入应用目录：

~~~json
cd my-svelte-kanban-app
~~~

安装依赖并启动开发服务器。您可以根据使用的包管理器选择命令：

- 如果使用 [**yarn**](https://yarnpkg.com/)，运行以下命令：

~~~json
yarn
yarn start
~~~

- 如果使用 [**npm**](https://www.npmjs.com/)，运行以下命令：

~~~json
npm install
npm run dev
~~~

应用应在本地（例如 `http://localhost:3000`）运行。

## 创建 Kanban

现在您需要获取 DHTMLX Kanban 源码。首先，停止应用并继续安装 Kanban 包。

### 步骤 1. 安装包

下载 [**trial Kanban package**](/how_to_start/#installing-kanban-via-npm-or-yarn)，并按照 README 文件中的步骤操作。请注意，试用版 Kanban 仅可使用 30 天。

### 步骤 2. 创建组件

现在需要创建一个 Svelte 组件，将带有 Toolbar 的 Kanban 添加到应用中。在 ***src/*** 目录下新建一个文件，命名为 ***Kanban.svelte***。

#### 导入源文件

打开 ***Kanban.svelte*** 文件并导入 Kanban 源文件。请注意：

- 如果您使用 PRO 版本并从本地文件夹安装 Kanban 包，导入路径如下：

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

注意根据所用包的不同，源文件可能已被压缩。在这种情况下，请确保导入的 CSS 文件为 **kanban.min.css**。

- 如果您使用 Kanban 的试用版，请指定以下路径：

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
<script>
~~~

本教程展示了如何配置 Kanban 的 **trial** 版本。

#### 设置容器并添加带有 Toolbar 的 Kanban

要在页面上显示带有 Toolbar 的 Kanban，需要为 Kanban 和 Toolbar 创建容器，并使用相应的构造函数初始化这些组件：

~~~html {3,6,10-11,13-17,27-28} title="Kanban.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

let toolbar_container, kanban_container; // 初始化 Kanban 和 Toolbar 的容器
let kanban, toolbar;

onMount(() => {
    // 初始化 Kanban 组件
    kanban = new Kanban(kanban_container, {})

    // 初始化 Toolbar 组件
    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // 提供 Kanban 内部 API
        // 其他配置属性
    })
});

onDestroy(() => {
    kanban.destructor(); // 销毁 Kanban
    toolbar.destructor(); // 销毁 Toolbar
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

#### 加载数据

要向 Kanban 添加数据，需要提供一组数据。您可以在 ***src/*** 目录下创建 ***data.js*** 文件并添加一些数据：

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
            label: "Archive the cards/kanbans ",
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

然后打开 ***App.svelte*** 文件，导入数据，并将其作为 **props** 传递给新创建的 `<Kanban/>` 组件：

~~~html {3,5,8} title="App.svelte"
<script>
import Kanban from "./Kanban.svelte";
import { getData } from "./data.js";

const { cards, columns, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

回到 ***Kanban.svelte*** 文件，将传递进来的 **props** 应用到 Kanban 配置对象中：

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
        // 其他配置属性
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // 提供 Kanban 内部 API
        // 其他配置属性
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

您还可以在 Svelte 的 `onMount()` 方法中使用 [`parse()`](/api/methods/js_kanban_parse_method/) 方法将数据加载到 Kanban 中：

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
        // 其他配置属性
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // 提供 Kanban 内部 API
        // 其他配置属性
    })

    kanban.parse({ columns, cards, rows });
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

`parse(data)` 方法可以在每次变更后重新加载数据。

现在 Kanban 组件已可用。当元素被添加到页面时，它会用数据初始化 Kanban。您还可以根据需要提供相应的配置设置。访问我们的 [Kanban API 文档](/api/overview/properties_overview/) 查看全部可用属性。

#### 事件处理

当用户在 Kanban 上执行某些操作时，会触发事件。您可以利用这些事件检测动作并运行所需的代码。查看 [完整事件列表](/api/overview/events_overview/)。

打开 ***Kanban.svelte***，并按如下方式完善 `onMount()` 方法：

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

要将组件添加到应用中，打开 **App.svelte** 文件，并用以下代码替换默认内容：

~~~html title="App.svelte"
<script>
    import Kanban from "./Kanban.svelte";
    import { getData } from "./data.js";
    
    const { columns, cards } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

之后，您可以启动应用，在页面上查看加载了数据的 Kanban。

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban with Svelte"
    className="img_border"
/>

现在，您已经了解了如何将 DHTMLX Kanban 集成到 Svelte 中。您可以根据具体需求自定义代码。最终的高级示例可参见 [**GitHub**](https://github.com/DHTMLX/svelte-kanban-demo)。