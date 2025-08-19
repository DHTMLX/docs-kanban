---
sidebar_label: api.getState()
title: getState 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 getState 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天评估版。
---

# api.getState()

### 描述

@short: 获取包含 Kanban StateStore 属性的对象。

### 用法

~~~jsx {}
api.getState(): object;
~~~

### 返回值

此方法返回一个包含以下属性的对象:

~~~jsx {}
{    
    areasMeta: object, 
    before: string | number, 
    cardHeight: number | null, 
    cards: array,
    cardShape: object,
    cardsMap: object,
    cardsMeta: object,
    columnKey: string,
    columns: array,
    columnShape: object,
    currentUser: number | string | null,
    dragItemId: string | number, 
    dragItemsCoords: array, 
    edit: object,
    history: object,
    layout: string,
    links: array,
    overAreaId: string | number, 
    readonly: object,
    rowKey: string,
    rows: array,
    rowShape: object,
    scroll: object,
    search: object,
    selected: array, 
    sort: object,
    // 已废弃选项
    fromAreaMeta: object, // 在 v.1.2 中删除
    editorShape: array, // 在 v.1.4 中删除
    dropAreaItemsCoords: array, // v1.4 中废弃
    dropAreasCoords: array, // v1.4 中废弃
    overAreaMeta: object, // v1.4 中废弃
}
~~~

### 示例

~~~jsx {7-12}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// 获取当前 Kanban 的状态
const state = board.api.getState();
console.log(state.cards); // 显示卡片数据
console.log(state.columns); // 显示列数据
console.log(state.rows); // 显示行数据
console.log(state.cardShape); // 显示卡片配置
//...
~~~

**更新日志:**  
该方法在 v1.4 版本中进行了更新，以下参数被废弃: 
- ***dropAreaItemsCoords***  
- ***dropAreasCoords***  
- ***overAreaMeta***  
***editorShape*** 参数已被移除
