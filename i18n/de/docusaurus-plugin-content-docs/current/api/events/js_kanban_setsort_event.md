---
sidebar_label: set-sort
title: set-sort Ereignis
description: Sie können im Handbuch der DHTMLX JavaScript Kanban-Bibliothek mehr über das set-sort Ereignis erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# set-sort

### Beschreibung

@short: Wird ausgelöst, wenn Karten sortiert werden

### Verwendung

~~~jsx {}
"set-sort": (
    {
        by?: string | ((card: object) => any),
        dir?: "asc" | "desc",
        columnId?: string | number,
        preserve?: boolean
    } | null
) => void;
~~~

### Parameter

Der Callback des **set-sort** Ereignisses kann den Wert *null* oder ein Objekt mit den folgenden Parametern annehmen:

- `by` - (optional) das Kartenfeld für die Sortierung (*string* oder *function*)
- `dir` - (optional) die Sortierreihenfolge. Mögliche Werte sind *"asc"* und *"desc"*
- `preserve` - (optional) aktiviert/deaktiviert das Beibehalten des Sortierzustands
- `columnId` - (optional) die ID der zu sortierenden Spalte

:::info
Zur Behandlung der internen Ereignisse können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung für das "set-sort" Ereignis
board.api.on("set-sort", (obj) => {
    console.log(obj);
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in Version v1.2 hinzugefügt