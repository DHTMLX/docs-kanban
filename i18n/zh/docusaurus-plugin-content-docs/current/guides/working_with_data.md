---
sidebar_label: 数据操作
title: 数据操作
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解如何处理数据。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费评估版。
---

# 数据操作

## 初始数据加载

在初始化 Kanban 时，您可以为 [**columns**](api/config/js_kanban_columns_config.md)、[**cards**](api/config/js_kanban_cards_config.md)、[**rows**](api/config/js_kanban_rows_config.md) 和 [**links**](api/config/js_kanban_links_config.md) 提供初始数据。

~~~jsx {1,17,81,94,106-109}
const columns = [ // 列的数据
    {
        label: "Backlog",
        id: "backlog"
    },
    {
        label: "In progress",
        id: "inprogress"
    },
    {
        label: "Testing",
        id: "testing"
    },
    {...}
];

const cards = [ // 卡片的数据
    {
        id: 1,
        label: "Integration with React",
        priority: 1,
        color: "#65D3B3",
        description: "Some description...",

        start_date: new Date("01/05/2021"),
        end_date: new Date("01/15/2021"),

        progress: 25,
        users: [1,2,3,4],
        sprint: "1.0",
        column: "backlog",
        type: "feature",
        css: "red",
        votes: [4,6,9],
        comments: [
            {
                id: 1,
                userId: 9,
                cardId: 6,
                text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays.",
                date: new Date(),
            },{...}
        ]
    },
    {
        id: 2,
        label: "Archive the cards/boards ",
        priority: 2,
        color: "#FFC975",

        start_date: new Date("01/05/2021"),
        end_date: new Date("01/15/2021"),

        sprint: "1.0",
        column: "backlog",
        type: "feature"
    },
    {
        label: "Searching and filtering",
        priority: 1,
        color: "#65D3B3",

        start_date: new Date("01/05/2021"),

        sprint: "1.2",
        column: "backlog",
        type: "task"
    },
    {
        label: "Set the tasks priorities",
        priority: 2,
        color: "#58C3FE",

        sprint: "1.2",
        column: "inprogress",
        type: "feature"
    },
    {...}
];

const rows = [ // 行的数据
    {
        label: "Feature",
        id: "feature"
    },
    {
        label: "Task",
        id: "task",
        collapsed: true
    },
    {...}
];

const links = [
    {
        id: "link_1",
        source: 1,
        target: 2,
        relation: "relatesTo",
    },
    {...}
];

// 使用列、卡片和行的初始数据初始化 Kanban
new kanban.Kanban("#root", {
    columns, 
    cards, 
    rows,
    links 
});
~~~

## 从本地数据源加载数据

要从本地数据源加载 ***columns***、***rows***、***cards*** 和 ***links*** 的数据，可以使用 [`setConfig()`](api/methods/js_kanban_setconfig_method.md) 或 [`parse()`](api/methods/js_kanban_parse_method.md) 方法。

~~~js {4}
const board = new kanban.Kanban("#root", {});

// 向 Kanban 加载数据
board.setConfig({ columns, cards, rows });

// 或者 board.parse({ columns, cards, rows });
~~~

## 同步 Kanban 数据与 Gantt 和 Scheduler

在下面的代码片段中，您可以看到如何将 Kanban 数据与其他 DHTMLX 组件同步，特别是 [**Gantt**](https://dhtmlx.com/docs/products/dhtmlxGantt/) 和 [**Scheduler**](https://dhtmlx.com/docs/products/dhtmlxScheduler/)：

<iframe src="https://snippet.dhtmlx.com/i7j5668s?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 获取 Kanban 数据

要获取 Kanban 的数据，您可以使用以下方法：

- [`getAreaCards()`](api/methods/js_kanban_getareacards_method.md) - 获取指定列（和行）下的所有卡片数据对象数组
- [`getCard()`](api/methods/js_kanban_getcard_method.md) - 通过指定 ID 获取某个卡片的数据对象
- [`serialize()`](api/methods/js_kanban_serialize_method.md) - 将 Kanban 数据序列化为 JSON

## 获取 Kanban 状态

要获取 Kanban 的状态，您可以使用以下方法：

- [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) - 获取 *StateStore* 的响应式属性对象
- [`api.getState()`](api/internal/js_kanban_getstate_method.md) - 获取 *StateStore* 的当前属性对象
- [`api.getStores()`](api/internal/js_kanban_getstores_method.md) - 获取 *StateStore* 和 *DataStore* 对象

## 导出 Kanban 数据

要导出 Kanban 数据，您可以使用以下方法：

- [`export.json()`](api/internal/js_kanban_json_method.md) - 将 Kanban 的数据导出为 JSON 文件

## 添加新项

要添加新的 *cards*、*columns* 和 *rows*，您可以使用以下方法：

- [`addCard()`](api/methods/js_kanban_addcard_method.md) - 向 Kanban 添加新卡片
- [`addColumn()`](api/methods/js_kanban_addcolumn_method.md) - 向 Kanban 添加新列
- [`addRow()`](api/methods/js_kanban_addrow_method.md) - 向 Kanban 添加新行

## 更新项

要更新 *cards*、*columns* 和 *rows*，您可以使用以下方法：

- [`updateCard()`](api/methods/js_kanban_updatecard_method.md) - 通过指定 ID 更新卡片数据
- [`updateColumn()`](api/methods/js_kanban_updatecolumn_method.md) - 通过指定 ID 更新列数据
- [`updateRow()`](api/methods/js_kanban_updaterow_method.md) - 通过指定 ID 更新行数据

## 删除项

要移除 *cards*、*columns* 和 *rows*，您可以使用以下方法：

- [`deleteCard()`](api/methods/js_kanban_deletecard_method.md) - 通过指定 ID 从 Kanban 移除卡片
- [`deleteColumn()`](api/methods/js_kanban_deletecolumn_method.md) - 通过指定 ID 从 Kanban 移除列
- [`deleteRow()`](api/methods/js_kanban_deleterow_method.md) - 通过指定 ID 从 Kanban 移除行

## 移动项

要移动 *cards*、*columns* 和 *rows*，您可以使用以下方法：

- [`moveCard()`](api/methods/js_kanban_movecard_method.md) - 将卡片移动到目标列和行
- [`moveColumn()`](api/methods/js_kanban_movecolumn_method.md) - 将列移动到目标位置
- [`moveRow()`](api/methods/js_kanban_moverow_method.md) - 将行移动到目标位置

## 示例

在下方代码片段中，您可以看到如何使用 Kanban API 进行数据操作：

<iframe src="https://snippet.dhtmlx.com/61crsls3?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
