---
sidebar_label: api.getReactiveState()
title: getReactiveState 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 getReactiveState 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX 看板。
---

# api.getReactiveState()

### 描述

@short: 获取一个包含看板板块响应式属性的对象。

### 用法

~~~jsx {}
api.getReactiveState(): object;
~~~

### 返回值

该方法返回一个包含以下属性的对象:

~~~jsx {}
{
    areasMeta: {
        subscribe: any,
        update: any,
        set: any
    },
    before: {...},
    cardHeight: {...},
    cardShape: {...},
    cards: {...},
    cardsMap: {...},
    cardsMeta: {...},
    columnKey: {...},
    columnShape: {...},
    columns: {...},
    currentUser: {...},
    dragItemId: {...},
    dragItemsCoords: {...},
    edit: {...},
    history: {...},
    layout: {...},
    links: {...},
    overAreaId: {...},
    readonly: {...},
    rowKey: {...},
    rowShape: {...},
    rows: {...},
    scroll: {...},
    search: {...},
    selected: {...},
    sort: {...}
}
~~~  

### 示例

~~~jsx {7-37}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// 访问看板的响应式状态
const state = board.api.getReactiveState();

// 订阅 columns 的变化，并打印更新后的数组
state.columns.subscribe((data) => {
    console.log(data);
});

// 订阅 cards 的变化，并打印更新后的数组
state.cards.subscribe((data) => {
    console.log(data);
});

// 订阅 rows 的变化，并打印更新后的数组
state.rows.subscribe((data) => {
    console.log(data);
});

// 订阅卡片选择变化，并打印所选卡片的 ID
state.selected.subscribe((data) => {
    console.log(data);
});

// 设置新的选择
state.selected.set([1, 2]);

// 通过添加另一个卡片 ID 更新选择
state.selected.update((data) => {
    data.push(3);
    return data;
});
~~~

**更新日志:** 该方法在版本 1.4 中进行了更新
