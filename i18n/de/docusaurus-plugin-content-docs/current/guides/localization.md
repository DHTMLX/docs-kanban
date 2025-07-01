---
sidebar_label: Lokalisierung
title: Lokalisierung
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Lokalisierung. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Lokalisierung

Alle Beschriftungen in der JavaScript Kanban-Oberfläche können lokalisiert werden. Legen Sie einfach eine neue Sprache an oder passen Sie eine bestehende an und setzen Sie diese dann separat für Kanban und Toolbar (diese müssen jeweils einzeln eingestellt werden).

## Standard-Locale

Standardmäßig verwendet die Oberfläche das **Englisch**-Locale:

~~~jsx
const en = {
    kanban: { // Übersetzungen der Kanban-Beschriftungen
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

## Benutzerdefiniertes Locale

Wenn Sie ein eigenes Locale verwenden möchten, gehen Sie wie folgt vor:

- Erstellen Sie ein benutzerdefiniertes Locale (oder passen Sie das Standard-Locale an) und tragen Sie Übersetzungen für alle gewünschten Beschriftungen ein (jede Sprache ist möglich).

- Setzen Sie das neue Locale in **Kanban** über die [`locale`](/api/config/js_kanban_locale_config.md)-Eigenschaft oder die [`setLocale()`](/api/methods/js_kanban_setlocale_method.md)-Methode.
- Setzen Sie das neue Locale in der **Toolbar** über die [`locale`](/api/config/toolbar_locale_config.md)-Eigenschaft oder die [`setLocale()`](/api/methods/toolbar_setlocale_method.md)-Methode.

:::info
Seit v1.2 exportiert Kanban keine eingebauten Locales mehr. Falls Sie weitere Sprachen benötigen, besuchen Sie die [**github page**](https://github.com/web-widgets/wx-kanban-locales). Sie können das gewünschte Locale auch per *npm* installieren und wie folgt verwenden:
~~~js
import { de } from "@xbs/wx-kanban-locales"
import { de as coreDe } from "@xbs/wx-core-locales"

new kanban.Kanban({
    // weitere Eigenschaften
    locale: { ...coreDe, ...de },
});
~~~
:::

## Beispiel

Der folgende Codeausschnitt zeigt, wie Sie zwischen verschiedenen Locales wechseln können:

<iframe src="https://snippet.dhtmlx.com/hrblf1mm?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
