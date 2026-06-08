---
sidebar_label: history
title: history 配置 API
description: 阅读 DHTMLX Kanban 的 history 配置 API。了解如何启用或禁用更改的撤销/重做历史记录。
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