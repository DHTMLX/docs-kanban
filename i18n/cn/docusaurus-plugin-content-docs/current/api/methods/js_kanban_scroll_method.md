---
sidebar_label: scroll()
title: scroll 方法
description: 探索 DHTMLX JavaScript Kanban 库中的 scroll 方法文档。查看开发者指南、API 参考、代码示例、在线演示，并免费下载 DHTMLX Kanban 30 天试用版。
---

# scroll()

### 描述

@short: 将看板视图移动到指定元素

### 用法

~~~jsx {}
scroll({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}): void;
~~~

### 参数

- `id` - （必填）要滚动到的元素 ID
- `to` - （必填）指定要滚动到的元素类型；可选值为 "column"、"row" 或 "card"
- `options` - （可选）包含滚动选项的对象。完整的可用参数列表见 [这里](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

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

**更新日志:** 该方法自版本 1.2 起引入
