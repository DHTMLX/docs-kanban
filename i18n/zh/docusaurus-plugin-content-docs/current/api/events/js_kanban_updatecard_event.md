---
sidebar_label: update-card
title: update-card 事件
description: 探索 DHTMLX JavaScript 看板库中的 update-card 事件文档。查找开发者指南、API 参考、代码示例、在线演示及 DHTMLX 看板的免费 30 天试用。
---

# update-card

### 描述

@short: 当卡片数据更新时触发

### 用法

~~~jsx {}
"update-card": ({
    id: string | number,
    card?: object,
    replace?: boolean,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**update-card** 事件的回调函数接收一个包含以下属性的对象:

- `id` - （必需）要更新的卡片标识符
- `card` - （可选）包含新卡片数据的对象。完整的 **card** 属性列表请查看[**这里**](/api/config/js_kanban_cards_config.md)
- `replace` - （可选）决定是否完全替换现有数据

:::note
当 `replace` 设置为 *true* 时，旧数据将被新数据完全覆盖。否则，仅更新指定的值。
:::

- `skipProvider` - （可选）控制是否将更新发送到服务器

:::info
若需管理内部事件，可以使用[**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "update-card" 事件
board.api.on("update-card", (obj) => {
    console.log(obj);
});
~~~

**更新日志**:
- v1.1 版本新增了 **id** 和 **card** 参数
- v1.3 版本新增了 **replace** 参数
