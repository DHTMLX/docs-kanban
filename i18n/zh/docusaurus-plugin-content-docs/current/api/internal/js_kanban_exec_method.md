---
sidebar_label: api.exec()
title: exec 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 exec 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX 看板。
---

# api.exec()

### 描述

@short: 此方法允许您在看板内部触发事件。

### 用法

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### 参数

- `event` - （必需）您想要触发的事件名称  
- `config` - （必需）一个包含与触发事件相关参数的对象

### 事件

:::info
您可以在[**此处**](/api/overview/main_overview.md/#kanban-事件)找到看板内部事件的完整列表
:::

### 示例

~~~jsx {7,9-12}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 选择 ID 为 1 的卡片
board.api.exec("select-card", { id: 1 });
// 添加新卡片但不向服务器发送更改
board.api.exec("add-card", { 
    columnId: "backlog",
    skipProvider: true, 
});
~~~

**相关示例:** [Kanban. Preserve sorting](https://snippet.dhtmlx.com/74nyuv14?tag=kanban)
