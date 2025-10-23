---
sidebar_label: 与 React 集成
title: 与 React 集成
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解与 React 的集成。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费评估版。
---

# 与 React 集成

:::tip
在阅读本篇文档之前，您应当熟悉 [**React**](https://react.dev) 的基本概念和模式。如需复习相关知识，请参考 [**React 官方文档**](https://react.dev/learn)。
:::

DHTMLX Kanban 支持与 **React** 集成。我们已准备了如何在 **React** 中使用 DHTMLX Kanban 的代码示例。更多信息请参考 [**GitHub 示例**](https://github.com/DHTMLX/react-kanban-demo)。

## 创建项目

:::info
在开始创建新项目之前，请先安装 [**Vite**](https://vite.dev/)（可选）和 [**Node.js**](https://nodejs.org/en/)。
:::

您可以创建一个基础的 **React** 项目，或使用 **React + Vite**。我们将项目命名为 **my-react-kanban-app**：

~~~json
npx create-react-app my-react-kanban-app
~~~

### 安装依赖

进入新创建的应用目录：

~~~json
cd my-react-kanban-app
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

应用会在本地服务器上运行（例如 `http://localhost:3000`）。

## 创建 Kanban

现在您需要获取 DHTMLX Kanban 的源代码。首先，停止应用并安装 Kanban 包。

### 步骤 1. 安装包

下载 [**试用版 Kanban 包**](/how_to_start/#installing-kanban-via-npm-or-yarn)，并按照 README 文件中的步骤操作。请注意，试用版 Kanban 仅可使用 30 天。

### 步骤 2. 创建组件

现在需要创建一个 React 组件，将 Kanban 添加到应用中。在 ***src/*** 目录下新建一个文件，命名为 ***Kanban.jsx***。

#### 导入源文件

打开 ***Kanban.jsx*** 文件并导入 Kanban 源文件。注意：

- 如果您使用 PRO 版本并从本地文件夹安装 Kanban 包，导入路径如下：

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
~~~

请注意，根据所用包的不同，源文件可能是压缩版。此时请确保导入的 CSS 文件为 ***kanban.min.css***。

- 如果您使用 Kanban 试用版，请指定以下路径：

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import "@dhx/trial-kanban/dist/kanban.css";
~~~

本教程将展示如何配置 **试用版** Kanban。

#### 设置容器并添加 Kanban 和 Toolbar

要在页面上显示带有 Toolbar 的 Kanban，需要为 Kanban 和 Toolbar 创建容器，并使用相应的构造函数初始化这些组件：

~~~jsx {2,6-7,10-11,13-17} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css'; // 引入 Kanban 样式

export default function KanbanComponent(props) {
    let toolbar_container = useRef(); // 初始化 Toolbar 容器
    let kanban_container = useRef(); // 初始化 Kanban 容器

    useEffect(() => {
        // 初始化 Kanban 组件
        const kanban = new Kanban(kanban_container.current, {});

        // 初始化 Toolbar 组件
        const toolbar = new Toolbar(toolbar_container.current, {
            api: kanban.api, // 提供 Kanban 内部 API
            // 其他配置项
        });

        return () => {
            kanban.destructor(); // 销毁 Kanban
            toolbar.destructor(); // 销毁 Toolbar
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={kanban_container} className="widget"></div>
            </div>
}
~~~

#### 添加样式

为了正确显示 Kanban，需要在项目的主 css 文件中为 Kanban 及其容器指定必要样式：

~~~css title="index.css"
/* 页面初始样式 */
html,
body,
#root {
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

要向 Kanban 添加数据，需要提供一个数据集。可以在 ***src/*** 目录下新建 ***data.js*** 文件，并添加一些数据：

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
            label: "Archive the cards/boards ",
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

然后打开 ***App.js*** 文件并导入数据。之后可以将数据作为 **props** 传递给新创建的 `<Kanban/>` 组件：

~~~jsx {2,5-6} title="App.js"
import Kanban from "./Kanban";
import { getData } from "./data";

function App() {
    const { columns, cards, rows } = getData();
    return <Kanban columns={columns} cards={cards} rows={rows} />;
}

export default App;
~~~

接着进入 ***Kanban.jsx*** 文件，将传递过来的 **props** 应用到 Kanban 配置对象中：

~~~jsx {5,11-13} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default function KanbanComponent(props) {
    let kanban_container = useRef();
    let toolbar_container = useRef();

    useEffect(() => {
        const kanban = new Kanban(kanban_container.current, {
            columns: props.columns, // 应用列数据
            cards: props.cards, // 应用卡片数据
            rows: props.rows, // 应用行数据
            rowKey: "type",
            // 其他配置项
        });

        const toolbar = new Toolbar(toolbar_container.current, {
            api: kanban.api,
            // 其他配置项
        });

        return () => {
            kanban.destructor();
            toolbar.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={kanban_container} className="widget"></div>
            </div>
}
~~~

您还可以在 React 的 `useEffect()` 方法中使用 [`parse()`](/api/methods/js_kanban_parse_method/) 方法将数据加载到 Kanban 中：

~~~jsx {9-11,27} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default function KanbanComponent(props) {
    let kanban_container = useRef();
    let toolbar_container = useRef();

    let columns = props.columns; // 列数据
    let cards = props.cards; // 卡片数据
    let rows = props.rows; // 行数据

    useEffect(() => {
        const kanban = new Kanban(kanban_container.current, {
            columns: [],
            cards: [],
            rows: [],
            rowKey: "type",
            // 其他配置项
        });

        const toolbar = new Toolbar(toolbar_container.current, {
            api: kanban.api,
            // 其他配置项
        });
    
        kanban.parse({ columns, cards, rows });

        return () => {
            kanban.destructor();
            toolbar.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={kanban_container} className="widget"></div>
            </div>
}
~~~

`parse(data)` 方法可在每次更改时重新加载数据。

现在 Kanban 组件已经准备就绪。当该元素被添加到页面时，会初始化并加载数据。您还可以根据需要提供配置项。请访问我们的 [Kanban API 文档](/api/overview/properties_overview/)，查看全部可用属性列表。

#### 事件处理

当用户在 Kanban 中执行某些操作时，会触发事件。您可以利用这些事件检测操作并执行相应代码。完整事件列表请见 [事件文档](/api/overview/events_overview/)。

打开 ***Kanban.jsx***，按如下方式完善 `useEffect()` 方法：

~~~jsx {5-7} title="Kanban.jsx"
// ...
useEffect(() => {
    const kanban = new Kanban(kanban_container.current, {});

    kanban.api.on("add-card", (obj) => {
        console.log(obj.columnId);
    });
    
    return () => {
        kanban.destructor();
    };
}, []);
// ...
~~~

完成后，即可启动应用，在页面上查看加载了数据的 Kanban。

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban with React"
    className="img_border"
/>

现在您已经了解了如何将 DHTMLX Kanban 集成到 React 中。您可以根据具体需求自定义代码。最终的高级示例可在 [**GitHub**](https://github.com/DHTMLX/react-kanban-demo) 查看。