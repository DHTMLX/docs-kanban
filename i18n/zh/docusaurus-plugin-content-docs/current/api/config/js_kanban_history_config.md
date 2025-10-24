---
sidebar_label: history
title: history 配置
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 history 配置。浏览开发者指南和 API 参考，试用代码示例和在线演示，并免费下载 DHTMLX Kanban 的 30 天评估版本。
---

# history

### 描述

@short: 可选。启用或禁用变更历史的管理

:::info
通过使用 `history` 属性，您可以启用或禁用 Kanban 的历史管理。如果将其设置为 **false**，则无法通过 API 和工具栏控件管理历史。
:::

:::tip
您还可以使用方法和事件中的 [`$meta`](api/common/js_kanban_meta_parameter.md) 参数跳过 Kanban 历史中的某些操作！
:::

### 用法

~~~jsx {}
history?: boolean; 
~~~

### 默认配置

~~~jsx {}
history: true
~~~

### 示例

~~~jsx {4}
new kanban.Kanban("#root", {
    columns,
    cards,
    history: false, // 禁用历史管理
    // 其他参数
});
~~~

**更新日志：** 此属性在 v1.3 版本中新增

**相关文档：** [`undo()`](api/methods/js_kanban_undo_method.md) 和 [`redo()`](api/methods/js_kanban_redo_method.md)