---
sidebar_label: readonly
title: readonly 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 readonly 配置。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# readonly

### 描述

@short: 可选。启用/禁用卡片的编辑、添加、选择和拖拽功能

### 用法

~~~js {}
readonly?: boolean;
//或
readonly?: {
    edit?: boolean,
    add?: boolean,
    select?: boolean,
    dnd?: boolean
};
~~~

### 参数

要配置 **readonly 模式**，您可以使用 **简洁** 或 **扩展** 参数。

**简洁** 参数：
- `readonly` - （可选）启用或禁用 Kanban 的 **只读模式**

**扩展** 参数：
- `readonly` - （可选）一个包含扩展设置的对象。您可以指定以下参数：
    - `edit` - （可选）启用或禁用卡片的 **编辑**
    - `add` - （可选）启用或禁用新卡片的 **添加**
    - `select` - （可选）启用或禁用卡片的 **选择**
    - `dnd` - （可选）启用或禁用卡片的 **拖拽**

### 默认配置

~~~jsx {}
readonly: false // 只读模式禁用
//或
readonly: {
    edit: true, // 编辑启用
    add: true, // 添加启用
    select: true, // 选择启用
    dnd: true // 拖拽启用
}
~~~

### 示例

~~~jsx {4-9}
new kanban.Kanban("#root", {
    cards,
    columns,
    readonly: {
        edit: false, // 禁用编辑
        add: true, // 启用添加
        select: false, // 禁用选择
        dnd: true // 启用拖拽
    },
    // 其他参数
});
~~~

**相关示例：** [Readonly mode](https://snippet.dhtmlx.com/b8x84yln?tag=kanban)