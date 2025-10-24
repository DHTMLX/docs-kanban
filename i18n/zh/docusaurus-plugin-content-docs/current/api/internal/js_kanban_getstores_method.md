---
sidebar_label: api.getStores()
title: getStores 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 getStores 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# api.getStores()

### 描述

@short: 获取包含看板 DataStore 属性的对象

### 用法

~~~jsx {}
api.getStores(): object;
~~~

### 返回值

该方法返回一个包含 **DataStore** 参数的对象：

~~~jsx {}
{
    data: DataStore // （参数对象）
}
~~~

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 获取看板的 DataStore 对象
const store = board.api.getStores();
console.log(store);
~~~

**更新日志：** 该方法在 v1.2 版本中进行了更新