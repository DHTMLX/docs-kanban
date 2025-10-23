---
sidebar_label: api.exec()
title: exec 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 exec 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并免费下载 DHTMLX 看板的30天评估版本。
---

# api.exec()

### 描述

@short: 允许触发内部事件

### 用法

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### 参数

- `event` - （必需）要触发的事件
- `config` - （必需）包含参数的配置对象（具体参数请参见要触发的事件）

### 事件

:::info
完整的看板内部事件列表可在[**这里**](api/overview/main_overview.md/#kanban-events)查看
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
// 添加新卡片，但不向服务器发送更改
board.api.exec("add-card", { 
    columnId: "backlog",
    skipProvider: true, 
});
~~~

**相关示例：** [Kanban. 保持排序](https://snippet.dhtmlx.com/74nyuv14?tag=kanban)