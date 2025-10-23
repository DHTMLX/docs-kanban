---
sidebar_label: updateComment()
title: updateComment 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 updateComment 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版本。
---

# updateComment()

### 描述

@short: 通过评论 ID 更新卡片评论

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

- `id` - （可选）要更新的评论的 ID
- `cardId` - （必需）包含要更新评论的卡片 ID
- `comment` - （必需）要更新的评论配置对象。您可以在这里指定以下参数：
    - `id` - （可选）更新后的评论 ID
    - `cardId` - （可选）更新后的评论将被添加到的卡片 ID
    - `text` - （可选）更新后的评论文本
    - `date` - （可选）更新后的评论日期
    - `html` - （可选）更新后的评论的 HTML 标记。启用 [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type) 配置中的 `html` 属性，以显示 HTML 标记而非文本

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

**更新日志：** 该方法在 v1.4 版本中新增