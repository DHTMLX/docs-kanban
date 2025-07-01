---
sidebar_label: redo()
title: redo Methode
description: Sie können mehr über die redo Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# redo()

### Beschreibung

@short: Führt die Aktion erneut aus, die durch die undo Methode rückgängig gemacht wurde

:::info
Die `redo()` Methode ist nur funktionsfähig, wenn [`history: true`](/api/config/js_kanban_history_config.md) in der Konfiguration gesetzt ist!
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
// führt die zuletzt rückgängig gemachte Aktion in der Kanban-Historie erneut aus
board.redo();
~~~

**Änderungsprotokoll:** Diese Methode wurde in Version v1.3 eingeführt
