---
sidebar_label: updateColumn()
title: updateColumn Methode
description: Sie können mehr über die updateColumn Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# updateColumn()

### Beschreibung

@short: Aktualisiert die Spaltendaten anhand ihrer ID

### Verwendung

~~~jsx {}
updateColumn({
    id: string | number,
    column?: object,
    replace?: boolean
}): void;
~~~

### Parameter

- `id` - (erforderlich) die ID der zu aktualisierenden Spalte
- `column` - (optional) das neue Datenobjekt der Spalte. Die vollständige Liste der **column**-Parameter finden Sie [**hier**](api/config/js_kanban_columns_config.md)
- `replace` - (optional) aktiviert/deaktiviert das vollständige Ersetzen der Daten

    :::note
    Wenn Sie den Parameter `replace` auf *true* setzen, werden die alten Daten vollständig durch die neuen ersetzt. Andernfalls aktualisiert die Methode nur die Werte, die Sie übergeben haben.
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
- Die Parameter **id** und **column** wurden in Version v1.1 hinzugefügt
- Der Parameter **replace** wurde in Version v1.3 hinzugefügt