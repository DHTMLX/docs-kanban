---
sidebar_label: setSort()
title: setSort 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 setSort 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版本。
---

# setSort()

### 描述

@short: 按指定参数对卡片进行排序

### 用法

~~~jsx {}
setSort(
    {
        by?: string | function, // by?: ((card: object) => any),
        dir?: "asc" | "desc",
        columnId?: string | number,
        preserve?: boolean
    } | null
): void;
~~~

### 参数

该方法可以接受一个包含排序参数的对象或 *null* 值。在对象中可以指定以下参数：

- `by` - （可选）用于排序的卡片字段。此参数可以是 *string* 或 *function* 类型。函数需要返回用于排序的卡片字段
- `dir` - （可选）排序顺序。可选值为 *"asc"* 和 *"desc"*
- `columnId` - （可选）需要排序的列的 ID
- `preserve` - （可选）启用或禁用排序状态的保持（默认值为 *false*）

:::info
如果 **preserve** 参数设置为 *false*，排序将只应用一次。这意味着在添加或移动卡片后，排序状态不会被保持（顺序将被更改）。否则，即使添加新卡片或移动卡片，排序状态也将被保持。要重置保持状态，请调用带有 ***null*** 参数的 **setSort()** 方法。
:::

### 示例

~~~jsx {7-12}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 按 "label" 参数以升序排序卡片
board.setSort({ 
    by: (obj) => obj.label, // 或者 by: "label"
    dir: "asc",
    columnId: "backlog",
    preserve: false
});
~~~

**更新日志：** 该方法在 v1.2 版本中新增