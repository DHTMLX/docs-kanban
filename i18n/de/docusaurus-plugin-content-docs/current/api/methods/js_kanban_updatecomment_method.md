---
sidebar_label: updateComment()
title: updateComment-Methode
description: Erfahren Sie mehr über die updateComment-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# updateComment()

### Beschreibung

@short: Ändern Sie einen Kommentar einer Karte, indem Sie dessen ID angeben

### Verwendung

~~~jsx {}
updateComment({
    id?: string | number, 
    cardId: string | number, 
    comment: {
        id?: string | number, 
        cardId?: string | number, 
        text?: string, 
        date?: Date, 
        html?: string 
    }
}): void;
~~~

### Parameter

- `id` -  (optional) die Kennung des zu ändernden Kommentars
- `cardId` - (erforderlich) die Kennung der Karte, die den zu aktualisierenden Kommentar enthält
- `comment` - (erforderlich) ein Objekt, das die aktualisierten Kommentardetails beschreibt. Es kann enthalten:
    - `id` -  (optional) die Kennung des zu aktualisierenden Kommentars
    - `cardId` - (optional) die Kennung der Karte, auf der der aktualisierte Kommentar platziert wird
    - `text` - (optional) der neue Textinhalt des Kommentars
    - `date` - (optional) das neue Datum, das mit dem Kommentar verknüpft ist
    - `html` - (optional) der neue HTML-Inhalt für den Kommentar. Um HTML anstelle von einfachem Text anzuzeigen, aktivieren Sie die `html`-Eigenschaft in der [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameter-für-den-typ-comments) Konfiguration

### Beispiel

~~~jsx {7-17}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Kommentar aktualisieren
board.updateComment({
    id: 1,
    cardId: 1,
    comment: {
        id: 2,
        cardId: 4,
        text: "", 
        date: new Date("01/08/2021"),
        html: "<b>Aktualisierter Kommentar</b>"
    }
});
~~~

**Änderungsprotokoll:** Diese Methode wurde in Version 1.4 eingeführt
