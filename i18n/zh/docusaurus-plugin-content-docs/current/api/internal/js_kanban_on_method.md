---
sidebar_label: api.on()
title: on 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 on 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# api.on()

### 描述

@short: 允许附加处理程序到内部事件

### 用法

~~~jsx {}
api.on(
    event: string,
    handler: function
    config?: { intercept?: boolean, tag?: number | string | symbol }
): void;
~~~

### 参数

- `event` - （必填）要触发的事件
- `handler` - （必填）要附加的处理程序（处理程序的参数将根据触发的事件而定）
- `config` - （可选）一个包含以下参数的对象：
    - `intercept` - （可选）如果在事件监听器创建时设置了 `intercept: true`，则该事件监听器将在所有其他监听器之前运行
    - `tag` - （可选）动作标签。您可以使用标签名称通过 [`detach`](api/internal/js_kanban_detach_method.md) 方法移除动作处理程序

### 事件

:::info
完整的看板内部事件列表可在[**这里**](api/overview/main_overview.md/#kanban-events)查看
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 当卡片移动时在控制台输出卡片数据
board.api.on("move-card", ({ id, columnId }) => {
    console.log({ id, columnId });
}, {tag: "move"});
~~~

**更新日志**：`config.tag` 和 `config.intercept` 参数在 v1.7 版本中添加