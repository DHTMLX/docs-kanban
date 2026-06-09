---
sidebar_label: getCardHeight
title: getCardHeight Config API
description: 阅读 DHTMLX Kanban 的 getCardHeight 配置 API。了解如何设置返回卡片估算高度的函数。
---

# getCardHeight

### 描述

@short: 可选。返回卡片估算高度的函数

当未设置 [`cardHeight`](api/config/js_kanban_cardheight_config.md) 属性，且看板配置了 [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) 和 [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md) 时，组件将使用 `getCardHeight` 函数来估算卡片高度。估算的高度使组件能够在 DOM 中实际测量卡片之前正确渲染滚动条。

:::info
如果设置了 [`cardHeight`](api/config/js_kanban_cardheight_config.md) 属性，组件将使用固定高度，`getCardHeight` 不会被调用。使用 `cardHeight` 是将 `renderType: "lazy"` 与 `scrollType: "column"` 结合使用的推荐方式。
:::

### 用法

~~~jsx {}
getCardHeight?: (cardShape: object, card: object, cardWidth: number) => number;
~~~

### 参数

回调函数接收以下参数：

- `cardShape` - 卡片的配置对象（即 [`cardShape`](api/config/js_kanban_cardshape_config.md) 属性）
- `card` - 卡片的数据对象
- `cardWidth` - 卡片当前宽度（像素）

该函数必须返回一个数字——卡片的估算高度（像素）。

### 默认配置

默认情况下，组件使用内置函数根据 [`cardShape`](api/config/js_kanban_cardshape_config.md) 中声明的可见字段以及卡片中存储的数据来估算卡片高度。此默认方式适用于使用内置卡片布局的看板。

如果提供了自定义 [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md)，内置估算将无法预测渲染标记的实际高度。在这种情况下，请指定一个返回渲染模板高度的自定义 `getCardHeight` 函数，或改为设置静态的 [`cardHeight`](api/config/js_kanban_cardheight_config.md)。

### 示例

以下示例为使用自定义卡片模板的看板提供了自定义 `getCardHeight` 函数：

~~~jsx {15-22,27}
const cardTemplate = ({ cardFields }) => {
    const { label, description } = cardFields;
    return `
        <div class="custom-card" style="padding:20px">
            <div class="custom-label">${label}</div>
            <div class="custom-description">${description || ""}</div>
        </div>
    `;
};

new kanban.Kanban("#root", {
    cards,
    columns,
    renderType: "lazy",
    scrollType: "column",
    cardTemplate: kanban.template(card => cardTemplate(card)),
    getCardHeight: (cardShape, card, cardWidth) => {
        // 估算自定义模板的高度
        let height = 60; // 基础内边距 + 标签行
        if (card.description) {
            height += Math.ceil(card.description.length / 40) * 18;
        }
        return height;
    },
    // 其他参数
});
~~~

**相关文档：** [配置](guides/configuration.md#rendering-and-scrolling)
