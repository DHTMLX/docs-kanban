---
sidebar_label: Localization
title: Localization
description: You can learn about the localization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Localization

All the labels in the JavaScript Kanban interface can be customized for different languages. To do this, it's possible to either create a new locale or tweak an existing one, then set it up for both Kanban and Toolbar (these need to be done separately).

## Default locale

By default, Kanban uses the **English** locale:

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

## Built-in locales

Kanban comes with several ready-to-use locales:

**"en"** - English  
**"de"** - German  
**"cn"** - Chinese  
**"es"** - Spanish  
**"fr"** - French  
**"it"** - Italian  
**"jp"** - Japanese  
**"pt"** - Portuguese  
**"ru"** - Russian  

A built-in locale can be imported and set up like this:

```jsx {5}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    locale: kanban.locales["cn"] // the built-it "cn" locale will be set initially
    // other parameters
});

// apply the built-in "de" locale to Kanban
board.setLocale(kanban.locales["de"]);
```

## Custom locale

For a custom locale, a few steps are needed:

- Make a new locale (or change the default one) and translate all text labels as needed

- Set the new locale for **Kanban** using its [`locale`](api/config/js_kanban_locale_config.md) property or the [`setLocale()`](api/methods/js_kanban_setlocale_method.md) method
- Set the new locale for **Toolbar** using its [`locale`](api/config/toolbar_locale_config.md) property or the [`setLocale()`](api/methods/toolbar_setlocale_method.md) method

## Example

Here's a snippet that shows how to switch between different locales:

<iframe src="https://snippet.dhtmlx.com/hrblf1mm?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>