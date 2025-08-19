---
sidebar_label: history
title: history 配置
description: 本节介绍 DHTMLX JavaScript 看板库中的 history 配置。您可以查看开发者指南、API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# history

### 描述

@short: 可选。控制是否跟踪变更历史

:::info
`history` 属性允许您开启或关闭看板的历史管理。将其设置为 **false** 表示无法通过 API 或工具栏控件来控制历史。
:::

:::tip
您还可以通过在方法和事件中使用 [`$meta`](/api/common/js_kanban_meta_parameter.md) 参数，将某些操作排除在看板历史之外！
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

**更新日志:** 此属性从版本 1.3 引入

**相关内容:** [`undo()`](/api/methods/js_kanban_undo_method.md) 和 [`redo()`](/api/methods/js_kanban_redo_method.md)
