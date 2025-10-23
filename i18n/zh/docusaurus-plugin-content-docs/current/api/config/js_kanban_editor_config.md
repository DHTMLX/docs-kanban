---
sidebar_label: editor
title: editor 配置
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 editor 配置。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX Kanban 的免费 30 天评估版本。
---

# editor

### 描述

@short: 可选。用于配置 Kanban 编辑器的设置对象

### 用法

~~~jsx {}
editor?: {
    show?: boolean,
    autoSave?: boolean,
    debounce?: number,
    placement?: "sidebar" | "modal"
}; 
~~~

### 参数

- `show` - （可选）启用或禁用编辑器
- `autoSave` - （可选）启用或禁用编辑器的自动保存模式
- `debounce` - （可选）自动保存数据的延迟时间（仅适用于 ***autoSave: true*** 参数）
- `placement` - （可选）指定编辑器的显示位置。可设置以下值：
    - `"sidebar"` - 以侧边栏形式显示编辑器
    - `"modal"` - 以模态窗口形式显示编辑器

### 默认配置

~~~jsx {}
editor: {
    show: true,
    debounce: 100,
    autoSave: true,
    placement: "sidebar"
}
~~~

### 示例

~~~jsx {4-8}
new kanban.Kanban("#root", {
    columns,
    cards,
    editor: {
        show: true
        autoSave: true,
        debounce: 2000,
        placement: "modal"
    }
    // 其他参数
});
~~~

**更新日志：** `placement` 参数在 v1.6 版本中添加

**相关示例：** [Kanban. 在模态窗口中打开编辑器](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban)