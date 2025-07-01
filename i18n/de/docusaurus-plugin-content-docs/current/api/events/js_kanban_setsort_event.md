---
sidebar_label: set-sort
title: set-sort Ereignis
description: Sie können im Handbuch der DHTMLX JavaScript Kanban-Bibliothek mehr über das set-sort Ereignis erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# set-sort

### Beschreibung

@short: Wird ausgelöst, sobald Karten sortiert werden.

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

Der Callback für das **set-sort** Ereignis kann entweder *null* oder ein Objekt mit folgenden Eigenschaften erhalten:

- `by` - (optional) gibt das Kartenfeld an, das für die Sortierung verwendet wird (*string* oder *function*)
- `dir` - (optional) gibt die Sortierrichtung an, entweder *"asc"* oder *"desc"*
- `preserve` - (optional) bestimmt, ob der aktuelle Sortierstatus beibehalten werden soll
- `columnId` - (optional) identifiziert, welche Spalte sortiert wird

:::info
Um mit internen Events zu arbeiten, siehe die [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methoden)
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// auf das "set-sort" Ereignis hören
board.api.on("set-sort", (obj) => {
    console.log(obj);
});
~~~

**Änderungsprotokoll:** Dieses Ereignis wurde in Version v1.2 eingeführt
