---
sidebar_label: set-edit
title: set-edit 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 set-edit 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# set-edit

### 描述

@short: 在切换编辑器时触发

### 用法

~~~jsx {}
"set-edit": ({ cardId: string | number, eventSource?: "select-card" } | null) => void;
~~~

### 参数

**set-edit** 事件的回调函数可以接受 *null* 值，或者包含以下参数的对象：

- `cardId` - （必需）要编辑的卡片 ID
- `eventSource` - （可选）触发 ***set-edit*** 事件的 ***"select-card"*** 操作

:::note
当关闭编辑器时，使用 ***null*** 值
:::

:::info
处理内部事件时，您可以使用[**事件总线方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 当用户单击卡片时，阻止编辑
board.api.intercept("set-edit", (ev) => {
    return ev?.eventSource != "select-card";
});
~~~

**更新日志：**
    - 该事件在 v1.2 版本中添加
    - ***eventSource*** 参数在 v1.6 版本中添加

**相关示例：** [Kanban. 通过双击任务打开编辑器](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban)