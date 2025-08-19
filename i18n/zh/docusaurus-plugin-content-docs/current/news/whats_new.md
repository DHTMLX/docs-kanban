---
sidebar_label: 最新动态
title: 最新动态
description: 您可以了解 DHTMLX Kanban 的最新特性和更新，查看其版本历史，浏览开发者指南和 API 详情，试用代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费试用版。
---

# 最新动态

如果您正在从旧版本升级 Kanban，建议查阅 [迁移到新版本](/news/migration.md) 以获取更多信息。

## 版本 1.6.5

发布日期：2025 年 7 月 14 日

### 修复

- `disabled: true` 配置对菜单项无效
- 当向未定义结构的 Kanban 添加行时，行头未显示

## 版本 1.6.4

发布日期：2025 年 6 月 12 日

### 修复

- 添加到已删除然后恢复的列/行中的卡片会丢失
- 上传列表按钮缺少本地化标签
- 商业版本包中缺少自述文件

## 版本 1.6.3

发布日期:2025 年 4 月 8 日

### 修复

- 列限制有时会错误地应用到整个列
- 移动卡片并关闭弹窗编辑器后会弹出错误
- 删除确认提示会显示在弹窗编辑器后面
- 工具栏的"更多"图标在窗口慢速缩放时出现和消失
- `delete-card` 事件总是关闭编辑器
- 如果优先级设置为未在选项中的 ID，编辑器无法打开

## 版本 1.6.2

发布日期:2025 年 2 月 14 日

### 修复

- 试用版的过期时间错误
- 拖放操作在触屏设备上出现警告
- 在只读配置中设置 `add: false` 不会从列菜单中移除 **Add** 选项
- 卡片 ID 为字符串数字时，编辑器无法加载
- 包中的示例链接已过期
- 当列滚动和延迟渲染一起使用时，拖放出现问题
- `setConfig()` 方法未能更新列头的固定状态

## 版本 1.6.1

发布日期:2024 年 11 月 29 日

### 修复

- 工具栏的"更多"图标在窄屏下对齐错误
- `RestDataProvider` 未使用通过 `setHeaders()` 设置的 header
- `RestDataProvider.getIDResolver` 不是函数报错

## 版本 1.6

发布日期:2024 年 11 月 13 日

