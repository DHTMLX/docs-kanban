---
sidebar_label: update-row
title: update-row 事件
description: 了解 DHTMLX JavaScript 看板库中的 update-row 事件。浏览开发者指南、API 参考，尝试代码示例和在线演示，并获取 DHTMLX 看板的免费 30 天试用。
---

# update-row

### 描述

@short: 当行数据更新时触发

### 用法

~~~jsx {}
"update-row": ({
    id: string | number,
    row?: object,
    replace?: boolean,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**update-row** 事件的回调函数接收一个包含以下参数的对象:

- `id` - （必需）正在更新的行的标识符
- `row` - （可选）该行的新数据对象。完整的 **row** 参数列表请查看[**这里**](/api/config/js_kanban_rows_config.md)
- `replace` - （可选）控制数据是完全替换还是部分更新

:::note
将 `replace` 设置为 *true* 会用新数据完全覆盖旧数据。如果省略或设置为 false，则只更新指定的值。
:::

- `skipProvider` - （可选）控制是否抑制向服务器的请求

:::info
有关内部事件的管理，请参阅[**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "update-row" 事件
board.api.on("update-row", (obj) => {
    console.log(obj);
});
~~~

**更新日志**:
- **id** 和 **row** 参数于 v1.1 版本引入
- **replace** 参数于 v1.3 版本新增
