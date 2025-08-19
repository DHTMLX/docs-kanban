---
sidebar_label: add-link
title: add-link 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 add-link 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# add-link

### 描述

@short: 当添加新链接时触发

### 用法

~~~jsx {}
"add-link": ({
    id?: string | number,
    link: object,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**add-link** 事件的回调函数接收一个包含以下属性的对象:

- `id` - （可选）分配给新链接的 ID
- `link` - （必需）表示新链接的数据对象。您可以在[这里](/api/config/js_kanban_links_config.md)找到链接参数的完整列表
- `skipProvider` - （可选）控制是否阻止向服务器发送请求

:::info
要管理内部事件，您可以使用[**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
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

**更新日志:** 此事件首次引入于 v1.4
