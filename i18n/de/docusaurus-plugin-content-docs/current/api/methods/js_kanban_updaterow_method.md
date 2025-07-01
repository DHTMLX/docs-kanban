---
sidebar_label: updateRow()
title: updateRow Methode
description: Erfahren Sie mehr über die updateRow Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek. Durchstöbern Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# updateRow()

### Beschreibung

@short: Ändert die Daten einer Zeile basierend auf ihrer ID.

### Verwendung

~~~jsx {}
updateRow({
    id: string | number,
    row?: object,
    replace?: boolean
}): void;
~~~

### Parameter

- `id` - (erforderlich) die Kennung der zu aktualisierenden Zeile
- `row` - (optional) ein Objekt mit den neuen Daten für die Zeile. Die vollständige Liste der **row**-Parameter finden Sie [**hier**](/api/config/js_kanban_rows_config.md)
- `replace` - (optional) steuert, ob die bestehenden Daten vollständig ersetzt werden sollen

:::note
Wenn der Parameter `replace` auf *true* gesetzt wird, werden die alten Daten vollständig durch die neuen Daten überschrieben. Wenn nicht gesetzt oder auf false, werden nur die angegebenen Werte aktualisiert.
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
