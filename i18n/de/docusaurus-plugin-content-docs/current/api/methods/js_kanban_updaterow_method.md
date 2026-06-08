---
sidebar_label: updateRow()
title: updateRow Methode API
description: Lesen Sie die updateRow Method API für DHTMLX Kanban. Erfahren Sie, wie Sie Zeilen-Eigenschaften, Stile und Menüs von Swimlanes aktualisieren.
---

# updateRow()

### Beschreibung

@short: Aktualisiert die Zeilendaten anhand ihrer ID

### Verwendung

~~~jsx {}
updateRow({
    id: string | number,
    row?: object,
    replace?: boolean
}): void;
~~~

### Parameter

- `id` - (erforderlich) die ID der zu aktualisierenden Zeile
- `row` - (optional) das neue Datenobjekt der Zeile. Die vollständige Liste der **row**-Parameter finden Sie [**hier**](api/config/js_kanban_rows_config.md)
- `replace` - (optional) aktiviert/deaktiviert das vollständige Ersetzen der Daten

    :::note
    Wenn Sie den Parameter `replace` auf *true* setzen, werden die alten Daten vollständig durch die neuen ersetzt. Andernfalls aktualisiert die Methode nur die übergebenen Werte.
    :::

### Beispiel

~~~jsx {8-15}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// Zeilendaten mit der ID "feature" aktualisieren
board.updateRow({
    id: "feature",
    row: {
        label: "Aktualisierte Zeile",
        collapsed: true
    },
    replace: true
});
~~~

**Änderungsprotokoll**:
- Die Parameter **id** und **row** wurden in Version 1.1 hinzugefügt
- Der Parameter **replace** wurde in Version 1.3 hinzugefügt