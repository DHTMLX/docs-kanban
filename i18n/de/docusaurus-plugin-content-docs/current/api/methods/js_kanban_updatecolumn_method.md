---
sidebar_label: updateColumn()
title: updateColumn Methode
description: Entdecken Sie die updateColumn Methode in der DHTMLX JavaScript Kanban Bibliothek Dokumentation. Sehen Sie Entwicklerhandbücher, API-Referenzen, Codebeispiele, Live-Demos und erhalten Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban.
---

# updateColumn()

### Beschreibung

@short: Ändert die Daten einer Spalte anhand ihrer ID

### Verwendung

~~~jsx {}
updateColumn({
    id: string | number,
    column?: object,
    replace?: boolean
}): void;
~~~

### Parameter

- `id` - (erforderlich) gibt die ID der Spalte an, die Sie aktualisieren möchten
- `column` - (optional) ein Objekt mit den neuen Daten für die Spalte. Eine vollständige Liste der **column** Parameter finden Sie [**hier**](/api/config/js_kanban_columns_config.md)
- `replace` - (optional) gibt an, ob die vorhandenen Daten vollständig ersetzt werden sollen

:::note
Wenn `replace` auf *true* gesetzt ist, werden die vorhandenen Daten vollständig durch die neuen Daten ersetzt. Wenn nicht, werden nur die angegebenen Werte aktualisiert.
:::

### Beispiel

~~~jsx {7-16}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Spaltendaten mit der ID "backlog" aktualisieren
board.updateColumn({
    id: "backlog",
    column: {
        label: "Aktualisierte Spalte",
        limit: 3,
        strictLimit: 3,
        collapsed: true
    },
    replace: true
});
~~~

**Änderungsprotokoll**:
- Die Parameter **id** und **column** wurden in Version 1.1 eingeführt
- Der Parameter **replace** wurde in Version 1.3 hinzugefügt
