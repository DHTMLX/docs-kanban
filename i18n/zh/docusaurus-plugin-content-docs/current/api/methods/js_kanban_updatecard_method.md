---
sidebar_label: updateCard()
title: updateCard 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 updateCard 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# updateCard()

### 描述

@short: 通过卡片 ID 更新卡片数据

### 用法

~~~jsx {}
updateCard({
    id: string | number,
    card?: object,
    replace?: boolean
}): void;
~~~

### 参数

- `id` - （必填）要更新的卡片 ID
- `card` - （可选）卡片的新数据对象。卡片参数的完整列表可在[**此处**](api/config/js_kanban_cards_config.md)找到
- `replace` - （可选）启用/禁用完全替换数据

    :::note
    如果将 `replace` 参数设置为 *true*，旧数据将被新数据完全替换。否则，该方法只会更新您传递的值。
    :::

### 示例

~~~jsx {7-16}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 使用 ID 为 1 的卡片更新数据
board.updateCard({
    id: 1,
    card: {
        label: "New Label",
        row: "feature",
        column: "inprogress",
        /*其他参数*/
    },
    replace: true
});
~~~

**更新日志**：
- v1.1 版本新增了 **id** 和 **card** 参数
- v1.3 版本新增了 **replace** 参数