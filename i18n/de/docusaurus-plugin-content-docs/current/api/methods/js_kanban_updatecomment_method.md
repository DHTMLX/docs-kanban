---
sidebar_label: updateComment()
title: updateComment Methode
description: Sie können mehr über die updateComment Methode in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# updateComment()

### Beschreibung

@short: Aktualisiert einen Kommentar einer Karte anhand seiner ID

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

- `id` -  (optional) die ID des zu aktualisierenden Kommentars
- `cardId` - (erforderlich) die ID der Karte, deren Kommentar aktualisiert werden soll
- `comment` - (erforderlich) das Konfigurationsobjekt des zu aktualisierenden Kommentars. Hier können folgende Parameter angegeben werden:
    - `id` -  (optional) die ID des aktualisierten Kommentars
    - `cardId` - (optional) die ID der Karte, zu der der aktualisierte Kommentar hinzugefügt werden soll
    - `text` - (optional) der Text des aktualisierten Kommentars
    - `date` - (optional) das Datum des aktualisierten Kommentars
    - `html` - (optional) das HTML-Markup des aktualisierten Kommentars. Aktivieren Sie die `html`-Eigenschaft der [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameter-für-den-typ-comments) Konfiguration, um das HTML-Markup anstelle des Textes anzuzeigen

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

**Änderungsprotokoll:** Die Methode wurde in Version v1.4 hinzugefügt