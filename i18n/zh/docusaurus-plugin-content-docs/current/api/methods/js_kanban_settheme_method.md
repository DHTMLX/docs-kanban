---
sidebar_label: setTheme()
title: setTheme 方法
description: 了解 DHTMLX JavaScript Kanban 库中的 setTheme 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并免费下载 30 天试用版的 DHTMLX Kanban。
---

# setTheme()

### 描述

@short: 动态地为看板应用新的主题（重新初始化看板）。

### 用法

~~~jsx {}
setTheme({
    name?: string, // "material"（默认）| "willow" | "willow-dark"
    fonts?: boolean
}): void;
~~~

### 参数

- `name` - （可选）指定要应用于看板的主题。可用选项包括:
    - "material"（*默认*）
    - "willow"
    - "willow-dark"
- `fonts` - （可选）控制是否从 CDN 加载字体（wxi 字体）。

:::tip
您可以使用 [`theme`](../../config/js_kanban_theme_config) 属性设置初始主题。
:::

### 示例

~~~jsx {6}
// 创建看板
const board = new kanban.Kanban("#root", {
    // 初始配置参数
});
// 应用 "willow" 主题
board.setTheme({ name: "willow", font: false });
~~~

**更新日志:** 此方法自 v1.6 版本引入

**相关文章:** [样式设定](/guides/stylization)

**相关示例:**
- [Kanban. 使用主题](https://snippet.dhtmlx.com/jnw54xif?tag=kanban)
- [Kanban. 作为样式表引入主题](https://snippet.dhtmlx.com/k3iw6ti0?tag=kanban)
- [Kanban. 通过 CSS 类更改主题](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)
