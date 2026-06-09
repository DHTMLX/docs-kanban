---
sidebar_label: redo()
title: redo Methode API
description: Lesen Sie die API-Dokumentation der redo-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie eine durch Undo rückgängig gemachte Aktion wiederholen.
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