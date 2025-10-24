---
sidebar_label: redo()
title: redo-Methode
description: Sie können die redo-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# redo()

### Beschreibung

@short: Wiederholt die Aktion, die durch die Undo-Aktion rückgängig gemacht wurde.

:::info
Die `redo()`-Methode funktioniert nur mit der [`history: true`](api/config/js_kanban_history_config.md) Konfiguration!
:::

### Verwendung

~~~jsx {}
redo(): void;
~~~

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// macht einen Schritt vorwärts in der Historie des Kanban
board.redo();
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.3 hinzugefügt