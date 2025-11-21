---
sidebar_label: Lokalisierung
title: Lokalisierung
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Lokalisierung. Stöbern Sie in Entwicklerhandbüchern und der API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Lokalisierung

Sie können alle Beschriftungen in der Oberfläche von JavaScript Kanban lokalisieren. Dazu müssen Sie entweder eine neue Sprachumgebung erstellen oder eine integrierte anpassen und sie auf Kanban und Toolbar (*separat*) anwenden.

## Standardmäßige Sprachumgebung

Die **englische** Sprachumgebung wird standardmäßig verwendet:

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
    calendar: { // Übersetzungen und Einstellungen des Kalenders
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
    core: { // Übersetzungen der Kernelemente
        ok: "OK",
        cancel: "Cancel"
    }
};
~~~

## Integrierte Sprachumgebungen

Kanban stellt die folgenden Sprachumgebungen bereit:

**"en"** - Englisch  
**"de"** - Deutsch  
**"cn"** - Chinesisch  
**"es"** - Spanisch  
**"fr"** - Französisch  
**"it"** - Italienisch  
**"jp"** - Japanisch  
**"pt"** - Portugiesisch  
**"ru"** - Russisch  

Sie können eine integrierte Sprachumgebung wie folgt exportieren und anwenden:

```jsx {5}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    locale: kanban.locales["cn"] // die integrierte "cn"-Sprachumgebung wird initial gesetzt
    // weitere Parameter
});

// die integrierte "de"-Sprachumgebung auf Kanban anwenden
board.setLocale(kanban.locales["de"]);
```

## Eigene Sprachumgebung

Um eine eigene Sprachumgebung zu verwenden, müssen Sie:

- eine eigene Sprachumgebung erstellen (oder die Standardumgebung anpassen) und Übersetzungen für alle Textbeschriftungen bereitstellen (es kann jede gewünschte Sprache sein)

- die neue Sprachumgebung für **Kanban** über die [`locale`](api/config/js_kanban_locale_config.md)-Eigenschaft oder mit der [`setLocale()`](api/methods/js_kanban_setlocale_method.md)-Methode anwenden
- die neue Sprachumgebung für **Toolbar** über die [`locale`](api/config/toolbar_locale_config.md)-Eigenschaft oder mit der [`setLocale()`](api/methods/toolbar_setlocale_method.md)-Methode anwenden

## Beispiel

Im folgenden Beispiel sehen Sie, wie Sie zwischen mehreren Sprachumgebungen wechseln können:

<iframe src="https://snippet.dhtmlx.com/hrblf1mm?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>