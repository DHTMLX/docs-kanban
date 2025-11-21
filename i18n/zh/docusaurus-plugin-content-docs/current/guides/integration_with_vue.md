---
sidebar_label: 与 Vue 集成
title: 与 Vue 集成
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解与 Vue 的集成。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费评估版。
---

# 与 Vue 集成

:::tip
在阅读本篇文档之前，您应当熟悉 [**Vue**](https://vuejs.org/) 的基本概念和模式。如需复习相关知识，请参阅 [**Vue 3 文档**](https://vuejs.org/guide/introduction.html#getting-started)。
:::

DHTMLX Kanban 与 **Vue** 兼容。我们已准备好如何在 **Vue 3** 中使用 DHTMLX Kanban 的代码示例。更多信息请参考对应的 [**GitHub 示例**](https://github.com/DHTMLX/vue-kanban-demo)。

## 创建项目

:::info
在开始创建新项目之前，请先安装 [**Node.js**](https://nodejs.org/en/)。
:::

要创建一个 **Vue** 项目，请运行以下命令：

~~~json
npm create vue@latest
~~~

该命令会安装并执行 `create-vue`，即官方的 **Vue** 项目脚手架工具。详细信息请参考 [Vue.js 快速开始](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)。

我们将项目命名为 **my-vue-kanban-app**。

### 安装依赖

进入应用目录：

~~~json
cd my-vue-kanban-app
~~~

安装依赖并启动开发服务器。您可以根据使用的包管理器选择以下命令：

- 如果使用 [**yarn**](https://yarnpkg.com/)，请运行：

~~~jsx
yarn
yarn start // 或 yarn dev
~~~

- 如果使用 [**npm**](https://www.npmjs.com/)，请运行：

~~~json
npm install
npm run dev
~~~

应用将会在本地服务器上运行（例如 `http://localhost:3000`）。

## 创建 Kanban

现在您需要获取 DHTMLX Kanban 的源代码。首先停止应用的运行，然后安装 Kanban 包。

### 步骤 1. 安装包

下载 [**试用版 Kanban 包**](/how_to_start/#通过-npm-或-yarn-安装-kanban)，并按照 README 文件中的步骤操作。请注意，试用版 Kanban 仅可使用 30 天。

### 步骤 2. 创建组件

现在需要创建一个 Vue 组件，将 Kanban 和 Toolbar 添加到应用中。在 ***src/components/*** 目录下新建一个文件，命名为 ***Kanban.vue***。

#### 导入源文件

打开 ***Kanban.vue*** 文件并导入 Kanban 的源文件。注意：

- 如果您使用 PRO 版本并从本地文件夹安装 Kanban 包，导入路径如下：

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

请注意，根据所用包的不同，源文件可能已被压缩。在这种情况下，请确保导入的 CSS 文件为 **kanban.min.css**。

- 如果您使用 Kanban 试用版，请指定如下路径：

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

本教程将演示如何配置 **试用版** Kanban。

#### 设置容器并添加 Kanban 和 Toolbar

要在页面上显示带有 Toolbar 的 Kanban，需要为 Kanban 和 Toolbar 创建容器，并使用相应的构造函数初始化这些组件：

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

为正确显示 Kanban，需要在项目的主 css 文件中为 Kanban 及其容器指定重要样式：

~~~css title="main.css"
/* 设置初始页面样式 */
html,
body,
#app { /* 确保使用 #app 作为根容器 */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* 设置 Kanban 和 Toolbar 容器样式 */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* 设置 Kanban 容器样式 */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 加载数据

要向 Kanban 添加数据，需要提供数据集。可以在 ***src/*** 目录下创建 ***data.js*** 文件，并添加一些数据：

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

然后打开 ***App.vue*** 文件，导入数据，并通过内部的 `data()` 方法进行初始化。之后可以将数据作为 **props** 传递给新创建的 `<Kanban/>` 组件：

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

接下来进入 ***Kanban.vue*** 文件，将传递的 **props** 应用于 Kanban 的配置对象：

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

您还可以在 Vue 的 `mounted()` 方法中使用 [`setConfig()`](/api/methods/js_kanban_setconfig_method/) 或 [`parse()`](/api/methods/js_kanban_parse_method/) 方法向 Kanban 加载数据。`setConfig` 或 `parse()` 方法会在每次应用更改时重新加载数据。

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

        this.kanban.setConfig({ 
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

现在 Kanban 组件已经可以使用。当元素被添加到页面时，将会初始化带有数据的 Kanban。您还可以根据需要提供配置项。访问我们的 [Kanban API 文档](/api/overview/properties_overview/) 查看所有可用属性列表。

#### 事件处理

当用户在 Kanban 中执行某些操作时，会触发事件。您可以利用这些事件检测操作并运行相应的代码。查看 [全部事件列表](/api/overview/events_overview/)。

打开 ***Kanban.vue*** 并完善 `mounted()` 方法：

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

之后，您可以启动应用，在页面上看到加载了数据的 Kanban。

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban with Vue"
    className="img_border"
/>

现在您已经了解如何将 DHTMLX Kanban 集成到 Vue 中。您可以根据自己的具体需求自定义代码。最终的高级示例可在 [**GitHub**](https://github.com/DHTMLX/vue-kanban-demo) 上查看。
