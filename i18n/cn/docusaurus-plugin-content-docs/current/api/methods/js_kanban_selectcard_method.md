---
sidebar_label: selectCard()
title: selectCard 方法
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 selectCard 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Kanban 免费的 30 天评估版本。
---

# selectCard()

### 描述

@short: 根据给定的 ID 高亮显示卡片。

### 用法

~~~jsx {}
selectCard({
    id: string | number,
    groupMode?: boolean
}): void;
~~~

### 参数

- `id` - （必填）要选择的卡片的 ID 
- `groupMode` - （可选）切换是否允许一次选择多张卡片（默认为 **false**）

:::info
当 **groupMode** 设置为 **true** 时，**selectCard()** 方法会保持当前选择不变，同时将新卡片添加到选择中。
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
