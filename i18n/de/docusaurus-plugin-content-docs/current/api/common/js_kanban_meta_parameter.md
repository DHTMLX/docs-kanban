---
sidebar_label: $meta
title: $meta Parameter
description: Sie können mehr über den $meta Parameter in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# $meta

### Beschreibung

@short: Ein Objekt mit zusätzlichen Einstellungen zur Konfiguration von Methoden und Events des Kanban

:::important
Das `$meta`-Objekt enthält einen zusätzlichen Parametersatz, der zur Konfiguration von Methoden basierend auf den Events des Kanban verwendet wird!
:::

### Verwendung

~~~jsx {}
$meta?: {
    skipHistory?: boolean
};
~~~

### Parameter

Das `$meta`-Objekt enthält den folgenden Parameter:

- `skipHistory` - (optional) aktiviert/deaktiviert das Überspringen von Operationen in der Historie des Kanban

### Beispiel

~~~jsx {11-13}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Neue Karte hinzufügen und diese Aktion in der Kanban-Historie überspringen
board.addCard({
    id: 1,
    columnId: "backlog",
    card: { label: "Neue Karte" },
    $meta: { 
        skipHistory: true 
    }
});
~~~

**Änderungsprotokoll:** Der `$meta` Parameter wurde in Version 1.3 hinzugefügt

**Verwandter Artikel:** [`history`](api/config/js_kanban_history_config.md)