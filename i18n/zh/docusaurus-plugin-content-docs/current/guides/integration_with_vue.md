---
sidebar_label: 与 Vue 集成
title: 与 Vue 集成
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解与 Vue 的集成。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费评估版。
---

# 与 Vue 集成

:::tip
本指南假定您已熟悉 [Vue](https://vuejs.org/) 的基本概念和模式。如需了解背景知识，请参阅 [Vue 3 文档](https://vuejs.org/guide/introduction.html#getting-started)。
:::

DHTMLX Kanban 与 Vue 兼容。Vue 3 的完整代码示例可在 [GitHub](https://github.com/DHTMLX/vue-kanban-demo) 上获取。

## 创建项目

:::info
在创建项目之前，请先安装 [Node.js](https://nodejs.org/en/)。
:::

以下命令将创建一个新的 Vue 项目：

~~~json
npm create vue@latest
~~~

该命令会运行 `create-vue`，即官方的 Vue 项目脚手架工具。详细信息请参考 [Vue.js 快速开始](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)。

将项目命名为 *my-vue-kanban-app*。

### 安装依赖

进入应用目录：

~~~json
cd my-vue-kanban-app
~~~

使用以下任一包管理器安装依赖并启动开发服务器：

- 使用 [yarn](https://yarnpkg.com/)：

~~~jsx
yarn
yarn start // 或 yarn dev
~~~

- 使用 [npm](https://www.npmjs.com/)：

~~~json
npm install
npm run dev
~~~

应用将在本地服务器地址上运行（例如 `http://localhost:3000`）。

## 创建 Kanban

停止开发服务器并安装 Kanban 包。

### 步骤 1. 安装包

下载 [试用版 Kanban 包](/how_to_start/#install-kanban-via-npm-or-yarn)，并按照 README 文件中的步骤操作。试用版可使用 30 天。

### 步骤 2. 创建组件

创建一个挂载 Kanban 和 Toolbar 的 Vue 组件。在 *src/components/* 目录下新建 *Kanban.vue* 文件。

#### 导入源文件

打开 *Kanban.vue* 并导入 Kanban 的源文件。导入路径取决于所用包的版本：

- 使用从本地文件夹安装的 PRO 版本：

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

如果包附带压缩后的源文件，请将 CSS 文件导入为 *kanban.min.css*。

- 使用试用版：

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

本教程使用 Kanban 的试用版。

#### 设置容器并初始化 Kanban

要显示带有 Toolbar 的 Kanban，需要创建两个容器并调用相应的构造函数。以下代码片段在 `mounted()` 中绑定 refs 并实例化组件：

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

在项目的主 CSS 文件中为 Kanban 及其容器添加样式：

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

要向 Kanban 填充数据，需要提供数据集。在 *src/* 目录下创建 *data.js* 文件：

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

打开 *App.vue* 并导入数据集。通过内部的 `data()` 方法初始化数据，然后将数据作为 props 传递给新创建的 `<Kanban/>` 组件：

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

打开 *Kanban.vue*，将 props 应用于 Kanban 的配置对象：

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

或者，在创建实例后通过 `mounted()` 中的 [`setConfig()`](/api/methods/js_kanban_setconfig_method/) 或 [`parse()`](/api/methods/js_kanban_parse_method/) 加载数据：

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

Kanban 组件现已就绪。当元素渲染时，Kanban 将使用数据完成初始化。有关支持的配置属性的完整列表，请参阅 [Kanban API 参考](/api/overview/properties_overview/)。

#### 事件处理

用户在 Kanban 中的操作会触发事件。监听事件以响应特定操作。完整列表请参阅 [Kanban 事件参考](/api/overview/events_overview/)。

打开 *Kanban.vue* 并扩展 `mounted()` 方法：

~~~html {8-10} title="Kanban.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.kanban = new Kanban(this.$refs.kanban_container, {});

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

运行应用，在页面上查看加载了数据的 Kanban 看板。

import trial from '@site/static/img/trial_kanban.png';

<img
  src={trial}
  alt="Kanban with Vue"
  className="img_border"
/>

在 [GitHub](https://github.com/DHTMLX/vue-kanban-demo) 上查看完整项目。
