---
sidebar_label: updateCard()
title: updateCard 方法
description: 探索 DHTMLX JavaScript 看板库文档中的 updateCard 方法。查看开发者指南、API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 免费 30 天试用版。
---

# updateCard()

### 描述

@short: 通过卡片的 ID 更新卡片数据

### 用法

~~~jsx {}
updateCard({
    id: string | number,
    card?: object,
    replace?: boolean
}): void;
~~~

### 参数

- `id` - （必填）要更新的卡片的 ID
- `card` - （可选）包含卡片更新数据的对象。卡片参数的完整列表请查看 [**这里**](/api/config/js_kanban_cards_config.md)
- `replace` - （可选）控制是否完全替换已有数据

:::note
将 `replace` 设置为 *true* 会用新数据完全覆盖旧数据。否则，只会更新您提供的属性。
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

**更新日志**:
- **id** 和 **card** 参数在 v1.1 中引入
- **replace** 参数在 v1.3 中添加
