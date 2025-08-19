---
sidebar_label: add-row
title: add-row 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 add-row 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版。
---

# add-row

### 描述

@short: 当添加新行时触发

### 用法

~~~jsx {}
"add-row": ({
    id?: string | number,
    row?: object,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**add-row** 事件的回调函数接受一个包含以下可选属性的对象:

- `id` - 新行的标识符
- `row` - 表示新行的数据对象。完整的 **row** 参数列表请参见[**这里**](/api/config/js_kanban_rows_config.md)
- `before` - 新行将插入的目标行 ID（即在该行之前插入）
- `skipProvider` - 控制是否阻止或允许向服务器发送请求

:::info
若需管理内部事件，请考虑使用[**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "add-row" 事件 
board.api.on("add-row", (obj) => {
    console.log(obj.id);
});
~~~

**更新日志**:**id**、**before** 和 **row** 参数自 v1.1 版本引入
