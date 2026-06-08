---
sidebar_label: export.json()
title: json 方法 API
description: 阅读 DHTMLX Kanban 的 json 方法 API。了解如何导出看板数据以及使用 JSON 任务结构。
---

# export.json()

### 描述

@short: 将看板数据导出为 JSON 文件

### 用法

~~~jsx {}
export.json(): void;
~~~

:::info
该方法将看板的数据导出为具有以下结构的 JSON 文件：
~~~jsx {}
{
    "cards": [],
    "columns": [],
    "rows": []
}
~~~
:::

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 导出看板数据为 JSON
board.export.json(); // => { "cards": [...], "columns": [...], "rows": [] }
~~~

**更新日志：** 该方法在 v1.3 版本中添加