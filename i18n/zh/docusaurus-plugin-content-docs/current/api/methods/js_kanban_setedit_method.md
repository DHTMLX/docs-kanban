---
sidebar_label: setEdit()
title: setEdit 方法 API
description: 阅读 DHTMLX Kanban 的 setEdit 方法 API。了解如何切换卡片编辑器。
---

# setEdit()

### 描述

@short: 切换看板的编辑器

### 用法

~~~jsx {}
setEdit({ cardId: string | number } | null): void;
~~~

### 参数

该方法可以接受 *null* 值或包含以下参数的对象：

- `cardId` - （必需）要编辑的卡片的 ID

:::note
要关闭编辑器，请调用 **setEdit()** 方法并传入 ***null*** 值
:::

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 通过卡片 ID 打开该卡片的编辑器
board.setEdit({ cardId: 1 });
~~~

**更新日志：** 该方法在 v1.2 版本中添加