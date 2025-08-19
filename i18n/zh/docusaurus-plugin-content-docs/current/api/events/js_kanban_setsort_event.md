---
sidebar_label: set-sort
title: set-sort 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 set-sort 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# set-sort

### 描述

@short: 当卡片被排序时触发。

### 用法

~~~jsx {}
"set-sort": (
    {
        by?: string | ((card: object) => any),
        dir?: "asc" | "desc",
        columnId?: string | number,
        preserve?: boolean
    } | null
) => void;
~~~

### 参数

**set-sort** 事件的回调函数可以接收 *null* 或包含以下属性的对象:

- `by` - （可选）指定用于排序的卡片字段（*字符串* 或 *函数*）
- `dir` - （可选）排序方向，取值为 *"asc"* 或 *"desc"*
- `preserve` - （可选）是否保持当前排序状态
- `columnId` - （可选）标识正在排序的列

:::info
有关内部事件的操作，请参阅 [**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "set-sort" 事件
board.api.on("set-sort", (obj) => {
    console.log(obj);
});
~~~

**更新日志:** 此事件自 v1.2 版本引入
