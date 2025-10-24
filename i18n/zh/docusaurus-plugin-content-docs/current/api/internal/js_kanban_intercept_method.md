---
sidebar_label: api.intercept()
title: intercept 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 intercept 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# api.intercept()

### 描述

@short: 允许拦截并阻止内部事件的触发

### 用法

~~~jsx {}
api.intercept(
    event: string,
    callback: function,
    config?: { intercept?: boolean, tag?: number | string | symbol }
): void;
~~~

### 参数

- `event` - （必需）要触发的事件
- `callback` - （必需）要执行的回调函数（回调参数取决于触发的事件）
- `config` - （可选）一个对象，包含以下参数：
    - `intercept` - （可选）如果在事件监听器创建时设置了 `intercept: true`，该事件监听器将在所有其他监听器之前执行
    - `tag` - （可选）动作标签。您可以使用标签名称通过 [`detach`](api/internal/js_kanban_detach_method.md) 方法移除动作处理器

### 事件

:::info
完整的看板内部事件列表请见[**这里**](api/overview/main_overview.md/#kanban-events)
:::

### 示例

~~~jsx {7-11}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 禁止将卡片移动到 ID 为 "done" 的列
board.api.intercept("move-card", ({ id, columnId }) => {
    if(columnId !== "done" ){
        return false;
    }
}, {tag: "move"});
~~~

**更新日志**：**config.tag** 和 **config.intercept** 参数于 v1.7 版本中新增