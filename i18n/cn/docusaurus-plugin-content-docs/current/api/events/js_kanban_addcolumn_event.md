---
sidebar_label: add-column
title: add-column 事件
description: 探索 DHTMLX JavaScript 看板库中的 add-column 事件文档。查看开发者指南、API 参考，尝试演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# add-column

### 描述

@short: 当添加新列时触发

### 用法

~~~jsx {}
"add-column": ({
    id?: string | number,
    column?: object,
    before?: string | number,
    skipProvider?: boolean,
}) => void;
~~~

### 参数

**add-column** 事件的回调函数接收一个包含以下可选属性的对象:

- `id` - 分配给新列的 ID
- `column` - 表示新列的数据对象。完整的 **column** 参数列表请参见[**这里**](/api/config/js_kanban_columns_config.md)
- `before` - 新列将插入到其前面的列的 ID
- `skipProvider` - 控制是否阻止向服务器发送请求

:::info
要处理内部事件，可以使用[**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "add-column" 事件
board.api.on("add-column", (obj) => {
    console.log(obj.label);
});
~~~

**更新日志**:**id**、**before** 和 **column** 参数在 v1.1 版本引入
