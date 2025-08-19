---
sidebar_label: add-comment
title: add-comment 事件
description: 探索 DHTMLX JavaScript 看板库中的 add-comment 事件文档。查看开发者指南、API 参考，尝试示例和在线演示，并获取 DHTMLX 看板的免费 30 天试用。
---

# add-comment

### 描述

@short: 当添加新评论时触发

### 用法

~~~jsx {}
"add-comment": ({
    id?: string | number,
    cardId: string | number,
    comment: {
        text?: string,
        date?: Date,
        html?: string
    },
    skipProvider?: boolean
}) => void;
~~~

### 参数

**add-comment** 事件的回调函数接收一个包含以下属性的对象:

- `id` - （可选）新评论的 ID
- `cardId` - （必需）添加评论的卡片 ID
- `comment` - （必需）定义新评论细节的对象。可包含:
    - `text` - （可选）评论的文本内容
    - `date` - （可选）评论的日期
    - `html` - （可选）评论的 HTML 内容。若要启用 HTML 渲染而非文本，请在 [`editorShape`](/api/config/js_kanban_editorshape_config/#--comments-类型参数) 配置中激活 `html` 属性
- `skipProvider` - （可选）控制是否阻止向服务器发送请求

:::info
有关内部事件处理的管理，请参考 [**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "add-comment" 事件
board.api.on("add-comment", (obj) => {
    console.log(obj.comment);
});
~~~

**更新日志:** 此事件自 v1.4 版本引入
