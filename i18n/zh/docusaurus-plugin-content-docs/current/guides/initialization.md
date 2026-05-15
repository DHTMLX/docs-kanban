---
sidebar_label: 初始化
title: 初始化
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解初始化相关内容。浏览开发者指南和 API 参考，试用代码示例和在线演示，并免费下载 DHTMLX Kanban 的 30 天评估版。
---

# 初始化

通过以下三个步骤在页面上创建 Kanban 控件：

1. [引入源文件](#include-source-files)。
2. [创建容器](#create-a-container)。
3. [初始化 Kanban](#initialize-kanban)。

## Include source files

[下载软件包](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml)并将其内容解压到您的项目文件夹中。

在页面中引入以下源文件：

- *kanban.js*
- *kanban.css*

为两个文件设置正确的相对路径：

~~~html title="index.html"
<script type="text/javascript" src="./dist/kanban.js"></script>  
<link rel="stylesheet" href="./dist/kanban.css">
~~~

## Create a container

为 Kanban 添加一个容器，并为其分配一个 ID，例如 `root`：

~~~jsx title="index.html"
<div id="root"></div>
~~~

如果需要同时创建带有 Toolbar 的控件，请为 Toolbar 单独添加一个容器：

~~~jsx {1} title="index.html"
<div id="toolbar"></div> // Toolbar 的容器
<div id="root"></div> // Kanban 的容器
~~~

## Initialize Kanban

使用 `kanban.Kanban` 构造函数初始化 Kanban。构造函数接受两个参数：

- HTML 容器的 CSS 选择器（或容器元素本身）
- 配置对象（参见[完整属性列表](#configuration-properties)）

以下代码片段创建一个 Kanban 实例：

~~~jsx title="index.html"
// create Kanban
new kanban.Kanban("#root", {
    // configuration properties
});
~~~

如需同时创建带有 Toolbar 的控件，请使用 `kanban.Toolbar` 构造函数单独初始化 Toolbar。Toolbar 控件通过 [`api`](api/config/toolbar_api_config.md) 参数操作 Kanban 实例。传入 `board.api` 以将 Toolbar 绑定到看板：

~~~jsx {7} title="index.html"
// create Kanban
const board = new kanban.Kanban("#root", {
    // configuration properties
});

new kanban.Toolbar("#toolbar", {
    api: board.api, // required: links Toolbar controls to the Kanban instance
    // other configuration properties
});
~~~

:::info
有关 Toolbar 配置的详细信息，请阅读[配置](guides/configuration.md#toolbar)章节。
:::

### Configuration properties

完整配置参考：

- [Kanban 属性概览](api/overview/properties_overview.md) — 所有 Kanban 配置属性
- [Toolbar 属性概览](api/overview/toolbar_properties_overview.md) — 所有 Toolbar 配置属性

## 示例

以下代码片段使用示例数据初始化 Kanban：

<iframe src="https://snippet.dhtmlx.com/gb50vyip?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
