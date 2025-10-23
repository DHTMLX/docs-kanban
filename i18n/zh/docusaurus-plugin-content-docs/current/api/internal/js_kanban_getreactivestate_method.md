---
sidebar_label: api.getReactiveState()
title: getReactiveState 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 getReactiveState 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX 看板的 30 天试用版。
---

# api.getReactiveState()

### 描述

@short: 获取包含看板响应式属性的对象

### 用法

~~~jsx {}
api.getReactiveState(): object;
~~~

### 返回值

该方法返回一个包含以下参数的对象：

~~~jsx {}
{
    cardHeight: {...},
    cardShape: {...},
    cards: {...},
    columnKey: {...},
    columnShape: {...},
    columns: {...},
    currentUser: {...},
    history: {...},
    links: {...},
    readonly: {...},
    rowKey: {...},
    rowShape: {...},
    editorShape: {...},
    rows: {...},
    search: {...},
    selected: {...},
    sort: {...},

    // 移除的参数
    /*  
        fromAreaMeta: {...},
        dropAreaItemsCoords: {...},
        dropAreasCoords: {...},
        overAreaMeta: {...},  
        before: {...},
        dragItemId: {...},
        dragItemsCoords: {...},
        overAreaId: {...},
    /*

    // 私有参数
    /*
        edit -> _edit: {...},
        layout -> layout: {...},
        cardsMap -> _cardsMap: {...},
        cardsMeta -> _cardsMeta: {...},
        areasMeta -> _areasMeta: {...},
        scroll -> _scroll: {...},
    */
}
~~~  

:::warning
这些状态属性是只读的。请勿修改它们，以避免出现意外行为！
:::

### 示例

~~~jsx {7-37}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// 获取看板的响应式状态
const state = board.api.getReactiveState();

// 订阅 columns 变化并输出 columns 数组
state.columns.subscribe((data) => {
    console.log(data);
});

// 订阅 cards 变化并输出 cards 数组
state.cards.subscribe((data) => {
    console.log(data);
});

// 订阅 rows 变化并输出 rows 数组
state.rows.subscribe((data) => {
    console.log(data);
});

// 订阅卡片选择变化并输出选中卡片的 ID
state.selected.subscribe((data) => {
    console.log(data);
});
~~~

**更新日志：** 此方法在 v1.7 版本中进行了更新