---
sidebar_label: api.getStores()
title: getStores 方法 API
description: 阅读 DHTMLX Kanban 的 getStores 方法 API。了解如何获取包含看板 DataStore 属性的对象。
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