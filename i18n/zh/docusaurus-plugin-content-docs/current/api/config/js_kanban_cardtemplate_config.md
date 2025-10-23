---
sidebar_label: cardTemplate
title: cardTemplate 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 cardTemplate 配置。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天试用版 DHTMLX 看板。
---

# cardTemplate

### 描述

@short: 可选。返回并应用卡片的新 HTML 模板

### 用法

~~~jsx
function cardTemplate ({ cardFields, selected, dragging, cardShape }){
    return "HTML template of the card";
};
~~~

### 参数

回调函数接收一个包含以下参数的对象：

- `cardFields` - 卡片的数据对象
- `selected` - 卡片的选中状态
- `dragging` - 卡片的拖拽状态
- `cardShape` - 卡片的配置对象

:::important
如果您需要在卡片模板中包含上下文菜单，请在模板标记中指定自定义图标，并提供 `data-menu-id=${cardFields.id}` 表达式，如下面示例所示。
:::

### 示例

~~~jsx {1-23,28}
const cardTemplate = ({ cardFields, selected, dragging, cardShape }) => {
    const { label, color, id } = cardFields;
    if (selected) {
        return `
            <div class="custom-card" style="padding:20px">
                <div class="status-color" style="background:${color}"></div>
                <div data-menu-id=${id} >
                    <i class="wxi-dots-v"></i>
                </div>
                Selected:${label}
            </div>
        `;
    }
    return `
        <div class="custom-card" style="padding:20px">
            <div class="status-color" style="background:${color}"></div>
            <div data-menu-id=${id} >
                <i class="wxi-dots-v"></i>
            </div>
            ${label}
        </div>
    `;
}

new kanban.Kanban("#root", {
    cards,
    columns,
    cardTemplate: kanban.template(card => cardTemplate(card)),
    // other parameters
});
~~~

**更新日志：** 在 v1.4 版本中新增了显示上下文菜单的功能

**相关文档：** [自定义](guides/customization.md#custom-cards)

**相关示例：** [Kanban. Custom card](https://snippet.dhtmlx.com/8rhdq81d?tag=kanban)