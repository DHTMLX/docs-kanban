---
sidebar_label: cardTemplate
title: cardTemplate 配置
description: 了解 DHTMLX JavaScript 看板库中 cardTemplate 配置的全部内容。探索开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# cardTemplate

### 描述

@short: 可选。生成并应用卡片的自定义 HTML 模板。

### 用法

~~~jsx
function cardTemplate ({ cardFields, selected, dragging, cardShape }){
    return "卡片的 HTML 模板";
};
~~~

### 参数

回调函数接收一个包含以下属性的对象:

- `cardFields` - 包含卡片的数据
- `selected` - 指示卡片是否被选中
- `dragging` - 指示卡片是否正在被拖拽
- `cardShape` - 卡片的配置对象

:::important
要为卡片模板添加上下文菜单，请在标记中包含自定义图标，并使用 `data-menu-id=${cardFields.id}` 属性，如下面示例所示。
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
    // 其他参数
});
~~~

**更新日志:** 上下文菜单支持自 v1.4 版本起引入

**相关文章:** [自定义](/guides/customization#自定义卡片)

**相关示例:** [Kanban. Custom card](https://snippet.dhtmlx.com/8rhdq81d?tag=kanban)
