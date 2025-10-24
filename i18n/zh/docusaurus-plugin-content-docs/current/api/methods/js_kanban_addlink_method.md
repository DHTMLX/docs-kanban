---
sidebar_label: addLink()
title: addLink 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 addLink 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# addLink()

### 描述

@short: 在看板中添加一个新的链接

### 用法

~~~jsx {}
addLink({
    id?: string | number,
    link: object
}): void;
~~~

### 参数

- `id` - （可选）新链接的 ID
- `link` - （必填）新链接的数据对象。链接参数的完整列表可以在[这里](api/config/js_kanban_links_config.md)找到

### 示例

~~~jsx {7-14}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 添加新链接 
board.addLink({
    id: 3,
    link: {
        source: 4,
        target: 6,
        relation: "relatesTo",
    }
});
~~~

**更新日志：** 该方法在 v1.5 版本中添加