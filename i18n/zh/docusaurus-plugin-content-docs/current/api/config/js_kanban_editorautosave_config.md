---
sidebar_label: editorAutoSave
title: editorAutoSave 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 editorAutoSave 配置。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# 

<h1 style = {{color: "red"}}><s>editorAutoSave</s></h1>

:::danger
从版本 1.3 开始，`editorAutoSave` 属性已被**弃用**。要管理“自动保存”模式，请使用 [`editor`](api/config/js_kanban_editor_config.md) 属性！
:::

### 描述

@short: 可选。启用/禁用自动保存模式

:::info
通过此参数，您可以启用或禁用看板的自动保存模式。如果将 **editorAutoSave** 属性设置为 **false**，编辑器将显示“保存”按钮以保存编辑的数据。
:::

### 用法

~~~jsx {}
editorAutoSave?: boolean; // （默认值为 true）
~~~

### 默认配置

~~~jsx {}
editorAutoSave: true
~~~

### 示例

~~~jsx {4}
new kanban.Kanban("#root", {
    columns,
    cards,
    editorAutoSave: false, // 禁用自动保存
    // 其他参数
});
~~~