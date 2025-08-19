---
sidebar_label: 与 Svelte 集成
title: 与 Svelte 集成
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解与 Svelte 的集成。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费评估版本。
---

# 与 Svelte 集成

:::tip
在阅读本指南之前，建议您对 **Svelte** 有基本的了解。如需快速回顾，请参考 [**Svelte 文档**](https://svelte.dev/)。
:::

DHTMLX Kanban 可以与 **Svelte** 顺畅集成。我们提供了示例代码，展示如何在 Svelte 项目中使用 DHTMLX Kanban。如需了解更多细节，请参阅 [**GitHub 示例**](https://github.com/DHTMLX/svelte-kanban-demo)。

## 创建项目

:::info
在开始新项目之前，请确保已安装 [**Vite**](https://vite.dev/)（可选）和 [**Node.js**](https://nodejs.org/en/)。
:::

有几种方式可以搭建 **Svelte** 项目:

- 使用 [**SvelteKit**](https://kit.svelte.dev/)

或

- 仅使用 **Svelte 和 Vite**（不使用 SvelteKit）:

~~~json
npm create vite@latest
~~~

详细信息可参见此[相关文档](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit)。

### 安装依赖

假设项目名为 **my-svelte-kanban-app**，切换到该目录下:

~~~json
cd my-svelte-kanban-app
~~~

选择您喜欢的包管理工具安装依赖并启动开发服务器:

- 使用 [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

- 使用 [**npm**](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

应用随后会在本地启动，通常地址为 `http://localhost:3000`。

## 创建 Kanban

接下来，需要准备好 DHTMLX Kanban 的源代码。此时请先停止应用，然后安装 Kanban 包。

### 步骤 1. 安装包

下载 [**试用版 Kanban 包**](/how_to_start/#通过-npm-或-yarn-安装-kanban) 并按照 README 指南操作。请注意:试用版有效期为 30 天。

### 步骤 2. 创建组件

现在可以在应用中新增一个包含 Kanban 及工具栏的 Svelte 组件。在 ***src/*** 目录下新建文件 ***Kanban.svelte***。

#### 导入源文件

打开 ***Kanban.svelte***，导入 Kanban 的相关源文件。请注意:

- 如果使用 PRO 版本并从本地包安装，导入路径类似如下:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

根据包的不同，源文件可能已被压缩。如果是这种情况，请确保导入 **kanban.min.css**。

- 如果使用试用版，导入路径如下:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
<script>
~~~

本指南以 **试用版** 为例进行配置说明。

#### 设置容器并添加 Kanban 与工具栏

要显示 Kanban 和工具栏，需要为这两个组件设置容器，并用构造函数进行初始化:

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
        // 其他配置项
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

要将数据加载到 Kanban，需要准备一个数据集。在 ***src/*** 目录下创建 ***data.js*** 文件，并添加示例数据:

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

现在，打开 ***App.svelte***，导入数据，并将其作为 **props** 传递给新的 `<Kanban/>` 组件:

~~~html {3,5,8} title="App.svelte"
<script>
import Kanban from "./Kanban.svelte";
import { getData } from "./data.js";

const { cards, columns, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

然后，在 ***Kanban.svelte*** 中使用这些 **props** 来配置 Kanban:

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
        // 其他配置项
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // 提供 Kanban 内部 API
        // 其他配置项
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

另外，也可以在 Svelte 的 `onMount()` 生命周期中使用 [`parse()`](/api/methods/js_kanban_parse_method/) 方法为 Kanban 加载数据:

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
        // 其他配置项
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // 提供 Kanban 内部 API
        // 其他配置项
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

使用 `parse(data)` 方法有助于在数据发生变化时重新加载。

此时，Kanban 组件已经准备就绪。只需将其添加到页面即可自动初始化并载入数据。也可根据实际需求添加其他设置。所有可用选项详见 [Kanban API 文档](/api/overview/properties_overview/)。

#### 处理事件

每当 Kanban 有动作发生时，都会触发相应事件。可通过这些事件响应用户操作并执行自定义逻辑。完整事件列表请查阅 [事件总览](/api/overview/events_overview/)。

如下代码示例展示如何在 `onMount()` 中处理事件，请添加到 ***Kanban.svelte***:

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

### 步骤 3. 将 Kanban 添加到应用中

要在应用中显示组件，请打开 **App.svelte** 并更新代码:

~~~html title="App.svelte"
<script>
    import Kanban from "./Kanban.svelte";
    import { getData } from "./data.js";
    
    const { columns, cards } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

现在，启动应用即可看到 Kanban 组件基于所提供数据正常运行。

![Kanban initialization](/assets/trial_kanban.png)

至此，已将 DHTMLX Kanban 集成到 Svelte 应用中。代码可根据实际需求进行调整。如需进阶示例，请参考 [**GitHub**](https://github.com/DHTMLX/svelte-kanban-demo)。
