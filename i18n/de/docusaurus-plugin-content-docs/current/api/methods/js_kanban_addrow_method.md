---
sidebar_label: addRow()
title: addRow Methode API
description: Lesen Sie die API der addRow-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie eine neue Zeile (Swimlane) zum Board hinzufügen.
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