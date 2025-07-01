---
sidebar_label: addRow()
title: addRow-Methode
description: Sie können mehr über die addRow-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# addRow()

### Beschreibung

@short: Fügt dem Kanban-Board eine neue Zeile hinzu

### Verwendung

~~~jsx {}
addRow({
    id?: string | number,
    row?: object,
    before?: string | number
}): void;
~~~

### Parameter

- `id` - (optional) die Kennung der neuen Zeile
- `row` - (optional) das Datenobjekt, das die neue Zeile repräsentiert
- `before` - (optional) die ID der Zeile, vor der die neue Zeile eingefügt werden soll

:::info
Eine vollständige Liste der **row**-Parameter finden Sie [**hier**](/api/config/js_kanban_rows_config.md)
:::

### Beispiel

~~~jsx {8-15}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// neue Zeile hinzufügen
board.addRow({
    id: "extra_row",
    row: {
        label: "Extra row",
        collapsed: false
    },
    before: "row_2"
});
~~~

**Änderungsprotokoll**: Die Parameter **id**, **row** und **before** wurden in Version 1.1 eingeführt
