---
sidebar_label: Localization
title: Localization
description: You can learn about the localization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Localization

You can localize all labels in the Kanban interface. Create a new locale or modify a built-in one, then apply the locale to both Kanban and the Toolbar.

## Default locale

Kanban applies the English locale by default.

<details>
<summary>Full English locale</summary>

~~~jsx
const en = {
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
        clockFormat: 24
    },
    formats: { // date/time format patterns
        timeFormat: "%H:%i",
        dateFormat: "%m/%d/%Y",
        monthYearFormat: "%F %Y",
        yearFormat: "%Y"
    },
    core: { // translations of the core elements
        lang: "en-US",
        ok: "OK",
        cancel: "Cancel"
    }
};
~~~

</details>

A locale object contains four top-level sections:

- `kanban` — UI labels (buttons, dialogs, search, sort options, link relations)
- `calendar` — date picker labels and settings (month and day names, clock format, week start, AM/PM markers)
- `formats` — date and time format patterns (`timeFormat`, `dateFormat`, `monthYearFormat`, `yearFormat`)
- `core` — shared dialog buttons (`ok`, `cancel`) and language code (`lang`)

A locale object must include translations for every Kanban and Toolbar label.

## Built-in locales

Kanban exports the following built-in locales:

- `"en"` — English
- `"de"` — German
- `"cn"` — Chinese
- `"es"` — Spanish
- `"fr"` — French
- `"it"` — Italian
- `"jp"` — Japanese
- `"pt"` — Portuguese
- `"ru"` — Russian

Access a locale through `kanban.locales["<key>"]`. The Toolbar is a separate component, so apply the locale to the Toolbar independently. The following code snippet applies the `"cn"` locale to both Kanban and the Toolbar at initialization:

~~~jsx {3,8}
// create Kanban
const board = new kanban.Kanban("#root", {
    locale: kanban.locales["cn"] // use the built-in "cn" locale initially
});
// create Toolbar
new kanban.Toolbar("#toolbar", {
    api: board.api,
    locale: kanban.locales["cn"]
});
~~~

To switch the locale at runtime, call [`setLocale()`](api/methods/js_kanban_setlocale_method.md) on the Kanban instance or [`setLocale()`](api/methods/toolbar_setlocale_method.md) on the Toolbar. Pass `null` or no arguments to reset to the default English locale:

~~~jsx
// switch Kanban to German
board.setLocale(kanban.locales["de"]);
// reset to the default English locale
board.setLocale();
~~~

## Custom locale

To apply a custom locale:

- create a custom locale (or modify the default English one) and provide translations for all text labels
- apply the new locale to **Kanban** through [`locale`](api/config/js_kanban_locale_config.md) / [`setLocale()`](api/methods/js_kanban_setlocale_method.md)
- apply the new locale to the **Toolbar** through [`locale`](api/config/toolbar_locale_config.md) / [`setLocale()`](api/methods/toolbar_setlocale_method.md)

The following code snippet defines and applies a custom locale to both Kanban and the Toolbar:

~~~jsx
const myLocale = {
    kanban: {
        Save: "Save",
        Close: "Close",
        // other Kanban labels with translations
    },
    calendar: {
        monthFull: ["January", "February", /* ... */],
        // other calendar settings
    },
    core: {
        ok: "OK",
        cancel: "Cancel"
    }
};

const board = new kanban.Kanban("#root", { locale: myLocale });
new kanban.Toolbar("#toolbar", { api: board.api, locale: myLocale });
~~~

## Example

The following snippet demonstrates locale switching:

<iframe src="https://snippet.dhtmlx.com/hrblf1mm?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
