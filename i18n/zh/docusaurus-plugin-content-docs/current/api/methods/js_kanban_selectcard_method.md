---
sidebar_label: selectCard()
title: selectCard 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 selectCard 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版。
---

# selectCard()

### 描述

@short: 通过指定的 ID 选择卡片

### 用法

~~~jsx {}
selectCard({
    id: string | number,
    groupMode?: boolean
}): void;
~~~

### 参数

- `id` - （必需）被选择卡片的 ID
- `groupMode` - （可选）启用/禁用卡片多选（默认值为 **false**）

:::info
如果将 **groupMode** 参数设置为 **true**，则 **selectCard()** 方法不会重置其他元素的选择状态
:::

### 示例

~~~jsx {7-10}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 选择 ID 为 1 的卡片
board.selectCard({
    id: 1,
    groupMode: true
});
~~~