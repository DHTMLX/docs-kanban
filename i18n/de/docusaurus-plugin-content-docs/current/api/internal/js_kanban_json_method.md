---
sidebar_label: export.json()
title: json Methode
description: Sie können mehr über die json Methode in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# export.json()

### Beschreibung

@short: Exportiert Kanban-Daten in eine JSON-Datei

### Verwendung

~~~jsx {}
export.json(): void;
~~~

:::info
Die Methode exportiert die Daten des Kanban in eine JSON-Datei mit folgender Struktur:
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
// Kanban-Daten als JSON exportieren
board.export.json(); // => { "cards": [...], "columns": [...], "rows": [] }
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.3 hinzugefügt