---
sidebar_label: addLink()
title: addLink 方法
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 addLink 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天评估版本。
---

# addLink()

### 描述

@short: 在看板中插入一个新的链接。

### 用法

~~~jsx {}
addLink({
    id?: string | number,
    link: object
}): void;
~~~

### 参数

- `id` - （可选）新链接的标识符
- `link` - （必需）表示新链接的数据对象。完整的链接参数列表请参见 [这里](/api/config/js_kanban_links_config.md)

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
        masterId: 4,
        slaveId: 6,
        relation: "relatesTo",
    }
});
~~~

**更新日志:** 此方法自 v1.5 版本引入
