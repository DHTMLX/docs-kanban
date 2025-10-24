---
sidebar_label: setTheme()
title: setTheme 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 setTheme 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX 看板的 30 天试用版本。
---

# setTheme()

### 描述

@short: 动态应用新主题到看板（带重新初始化）

### 用法

~~~jsx {}
setTheme({
    name?: string, // "material"（默认）| "willow" | "willow-dark"
    fonts?: boolean
}): void;
~~~

### 参数

- `name` - （可选）要应用到看板的主题名称。共有 3 种可用主题：
    - "material"（*默认*）
    - "willow"
    - "willow-dark"
- `fonts` - （可选）启用或禁用从 CDN 加载字体（wxi 字体）

:::tip
要指定初始主题，可以使用 [`theme`](api/config/js_kanban_theme_config.md) 属性。
:::

### 示例

~~~jsx {6}
// 创建看板
const board = new kanban.Kanban("#root", {
    // 初始配置参数
});
// 设置 "willow" 主题
board.setTheme({ name: "willow", font: false });
~~~

**更新日志：** 该方法自 v1.6 版本起新增

**相关文档：** [样式设置](guides/stylization.md)

**相关示例：** [看板。通过 CSS 类更改主题](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)