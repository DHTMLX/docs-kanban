---
sidebar_label: readonly
title: 只读配置
description: 探索 DHTMLX JavaScript 看板库中的只读配置。查看开发者指南、API 参考，尝试代码示例和实时演示，并获取 DHTMLX 看板的免费 30 天试用。
---

# readonly

### 描述

@short: 可选。控制是否启用或禁用卡片的编辑、新增、选择和拖拽功能。

### 用法

~~~js {}
readonly?: boolean;
// 或者
readonly?: {
    edit?: boolean,
    add?: boolean,
    select?: boolean,
    dnd?: boolean
};
~~~

### 参数

设置 **只读模式** 有两种方式:使用 **简写** 或 **扩展** 格式。

**简写** 格式:
- `readonly` - （可选）开启或关闭看板的 **只读模式**。

**扩展** 格式:
- `readonly` - （可选）包含详细设置的对象。支持以下属性:
    - `edit` - （可选）开启或关闭 **卡片编辑**。
    - `add` - （可选）开启或关闭 **新增卡片**。
    - `select` - （可选）开启或关闭 **卡片选择**。
    - `dnd` - （可选）开启或关闭 **卡片拖拽**。

### 默认配置

~~~jsx {}
readonly: false // 默认关闭只读模式
// 或者
readonly: {
    edit: true, // 启用编辑
    add: true, // 启用新增
    select: true, // 启用选择
    dnd: true // 启用拖拽
}
~~~

### 示例

~~~jsx {4-9}
new kanban.Kanban("#root", {
    cards,
    columns,
    readonly: {
        edit: false, // 禁用编辑
        add: true, // 启用新增
        select: false, // 禁用选择
        dnd: true // 启用拖拽
    },
    // 其他参数
});
~~~

**相关示例:** [Readonly mode](https://snippet.dhtmlx.com/b8x84yln?tag=kanban)
