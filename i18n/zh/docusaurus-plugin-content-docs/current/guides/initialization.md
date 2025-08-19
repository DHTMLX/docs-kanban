---
sidebar_label: 初始化
title: 初始化
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解初始化内容。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并免费下载 30 天试用版的 DHTMLX Kanban。
---

# 初始化

以下是如何快速在页面上设置 Kanban 并为您的应用添加所有看板功能。只需按照以下步骤即可让组件运行:

1. [在页面中引入 Kanban 源文件](#引入源文件)。
2. [创建 Kanban 的容器](#创建容器)。
3. [使用构造函数初始化 Kanban](#初始化-kanban)。

## 引入源文件

首先，[下载 Kanban 包](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) 并将其解压到您的项目文件夹中。

要使 Kanban 正常工作，只需将以下两个文件添加到页面中:

- *kanban.js*
- *kanban.css*

请确保这些文件的路径是正确的:

~~~html title="index.html"
<script type="text/javascript" src="./dist/kanban.js"></script>  
<link rel="stylesheet" href="./dist/kanban.css">
~~~

## 创建容器

为 Kanban 添加一个容器元素并为其分配一个 ID，例如 *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

如果您希望 Kanban 看板带有 *Toolbar*，也请为其添加一个单独的容器:

~~~jsx {1} title="index.html"
<div id="toolbar"></div> // Toolbar 的容器
<div id="root"></div> // Kanban 的容器
~~~

## 初始化 Kanban

Kanban 通过 **kanban.Kanban** 构造函数进行初始化。它需要两个参数:

- 一个 HTML 容器（HTML 容器的 ID）
- 一个包含配置信息的对象。[完整属性列表见此处](#配置属性)

~~~jsx title="index.html"
// 创建 Kanban
new kanban.Kanban("#root", {
    // 配置属性
});
~~~

如果您还添加了 *Toolbar*，请使用 **kanban.Toolbar** 构造函数单独初始化。它同样需要两个参数:

- 一个 HTML 容器（HTML 容器的 ID）
- 一个包含配置信息的对象

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
有关设置 Kanban Toolbar 的更多信息，请参见 [**Configuration**](/guides/configuration.md/#工具栏) 部分。
:::

### 配置属性

:::note
完整的 **Kanban** 配置选项列表可在[**此处**](/api/overview/properties_overview.md)查阅。 <br />
Kanban **Toolbar** 的所有属性见[**这里**](/api/overview/toolbar_properties_overview.md)。
:::

## 示例

以下代码片段演示了如何使用一些初始数据来初始化 Kanban:

<iframe src="https://snippet.dhtmlx.com/gb50vyip?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
