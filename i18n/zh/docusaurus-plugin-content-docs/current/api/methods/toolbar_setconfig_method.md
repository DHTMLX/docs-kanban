---
sidebar_label: setConfig()
title: setConfig 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 Toolbar 的 setConfig 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# setConfig()

### 描述

@short: 使用新的配置设置更新 Toolbar

### 用法

~~~jsx {}
setConfig(config: object): void;
~~~

### 参数

- `config` - （必填）包含 Toolbar 配置选项的对象。完整属性列表请查看 [这里](/api/overview/main_overview.md#工具栏属性)

:::note
只有对象中提供的参数会被更新。
:::

### 示例

~~~jsx {6-8}
// 创建看板
const board = new kanban.Kanban("#root", {});
// 创建 Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// 使用新参数更新 Toolbar 配置
toolbar.setConfig({
    items: ["search", "spacer", "sort"]
});
~~~
