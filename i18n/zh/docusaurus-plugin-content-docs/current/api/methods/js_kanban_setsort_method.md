---
sidebar_label: setSort()
title: setSort 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 setSort 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版。
---

# setSort()

### 描述

@short: 根据指定条件对卡片进行排序

### 用法

~~~jsx {}
setSort(
    {
        by?: string, // by?: ((card: object) => any),
        dir?: "asc" | "desc",
        columnId?: string | number,
        preserve?: boolean
    } | null
): void;
~~~

### 参数

该方法接受一个包含排序选项的对象或 *null*。在该对象内，可以定义以下属性:

- `by` - （可选）用于排序的卡片字段。可以是一个 *字符串*，也可以是一个返回排序值的 *函数*
- `dir` - （可选）排序方向，可以是 *"asc"* 或 *"desc"*
- `columnId` - （可选）应用排序的列的 ID
- `preserve` - （可选）控制是否保持排序状态（默认值为 *false*）

:::info
当 **preserve** 设置为 *false* 时，排序仅应用一次。也就是说，在添加或移动卡片后，排序顺序不会被保持。如果启用 **preserve**，即使添加或重新排列卡片，排序顺序也会保持一致。要清除保持的排序，请使用带有 ***null*** 参数的 **setSort()**。
:::

### 示例

~~~jsx {7-12}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 按 "label" 属性对卡片进行升序排序
board.setSort({ 
    by: (obj) => obj.label, // 或者 by: "label"
    dir: "asc",
    columnId: "backlog",
    preserve: false
});
~~~

**更新日志:** 该方法自 v1.2 版本起支持
