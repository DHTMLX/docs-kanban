---
sidebar_label: 初始化
title: 初始化
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解初始化相关内容。浏览开发者指南和 API 参考，试用代码示例和在线演示，并免费下载 DHTMLX Kanban 的 30 天评估版。
---

# 初始化

本指南将为您详细介绍如何在页面上创建 Kanban，以便为您的应用程序添加看板功能。请按照以下步骤操作，以获得可用的组件：

1. [在页面中引入 Kanban 源文件](#引入源文件)。
2. [创建 Kanban 的容器](#创建容器)。
3. [使用构造函数初始化 Kanban](#初始化-kanban)。

## 引入源文件

[下载软件包](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml)并将其解压到您的项目文件夹中。

要创建 Kanban，您需要在页面中引入 2 个源文件：

- *kanban.js*
- *kanban.css*

请确保为源文件设置了正确的相对路径：

~~~html title="index.html"
<script type="text/javascript" src="./dist/kanban.js"></script>  
<link rel="stylesheet" href="./dist/kanban.css">
~~~

## 创建容器

为 Kanban 添加一个容器，并为其指定一个 ID，例如 *"root"*：

~~~jsx title="index.html"
<div id="root"></div>
~~~

如果您希望同时创建带有 *Toolbar* 的控件，需要为其单独添加一个容器：

~~~jsx {1} title="index.html"
<div id="toolbar"></div> // Toolbar 的容器
<div id="root"></div> // Kanban 的容器
~~~

## 初始化 Kanban

使用 **kanban.Kanban** 构造函数初始化 Kanban。它接受两个参数：

- 一个 HTML 容器（HTML 容器的 ID）
- 一个包含配置属性的对象。[完整属性列表见此处](#配置属性)

~~~jsx title="index.html"
// 创建 Kanban
new kanban.Kanban("#root", {
    // 配置属性
});
~~~

如果您希望同时创建带有 *Toolbar* 的控件，需要使用 **kanban.Toolbar** 构造函数单独初始化 Toolbar。它同样接受两个参数：

- 一个 HTML 容器（HTML 容器的 ID）
- 一个包含配置属性的对象

~~~jsx {6-8} title="index.html"
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    // 配置属性
});

new kanban.Toolbar("#toolbar", {
    // 配置属性
});
~~~

:::info
如需了解更多关于 Kanban Toolbar 配置的信息，请阅读 [**配置**](guides/configuration.md/#toolbar) 章节
:::

### 配置属性

:::note
配置 **Kanban** 的完整属性列表可在[**此处**](api/overview/properties_overview.md)查看。<br/>
配置 **Kanban Toolbar** 的完整属性列表可在[**此处**](api/overview/toolbar_properties_overview.md)查看。
:::

## 示例

在以下代码片段中，您可以看到如何通过初始数据初始化 **Kanban**：

<iframe src="https://snippet.dhtmlx.com/gb50vyip?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>