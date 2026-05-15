---
sidebar_label: 自定义
title: 自定义
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解自定义相关内容。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费评估版本。
---

# 自定义

您可以通过以下属性自定义 Kanban 的外观和行为：

- [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) — 使用自定义 HTML 模板渲染卡片
- [`cardShape.menu`](api/config/js_kanban_cardshape_config.md)、[`columnShape.menu`](api/config/js_kanban_columnshape_config.md)、[`rowShape.menu`](api/config/js_kanban_rowshape_config.md) — 修改卡片、列和行的右键菜单
- [`columnShape.headerTemplate`](api/config/js_kanban_columnshape_config.md)、[`columnShape.collapsedTemplate`](api/config/js_kanban_columnshape_config.md) — 替换列标题模板
- [`cardShape.css`](api/config/js_kanban_cardshape_config.md)、[`columnShape.css`](api/config/js_kanban_columnshape_config.md)、[`rowShape.css`](api/config/js_kanban_rowshape_config.md) — 按条件应用 CSS 类
- [`items`](api/config/toolbar_items_config.md) — 重新排列工具栏结构并添加自定义控件
- CSS 变量 — 调整视觉样式（请参阅 [样式化](guides/stylization.md) 部分）

## 自定义卡片 {#custom-cards}

使用 [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) 属性可通过自定义 HTML 模板渲染卡片。该回调函数返回每张卡片的标记内容。

回调函数接收一个包含以下参数的对象：

- `cardFields` — 卡片数据
- `selected` — 卡片是否被选中
- `dragging` — 卡片是否正在被拖动
- `cardShape` — 卡片配置

要在自定义卡片模板中嵌入右键菜单触发器，请将菜单图标包裹在带有 `data-menu-id=${cardFields.id}` 属性的 `<div>` 中（与内置卡片结构相同）。组件通过该属性将菜单绑定到包装元素。

以下演示应用了自定义卡片模板：

<iframe src="https://snippet.dhtmlx.com/8rhdq81d?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 自定义右键菜单

通过 [`cardShape.menu`](api/config/js_kanban_cardshape_config.md)、[`columnShape.menu`](api/config/js_kanban_columnshape_config.md) 和 [`rowShape.menu`](api/config/js_kanban_rowshape_config.md) 属性配置卡片、列和行的右键菜单。每个 `menu.items` 条目可以使用内置操作 ID 调用默认操作，也可以为其他任何行为定义自定义 `onClick` 处理程序。

### `cardShape.menu`

默认情况下，卡片菜单显示**复制**和**删除**选项。可用的内置操作 ID：

- `"duplicate-card"` — 复制卡片
- `"delete-card"` — 删除卡片

### `columnShape.menu`

- `"add-card"` — 向列中添加新卡片
- `"set-edit"` — 重命名列
- `"move-column:left"`、`"move-column:right"` — 向左或向右移动列
- `"delete-column"` — 删除列

### `rowShape.menu`

- `"set-edit"` — 重命名行
- `"move-row:up"`、`"move-row:down"` — 向上或向下移动行
- `"delete-row"` — 删除行

将 `menu.items` 设置为函数，可以为每张卡片、列或行渲染不同的菜单。从函数中返回 `null` 或 `false` 可隐藏特定项目的菜单。

以下演示应用了自定义右键菜单：

<iframe src="https://snippet.dhtmlx.com/8eo65gr5?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 自定义列标题

[`columnShape`](api/config/js_kanban_columnshape_config.md) 属性为列标题提供模板和行为配置：

- [`columnShape.headerTemplate`](api/config/js_kanban_columnshape_config.md) — 展开状态下列标题的 HTML 模板
- [`columnShape.collapsedTemplate`](api/config/js_kanban_columnshape_config.md) — 折叠状态下列标题的 HTML 模板
- [`columnShape.fixedHeaders`](api/config/js_kanban_columnshape_config.md) — 垂直滚动时固定列标题（默认值：`true`）

以下代码片段设置了一个包含折叠图标、带卡片数量的标签以及菜单触发器的自定义标题模板：

~~~jsx {5-21}
new kanban.Kanban("#root", {
    columns,
    cards,
    columnShape: {
        headerTemplate: kanban.template(({ column, columnState }) => {
            return `<div class="wx-collapse-icon" data-action="collapse">
                        <i class="${column.collapsed ? "wxi-angle-right" : "wxi-angle-left"}"></i>
                    </div>
                    ${!column.collapsed
                        ? `<div class="wx-label" data-action="rename">
                                ${column.label} (${columnState.cardsCount})
                            </div>
                            <div class="wx-menu" data-menu-id="${column.id}">
                                <i class="wxi-dots-h"></i>
                            </div>`
                        : ""}`;
        }),
        collapsedTemplate: kanban.template(({ column }) => `<div class="wx-collapsed-label">${column.label}</div>`)
    }
});
~~~

:::tip
要使 `fixedHeaders` 生效，请为 Kanban 容器设置固定高度，使看板可以垂直滚动。
:::

## 条件 CSS 类 {#conditional-css-classes}

要按条件应用 CSS 类，请将函数传递给 [`cardShape`](api/config/js_kanban_cardshape_config.md)、[`columnShape`](api/config/js_kanban_columnshape_config.md) 或 [`rowShape`](api/config/js_kanban_rowshape_config.md) 的 `css` 参数。该函数根据当前数据返回类名：

- [`cardShape.css: (card) => string`](api/config/js_kanban_cardshape_config.md) — 应用于卡片的类
- [`columnShape.css: (column, cards) => string`](api/config/js_kanban_columnshape_config.md) — 应用于列的类
- [`rowShape.css: (row, cards) => string`](api/config/js_kanban_rowshape_config.md) — 应用于行的类

以下代码片段高亮显示逾期卡片和负载不足的列：

~~~jsx {5,8}
new kanban.Kanban("#root", {
    columns,
    cards,
    cardShape: {
        css: (card) => card.end_date < new Date() ? "overdue" : ""
    },
    columnShape: {
        css: (column, cards) => cards.length < 5 ? "low-load" : ""
    }
});
~~~

## 自定义工具栏 {#custom-toolbar}

使用 [`items`](api/config/toolbar_items_config.md) 属性自定义工具栏结构。该数组定义显示哪些控件、控件顺序及其行为。条目可以是：

- 内置控件：`"search"`、`"sort"`、`"undo"`、`"redo"`、`"addColumn"`、`"addRow"`、`"spacer"`
- 使用自定义选项覆盖搜索栏或排序控件的对象
- 作为字符串标识符或函数传递的自定义控件

以下演示自定义了控件顺序、搜索栏、排序控件和自定义控件：

<iframe src="https://snippet.dhtmlx.com/s5r5h4ju?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 自定义样式

通过修改 CSS 变量的值来自定义 Kanban 外观。完整列表请参阅 [样式化](guides/stylization.md) 部分。

以下示例为 Kanban 应用了自定义样式：

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=html&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
