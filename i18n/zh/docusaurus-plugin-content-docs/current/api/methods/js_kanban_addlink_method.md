---
sidebar_label: addLink()
title: addLink 方法 API
description: 阅读 DHTMLX Kanban 的 addLink 方法 API。了解如何在卡片之间添加新链接。
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