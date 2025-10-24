---
sidebar_label: redo
title: redo Event
description: Sie können mehr über das redo Event in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# redo

### Beschreibung

@short: Wird ausgelöst, wenn die Aktion wiederholt wird, die durch die undo Aktion rückgängig gemacht wurde

### Verwendung

~~~jsx {}
"redo": () => void;
~~~

:::info
Zur Handhabung der internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden.
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Auf das "redo" Event abonnieren
board.api.on("redo", () => {
    console.log("redo operation");
});
~~~

**Änderungsprotokoll**: Das Event wurde in Version v1.7 hinzugefügt