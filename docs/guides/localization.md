---
sidebar_label: Localization
title: Localization
description: You can learn about the localization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Localization

You can localize all labels in the interface of JavaScript Kanban. For this you need to create a new locale or modify a built-in one and apply it to Kanban and Toolbar (*separately*).

## Default locale

The **English** locale is used by default:

~~~jsx
const en = {
    kanban: { // translations of the Kanban labels
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
            "Would you like to delete this card?",
    },
    calendar: { // translations and settings of the calendar
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
    core: { // translations of the core elements
        ok: "OK",
        cancel: "Cancel"
    }
};
~~~

## Custom locale

To apply a custom locale you need to:

- create a custom locale (or modify the default one) and provide translations for all text labels (it can be any language you need)

- apply the new locale to **Kanban** via its [`locale`](api/config/js_kanban_locale_config.md) property or use the [`setLocale()`](api/methods/js_kanban_setlocale_method.md) method
- apply the new locale to **Toolbar** via its [`locale`](api/config/toolbar_locale_config.md) property or use the [`setLocale()`](api/methods/toolbar_setlocale_method.md) method

:::info
Starting from v1.2 Kanban doesn't export built-in locales. But you can find more locales on the corresponding [**github page**](https://github.com/web-widgets/wx-kanban-locales). It is also possible to install the desired locale via *npm* and apply it in the following way:
~~~js
import { de } from "@xbs/wx-kanban-locales"
import { de as coreDe } from "@xbs/wx-core-locales"

new kanban.Kanban({
    // other properties
    locale: { ...coreDe, ...de },
});
~~~
:::

## Example

In this snippet you can see how to switch through several locales:

<iframe src="https://snippet.dhtmlx.com/hrblf1mm?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
