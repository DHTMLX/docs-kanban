---
sidebar_label: addComment()
title: addComment 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 addComment 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版本。
---

# addComment()

### 描述

@short: 通过卡片的 ID 向指定卡片添加新的评论

### 用法

~~~jsx {}
addComment({
    id?: string | number,
    cardId: string | number,
    comment: {
        text?: string,
        date?: Date,
        html?: string
    }
}): void;
~~~

### 参数

- `id` - （可选）新评论的 ID
- `cardId` - （必填）要添加评论的卡片 ID
- `comment` - （必填）新评论的配置对象。您可以在此指定以下参数：
    - `text` - （可选）新评论的文本内容
    - `date` - （可选）新评论的日期
    - `html` - （可选）新评论的 HTML 标记。启用 [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type) 配置中的 `html` 属性，以显示 HTML 标记而非文本

### 示例

~~~jsx {7-15}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 添加新评论
board.addComment({
    id: 1,
    cardId: 1,
    comment: {
        text: "", 
        date: new Date("01/07/2021"),
        html: "<b>重要评论</b>"
    }
});
~~~

**更新日志：** 此方法自 v1.4 版本起添加