---
sidebar_label: 如何开始
title: 如何开始
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解如何开始使用 DHTMLX Kanban。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费试用版。
---

# 如何开始

以下是一份简明教程，带您逐步在网页上搭建一个完整可用的看板（Kanban）界面。

![JS Kanban Main](/assets/js_kanban_editor.png)

## 第一步:引入源文件

首先，新建一个 HTML 文件并命名为 *index.html*。接下来，将 Kanban 的源文件添加到该文件中。

您需要引入两个文件:

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
        // 你的代码将在这里编写
        </script>
    </body>
</html>
~~~

### 通过 npm 或 yarn 安装 Kanban

您也可以通过 `yarn` 或 `npm` 将 Kanban 集成到您的项目中。

#### 通过 npm 或 yarn 安装试用版 Kanban

:::info
试用版请下载 [**trial Kanban package**](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) 并按照 *README* 文件中的说明操作。试用期为 30 天。
:::

#### 通过 npm 或 yarn 安装 PRO 版 Kanban

:::info
访问 DHTMLX 私有 **npm** 的权限在 [Client's Area](https://dhtmlx.com/clients/) 提供，您可以在此生成用于 **npm** 的登录名和密码。安装步骤也在该页面有详细说明。请注意，只有在您的专有 Kanban 许可有效期内，才能访问私有 **npm**。
:::

## 第二步:创建 Kanban

引入文件后，接下来可以将 Kanban 添加到页面上。首先为看板和工具栏分别添加 DIV 容器:

- 在 *index.html* 文件中添加两个 DIV 容器
- 使用 **kanban.Kanban** 和 **kanban.Toolbar** 构造函数初始化 Kanban 和工具栏

:::info
工具栏在 Kanban 界面中是可选的。如果您只需要看板本身，只需使用一个 DIV 并调用 **kanban.Kanban** 构造函数即可。
:::

这些构造函数需要传入 Kanban 和工具栏所在 HTML 容器的 ID，以及它们的配置对象。

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
                // 配置属性
            });

            new kanban.Toolbar("#toolbar", {
                // 配置属性
            });
        </script>
    </body>
</html>
~~~

## 第三步:配置 Kanban

现在，您可以设置 Kanban 的配置属性，定义其初始外观和行为。

为了让看板运行起来，需要添加 **cards** 和 **columns** 的初始数据（如有需要，也可以加 *rows*）。
除了数据之外，还可以调整 [卡片](/guides/configuration#卡片)、[编辑器](/guides/configuration#编辑器) 和 [工具栏](/guides/configuration#工具栏) 的显示效果。

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

## 后续操作

就这样--只需三步，您就拥有了一个简单的可视化和工作流程管理工具。现在可以开始处理任务，也可以深入探索 JavaScript Kanban 的更多功能。
