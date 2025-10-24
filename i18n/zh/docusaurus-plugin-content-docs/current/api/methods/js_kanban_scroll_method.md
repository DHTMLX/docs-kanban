---
sidebar_label: scroll()
title: scroll 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 scroll 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# scroll()

### 描述

@short: 将看板滚动到指定元素

### 用法

~~~jsx {}
scroll({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}): void;
~~~

### 参数

- `id` - （必需）目标元素的 ID
- `to` - （必需）目标元素的类型。可用值为 "column"、"row" 和 "card"
- `options` - （可选）滚动选项对象。完整的滚动参数列表可见于 [这里](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

### 示例

~~~jsx {7-15}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 将看板滚动到 ID 为 246 的卡片
board.scroll({
    id: 246,
    to: "card",
    options: {
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    }
});
~~~

**更新日志：** 此方法在 v1.2 版本中添加