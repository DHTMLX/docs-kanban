---
sidebar_label: export.json()
title: json Methode
description: Sie können die json Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# export.json()

### Beschreibung

@short: Speichert die Kanban-Daten als JSON-Datei

### Verwendung

~~~jsx {}
export.json(): void;
~~~

:::info
Diese Methode speichert die Kanban-Board-Daten in einer JSON-Datei im folgenden Format:
~~~jsx {}
{
    "cards": [],
    "columns": [],
    "rows": []
}
~~~
:::

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Kanban-Daten als JSON exportieren ()
board.export.json(); // => { "cards": [...], "columns": [...], "rows": [] }
~~~

**Änderungsprotokoll:** Die Methode wurde in Version 1.3 hinzugefügt
