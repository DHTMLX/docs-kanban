---
sidebar_label: 与 React 集成
title: 与 React 集成
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解与 React 的集成。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费评估版本。
---

# 与 React 集成

:::tip
在深入阅读本篇文档之前，建议您先了解 [**React**](https://react.dev) 的基础知识。如果您想复习 React，可以访问 [**React 官方文档**](https://reactjs.org/docs/getting-started.html)。
:::

DHTMLX Kanban 与 **React** 配合良好。文档中提供了在 React 项目中使用 DHTMLX Kanban 的代码示例。详细内容请参考 [**GitHub 示例**](https://github.com/DHTMLX/react-kanban-demo)。

## 创建项目

:::info
在开始新项目之前，请确保已安装 [**Vite**](https://vite.dev/)（可选）和 [**Node.js**](https://nodejs.org/en/)。
:::

您可以从标准的 **React** 项目开始，或使用 **React 和 Vite** 进行搭建。本指南以 **my-react-kanban-app** 为例:

~~~json
npx create-react-app my-react-kanban-app
~~~

### 安装依赖

切换到应用程序目录:

~~~json
cd my-react-kanban-app
~~~

添加依赖并运行开发服务器。您可以选择喜欢的包管理器:

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

应用通常会在本地 `http://localhost:3000` 可访问。

## 创建 Kanban

接下来，获取 DHTMLX Kanban 源码。首先停止应用并安装 Kanban 包。

### 第一步:安装包

下载 [**试用版 Kanban 包**](/how_to_start/#通过-npm-或-yarn-安装-kanban)，并按照其 README 文件中的说明进行操作。请注意，试用版可用 30 天。

### 第二步:创建组件

新建一个 React 组件，将 Kanban 看板添加到您的应用中。在 ***src/*** 目录下新建文件 ***Kanban.jsx***。

#### 导入源文件

打开 ***Kanban.jsx*** 并导入 Kanban 源文件。注意以下事项:

- 本地安装的 PRO 版本，导入方式如下:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
~~~

根据包的不同，CSS 文件可能已被压缩，此时请使用 ***kanban.min.css***。

- 试用版请使用以下导入路径:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import "@dhx/trial-kanban/dist/kanban.css";
~~~

本指南以 **试用版** 为例进行说明。

#### 设置容器并添加 Kanban 和 Toolbar

要在页面上显示带 Toolbar 的 Kanban，请为二者设置容器并用各自的构造函数初始化:

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

为保证 Kanban 正确显示，请在主 CSS 文件中添加以下关键样式:

~~~css title="index.css"
/* 初始化页面样式 */
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

要在 Kanban 中显示数据，需要准备一个数据集。在 ***src/*** 下新建 ***data.js*** 文件，并添加如下内容:

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

现在，在 ***App.js*** 中导入数据，并通过 **props** 传递给 `<Kanban/>` 组件:

~~~jsx {2,5-6} title="App.js"
import Kanban from "./Kanban";
import { getData } from "./data";

function App() {
    const { columns, cards, rows } = getData();
    return <Kanban columns={columns} cards={cards} rows={rows} />;
}

export default App;
~~~

在 ***Kanban.jsx*** 中，使用 props 配置 Kanban:

~~~jsx {5,11-13} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default function KanbanComponent(props) {
    let kanban_container = useRef();
    let toolbar_container = useRef();

    useEffect(() => {
        const kanban = new Kanban(kanban_container.current, {
            columns: props.columns, // 设置列数据
            cards: props.cards, // 设置卡片数据
            rows: props.rows, // 设置行数据
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

如果希望在 `useEffect()` 内部使用 [`parse()`](/api/methods/js_kanban_parse_method/) 方法加载数据，方式如下:

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

通过使用 `parse(data)` 方法，可以在数据变化时重新加载 Kanban。

至此，Kanban 组件已搭建完成。渲染后将根据您的数据进行初始化，您可按需添加更多配置。更多设置请查看 [Kanban API 文档](/api/overview/properties_overview/)。

#### 事件处理

用户在 Kanban 上的操作会触发不同的事件。通过这些事件，您可以响应用户行为并执行自定义代码。完整事件列表见文档:[事件总览](/api/overview/events_overview/)。

以下是在 ***Kanban.jsx*** 中设置简单事件处理的示例:

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

现在只需运行应用，即可看到已加载数据的 Kanban 看板。

![Kanban initialization](/assets/trial_kanban.png)

通过以上步骤，DHTMLX Kanban 已成功集成进 React。您可根据实际需求调整代码。如需进阶示例，请访问 [**GitHub**](https://github.com/DHTMLX/react-kanban-demo)。
