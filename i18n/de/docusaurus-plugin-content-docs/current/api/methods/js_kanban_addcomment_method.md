---
sidebar_label: addComment()
title: addComment Methode API
description: Lesen Sie die API der addComment-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie einer Karte anhand ihrer ID einen Kommentar hinzufügen.
---

# addComment()

### Beschreibung

@short: Fügt der angegebenen Karte anhand ihrer ID einen neuen Kommentar hinzu

### Verwendung

~~~jsx {}
addComment({
    id?: string | number,
    cardId: string | number,
    comment: {
        text?: string,
        date?: Date,
        html?: string
    }
}): void;
~~~

### Parameter

- `id` -  (optional) die ID des neuen Kommentars
- `cardId` - (erforderlich) die ID der Karte, der der Kommentar hinzugefügt werden soll
- `comment` - (erforderlich) das Konfigurationsobjekt des neuen Kommentars. Hier können Sie folgende Parameter angeben:
    - `text` - (optional) der Text des neuen Kommentars
    - `date` - (optional) das Datum des neuen Kommentars
    - `html` - (optional) das HTML-Markup des neuen Kommentars. Aktivieren Sie die Eigenschaft `html` der [`editorShape`](/api/config/js_kanban_editorshape_config/#parameters-for-comments-type) Konfiguration, um das HTML-Markup anstelle von Text anzuzeigen

### Beispiel

~~~jsx {7-15}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// neuen Kommentar hinzufügen
board.addComment({
    id: 1,
    cardId: 1,
    comment: {
        text: "", 
        date: new Date("01/07/2021"),
        html: "<b>Wichtiger Kommentar</b>"
    }
});
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.4 hinzugefügt