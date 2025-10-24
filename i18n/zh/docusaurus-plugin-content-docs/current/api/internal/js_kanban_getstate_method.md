---
sidebar_label: api.getState()
title: getState 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 getState 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天评估版本。
---

# api.getState()

### 描述

@short: 获取包含 Kanban StateStore 属性的对象

### 用法

~~~jsx {}
api.getState(): object;
~~~

### 返回值

该方法返回一个包含以下参数的对象：

~~~jsx {}
{
    cardHeight: number | null,
    cards: array,
    cardShape: object,
    columnKey: string,
    columns: array,
    columnShape: object,
    currentUser: number | string | null,
    links: array,
    readonly: object,
    rowKey: string,
    rows: array,
    rowShape: object,
    editorShape: array,
    history: object,
    search: object,
    selected: array,
    sort: object,

    // 移除的参数
    /*    
        fromAreaMeta: object,
        dropAreaItemsCoords: array,
        dropAreasCoords: array,
        overAreaMeta: object,
        before: string | number,
        dragItemId: string | number,
        dragItemsCoords: array,
        overAreaId: string | number,
    /*

    // 私有参数
    /*
        edit -> _edit: object,
        layout -> layout: string,
        cardsMap -> _cardsMap: object,
        cardsMeta -> _cardsMeta: object,
        areasMeta -> _areasMeta: object,
        scroll -> _scroll: object,
    */
}
~~~

:::warning
这些状态属性是只读的。请勿修改它们，以避免出现意外行为！
:::

### 示例

~~~jsx {7-12}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// 获取 Kanban 的状态
const state = board.api.getState();
console.log(state.cards); // 输出卡片数据
console.log(state.columns); // 输出列数据
console.log(state.rows); // 输出行数据
console.log(state.cardShape); // 输出卡片配置
//...
~~~

**更新日志：** 该方法在 v1.7 版本中进行了更新