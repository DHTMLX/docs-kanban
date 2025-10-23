---
sidebar_label: rückgängig
title: undo Event
description: Sie können mehr über das undo Event in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# undo

### Beschreibung

@short: Wird ausgelöst, wenn die letzte Operation im Kanban rückgängig gemacht wird

### Verwendung

~~~jsx {}
"undo": () => void;
~~~

:::info
Zur Verarbeitung der internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung für das "undo" Event
board.api.on("undo", () => {
    console.log("Undo operation");
});
~~~

**Änderungsprotokoll**: Das Event wurde in Version v1.7 hinzugefügt