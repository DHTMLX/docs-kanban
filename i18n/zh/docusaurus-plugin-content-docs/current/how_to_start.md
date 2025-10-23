---
sidebar_label: 如何开始
title: 如何开始
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解如何开始使用 DHTMLX Kanban。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费评估版。
---

# 如何开始

本教程将为您详细介绍在页面上实现完整功能的 Kanban 所需的各个步骤。

import editor from '@site/static/img/js_kanban_editor.png';

<img
    src={editor}
    alt="JS Kanban Main"
    className="img_border"
/>

## 第一步：引入源文件

首先创建一个 HTML 文件，命名为 *index.html*。然后在该文件中引入 Kanban 的源文件。

需要包含两个必要的文件：

- Kanban 的 JS 文件
- Kanban 的 CSS 文件

~~~html {5-6} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with Kanban</title>
        <script src="./dist/kanban.js"></script>   
        <link href="./dist/kanban.css" rel="stylesheet">
    </head>
    <body>
        <script>
        // your code will be here
        </script>
    </body>
</html>
~~~

### 通过 npm 或 yarn 安装 Kanban

您可以通过 `yarn` 或 `npm` 包管理器将 JavaScript Kanban 导入到您的项目中。

#### 通过 npm 或 yarn 安装试用版 Kanban

:::info
如果您想使用 Kanban 的试用版，请下载 [**trial Kanban package**](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml)，并按照 *README* 文件中提到的步骤操作。请注意，试用版 Kanban 仅可使用 30 天。
:::

#### 通过 npm 或 yarn 安装 PRO 版 Kanban

:::info
您可以在 [Client's Area](https://dhtmlx.com/clients/) 直接访问 DHTMLX 私有 **npm**，通过生成您的 **npm** 登录名和密码。详细的安装指南也可在该页面获取。请注意，只有在您的专有 Kanban 许可证有效期间，才能访问私有 **npm**。
:::

## 第二步：创建 Kanban

现在您可以将 Kanban 添加到页面中了。首先，需要为 Kanban 及其工具栏创建 DIV 容器。请按照以下步骤操作：

- 在 *index.html* 文件中指定两个 DIV 容器
- 使用 **kanban.Kanban** 和 **kanban.Toolbar** 构造函数初始化 Kanban 及其工具栏

:::info
工具栏是 Kanban 界面的可选部分。如果只需创建不带工具栏的 Kanban，可以只指定一个 DIV 容器，并通过 **kanban.Kanban** 构造函数初始化该组件。
:::

构造函数的参数为 Kanban 和工具栏所在的 HTML 容器的 ID 以及相应的配置对象。

~~~html {9-10,13-15,17-19} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with Kanban</title>
        <script src="./dist/kanban.js"></script>   
        <link href="./dist/kanban.css" rel="stylesheet">  
    </head>
    <body>
        <div id="toolbar"></div>
        <div id="root"></div>

        <script>
            const board = new kanban.Kanban("#root", {
                // configuration properties
            });

            new kanban.Toolbar("#toolbar", {
                // configuration properties
            });
        </script>
    </body>
</html>
~~~

## 第三步：配置 Kanban

接下来，您可以在初始化时为 Kanban 组件指定所需的配置属性。

要开始使用 Kanban，首先需要为 **cards** 和 **columns**（以及 *rows*）提供初始数据。
除了初始数据，您还可以配置 [cards](guides/configuration.md#卡片)、[editor](guides/configuration.md#编辑器) 和 [toolbar](guides/configuration.md#工具栏) 的外观。

~~~jsx {2-7,11-18}
const board = new kanban.Kanban("#root", {
    cards,
    columns,
    rows,
    rowKey: "row",
    cardShape,
    editorShape
});

new kanban.Toolbar("#toolbar", {
    api: board.api,
    items: [
        "search",
        "spacer",
        "sort",
        "addColumn",
        "addRow"
    ]
});
~~~

## 下一步

就这么简单。只需三个简单的步骤，您就拥有了一个可视化和管理工作流程的便捷工具。现在，您可以开始管理任务，或继续深入探索 JavaScript Kanban 的更多功能。