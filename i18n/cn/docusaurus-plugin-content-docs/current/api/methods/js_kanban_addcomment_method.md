---
sidebar_label: addComment()
title: addComment 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 addComment 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# addComment()

### 描述

@short: 使用卡片的 ID 向指定卡片插入一个新的评论。

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

- `id` - （可选）新评论的唯一标识符
- `cardId` - （必需）将添加评论的卡片的标识符
- `comment` - （必需）定义新评论的对象。可用字段包括:
    - `text` - （可选）评论的纯文本内容
    - `date` - （可选）评论的时间戳
    - `html` - （可选）格式化为 HTML 的评论内容。要显示 HTML 内容而非纯文本，必须在 [`editorShape`](/api/config/js_kanban_editorshape_config/#--comments-类型参数) 配置中启用 `html` 选项

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

**更新日志:** 此方法自版本 1.4 起引入
