---
sidebar_label: 新增内容
title: 新增内容
description: 您可以在 DHTMLX JavaScript UI 库的文档中了解 DHTMLX Kanban 的最新动态及其发布历史。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费评估版。
---

# 新增内容

如果您正在从旧版本升级 Kanban，请查阅 [迁移到新版本](news/migration.md) 获取详细信息。

## 版本 1.7.0

于 2025 年 10 月 14 日发布

[博客发布回顾](https://dhtmlx.com/blog/dhtmlx-kanban-1-7/)

### Salesforce 集成

从 v1.7 开始，您可以在 Salesforce 环境中使用 JavaScript Kanban。更多信息请参考：[**与 Salesforce 集成**](guides/integration_with_salesforce.md)。

您还可以参考我们的 [**GitHub 示例**](https://github.com/DHTMLX/salesforce-lwc-demo) 或运行 [**在线演示**](https://dhtmlx-dev-ed.develop.lightning.force.com/)（*登录名*：***user***，*密码*：***demo***）。

### 新 API

- #### 事件

    - [`undo`](api/events/js_kanban_undo_event.md)
    - [`redo`](api/events/js_kanban_redo_event.md)

- #### 方法

    - [`getColumnCards()`](api/methods/js_kanban_getcolumncards_method.md)
    - [`detach()`](api/internal/js_kanban_detach_method.md)

### 更新

- #### 方法

    - [`on`](api/internal/js_kanban_on_method.md) 内部方法新增了 `config.tag` 和 `config.intercept` 参数
    - [`intercept`](api/internal/js_kanban_intercept_method.md) 内部方法新增了 `config.tag` 和 `config.intercept` 参数

- #### 属性

    - [`links`](api/config/js_kanban_links_config.md) 属性更新如下：
        - `masterId` 参数被替换为 `source`
        - `slaveId` 参数被替换为 `target`

    - [`editorShape`](api/config/js_kanban_editorshape_config.md) 属性更新，`clearButton` 参数被替换为 `clear`

    - [`cardShape.menu.items`](api/config/js_kanban_cardshape_config.md) 函数更新，`store` 参数被替换为 `readonly`

    - [`cards[i].attached[i]`](api/config/js_kanban_cards_config.md) 属性新增了 `size` 参数

### 移除的 API

- 移除了 `editorAutoSave` 属性，请使用 [`editor.autoSave`](api/config/js_kanban_editor_config.md) 属性代替

- [`start-drag-card`](api/events/js_kanban_startdragcard_event.md) 移除了 `dragItemsCoords` 和 `dropAreasCoords` 参数

### 修复

- 用户批量上传文件或多个大文件时，表单会在所有文件完全上传到服务器之前更新，此时发送到服务器的卡片数据不正确
- 文件大小仅显示新加载的文件
- 编辑器中点击 **完成** 按钮后，年份和月份未更新
- 评论区可扩展的文本区域导致按钮移出可点击区域
- 打开已被删除卡片关联的卡片时发生脚本错误

## 版本 1.6.5

于 2025 年 7 月 14 日发布

### 修复

- `disabled: true` 配置对菜单项无效
- 向未预定义行结构的 Kanban 添加行时，行标题未显示

## 版本 1.6.4

于 2025 年 6 月 12 日发布

### 修复

- 添加到被移除后又恢复的列/行的卡片丢失
- 上传列表按钮缺少本地化标签
- 商业版包中缺少 readme 文件

## 版本 1.6.3

于 2025 年 4 月 8 日发布

### 修复

- 限制错误地应用于整个列
- 关闭模态编辑器后移动卡片时报错
- 删除确认框显示在模态编辑器下方
- 工具栏 "更多" 图标在窗口慢速调整大小时出现又消失
- `delete-card` 事件总是关闭编辑器
- 如果优先级设置为未提供选项之外的 ID，则无法打开编辑器

## 版本 1.6.2

于 2025 年 2 月 14 日发布

### 修复

- 试用包中的过期日期错误
- 触摸设备拖拽时警告
- 只读 `add: false` 配置未从列菜单中移除 **添加** 选项
- 卡片 ID 为字符串数字时，编辑器未渲染
- 包中的示例链接已过期
- 懒加载渲染下的列滚动拖拽异常
- `setConfig()` 方法未能更新列标题的固定状态

## 版本 1.6.1

于 2024 年 11 月 29 日发布

### 修复

- 窄屏下工具栏 "更多" 图标未对齐
- `RestDataProvider` 忽略通过 `setHeaders()` 设置的 header
- `RestDataProvider.getIDResolver` 不是函数错误

## 版本 1.6

于 2024 年 11 月 13 日发布

[博客发布回顾](https://dhtmlx.com/blog/dhtmlx-kanban-1-6/)

### 新功能

- 可通过 [`cardShape.users.maxCount`](api/config/js_kanban_cardshape_config.md) 属性设置卡片上显示的指派用户数量（参见 [**示例**](https://snippet.dhtmlx.com/w205dvzg?tag=kanban)）
- 可通过 [`columnShape`](api/config/js_kanban_columnshape_config.md) 属性自定义列标题内容（参见 [**示例**](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban)）
- 可通过工具栏 **搜索** 控件的 [`items.searchResult`](api/config/toolbar_items_config.md) 属性自定义搜索结果的视图和内容（参见 [**示例**](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban)）
- 可通过 [`editor.placement`](api/config/js_kanban_editor_config.md) 属性将编辑器显示为模态窗口（参见 [**示例**](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban)）
- 可通过 [`cardShape.votes.clickable`](api/config/js_kanban_cardshape_config.md) 属性为卡片启用投票（在卡片上使用投票图标，参见 [**示例**](https://snippet.dhtmlx.com/en76xvi4?tag=kanban)）

### 更新

- #### 属性

    - [`cardShape`](api/config/js_kanban_cardshape_config.md) 属性新增 ***users.maxCount*** 和 ***votes.clickable*** 参数
    - [`columnShape`](api/config/js_kanban_columnshape_config.md) 属性新增 ***headerTemplate*** 和 ***collapsedTemplate*** 参数
    - [`editor`](api/config/js_kanban_editor_config.md) 属性新增 ***placement*** 参数
    - 工具栏 **搜索** 控件的 [`items`](api/config/toolbar_items_config.md) 属性新增 ***searchResult*** 参数

- #### 事件

    - [`set-edit`](api/events/js_kanban_setedit_event.md) 事件新增 ***eventSource*** 参数（参见 [**示例**](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban)）

- #### 方法

    - [`setConfig()`](api/methods/js_kanban_setconfig_method.md) 方法功能更新如下：

        - 该方法不会更改历史记录（您无法更改历史记录）
        - 该方法不会销毁 Kanban 数据存储。无需重新创建事件监听器或重新绑定工具栏

    - [`setLocale()`](api/methods/js_kanban_setlocale_method.md) 方法不会销毁 Kanban 数据存储。无需重新创建事件监听器或重新绑定工具栏
    - 工具栏 [`setLocale()`](api/methods/toolbar_setlocale_method.md) 方法的 `api` 参数已弃用

### 修复

- 编辑中的评论可被移除且新评论输入框消失
- 缺失本地化字符串
- 同时设置 [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md) 和 [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) 时拖拽无效
- 无法通过关闭图标关闭编辑器
- 编辑器右侧区域与进度条背景色相同（仅 Willow 皮肤）

## 版本 1.5.13

于 2024 年 9 月 12 日发布

### 修复

- "设为封面" 按钮在扩展名为大写时不显示
- 点击禁用的多选控件时报错
- 调用 [`addCard()`](api/methods/js_kanban_addcard_method.md) 方法后滚动，在 [column scroll](api/config/js_kanban_scrolltype_config.md) 和 [lazy rendering](api/config/js_kanban_rendertype_config.md) 下报错
- 未保存的评论以 "" 而不是 [] 保存
- 编辑器样式被全局同名非唯一类选择器覆盖。[参见迁移部分](news/migration.md/#1512---1513)

## 版本 1.5.12

于 2024 年 5 月 2 日发布

### 修复

- 拦截回归：返回 `false` 未阻止内部事件
- 禁用文件仍可上传

## 版本 1.5.11

于 2024 年 3 月 25 日发布

### 修复

- *Dark willow* 皮肤下 Kanban 的 CSS 变量在工具栏和门户中丢失
- 禁用自动保存时，评论和投票的更改未应用到表单值
- 自定义列子菜单在 **onClick** 函数参数中接收 `null`
- 无法为编辑器中的日期选择器设置可编辑模式
- Kanban 示例中控制台警告

## 版本 1.5.10

于 2024 年 2 月 29 日发布

### 修复

- npm 服务器构建失败
- [`duplicate-card`](api/events/js_kanban_duplicatecard_event.md) 事件和 [`duplicateCard()`](api/methods/js_kanban_duplicatecard_method.md) 方法新增 `select` 参数
- Kanban 编辑器中评论字段样式错误

## 版本 1.5.9

于 2024 年 2 月 20 日发布

### 修复

- Kanban 影响其他组件样式
- 自定义列子菜单项设置 `disabled: true` 仍然可用
- **Uploader** 控件无法设置自定义上传函数

## 版本 1.5.8

于 2023 年 11 月 28 日发布

### 修复

- **IKanbanConfig** 类型缺少 **currentUser** TS 定义

## 版本 1.5.7

于 2023 年 11 月 14 日发布

### 更新

- 工具栏 [`setLocale()`](api/methods/toolbar_setlocale_method.md) 方法新增 ***api*** 参数

### 修复

- `disabled: true` 配置对卡片菜单项无效
- Kanban 示例中出现不必要的控制台警告
- 无法重置任务优先级
- Kanban 编辑器中的下拉控件点击外部无法关闭

## 版本 1.5.6

于 2023 年 9 月 13 日发布

### 更新

- 支持以 ES 模块方式导入组件

### 修复

- npm 包回归问题

## 版本 1.5.4

于 2023 年 8 月 9 日发布

### 修复

- 切换到其他卡片后，已上传文件仍保留在表单中
- 拖拽上传文件无效
- 用户在表单打开时按下 Delete 键导致卡片被意外删除
- 通过搜索选中卡片后，“搜索于”下拉输入框变为空
- 撤销添加链接操作时，后端未删除已添加的链接

## 版本 1.5.1

### 修复

- 正确生成 TypeScript 定义

## 版本 1.5

于 2023 年 6 月 15 日发布

[博客发布回顾](https://dhtmlx.com/blog/dhtmlx-kanban-1-5/)

### 新功能

- 运行时设置和删除卡片间的链接
- 在服务端管理卡片间的链接
- 固定列标题（参见 [**示例**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)）

### 新 API

- #### 方法

    - [`addLink()`](api/methods/js_kanban_addlink_method.md)
    - [`deleteLink()`](api/methods/js_kanban_deletelink_method.md)
    - [`getLinks()`](api/provider/rest_methods/js_kanban_getlinks_method.md)

- #### 路由

    - [`DELETE /links`](api/provider/rest_routes/delete_routes/js_kanban_delete_links_route.md)
    - [`GET /links`](api/provider/rest_routes/get_routes/js_kanban_get_links_route.md)
    - [`POST /links`](api/provider/rest_routes/post_routes/js_kanban_post_links_route.md)

### 更新

- #### 属性

    - [`columnShape`](api/config/js_kanban_columnshape_config.md) 属性新增 ***fixedHeaders*** 参数

### 修复

- 链接无法在运行时解析、导出或序列化
- 未启用用户区时创建评论区失败
- 存储中的链接会改变原始数据且未正确保存
- 懒加载渲染导致折叠列悬停区域样式异常
- 移动到新建列的卡片消失
- 新评论输入框未关闭时开始编辑

## 版本 1.4.2

于 2023 年 4 月 13 日发布

### 修复

- 添加操作后后端 ID 未保存到本地卡片/列/行数据
- 缺失 TS 定义
- 深色皮肤样式泄露

## 版本 1.4.1

于 2023 年 3 月 29 日发布

### 修复

- 保持排序时行为异常
- 通过 **cardShape**、**columnShape** 或 **rowShape** 属性禁用右键菜单时行为异常
- 编辑器中添加链接但未在数据中提供链接时行为异常
- 列上的菜单可与卡片相同或不显示
- 拖动时两个任务同时被拖动

## 版本 1.4

于 2023 年 3 月 21 日发布

[博客发布回顾](https://dhtmlx.com/blog/dhtmlx-kanban-1-4/)

### 新功能

- 添加评论（参见 [**示例**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)）
- 限制用户数量（参见 [**示例**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban)）
- 设置卡片间链接（参见 [**示例**](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)）
- 卡片投票（参见 [**示例**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)）

### 新 API

- #### 事件

    - [`add-comment`](api/events/js_kanban_addcomment_event.md)
    - [`add-link`](api/events/js_kanban_addlink_event.md)
    - [`delete-comment`](api/events/js_kanban_deletecomment_event.md)
    - [`delete-link`](api/events/js_kanban_deletelink_event.md)
    - [`drag-card`](api/events/js_kanban_dragcard_event.md)
    - [`end-drag-card`](api/events/js_kanban_enddragcard_event.md)
    - [`start-drag-card`](api/events/js_kanban_startdragcard_event.md)
    - [`update-comment`](api/events/js_kanban_updatecomment_event.md)

- #### 方法

    - [`addComment()`](api/methods/js_kanban_addcomment_method.md)
    - [`deleteComment()`](api/methods/js_kanban_deletecomment_method.md)
    - [`updateComment()`](api/methods/js_kanban_updatecomment_method.md)

- #### 属性

    - [`currentUser`](api/config/js_kanban_currentuser_config.md)
    - [`links`](api/config/js_kanban_links_config.md)

### 更新

- #### 方法

    - [`api.getState()`](api/internal/js_kanban_getstate_method.md) 方法已更新

- #### 属性

    - [`cards`](api/config/js_kanban_cards_config.md) 属性新增 ***css***、***comments*** 和 ***votes*** 参数
    - [`cardShape`](api/config/js_kanban_cardshape_config.md) 属性新增 ***comments***、***votes***（参见 [**示例**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)）和 ***css***（参见 [**示例**](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban)）参数
    - [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) 属性支持显示右键菜单
    - [`columns`](api/config/js_kanban_columns_config.md) 属性新增 ***css***（参见 [**示例**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)）和 ***overlay***（参见 [**示例**](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)）参数
    - [`columnShape`](api/config/js_kanban_columnshape_config.md) 属性新增 ***css*** 参数（参见 [**示例**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)）
    - [`editorShape`](api/config/js_kanban_editorshape_config.md) 属性新增 [***comments***](guides/configuration.md#comments-type) 和 [***links***](guides/configuration.md#links-type) 类型，以及 *date/dateRange* 类型的 ***format*** 参数
    - [`rows`](api/config/js_kanban_rows_config.md) 属性新增 ***css*** 参数（参见 [**示例**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)）
    - [`rowShape`](api/config/js_kanban_rowshape_config.md) 属性新增 ***css*** 参数（参见 [**示例**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)）

### 弃用 API

- #### 属性

    - `cardShape.menu.items`、`columnShape.menu.items` 和 `rowShape.menu.items` 的菜单项对象中的 label

### 修复

- Kanban 在带有 margin 的容器中菜单位置错误
- 自定义列宽下折叠列位置错误
- 拖拽卡片到折叠列导致卡片消失
- 自定义列宽下折叠列位置错误
- 游泳道下卡片的右键菜单被编辑面板遮挡，导致无法删除卡片

## 版本 1.3

于 2022 年 9 月 29 日发布

[博客发布回顾](https://dhtmlx.com/blog/dhtmlx-kanban-1-3/)

### 新功能

- 通过 API、右键菜单（三点图标）或 `Ctrl (Command)` + `D` 快捷键（支持多卡片）复制卡片
- 导出 Kanban 数据为 JSON 文件
- 管理 Kanban 历史记录：
    - 通过工具栏上的 *撤销* 和 *重做* 控件
    - 通过快捷键：
        - `Ctrl (Command)`+`Z` - 撤销操作
        - `Ctrl (Command)`+`Y` 或 `Ctrl (Command)`+`Shift`+`Z` - 重做操作
    - 通过 API

### 新 API

- **事件：**
    [`duplicate-card`](api/events/js_kanban_duplicatecard_event.md)

- **方法：**
    [`duplicateCard()`](api/methods/js_kanban_duplicatecard_method.md),
    [`export.json()`](api/internal/js_kanban_json_method.md),
    [`getUsers()`](api/provider/rest_methods/js_kanban_getusers_method.md),
    [`redo()`](api/methods/js_kanban_redo_method.md) 和
    [`undo()`](api/methods/js_kanban_undo_method.md)

- **属性：**
    [`editor`](api/config/js_kanban_editor_config.md) 和
    [`history`](api/config/js_kanban_history_config.md)

- **通用设置：**
    [`$meta`](api/common/js_kanban_meta_parameter.md)

### 弃用 API

- **属性：**
    [`editorAutoSave`](api/config/js_kanban_editorautosave_config.md)

### 更新

- #### 事件

    - Kanban 的 [`update-card`](api/events/js_kanban_updatecard_event.md) 事件已更新
    - Kanban 的 [`update-column`](api/events/js_kanban_updatecolumn_event.md) 事件已更新
    - Kanban 的 [`update-row`](api/events/js_kanban_updaterow_event.md) 事件已更新

- #### 方法

    - Kanban 的 [`updateCard()`](api/methods/js_kanban_updatecard_method.md) 方法已更新
    - Kanban 的 [`updateColumn()`](api/methods/js_kanban_updatecolumn_method.md) 方法已更新
    - Kanban 的 [`updateRow()`](api/methods/js_kanban_updaterow_method.md) 方法已更新

- #### 属性

    - 工具栏 [`items`](api/config/toolbar_items_config.md) 属性新增 ***"undo"*** 和 ***"redo"*** 参数（控件）
    - [`editorShape`](api/config/js_kanban_editorshape_config.md) 属性新增 ***dateRange*** 类型

## 版本 1.2.2

于 2022 年 8 月 30 日发布

### 修复

- 菜单和工具栏中部分图标重复

## 版本 1.2.1

于 2022 年 7 月 28 日发布

### 修复

- `cardHeight` 属性在启用 `scrollType:"column"` 配置时无效
- 上传控件在卡片编辑器中未显示已上传文件
- 卡片编辑器中 "combo" 和 "progress" 字段本地化无效

## 版本 1.2

于 2022 年 6 月 29 日发布

[博客发布回顾](https://dhtmlx.com/blog/dhtmlx-kanban-1-2/)

### 新功能 

- 通过列菜单添加新卡片（参见 [**示例**](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban)）
- 懒加载渲染（参见 [**示例**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)）
- 各列独立滚动（参见 [**示例**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)）
- Kanban 滚动到新建卡片、列和行（API 和 UI，参见 [**示例**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)）
- 卡片排序（API 和 UI，参见 [**示例**](https://snippet.dhtmlx.com/74nyuv14?tag=kanban)）

### 新 API

- **事件：**
    [`scroll`](api/events/js_kanban_scroll_event.md),
    [`set-edit`](api/events/js_kanban_setedit_event.md),
    [`set-sort`](api/events/js_kanban_setsort_event.md)

- **方法：**
    [`scroll()`](api/methods/js_kanban_scroll_method.md),
    [`setEdit()`](api/methods/js_kanban_setedit_method.md),
    [`setSort()`](api/methods/js_kanban_setsort_method.md)

- **属性：**
    [`cardHeight`](api/config/js_kanban_cardheight_config.md),
    [`columnShape`](api/config/js_kanban_columnshape_config.md),
    [`rowShape`](api/config/js_kanban_rowshape_config.md), 
    [`renderType`](api/config/js_kanban_rendertype_config.md),
    [`scrollType`](api/config/js_kanban_scrolltype_config.md)

### 更新

- #### 方法

    - [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) 方法已更新
    - [`api.getState()`](api/internal/js_kanban_getstate_method.md) 方法已更新
    - [`api.getStores()`](api/internal/js_kanban_getstores_method.md) 方法已更新
    - Kanban 的 [`setLocale()`](api/methods/js_kanban_setlocale_method.md) 方法已更新
    - 工具栏的 [`setLocale()`](api/methods/toolbar_setlocale_method.md) 方法已更新

- #### 属性

    - 工具栏 [`items`](api/config/toolbar_items_config.md) 属性已更新
    - [`cardShape`](api/config/js_kanban_cardshape_config.md) 属性的 ***start_date***、***end_date***、***menu*** 和 ***users*** 参数已更新
    - [`editorShape`](api/config/js_kanban_editorshape_config.md) 属性的 ***multiselect*** 类型已更新

#### 通用

- CSS 类名前缀（参见 [样式化](guides/stylization.md) 部分）
- 本地化结构（参见 [本地化](guides/localization.md) 部分）

### 修复

- 通过 `rowKey` 配置将卡片绑定到泳道异常
- 点击卡片菜单打开编辑器
- 拖拽多张卡片异常
- `select: false`（**readonly** config.md）配置下编辑卡片异常
- 通过 `addCard()` 方法选择新添加卡片异常
- `cardShape` 属性的 `label: false` 和 `menu: false` 参数异常

## 版本 1.1.1

于 2022 年 2 月 28 日发布

[博客发布回顾](https://dhtmlx.com/blog/maintenance-release-kanban-1-1-1/)

### 修复

- 未在 cardShape 配置中定义自定义编辑器字段时无效
- 通过搜索栏下拉菜单选择所需卡片

## 版本 1.1

于 2022 年 2 月 15 日发布

[博客发布回顾](https://dhtmlx.com/blog/dhtmlx-kanban-1-1-wip-validation-new-operations-columns-rows-typescript-support/)

### 新功能

- 通过列标签左侧箭头 *折叠/展开* 列
- 为列和泳道 *限制* 卡片数量
- 通过右键菜单（三点图标）*移动* 列
- 通过右键菜单（三点图标）*移动* 行
- 通过 **Shift** + **点击** 组合键选择同一列的多张卡片
- 支持 [TypeScript 定义](guides/typescript_support.md)

### 新 API

- 新增用于移动列和行的 **事件**：
    [`move-column`](api/events/js_kanban_movecolumn_event.md)
    和
    [`move-row`](api/events/js_kanban_moverow_event.md)
- 新增用于移动列和行的 **方法**：
    [`moveColumn()`](api/methods/js_kanban_movecolumn_method.md)
    和
    [`moveRow()`](api/methods/js_kanban_moverow_method.md)

### 更新

#### 属性

- [`cards`](api/config/js_kanban_cards_config.md) 属性变为可选

- [`columns`](api/config/js_kanban_columns_config.md) 属性变为可选，并新增以下参数：
    - ***collapsed***
    - ***limit***
    - ***strictLimit***

- [`cardShape`](api/config/js_kanban_cardshape_config.md) 属性的 ***color*** 参数已更新

#### 方法

- [`addColumn`](api/methods/js_kanban_addcolumn_method.md) 方法已更新
- [`addRow`](api/methods/js_kanban_addrow_method.md) 方法已更新
- [`updateCard`](api/methods/js_kanban_updatecard_method.md) 方法已更新
- [`updateColumn`](api/methods/js_kanban_updatecolumn_method.md) 方法已更新
- [`updateRow`](api/methods/js_kanban_updaterow_method.md) 方法已更新
- [`parse`](api/methods/js_kanban_parse_method.md) 方法已更新

#### 事件

- [`add-column`](api/events/js_kanban_addcolumn_event.md) 事件已更新
- [`add-row`](api/events/js_kanban_addrow_event.md) 事件已更新
- [`update-card`](api/events/js_kanban_updatecard_event.md) 事件已更新
- [`update-column`](api/events/js_kanban_updatecolumn_event.md) 事件已更新
- [`update-row`](api/events/js_kanban_updaterow_event.md) 事件已更新

## 版本 1.0

于 2021 年 11 月 23 日发布

[博客发布回顾](https://dhtmlx.com/blog/releasing-dhtmlx-kanban-board-v-1-0/)

### 初始功能

- 支持如下方式管理 **卡片**：
    - 添加新卡片
    - 选择卡片（多选）
    - 删除卡片
    - 搜索卡片
    - 拖动卡片到目标列（和行）实现排序
    - 通过编辑器管理卡片数据：
        - 标签
        - 描述
        - 进度
        - 开始日期
        - 结束日期
        - 颜色
        - 优先级
        - 附件（*文件* 和 *图片*）
        - *自定义字段*

- 支持如下方式管理 **列** 和 **行**：
    - 添加新列和新行
    - 删除列和行
    - 重命名列和行
    - 折叠/展开行

- [本地化](guides/localization.md)
- [与后端集成](guides/working_with_server.md)（Go 和 Node）
- 跨浏览器兼容
- 支持触摸操作