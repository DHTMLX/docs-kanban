---
sidebar_label: 本地化
title: 本地化
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解本地化。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费评估版。
---

# 本地化

您可以对 JavaScript Kanban 界面中的所有标签进行本地化。为此，您需要创建一个新的语言环境或修改内置语言环境，并分别应用到 Kanban 和 Toolbar（工具栏）。

## 默认语言环境

**英语** 是默认使用的语言环境：

~~~jsx
const en = {
    kanban: {
        Save: "Save",
        Close: "Close",
        Delete: "Delete",
        Name: "Name",
        Description: "Description",
        Type: "Type",
        "Start date": "Start date",
        "End date": "End date",
        Files: "Files",
        B: "B",
        KB: "KB",
        MB: "MB",
        GB: "GB",
        TB: "TB",
        PB: "PB",
        EB: "EB",
        "Make cover": "Make cover",
        "Remove cover": "Remove cover",
        Comments: "Comments",
        Links: "Links",
        Result: "Result",
        "No results": "No results",
        Search: "Search",
        "Search in": "Search in",
        "Add new row": "Add new row",
        "Add new column": "Add new column",
        "Add new card...": "Add new card...",
        "Add new card": "Add new card",
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

        "Add link": "Add link",
        Duplicate: "Duplicate",
        "Duplicate of": "Duplicate of",
        "Relates to": "Relates to",
        "Depends on": "Depends on",
        "Is required for": "Is required for",
        Duplicates: "Duplicates",
        "Is duplicated by": "Is duplicated by",
        "Is parent for": "Is parent for",
        "Is subtask of": "Is subtask of",

        Cancel: "Cancel",
        "Link task": "Link task",
        "Select a relation": "Select a relation",
        "Select a task": "Select a task",

        Send: "Send",
        "Would you like to delete this comment?":
            "Would you like to delete this comment?",
        "No comments yet": "No comments yet",
        "Would you like to delete this card?":
            "Would you like to delete this card?",
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

## 内置语言环境

Kanban 导出了以下语言环境：

**"en"** - 英语  
**"de"** - 德语  
**"cn"** - 中文  
**"es"** - 西班牙语  
**"fr"** - 法语  
**"it"** - 意大利语  
**"jp"** - 日语  
**"pt"** - 葡萄牙语  
**"ru"** - 俄语  

您可以通过以下方式导出并应用内置语言环境：

```jsx {5}
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    locale: kanban.locales["cn"] // 初始设置为内置的 "cn" 语言环境
    // 其他参数
});

// 将内置的 "de" 语言环境应用到 Kanban
board.setLocale(kanban.locales["de"]);
```

## 自定义语言环境

要应用自定义语言环境，您需要：

- 创建一个自定义语言环境（或修改默认语言环境），并为所有文本标签提供翻译（可以是任何您需要的语言）

- 通过 [`locale`](api/config/js_kanban_locale_config.md) 属性或 [`setLocale()`](api/methods/js_kanban_setlocale_method.md) 方法将新语言环境应用到 **Kanban**
- 通过 [`locale`](api/config/toolbar_locale_config.md) 属性或 [`setLocale()`](api/methods/toolbar_setlocale_method.md) 方法将新语言环境应用到 **Toolbar**

## 示例

在下面的代码片段中，您可以查看如何在多个语言环境之间切换：

<iframe src="https://snippet.dhtmlx.com/hrblf1mm?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>