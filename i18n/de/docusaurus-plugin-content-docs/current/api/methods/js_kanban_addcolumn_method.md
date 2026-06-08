---
sidebar_label: addColumn()
title: addColumn Methode API
description: Lesen Sie die API der addColumn-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie eine neue Spalte zum Board hinzufügen.
---

# addColumn()

### Beschreibung

@short: Fügt dem Kanban eine neue Spalte hinzu

### Verwendung

~~~jsx {}
addColumn({
    id?: string | number,
    column?: object,
    before?: string | number
}): void;
~~~

### Parameter

- `id` - (optional) die ID der neuen Spalte
- `column` - (optional) das Datenobjekt der neuen Spalte
- `before` - (optional) die ID der Spalte, vor der die neue Spalte eingefügt wird

:::info
Die vollständige Liste der **column**-Parameter finden Sie [**hier**](api/config/js_kanban_columns_config.md)
:::

### Beispiel

~~~jsx {7-16}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// neue Spalte hinzufügen
board.addColumn({
    id: "extra_column",
    column: {
        label: "Extra column",
        limit: 2,
        strictLimit: 2,
        collapsed: true
    },
    before: "column_2"
});
~~~

**Änderungsprotokoll**: Die Parameter **id**, **column** und **before** wurden in Version v1.1 hinzugefügt