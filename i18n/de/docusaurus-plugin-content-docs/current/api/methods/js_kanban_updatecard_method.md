---
sidebar_label: updateCard()
title: updateCard Methode
description: Entdecken Sie die updateCard Methode in der DHTMLX JavaScript Kanban Bibliothek Dokumentation. Sehen Sie sich Entwickleranleitungen, API-Referenzen an, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# updateCard()

### Beschreibung

@short: Aktualisiert die Daten einer Karte anhand ihrer ID

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
- `card` - (optional) ein Objekt mit den aktualisierten Daten für die Karte. Eine vollständige Liste der Kartenparameter ist [**hier**](/api/config/js_kanban_cards_config.md) verfügbar
- `replace` - (optional) steuert, ob die bestehenden Daten vollständig ersetzt werden

:::note
Wenn `replace` auf *true* gesetzt ist, werden die alten Daten komplett durch die neuen Daten überschrieben. Andernfalls werden nur die von Ihnen angegebenen Eigenschaften aktualisiert.
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
- Die Parameter **id** und **card** wurden in Version v1.1 eingeführt
- Der Parameter **replace** wurde in Version v1.3 hinzugefügt
