---
sidebar_label: editor
title: editor 配置
description: 探索 DHTMLX JavaScript 看板库中 editor 配置。查看开发者指南、API 参考，尝试代码示例和实时演示，并免费下载 DHTMLX 看板 30 天试用版。
---

# editor

### 描述

@short: 可选项。包含用于自定义看板编辑器的设置

### 用法

~~~jsx {}
editor?: {
    autoSave?: boolean,
    debounce?: number,
    placement?: "sidebar" | "modal"
}; 
~~~

### 参数

- `autoSave` - （可选）开启或关闭自动保存功能
- `debounce` - （可选）设置自动保存数据前的延迟时间（仅当 ***autoSave: true*** 时生效）
- `placement` - （可选）定义编辑器的显示位置。可选值如下:
    - `"sidebar"` - 以侧边栏形式显示编辑器
    - `"modal"` - 以模态窗口形式显示编辑器

### 默认配置

~~~jsx {}
editor: {
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
        autoSave: true,
        debounce: 2000,
        placement: "modal"
    }
    // 其他参数
});
~~~

**更新日志:** `placement` 选项自 v1.6 版本引入

**相关示例:** [Kanban. 在模态窗口中打开编辑器](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban)
