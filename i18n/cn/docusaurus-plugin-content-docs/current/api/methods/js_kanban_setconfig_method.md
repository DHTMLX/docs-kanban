---
sidebar_label: setConfig()
title: setConfig 方法
description: 你可以在 DHTMLX JavaScript 看板库的文档中了解 setConfig 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# setConfig()

### 描述

@short: 使用新的配置设置更新看板

### 用法

~~~jsx {}
setConfig(config: object): void;
~~~

### 参数

- `config` - （必填）一个包含看板配置选项的对象。查看完整属性列表请访问[这里](/api/overview/main_overview.md#kanban-属性)

:::tip
此方法允许你调整看板控件的设置并加载数据。请注意，它不会影响历史记录（修改历史记录不被支持）或主题（请使用[`setTheme()`](/api/methods/js_kanban_settheme_method.md)方法来设置主题）。
:::

### 示例

~~~jsx {10-20,22-23}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

// 创建工具栏
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });

// 使用新参数更新看板配置
board.setConfig({
    columnKey: "stage",
    rowKey: "type",
    cardShape,
    editorShape,
    editor: {
       autoSave: false
    },
    /* 其他参数 */
});
                        
// 使用新项目更新工具栏配置
toolbar.setConfig({ items: ["search", "spacer", "sort"] });
~~~
