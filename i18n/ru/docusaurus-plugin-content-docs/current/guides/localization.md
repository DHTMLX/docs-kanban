---
sidebar_label: Локализация
title: Локализация
description: Вы можете узнать о локализации в документации к DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# Локализация

Вы можете локализовать все надписи в интерфейсе JavaScript Kanban. Для этого необходимо создать новую локаль или изменить встроенную и применить её к Kanban и Toolbar (*отдельно*).

## Локаль по умолчанию

По умолчанию используется локаль **English**:

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
    calendar: { // переводы и настройки календаря
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
    core: { // переводы основных элементов
        ok: "OK",
        cancel: "Cancel"
    }
};
~~~

## Встроенные локали

Kanban экспортирует следующие локали:

**"en"** - English  
**"de"** - German  
**"cn"** - Chinese  
**"es"** - Spanish  
**"fr"** - French  
**"it"** - Italian  
**"jp"** - Japanese  
**"pt"** - Portugese  
**"ru"** - Russian  

Вы можете экспортировать и применить встроенную локаль следующим образом:

```jsx {5}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    locale: kanban.locales["cn"] // изначально будет установлена встроенная локаль "cn"
    // другие параметры
});

// применяем встроенную локаль "de" к Kanban
board.setLocale(kanban.locales["de"]);
```

## Пользовательская локаль

Чтобы применить пользовательскую локаль, нужно:

- создать пользовательскую локаль (или изменить локаль по умолчанию) и указать переводы для всех текстовых меток (это может быть любой нужный вам язык)

- применить новую локаль к **Kanban** через свойство [`locale`](api/config/js_kanban_locale_config.md) или использовать метод [`setLocale()`](api/methods/js_kanban_setlocale_method.md)
- применить новую локаль к **Toolbar** через свойство [`locale`](api/config/toolbar_locale_config.md) или использовать метод [`setLocale()`](api/methods/toolbar_setlocale_method.md)

## Пример

В этом примере показано, как переключаться между несколькими локалями:

<iframe src="https://snippet.dhtmlx.com/hrblf1mm?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>