[博客发布评测](https://dhtmlx.com/blog/dhtmlx-kanban-1-6/)

### 新功能

- 现在可以通过 [`cardShape.users.maxCount`](/api/config/js_kanban_cardshape_config) 设置卡片上显示多少指派用户（参见[**示例**](https://snippet.dhtmlx.com/w205dvzg?tag=kanban)）
- 使用 [`columnShape`](/api/config/js_kanban_columnshape_config) 更改列头内容（参见[**示例**](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban)）
- 通过工具栏搜索控件的 [`items.searchResult`](/api/config/toolbar_items_config) 自定义搜索结果视图（参见[**示例**](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban)）
- 可通过 [`editor.placement`](/api/config/js_kanban_editor_config) 将编辑器以弹窗方式打开（参见[**示例**](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban)）
- 卡片现在支持通过可点击图标投票，使用 [`cardShape.votes.clickable`](/api/config/js_kanban_cardshape_config)（参见[**示例**](https://snippet.dhtmlx.com/en76xvi4?tag=kanban)）
- 可通过 [`setTheme()`](/api/methods/js_kanban_settheme_method) 应用主题

### 更新

- #### 属性

    - [`cardShape`](/api/config/js_kanban_cardshape_config) 现在包含 ***users.maxCount*** 和 ***votes.clickable***
    - [`columnShape`](/api/config/js_kanban_columnshape_config) 现在有 ***headerTemplate*** 和 ***collapsedTemplate***
    - [`editor`](/api/config/js_kanban_editor_config) 现在包含 ***placement*** 选项
    - 工具栏的 [`items`](/api/config/toolbar_items_config) 属性中 **search** 现在有 ***searchResult***

- #### 事件

    - [`set-edit`](/api/events/js_kanban_setedit_event) 现在提供 ***eventSource*** 参数（参见[**示例**](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban)）

- #### 方法

    - [`setConfig()`](/api/methods/js_kanban_setconfig_method) 行为变更:
        - 不会更改历史记录（无法通过该方法更改历史记录）
        - 主题不会随此方法更改（请使用 [`setTheme()`](/api/methods/js_kanban_settheme_method)）
        - Kanban 数据存储不会被销毁，因此不需要重新创建事件监听器或重新挂载工具栏

    - [`setLocale()`](/api/methods/js_kanban_setlocale_method) 同样不会销毁数据存储，事件监听和工具栏会保持
    - 工具栏 [`setLocale()`](/api/methods/toolbar_setlocale_method) 方法中的 `api` 参数已废弃

### 修复

- 在编辑评论时删除评论会导致评论区消失
- 部分本地化字符串缺失
- 当同时设置 [`scrollType: "column"`](/api/config/js_kanban_scrolltype_config) 和 [`renderType: "lazy"`](/api/config/js_kanban_rendertype_config) 时拖放无效
- 无法通过关闭图标关闭编辑器
- Willow 皮肤下，编辑器右侧与进度条背景色一致

## 版本 1.5.13

发布日期:2024 年 9 月 12 日

### 修复

- 文件扩展名为大写时，"Make cover" 按钮不显示
- 点击禁用的 Multiselect 时引发错误
- 在使用 [`addCard()`](/api/methods/js_kanban_addcard_method) 后，如果启用列滚动和延迟渲染，滚动会导致错误
- 没有评论会被保存为空字符串，而不是空数组
- 编辑器样式会被同名全局样式覆盖。[请查阅迁移部分](/news/migration.md/#1512---1513)

## 版本 1.5.12

发布日期:2024 年 5 月 2 日

### 修复

- 拦截回归:返回 `false` 未能阻止内部事件
- 禁用文件后仍允许上传文件

## 版本 1.5.11

发布日期:2024 年 3 月 25 日

### 修复

- *Dark willow* 皮肤下 Kanban 的 CSS 变量在工具栏和 Portals 缺失
- 禁用自动保存时，评论和投票的更改未保存到表单值
- 自定义列子菜单的 **onClick** 函数收到 `null` 参数
- 无法将 Datepicker 设置为可编辑
- Kanban 示例中的控制台警告

## 版本 1.5.10

发布日期:2024 年 2 月 29 日

### 修复

- npm 构建损坏
- 为 [`duplicate-card`](/api/events/js_kanban_duplicatecard_event) 事件和 [`duplicateCard()`](/api/methods/js_kanban_duplicatecard_method) 方法添加 `select` 参数
- 编辑器中的评论字段样式错误
- 更换主题导致回归

## 版本 1.5.9

发布日期:2024 年 2 月 20 日

### 修复

- Kanban 样式影响了其他控件
- 自定义列子菜单项设置 `disabled: true` 后仍可点击
- 无法为 **Uploader** 控件设置自定义上传函数

## 版本 1.5.8

发布日期:2023 年 11 月 28 日

### 修复

- **currentUser** 的 TS 定义在 **IKanbanConfig** 中缺失

## 版本 1.5.7

发布日期:2023 年 11 月 14 日

### 更新

- 工具栏 [`setLocale()`](/api/methods/toolbar_setlocale_method) 方法现在有 ***api*** 参数

### 修复

- 卡片菜单项中的 `disabled: true` 无效
- Kanban 示例中出现多余的控制台警告
- 任务优先级无法重置
- 编辑器中的下拉控件点击外部无法关闭

## 版本 1.5.6

发布日期:2023 年 9 月 13 日

### 更新

- Kanban 现在可以作为 ES 模块导入

### 修复

- npm 包回归问题

## 版本 1.5.4

发布日期:2023 年 8 月 9 日

### 修复

- 上传的文件在切换卡片后仍留在表单中
- 拖拽上传文件无效
- 表单打开时按 Delete 可删除卡片
- 搜索时选中卡片后，"Search in" 下拉框变为空白
- 撤销添加链接操作时，新增链接未在后端删除

## 版本 1.5.1

### 修复

- 现在生成了正确的 TypeScript 定义

## 版本 1.5

发布日期:2023 年 6 月 15 日

[博客发布评测](https://dhtmlx.com/blog/dhtmlx-kanban-1-5/)

### 新功能

- 现在可以在运行时创建和删除卡片之间的链接
- 卡片之间的链接可在服务端管理
- 列头可以固定（参见[**示例**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)）

### 新 API

- #### 方法

    - [`addLink()`](/api/methods/js_kanban_addlink_method)
    - [`deleteLink()`](/api/methods/js_kanban_deletelink_method)
    - [`getLinks()`](/api/provider/rest_methods/js_kanban_getlinks_method)

- #### 路由

    - [`DELETE /links`](/api/provider/rest_routes/delete_routes/js_kanban_delete_links_route)
    - [`GET /links`](/api/provider/rest_routes/get_routes/js_kanban_get_links_route)
    - [`POST /links`](/api/provider/rest_routes/post_routes/js_kanban_post_links_route)

### 更新

- #### 属性

    - [`columnShape`](/api/config/js_kanban_columnshape_config) 现在包含 ***fixedHeaders*** 参数

### 修复

- 链接无法在运行时解析、导出或序列化
- 如果未启用用户区，创建评论区失败
- 存储中的链接会更改原始数据，且未能正确保存
- 延迟渲染导致折叠列的悬停样式失效
- 移动卡片到新列后消失
- 新评论文本区在编辑时无法关闭

## 版本 1.4.2

发布日期:2023 年 4 月 13 日

### 修复

- 添加后，后端 ID 未保存到本地卡片/列/行数据
- 部分 TS 定义缺失
- 深色皮肤样式泄漏到其他元素

## 版本 1.4.1

发布日期:2023 年 3 月 29 日

### 修复

- 保持排序功能异常
- 在 **cardShape**、**columnShape** 或 **rowShape** 中禁用右键菜单无效
- 编辑器中添加链接功能在无链接数据时无效
- 列菜单可能与卡片菜单一致或根本不显示
- 可拖动两个任务而非一个

## 版本 1.4

发布日期:2023 年 3 月 21 日

[博客发布评测](https://dhtmlx.com/blog/dhtmlx-kanban-1-4/)

### 新功能

- 现在可以添加评论（参见[**示例**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)）
- 提供 **material**、**willow** 和 **willow-dark** 主题（参见[**示例**](https://snippet.dhtmlx.com/jnw54xif?tag=kanban)）
- 可以限制用户数量（参见[**示例**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban)）
- 设置卡片间的链接（参见[**示例**](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)）
- 卡片支持投票（参见[**示例**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)）

### 新 API

- #### 事件

    - [`add-comment`](/api/events/js_kanban_addcomment_event)
    - [`add-link`](/api/events/js_kanban_addlink_event)
    - [`delete-comment`](/api/events/js_kanban_deletecomment_event)
    - [`delete-link`](/api/events/js_kanban_deletelink_event)
    - [`drag-card`](/api/events/js_kanban_dragcard_event)
    - [`end-drag-card`](/api/events/js_kanban_enddragcard_event)
    - [`start-drag-card`](/api/events/js_kanban_startdragcard_event)
    - [`update-comment`](/api/events/js_kanban_updatecomment_event)

- #### 方法

    - [`addComment()`](/api/methods/js_kanban_addcomment_method)
    - [`deleteComment()`](/api/methods/js_kanban_deletecomment_method)
    - [`updateComment()`](/api/methods/js_kanban_updatecomment_method)

- #### 属性

    - [`currentUser`](/api/config/js_kanban_currentuser_config)
    - [`links`](/api/config/js_kanban_links_config)
    - [`theme`](/api/config/js_kanban_theme_config)（Kanban）
    - [`theme`](/api/config/toolbar_items_config)（工具栏）

### 更新

- #### 方法

    - [`api.getState()`](/api/internal/js_kanban_getstate_method) 有新更新

- #### 属性

    - [`cards`](/api/config/js_kanban_cards_config) 现在支持 ***css***、***comments*** 和 ***votes***
    - [`cardShape`](/api/config/js_kanban_cardshape_config) 现在包含 ***comments***、***votes***（参见[**示例**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)）和 ***css***（参见[**示例**](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban)）
    - [`cardTemplate`](/api/config/js_kanban_cardtemplate_config) 现在可以显示右键菜单
    - [`columns`](/api/config/js_kanban_columns_config) 现在支持 ***css***（参见[**示例**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)）和 ***overlay***（参见[**示例**](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)）
    - [`columnShape`](/api/config/js_kanban_columnshape_config) 现在支持 ***css***（参见[**示例**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)）
    - [`editorShape`](/api/config/js_kanban_editorshape_config) 增加了 [***comments***](/guides/configuration/#comments-类型)、[***links***](/guides/configuration/#links-类型) 和日期/日期范围类型的 ***format***
    - [`rows`](/api/config/js_kanban_rows_config) 现在支持 ***css***（参见[**示例**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)）
    - [`rowShape`](/api/config/js_kanban_rowshape_config) 现在包含 ***css***（参见[**示例**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)）

### 弃用的 API

- #### 属性

    - `cardShape.menu.items`、`columnShape.menu.items` 和 `rowShape.menu.items` 下菜单项对象的 label 已弃用

### 修复

- Kanban 在带 margin 容器中菜单位置异常
- 折叠列未能正确定位（自定义宽度时）
- 拖放卡片到折叠列会导致消失
- 折叠列自定义宽度时定位异常
- 泳道模式下卡片菜单可能被编辑面板遮挡，导致删除卡片困难

## 版本 1.3

发布日期:2022 年 9 月 29 日

[博客发布评测](https://dhtmlx.com/blog/dhtmlx-kanban-1-3/)

### 新功能

- 通过 API、三点菜单或 `Ctrl (Command)` + `D`（支持多卡）可复制卡片
- Kanban 数据可导出为 JSON 文件
- 支持 Kanban 历史管理:
    - 工具栏上的撤销和重做控件
    - 快捷键:
        - `Ctrl (Command)`+`Z` 撤销
        - `Ctrl (Command)`+`Y` 或 `Ctrl (Command)`+`Shift`+`Z` 重做
    - 通过 API 操作

### 新 API

- **事件:**
    [`duplicate-card`](/api/events/js_kanban_duplicatecard_event)

- **方法:**
    [`duplicateCard()`](/api/methods/js_kanban_duplicatecard_method),
    [`export.json()`](/api/internal/js_kanban_json_method),
    [`getUsers()`](/api/provider/rest_methods/js_kanban_getusers_method),
    [`redo()`](/api/methods/js_kanban_redo_method),
    [`undo()`](/api/methods/js_kanban_undo_method)

- **属性:**
    [`editor`](/api/config/js_kanban_editor_config),
    [`history`](/api/config/js_kanban_history_config)

- **通用设置:**
    [`$meta`](/api/common/js_kanban_meta_parameter)

### 弃用的 API

- **属性:**
    [`editorAutoSave`](/api/config/js_kanban_editorautosave_config)

### 更新

- #### 事件

    - [`update-card`](/api/events/js_kanban_updatecard_event) 事件已更新
    - [`update-column`](/api/events/js_kanban_updatecolumn_event) 事件已更新
    - [`update-row`](/api/events/js_kanban_updaterow_event) 事件已更新

- #### 方法

    - [`updateCard()`](/api/methods/js_kanban_updatecard_method) 已更新
    - [`updateColumn()`](/api/methods/js_kanban_updatecolumn_method) 已更新
    - [`updateRow()`](/api/methods/js_kanban_updaterow_method) 已更新

- #### 属性

    - 工具栏 [`items`](/api/config/toolbar_items_config) 现在包含 ***"undo"*** 和 ***"redo"*** 控件
    - [`editorShape`](/api/config/js_kanban_editorshape_config) 增加 ***dateRange*** 类型

## 版本 1.2.2

发布日期:2022 年 8 月 30 日

### 修复

- 菜单和工具栏中出现重复图标

## 版本 1.2.1

发布日期:2022 年 7 月 28 日

### 修复

- 启用 `scrollType:"column"` 时 `cardHeight` 无效
- 上传控件未在卡片编辑器中显示已上传文件
- 编辑器中 "combo" 和 "progress" 字段本地化无效

## 版本 1.2

发布日期:2022 年 6 月 29 日

[博客发布评测](https://dhtmlx.com/blog/dhtmlx-kanban-1-2/)

### 新功能

- 现在可以通过列菜单添加新卡片（参见[**示例**](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban)）
- 支持延迟渲染（参见[**示例**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)）
- 每列可独立滚动（参见[**示例**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)）
- Kanban 在新建卡片、列、行时自动滚动到对应位置（API 和 UI，参见[**示例**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)）
- 卡片支持排序（API 和 UI，参见[**示例**](https://snippet.dhtmlx.com/74nyuv14?tag=kanban)）

### 新 API

- **事件:**
    [`scroll`](/api/events/js_kanban_scroll_event),
    [`set-edit`](/api/events/js_kanban_setedit_event),
    [`set-sort`](/api/events/js_kanban_setsort_event)

- **方法:**
    [`scroll()`](/api/methods/js_kanban_scroll_method),
    [`setEdit()`](/api/methods/js_kanban_setedit_method),
    [`setSort()`](/api/methods/js_kanban_setsort_method)

- **属性:**
    [`cardHeight`](/api/config/js_kanban_cardheight_config),
    [`columnShape`](/api/config/js_kanban_columnshape_config),
    [`rowShape`](/api/config/js_kanban_rowshape_config),
    [`renderType`](/api/config/js_kanban_rendertype_config),
    [`scrollType`](/api/config/js_kanban_scrolltype_config)

### 更新

- #### 方法

    - [`api.getReactiveState()`](/api/internal/js_kanban_getreactivestate_method) 已更新
    - [`api.getState()`](/api/internal/js_kanban_getstate_method) 已更新
    - [`api.getStores()`](/api/internal/js_kanban_getstores_method) 已更新
    - Kanban 的 [`setLocale()`](/api/methods/js_kanban_setlocale_method) 已更新
    - 工具栏的 [`setLocale()`](/api/methods/toolbar_setlocale_method) 已更新

- #### 属性

    - 工具栏 [`items`](/api/config/toolbar_items_config) 已更新
    - [`cardShape`](/api/config/js_kanban_cardshape_config) 更新 ***start_date***、***end_date***、***menu*** 和 ***users***
    - [`editorShape`](/api/config/js_kanban_editorshape_config) 更新 ***multiselect*** 类型

#### 通用

- CSS 类前缀已更改（*参见 [样式](/guides/stylization)*）
- 本地化结构更新（*参见 [本地化](/guides/localization)*）

### 修复

- 通过 `rowKey` 绑定卡片到泳道无效
- 点击卡片菜单会打开编辑器
- 拖拽多卡片行为异常
- `select: false`（**readonly** 配置）下卡片编辑无效
- 通过 `addCard()` 添加的新卡片无法正确选中
- 在 `cardShape` 中设置 `label: false` 和 `menu: false` 无效

## 版本 1.1.1

发布日期:2022 年 2 月 28 日

[博客发布评测](https://dhtmlx.com/blog/maintenance-release-kanban-1-1-1/)

### 修复

- 未在 cardShape 配置中定义自定义编辑器字段时无法使用
- 在搜索栏下拉中选中正确卡片体验不佳

## 版本 1.1

发布日期:2022 年 2 月 15 日

[博客发布评测](https://dhtmlx.com/blog/dhtmlx-kanban-1-1-wip-validation-new-operations-columns-rows-typescript-support/)

### 新功能

- 可通过标签旁的箭头折叠或展开列
- 可为列和泳道设置卡片数量限制
- 列可通过右键菜单（三点图标）移动
- 行也可通过右键菜单（三点图标）移动
- 可通过 **Shift** + **点击** 实现同一列多卡片选择
- Kanban 现已支持 TypeScript 定义

### 新 API

- 新增列、行移动 **事件**:
    [`move-column`](/api/events/js_kanban_movecolumn_event),
    [`move-row`](/api/events/js_kanban_moverow_event)
- 新增列、行移动 **方法**:
    [`moveColumn()`](/api/methods/js_kanban_movecolumn_method),
    [`moveRow()`](/api/methods/js_kanban_moverow_method)

### 更新

#### 属性

- [`cards`](/api/config/js_kanban_cards_config) 现为可选

- [`columns`](/api/config/js_kanban_columns_config) 现为可选，并新增:
    - ***collapsed***
    - ***limit***
    - ***strictLimit***

- [`cardShape`](/api/config/js_kanban_cardshape_config) 中的 ***color*** 选项已更新

#### 方法

- [`addColumn`](/api/methods/js_kanban_addcolumn_method) 已更新
- [`addRow`](/api/methods/js_kanban_addrow_method) 已更新
- [`updateCard`](/api/methods/js_kanban_updatecard_method) 已更新
- [`updateColumn`](/api/methods/js_kanban_updatecolumn_method) 已更新
- [`updateRow`](/api/methods/js_kanban_updaterow_method) 已更新
- [`parse`](/api/methods/js_kanban_parse_method) 已更新

#### 事件

- [`add-column`](/api/events/js_kanban_addcolumn_event) 已更新
- [`add-row`](/api/events/js_kanban_addrow_event) 已更新
- [`update-card`](/api/events/js_kanban_updatecard_event) 已更新
- [`update-column`](/api/events/js_kanban_updatecolumn_event) 已更新
- [`update-row`](/api/events/js_kanban_updaterow_event) 已更新

## 版本 1.0

发布日期:2021 年 11 月 23 日

[博客发布评测](https://dhtmlx.com/blog/releasing-dhtmlx-kanban-board-v-1-0/)

### 初始功能

- **卡片** 功能:
    - 添加新卡片
    - 选择卡片（支持多选）
    - 删除卡片
    - 卡片搜索
    - 通过拖拽在列和行间排序
    - 使用编辑器编辑卡片详情:
        - 标签
        - 描述
        - 进度
        - 开始日期
        - 结束日期
        - 颜色
        - 优先级
        - 附件（*文件* 和 *图片*）
        - *自定义字段*

- **列** 和 **行** 功能:
    - 添加新列和新行
    - 删除列和行
    - 重命名列和行
    - 折叠或展开行

- [本地化](/guides/localization)
- [后端集成](/guides/working_with_server)（Go 和 Node）
- 跨浏览器兼容
- 支持触屏设备
