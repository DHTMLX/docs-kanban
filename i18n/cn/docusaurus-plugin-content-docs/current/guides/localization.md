---
sidebar_label: 本地化
title: 本地化
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解本地化。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Kanban 免费 30 天评估版。
---

# 本地化

JavaScript Kanban 界面中的所有标签都可以进行本地化。您只需设置一个新的 locale 或调整现有的 locale，然后分别为 Kanban 和 Toolbar 设置本地化（这两个组件需要分别设置）。

## 默认语言环境

默认情况下，界面使用 **英语** 语言环境:

~~~jsx
const en = {
    kanban: { // Kanban 标签的翻译
        Save: "Save",
        Send: "Send",
        Close: "Close",
        Delete: "Delete",
        Name: "Name",
        Description: "Description",
        Type: "Type",
        "Start date": "Start date",
        "End date": "End date",

        Result: "Result",
        "No results": "No results",
        Search: "Search",
        "Search in": "Search in",
        "Add new row": "Add new row",
        "Add new column": "Add new column",
        "Add new card": "Add new card",
        "Add new card...": "Add new card...",
        "Edit card": "Edit card",
        Edit: "Edit",

        Everywhere: "Everywhere",
        Label: "Label",
        Status: "Status",
        Color: "Color",
        Date: "Date",
        Priority: "Priority",
        Progress: "Progress",
        Users: "Users",

        Untitled: "Untitled",
        Rename: "Rename",
        "Move up": "Move up",
        "Move down": "Move down",
        "Move left": "Move left",
        "Move right": "Move right",
        Sort: "Sort",
        "Label (a-z)": "Label (a-z)",
        "Label (z-a)": "Label (z-a)",
        "Description (a-z)": "Description (a-z)",
        "Description (z-a)": "Description (z-a)",

        Duplicate: "Duplicate",
        "Duplicate of": "Duplicate of",

        "Relates to": "Relates to",
        "Depends on": "Depends on",
        "Is required for": "Is required for",
        Duplicates: "Duplicates",
        "Is duplicated by": "Is duplicated by",
        "Parent for": "Parent for",
        "SubTask of": "SubTask of",

        Cancel: "Cancel",
        "Link task": "Link task",
        "Select a relation": "Select a relation",
        "Select a task": "Select a task",

        "No comments yet": "No comments yet",
        "Would you like to delete this comment?":
            "Would you like to delete this comment?",
        "Would you like to delete this card?":
            "Would you like to delete this card?"
    },
    calendar: { // 日历的翻译和设置
        monthFull: [
            "January", "February", "March", "April",
            "May", "June", "July", "August", 
            "September", "October", "November", "December"
        ],
        monthShort: [
            "Jan", "Feb", "Mar", "Apr",
            "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"
        ],
        dayFull: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        hours: "Hours",
        minutes: "Minutes",
        done: "Done",
        clear: "Clear",
        today: "Today",
        am: ["am", "AM"],
        pm: ["pm", "PM"],
        weekStart: 7,
        timeFormat: 24
    },
    core: { // 核心元素的翻译
        ok: "OK",
        cancel: "Cancel"
    }
};
~~~

## 自定义语言环境

如果您想使用自己的语言环境，请按照以下步骤操作:

- 创建自定义 locale（或更新默认 locale），并为您需要使用的所有标签填写翻译（支持任何语言）

- 在 **Kanban** 中通过 [`locale`](/api/config/js_kanban_locale_config.md) 属性或 [`setLocale()`](/api/methods/js_kanban_setlocale_method.md) 方法设置新的 locale
- 在 **Toolbar** 中通过其 [`locale`](/api/config/toolbar_locale_config.md) 属性或 [`setLocale()`](/api/methods/toolbar_setlocale_method.md) 方法设置新的 locale

:::info
自 v1.2 起，Kanban 不再导出内置语言环境。如果您需要更多语言环境，请访问 [**github page**](https://github.com/web-widgets/wx-kanban-locales)。您也可以通过 *npm* 安装所需的语言环境并像这样使用:
~~~js
import { de } from "@xbs/wx-kanban-locales"
import { de as coreDe } from "@xbs/wx-core-locales"

new kanban.Kanban({
    // 其他属性
    locale: { ...coreDe, ...de },
});
~~~
:::

## 示例

以下代码片段展示了如何在不同语言环境之间切换:

<iframe src="https://snippet.dhtmlx.com/hrblf1mm?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
