---
sidebar_label: update-comment
title: update-comment 事件
description: 了解 DHTMLX JavaScript 看板库中的 update-comment 事件。查看开发者指南和 API 参考，探索代码示例和在线演示，并免费下载 DHTMLX 看板的 30 天试用版。
---

# update-comment

### 描述

@short: 当评论被更新时触发

### 用法

~~~jsx {}
"update-comment": ({
    id?: string | number, 
    cardId: string | number, 
    comment: {
        id?: string | number, 
        cardId?: string | number, 
        text?: string, 
        date?: Date, 
        html?: string 
    },
    skipProvider?: boolean
}) => void;
~~~

### 参数

**update-comment** 事件的回调函数接收一个包含以下参数的对象:

- `id` - （可选）被更新评论的 ID
- `cardId` - （必需）评论所在卡片的 ID
- `comment` - （必需）包含更新后评论详情的对象。可包含:
    - `id` - （可选）更新后评论的 ID
    - `cardId` - （可选）更新后评论所在的卡片 ID
    - `text` - （可选）更新后的评论文本
    - `date` - （可选）更新后的评论日期
    - `html` - （可选）更新后的评论 HTML 标记。若要显示 HTML 而非纯文本，请在 [`editorShape`](/api/config/js_kanban_editorshape_config/#--comments-类型参数) 配置中启用 `html` 属性
- `skipProvider` - （可选）控制是否将更新请求发送到服务器

:::info
要管理内部事件，您可以使用 [**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "update-comment" 事件
board.api.on("update-comment", (obj) => {
    console.log(obj.comment);
});
~~~

**更新日志:** 此事件自 v1.4 版本引入
