---
sidebar_label: start-drag-card
title: start-drag-card Event
description: Sie können mehr über das start-drag-card Event in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# start-drag-card

### Beschreibung

@short: Wird ausgelöst, wenn das Ziehen einer Karte gestartet wird

### Verwendung

~~~jsx {}
"start-drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source?: array
}) => void;
~~~

### Parameter

Der Callback des **start-drag-card** Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID der gezogenen Karte
- `columnId` - (erforderlich) die ID der Spalte, in der sich die Karte aktuell befindet
- `rowId` - (optional) die ID der Zeile, in der sich die Karte aktuell befindet
- `before` - (optional) die ID einer Karte, die sich aktuell nach der gezogenen Karte in der Spalte befindet
- `source` - (optional) das Array der IDs der verschobenen Karten

:::info
Für die Behandlung der internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung für das "start-drag-card" Event
board.api.on("start-drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**Änderungsprotokoll:** Das Event wurde in Version v1.4 hinzugefügt

**Verwandtes Beispiel:** [Kanban. Drag & Drop für bestimmte Spalten deaktivieren](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)