---
sidebar_label: set-edit
title: set-edit 事件
description: 探索 DHTMLX JavaScript 看板库中的 set-edit 事件文档。查看开发者指南、API 参考，尝试在线演示，并免费下载 DHTMLX 看板的 30 天试用版。
---

# set-edit

### 描述

@short: 当编辑器切换时触发

### 用法

~~~jsx {}
"set-edit": ({ cardId: string | number, eventSource?: "select-card" } | null) => void;
~~~

### 参数

**set-edit** 事件的回调函数接受 *null* 或包含以下属性的对象:

- `cardId` - （必需）正在编辑的卡片 ID
- `eventSource` - （可选）指示触发 ***set-edit*** 事件的 ***"select-card"*** 操作

:::note
值为 ***null*** 表示编辑器正在关闭
:::

:::info
要管理内部事件，可以使用[**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 阻止用户单击卡片时编辑
board.api.intercept("set-edit", (ev) => {
    return ev?.eventSource != "select-card";
});
~~~

**更新日志:**
    - 该事件在 v1.2 版本中引入
    - ***eventSource*** 参数在 v1.6 版本中添加

**相关示例:** [Kanban. 通过双击任务打开编辑器](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban)
