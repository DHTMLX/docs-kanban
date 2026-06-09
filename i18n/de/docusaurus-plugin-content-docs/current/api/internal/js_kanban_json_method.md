---
sidebar_label: export.json()
title: json Methode API
description: Lesen Sie die API der json-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie Board-Daten exportieren und mit JSON-Aufgabenstrukturen arbeiten.
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