---
sidebar_label: undo()
title: undo Methode API
description: Lesen Sie die API-Dokumentation der undo-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie die letzte Board-Aktion rückgängig machen.
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