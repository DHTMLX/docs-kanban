---
sidebar_label: add-link
title: add-link 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 add-link 事件。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版。
---

# add-link

### 描述

@short: 添加新链接时触发

### 用法

~~~jsx {}
"add-link": ({
    id?: string | number,
    link: object,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**add-link** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （可选）新链接的 ID
- `link` - （必需）新链接的数据对象。链接参数的完整列表请参见 [这里](api/config/js_kanban_links_config.md)
- `skipProvider` - （可选）启用或禁用阻止请求发送到服务器

:::info
处理内部事件时，您可以使用 [**事件总线方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {8-10}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links
});
// 订阅 "add-link" 事件
board.api.on("add-link", (obj) => {
    console.log(obj.link.masterId);
});
~~~

**更新日志：** 该事件在 v1.4 中新增