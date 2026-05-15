---
sidebar_label: Lokalisierung
title: Lokalisierung
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Lokalisierung. Stöbern Sie in Entwicklerhandbüchern und der API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Lokalisierung

Sie können alle Beschriftungen in der Kanban-Oberfläche lokalisieren. Erstellen Sie eine neue Sprachumgebung oder passen Sie eine integrierte an, und wenden Sie sie dann auf Kanban und die Toolbar an.

## Standardmäßige Sprachumgebung {#default-locale}

Kanban verwendet standardmäßig die englische Sprachumgebung.

<details>
<summary>Vollständige englische Sprachumgebung</summary>

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
        clockFormat: 24
    },
    formats: { // Datums- und Uhrzeitformatmuster
        timeFormat: "%H:%i",
        dateFormat: "%m/%d/%Y",
        monthYearFormat: "%F %Y",
        yearFormat: "%Y"
    },
    core: { // Übersetzungen der Kernelemente
        ok: "OK",
        cancel: "Cancel"
    }
};
~~~

</details>

Ein Locale-Objekt enthält fünf Abschnitte auf oberster Ebene:

- `lang` — Sprachcode (z. B. `"en-US"`)
- `kanban` — UI-Beschriftungen (Schaltflächen, Dialoge, Suche, Sortieroptionen, Verknüpfungsbeziehungen)
- `calendar` — Beschriftungen und Einstellungen des Datumswählers (Monats- und Tagesnamen, Uhrzeitformat, Wochenbeginn, AM/PM-Markierungen)
- `formats` — Datums- und Uhrzeitformatmuster (`timeFormat`, `dateFormat`, `monthYearFormat`, `yearFormat`)
- `core` — gemeinsam genutzte Dialog-Schaltflächen (`ok`, `cancel`)

Ein Locale-Objekt muss Übersetzungen für alle Beschriftungen von Kanban und Toolbar enthalten.

## Integrierte Sprachumgebungen

Kanban stellt die folgenden integrierten Sprachumgebungen bereit:

- `"en"` — Englisch
- `"de"` — Deutsch
- `"cn"` — Chinesisch
- `"es"` — Spanisch
- `"fr"` — Französisch
- `"it"` — Italienisch
- `"jp"` — Japanisch
- `"pt"` — Portugiesisch
- `"ru"` — Russisch

Der Zugriff auf eine Sprachumgebung erfolgt über `kanban.locales["<key>"]`. Da die Toolbar eine separate Komponente ist, muss die Sprachumgebung unabhängig auf sie angewendet werden. Das folgende Code-Snippet wendet die Sprachumgebung `"cn"` bei der Initialisierung auf Kanban und die Toolbar an:

~~~jsx {3,8}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    locale: kanban.locales["cn"] // die integrierte "cn"-Sprachumgebung initial verwenden
});
// Toolbar erstellen
new kanban.Toolbar("#toolbar", {
    api: board.api,
    locale: kanban.locales["cn"]
});
~~~

Um die Sprachumgebung zur Laufzeit zu wechseln, rufen Sie [`setLocale()`](api/methods/js_kanban_setlocale_method.md) auf der Kanban-Instanz oder [`setLocale()`](api/methods/toolbar_setlocale_method.md) auf der Toolbar auf. Übergeben Sie `null` oder keine Argumente, um zur standardmäßigen englischen Sprachumgebung zurückzukehren:

~~~jsx
// Kanban auf Deutsch umschalten
board.setLocale(kanban.locales["de"]);
// zur standardmäßigen englischen Sprachumgebung zurücksetzen
board.setLocale();
~~~

## Eigene Sprachumgebung

Um eine eigene Sprachumgebung anzuwenden:

- erstellen Sie eine eigene Sprachumgebung (oder passen Sie die englische Standardumgebung an) und stellen Sie Übersetzungen für alle Textbeschriftungen bereit
- wenden Sie die neue Sprachumgebung für **Kanban** über [`locale`](api/config/js_kanban_locale_config.md) / [`setLocale()`](api/methods/js_kanban_setlocale_method.md) an
- wenden Sie die neue Sprachumgebung für die **Toolbar** über [`locale`](api/config/toolbar_locale_config.md) / [`setLocale()`](api/methods/toolbar_setlocale_method.md) an

Das folgende Code-Snippet definiert eine eigene Sprachumgebung und wendet sie auf Kanban und die Toolbar an:

~~~jsx
const myLocale = {
    lang: "en-US",
    kanban: {
        Save: "Save",
        Close: "Close",
        // andere Kanban-Beschriftungen mit Übersetzungen
    },
    calendar: {
        monthFull: ["January", "February", /* ... */],
        // andere Kalendereinstellungen
    },
    formats: {
        timeFormat: "%H:%i",
        dateFormat: "%m/%d/%Y",
        // andere Datums- und Uhrzeitformatmuster
    },
    core: {
        ok: "OK",
        cancel: "Cancel"
    }
};

const board = new kanban.Kanban("#root", { locale: myLocale });
new kanban.Toolbar("#toolbar", { api: board.api, locale: myLocale });
~~~

## Beispiel

Das folgende Beispiel demonstriert den Wechsel zwischen Sprachumgebungen:

<iframe src="https://snippet.dhtmlx.com/hrblf1mm?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
