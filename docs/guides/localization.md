---
sidebar_label: Localization
title: Localization
description: You can learn about the localization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Localization

All the labels in the JavaScript Kanban interface can be localized. Just set up a new locale or tweak the existing one, then set it for Kanban and Toolbar (these have to be done separately).

## Default locale

By default, the interface uses the **English** locale:

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

        Send: "Send",
        "Would you like to delete this comment?":
            "Would you like to delete this comment?",
        "No comments yet": "No comments yet",
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

If you want your own locale, here's what you need to do:

- Make a custom locale (or update the default one) and fill in translations for all the labels you want to use (any language works)

- Set the new locale in **Kanban** using the [`locale`](/api/config/js_kanban_locale_config) property or the [`setLocale()`](/api/methods/js_kanban_setlocale_method) method
- Set the new locale in **Toolbar** using its [`locale`](/api/config/toolbar_locale_config) property or the [`setLocale()`](/api/methods/toolbar_setlocale_method) method

:::info
Since v1.2, Kanban doesn't export built-in locales anymore. If you need more locales, check out the [**github page**](https://github.com/web-widgets/wx-kanban-locales). You can also install the locale you want via *npm* and use it like this:
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

This code snippet shows how to switch between different locales:

<iframe src="https://snippet.dhtmlx.com/hrblf1mm?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
