---
sidebar_label: setEdit()
title: setEdit 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 setEdit 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版本。
---

# setEdit()

### 描述

@short: 切换看板卡片编辑器的开启或关闭状态

### 用法

~~~jsx {}
setEdit({ cardId: string | number } | null): void;
~~~

### 参数

此方法接受 *null* 或包含以下属性的对象:

- `cardId` - （必填）要编辑的卡片 ID

:::note
要关闭编辑器，使用带有 ***null*** 参数的 **setEdit()** 方法
:::

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 打开指定卡片 ID 的编辑器
board.setEdit({ cardId: 1 });
~~~

**更新日志:** 此方法在 v1.2 版本中引入
