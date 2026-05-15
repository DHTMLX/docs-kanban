---
sidebar_label: 本地化
title: 本地化
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解本地化。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费评估版。
---

# 本地化

您可以对 Kanban 界面中的所有标签进行本地化。创建一个新的语言环境或修改内置语言环境，然后将该语言环境分别应用到 Kanban 和 Toolbar。

## 默认语言环境 {#default-locale}

Kanban 默认使用英语语言环境。

<details>
<summary>完整英语语言环境</summary>

~~~jsx
const en = {
    lang: "en-US",
    kanban: {
        Save: "Save",
        Close: "Close",
        Delete: "Delete",
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
        "Add a comment...": "Add a comment...",
        "Edit card": "Edit card",
        Edit: "Edit",
        Undo: "Undo",
        Redo: "Redo",

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
        clockFormat: 24
    },
    formats: { // 日期/时间格式模式
        timeFormat: "%H:%i",
        dateFormat: "%m/%d/%Y",
        monthYearFormat: "%F %Y",
        yearFormat: "%Y"
    },
    core: { // 核心元素的翻译
        ok: "OK",
        cancel: "Cancel"
    }
};
~~~

</details>

语言环境对象包含五个顶级部分：

- `lang` — 语言代码（例如 `"en-US"`）
- `kanban` — 界面标签（按钮、对话框、搜索、排序选项、链接关系）
- `calendar` — 日期选择器标签和设置（月份和星期名称、时钟格式、周起始日、AM/PM 标记）
- `formats` — 日期和时间格式模式（`timeFormat`、`dateFormat`、`monthYearFormat`、`yearFormat`）
- `core` — 共享对话框按钮（`ok`、`cancel`）

语言环境对象必须包含所有 Kanban 和 Toolbar 标签的翻译。

## 内置语言环境

Kanban 导出了以下内置语言环境：

- `"en"` — 英语
- `"de"` — 德语
- `"cn"` — 中文
- `"es"` — 西班牙语
- `"fr"` — 法语
- `"it"` — 意大利语
- `"jp"` — 日语
- `"pt"` — 葡萄牙语
- `"ru"` — 俄语

通过 `kanban.locales["<key>"]` 访问语言环境。Toolbar 是一个独立的组件，因此需要单独为其应用语言环境。以下代码片段在初始化时将 `"cn"` 语言环境同时应用到 Kanban 和 Toolbar：

~~~jsx {3,8}
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    locale: kanban.locales["cn"] // 初始使用内置的 "cn" 语言环境
});
// 创建 Toolbar
new kanban.Toolbar("#toolbar", {
    api: board.api,
    locale: kanban.locales["cn"]
});
~~~

要在运行时切换语言环境，请在 Kanban 实例上调用 [`setLocale()`](api/methods/js_kanban_setlocale_method.md)，或在 Toolbar 上调用 [`setLocale()`](api/methods/toolbar_setlocale_method.md)。传入 `null` 或不传参数可重置为默认英语语言环境：

~~~jsx
// 将 Kanban 切换为德语
board.setLocale(kanban.locales["de"]);
// 重置为默认英语语言环境
board.setLocale();
~~~

## 自定义语言环境

要应用自定义语言环境：

- 创建一个自定义语言环境（或修改默认英语语言环境），并为所有文本标签提供翻译
- 通过 [`locale`](api/config/js_kanban_locale_config.md) / [`setLocale()`](api/methods/js_kanban_setlocale_method.md) 将新语言环境应用到 **Kanban**
- 通过 [`locale`](api/config/toolbar_locale_config.md) / [`setLocale()`](api/methods/toolbar_setlocale_method.md) 将新语言环境应用到 **Toolbar**

以下代码片段定义了一个自定义语言环境并将其同时应用到 Kanban 和 Toolbar：

~~~jsx
const myLocale = {
    lang: "en-US",
    kanban: {
        Save: "Save",
        Close: "Close",
        // other Kanban labels with translations
    },
    calendar: {
        monthFull: ["January", "February", /* ... */],
        // other calendar settings
    },
    formats: {
        timeFormat: "%H:%i",
        dateFormat: "%m/%d/%Y",
        // other date/time format patterns
    },
    core: {
        ok: "OK",
        cancel: "Cancel"
    }
};

const board = new kanban.Kanban("#root", { locale: myLocale });
new kanban.Toolbar("#toolbar", { api: board.api, locale: myLocale });
~~~

## 示例

以下代码片段演示了语言环境切换：

<iframe src="https://snippet.dhtmlx.com/hrblf1mm?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
