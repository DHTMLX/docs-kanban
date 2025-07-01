---
sidebar_label: 与 Vue 集成
title: 与 Vue 集成
description: 你可以在 DHTMLX JavaScript Kanban 库的文档中了解与 Vue 的集成。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Kanban 的30天免费评估版。
---

# 与 Vue 集成

:::tip
在开始之前，建议你熟悉 [**Vue**](https://vuejs.org/) 的基本概念和模式。如果需要回顾，可以查看 [**Vue 3 文档**](https://vuejs.org/guide/introduction.html#getting-started)。
:::

DHTMLX Kanban 与 **Vue** 配合良好。我们提供了一些代码示例，演示如何在 **Vue 3** 中使用 DHTMLX Kanban。更多细节请参阅 [**GitHub 示例**](https://github.com/DHTMLX/vue-kanban-demo)。

## 创建项目

:::info
请确保已安装 [**Node.js**](https://nodejs.org/en/)，再开始新项目。
:::

要创建一个 **Vue** 项目，请运行以下命令:

~~~json
npm create vue@latest
~~~

此命令会安装并启动 `create-vue`，这是官方的 **Vue** 项目脚手架工具。更多信息可参见 [Vue.js 快速开始](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)。

你可以将项目命名为 **my-vue-kanban-app**。

### 安装依赖

进入你的应用文件夹:

~~~json
cd my-vue-kanban-app
~~~

接下来，安装依赖并启动开发服务器。你可以选择使用不同的包管理器:

- 如果使用 [**yarn**](https://yarnpkg.com/)，请运行:

~~~jsx
yarn
yarn start // 或 yarn dev
~~~

- 如果使用 [**npm**](https://www.npmjs.com/)，请运行:

~~~json
npm install
npm run dev
~~~

应用现在应该已经在本地运行（例如在 `http://localhost:3000`）。

## 创建 Kanban

要开始使用 DHTMLX Kanban，首先需要获取源码。暂停应用并安装 Kanban 包。

### 步骤 1. 安装包

下载 [**试用版 Kanban 包**](/how_to_start/#通过-npm-或-yarn-安装-kanban)，并按照 README 文件的指引进行操作。试用版有效期为 30 天。

### 步骤 2. 创建组件

接下来，在你的应用中通过 Vue 组件添加带有 Toolbar 的 Kanban。请在 ***src/components/*** 下创建新文件 ***Kanban.vue***。

#### 导入源文件

打开 ***Kanban.vue*** 并导入 Kanban 相关文件。方法如下:

- 如果是 PRO 版本，并且你从本地文件夹安装 Kanban，导入路径如下:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

如果你的包中带有压缩文件，请确保导入 **kanban.min.css**。

- 如果是试用版，请使用以下路径:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

本指南演示如何设置 **试用版** Kanban。

#### 设置容器并添加带 Toolbar 的 Kanban

要展示 Kanban 和 Toolbar，先设置容器，并通过构造函数初始化这些组件:

~~~html {2,7-8,10-14} title="Kanban.vue"
<script>
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default {
    mounted() {
        // 初始化 Kanban 组件
        this.kanban = new Kanban(this.$refs.kanban_container, {});

        // 初始化 Toolbar 组件
        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, // 提供 Kanban 内部 API
            // 其他配置项
        });
    },

    unmounted() {
        this.kanban.destructor(); // 销毁 Kanban
        this.toolbar.destructor(); // 销毁 Toolbar
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="toolbar_container"></div>
        <div ref="kanban_container" class="widget"></div>
    </div>
</template>
~~~

#### 添加样式

为确保 Kanban 正确显示，请在主 css 文件中为 Kanban 及其容器添加必要样式:

~~~css title="main.css"
/* 页面初始样式 */
html,
body,
#app { /* 确保使用 #app 根容器 */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* Kanban 和 Toolbar 容器样式 */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* Kanban 容器样式 */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 加载数据

要为 Kanban 填充数据，请在 ***src/*** 下创建 ***data.js*** 文件并添加一些示例数据:

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

然后，打开 ***App.vue***，导入你的数据，并通过内部的 `data()` 方法进行设置。之后，将数据作为 **props** 传递给 `<Kanban/>` 组件:

~~~html {3,8,10-12,19} title="App.vue"
<script>
import Kanban from "./components/Kanban.vue";
import { getData } from "./data";

export default {
    components: { Kanban },
    data() {
        const { columns, cards, rows } = getData();
        return { 
            columns, 
            cards,
            rows
        };
    }
};
</script>

<template>
    <Kanban :columns="columns" :cards="cards" :rows="rows"/>
</template>
~~~

现在在 ***Kanban.vue*** 中，将这些 **props** 应用于 Kanban 的配置对象:

~~~html {6,10-12} title="Kanban.vue"
<script>
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default {
    props: ["cards", "columns", "rows"],

    mounted() {
        this.kanban = new Kanban(this.$refs.kanban_container, {
            cards: this.cards,
            columns: this.columns,
            rows: this.rows,
            rowKey: "type",
            // 其他配置项
        });

        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, 
            // 其他配置项
        });
    },

    unmounted() {
        this.kanban.destructor(); 
        this.toolbar.destructor(); 
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="toolbar_container"></div>
        <div ref="kanban_container" class="widget"></div>
    </div>
</template>
~~~

你也可以在 Vue 的 `mounted()` 中使用 [`parse()`](/api/methods/js_kanban_parse_method/) 方法加载数据到 Kanban:

~~~html {6,22-26} title="Kanban.vue"
<script>
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default {
    props: ["cards", "columns", "rows"],

    mounted() {
        this.kanban = new Kanban(this.$refs.kanban_container, {
            columns: [],
            cards: [],
            rows: [],
            rowKey: "type",
            // 其他配置项
        });

        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, 
            // 其他配置项
        });

        this.kanban.parse({ 
            cards: this.cards,
            columns: this.columns,
            rows: this.rows
        });
    },

    unmounted() {
        this.kanban.destructor(); 
        this.toolbar.destructor(); 
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="toolbar_container"></div>
        <div ref="kanban_container" class="widget"></div>
    </div>
</template>
~~~

`parse(data)` 方法会在每次数据变更时重新加载数据。

此时，Kanban 组件已经准备就绪。只要将该组件添加到页面，它就会用你的数据进行初始化。你还可以根据需要添加更多配置。查看所有可用属性，请参考 [Kanban API 文档](/api/overview/properties_overview/)。

#### 事件处理

每当 Kanban 上有操作发生时，都会触发一个事件。你可以利用这些事件来响应用户行为。完整事件列表请见 [事件文档](/api/overview/events_overview/)。

打开 ***Kanban.vue***，如下更新 `mounted()` 方法:

~~~html {8-10} title="Kanban.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.kanban = new Kanban(this.$refs.cont, {});

        this.kanban.api.on("add-card", (obj) => {
            console.log(obj.columnId);
        });
    },

    unmounted() {
        this.kanban.destructor();
    }
}
</script>

// ...
~~~

现在你可以启动应用，查看带数据的 Kanban 看板。

![Kanban initialization](/assets/trial_kanban.png)

这就是 DHTMLX Kanban 与 Vue 集成的全部步骤。你可以根据需要调整和扩展代码。更多高级示例见 [**GitHub**](https://github.com/DHTMLX/vue-kanban-demo)。
