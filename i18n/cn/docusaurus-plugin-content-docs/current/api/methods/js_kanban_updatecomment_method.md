---
sidebar_label: updateComment()
title: updateComment 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 updateComment 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# updateComment()

### 描述

@short: 通过指定评论的 ID 来修改卡片评论

### 用法

~~~jsx {}
updateComment({
    id?: string | number, 
    cardId: string | number, 
    comment: {
        id?: string | number, 
        cardId?: string | number, 
        text?: string, 
        date?: Date, 
        html?: string 
    }
}): void;
~~~

### 参数

- `id` -  （可选）要修改的评论的标识符
- `cardId` - （必需）包含要更新评论的卡片的标识符
- `comment` - （必需）描述更新后的评论详情的对象。可以包括:
    - `id` -  （可选）正在更新的评论的标识符
    - `cardId` - （可选）更新后的评论将放置的卡片的标识符
    - `text` - （可选）评论的新文本内容
    - `date` - （可选）与评论关联的新日期
    - `html` - （可选）评论的新 HTML 内容。若要显示 HTML 而非纯文本，请在 [`editorShape`](/api/config/js_kanban_editorshape_config/#--comments-类型参数) 配置中启用 `html` 属性

### 示例

~~~jsx {7-17}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 更新评论
board.updateComment({
    id: 1,
    cardId: 1,
    comment: {
        id: 2,
        cardId: 4,
        text: "", 
        date: new Date("01/08/2021"),
        html: "<b>Updated comment</b>"
    }
});
~~~

**更新日志:** 此方法自版本 1.4 起引入
