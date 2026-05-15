---
sidebar_label: 数据操作
title: 数据操作
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解如何处理数据。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费评估版。
---

# 数据操作

本指南介绍 Kanban 中的数据操作：加载初始数据、读取和导出数据、操作卡片、列、行和链接，以及管理评论和选择。

## 加载初始数据

在初始化 Kanban 时，通过 [`columns`](api/config/js_kanban_columns_config.md)、[`cards`](api/config/js_kanban_cards_config.md)、[`rows`](api/config/js_kanban_rows_config.md) 和 [`links`](api/config/js_kanban_links_config.md) 属性传入初始数据。

以下代码片段将列、卡片、行和链接数据传入 Kanban 构造函数：

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

// 使用初始数据初始化 Kanban
new kanban.Kanban("#root", {
    columns, 
    cards, 
    rows,
    links 
});
~~~

## 从本地数据源加载数据 {#load-data-from-a-local-source}

在初始化后，使用 [`setConfig()`](api/methods/js_kanban_setconfig_method.md) 或 [`parse()`](api/methods/js_kanban_parse_method.md) 加载列、行、卡片和链接数据：

~~~js {4}
const board = new kanban.Kanban("#root", {});

// 向 Kanban 加载数据
board.setConfig({ columns, cards, rows });

// 或者 board.parse({ columns, cards, rows });
~~~

## 与 Gantt 和 Scheduler 同步数据

有关多组件集成，请参阅[与 DHTMLX 组件集成](guides/integration.md#gantt-and-scheduler)。

## 获取数据

- [`getAreaCards()`](api/methods/js_kanban_getareacards_method.md) — 获取指定列（及可选行）中所有卡片的数据对象
- [`getColumnCards()`](api/methods/js_kanban_getcolumncards_method.md) — 获取指定列中所有卡片的数据对象
- [`getCard()`](api/methods/js_kanban_getcard_method.md) — 通过 ID 获取某个卡片的数据对象
- [`serialize()`](api/methods/js_kanban_serialize_method.md) — 以 JSON 对象形式返回 Kanban 数据

## 获取状态

- [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) — 获取 *DataStore* 的响应式属性
- [`api.getState()`](api/internal/js_kanban_getstate_method.md) — 获取 *DataStore* 的当前属性
- [`api.getStores()`](api/internal/js_kanban_getstores_method.md) — 返回 `{ data: DataStore }`

## 导出数据

- [`export.json()`](api/internal/js_kanban_json_method.md) — 将 Kanban 数据下载为 JSON 文件

## 添加新项

- [`addCard()`](api/methods/js_kanban_addcard_method.md) — 添加新卡片
- [`addColumn()`](api/methods/js_kanban_addcolumn_method.md) — 添加新列
- [`addRow()`](api/methods/js_kanban_addrow_method.md) — 添加新行
- [`duplicateCard()`](api/methods/js_kanban_duplicatecard_method.md) — 通过 ID 复制卡片

## 更新项

- [`updateCard()`](api/methods/js_kanban_updatecard_method.md) — 通过 ID 更新卡片
- [`updateColumn()`](api/methods/js_kanban_updatecolumn_method.md) — 通过 ID 更新列
- [`updateRow()`](api/methods/js_kanban_updaterow_method.md) — 通过 ID 更新行

## 删除项

- [`deleteCard()`](api/methods/js_kanban_deletecard_method.md) — 通过 ID 移除卡片
- [`deleteColumn()`](api/methods/js_kanban_deletecolumn_method.md) — 通过 ID 移除列
- [`deleteRow()`](api/methods/js_kanban_deleterow_method.md) — 通过 ID 移除行

## 移动项

- [`moveCard()`](api/methods/js_kanban_movecard_method.md) — 将卡片移动到目标列和行
- [`moveColumn()`](api/methods/js_kanban_movecolumn_method.md) — 将列移动到新位置
- [`moveRow()`](api/methods/js_kanban_moverow_method.md) — 将行移动到新位置

## 管理评论

- [`addComment()`](api/methods/js_kanban_addcomment_method.md) — 通过 ID 向卡片添加评论
- [`updateComment()`](api/methods/js_kanban_updatecomment_method.md) — 通过 ID 更新评论
- [`deleteComment()`](api/methods/js_kanban_deletecomment_method.md) — 通过 ID 删除评论

## 管理链接

- [`addLink()`](api/methods/js_kanban_addlink_method.md) — 在卡片之间添加新链接
- [`deleteLink()`](api/methods/js_kanban_deletelink_method.md) — 通过 ID 删除链接

## 管理卡片选择

- [`getSelection()`](api/methods/js_kanban_getselection_method.md) — 获取当前选中卡片的 ID
- [`selectCard()`](api/methods/js_kanban_selectcard_method.md) — 通过 ID 选中卡片
- [`unselectCard()`](api/methods/js_kanban_unselectcard_method.md) — 通过 ID 取消选中卡片

## 示例

以下代码片段使用 Kanban API 在运行时操作数据：

<iframe src="https://snippet.dhtmlx.com/61crsls3?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
