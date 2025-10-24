---
sidebar_label: updateCard()
title: updateCard Methode
description: Sie können mehr über die updateCard Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# updateCard()

### Beschreibung

@short: Aktualisiert die Kartendaten anhand ihrer ID

### Verwendung

~~~jsx {}
updateCard({
    id: string | number,
    card?: object,
    replace?: boolean
}): void;
~~~

### Parameter

- `id` - (erforderlich) die ID der zu aktualisierenden Karte
- `card` - (optional) das neue Datenobjekt der Karte. Die vollständige Liste der Kartenparameter finden Sie [**hier**](api/config/js_kanban_cards_config.md)
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
// Kartendaten mit der ID 1 aktualisieren
board.updateCard({
    id: 1,
    card: {
        label: "New Label",
        row: "feature",
        column: "inprogress",
        /*andere Parameter*/
    },
    replace: true
});
~~~

**Änderungsprotokoll**:
- Die Parameter **id** und **card** wurden in Version v1.1 hinzugefügt
- Der Parameter **replace** wurde in Version v1.3 hinzugefügt