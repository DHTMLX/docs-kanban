---
sidebar_label: undo()
title: undo Methode
description: Sie können die undo-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek nachlesen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# undo()

### Beschreibung

@short: Macht die letzte Operation im Kanban rückgängig

:::info
Die `undo()` Methode funktioniert nur mit der [`history: true`](api/config/js_kanban_history_config.md) Konfiguration!
:::

### Verwendung

~~~jsx {}
undo(): void;
~~~

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// macht einen Schritt zurück in der Historie des Kanban
board.undo();
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.3 hinzugefügt