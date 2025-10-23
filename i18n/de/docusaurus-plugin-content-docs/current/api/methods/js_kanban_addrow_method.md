---
sidebar_label: addRow()
title: Methode addRow
description: Sie können die Methode addRow in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# addRow()

### Beschreibung

@short: Fügt eine neue Zeile in das Kanban-Board ein

### Verwendung

~~~jsx {}
addRow({
    id?: string | number,
    row?: object,
    before?: string | number
}): void;
~~~

### Parameter

- `id` - (optional) die ID der neuen Zeile
- `row` - (optional) das Datenobjekt der neuen Zeile
- `before` - (optional) die ID der Zeile, vor der die neue Zeile eingefügt wird

:::info
Die vollständige Liste der **row**-Parameter finden Sie [**hier**](api/config/js_kanban_rows_config.md)
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
        label: "Extra Zeile",
        collapsed: false
    },
    before: "row_2"
});
~~~

**Änderungsprotokoll**: Die Parameter **id**, **row** und **before** wurden in Version v1.1 hinzugefügt