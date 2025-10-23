---
sidebar_label: update-comment
title: update-comment 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 update-comment 事件。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 免费的 30 天试用版。
---

# update-comment

### 描述

@short: 当更新评论时触发

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

**update-comment** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （可选）要更新的评论的 ID
- `cardId` - （必需）将要更新评论的卡片 ID
- `comment` - （必需）要更新的评论的配置对象。您可以在此指定以下参数：
    - `id` - （可选）已更新评论的 ID
    - `cardId` - （可选）已更新评论将被添加到的卡片 ID
    - `text` - （可选）已更新评论的文本内容
    - `date` - （可选）已更新评论的日期
    - `html` - （可选）已更新评论的 HTML 标记。启用 [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type) 配置中的 `html` 属性，以显示 HTML 标记而非纯文本
- `skipProvider` - （可选）启用或禁用阻止请求发送到服务器

:::info
处理内部事件时，您可以使用 [**事件总线方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "update-comment" 事件
board.api.on("update-comment", (obj) => {
    console.log(obj.comment);
});
~~~

**更新日志：** 该事件自 v1.4 版本起添加