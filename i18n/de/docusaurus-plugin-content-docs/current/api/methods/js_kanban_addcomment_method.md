---
sidebar_label: addComment()
title: addComment Methode
description: Sie können mehr über die addComment Methode in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# addComment()

### Beschreibung

@short: Fügt einen neuen Kommentar in die angegebene Karte mittels ihrer ID ein.

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

- `id` -  (optional) die eindeutige Kennung für den neuen Kommentar
- `cardId` - (erforderlich) die Kennung der Karte, zu der der Kommentar hinzugefügt wird
- `comment` - (erforderlich) ein Objekt, das den neuen Kommentar definiert. Die verfügbaren Felder umfassen:
    - `text` - (optional) der Inhalt des Kommentars als Klartext
    - `date` - (optional) der Zeitstempel des Kommentars
    - `html` - (optional) der Kommentar formatiert als HTML. Um HTML-Inhalt anstelle von Klartext anzuzeigen, muss die `html`-Option in der [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameter-für-den-typ-comments) Konfiguration aktiviert sein

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

**Änderungsprotokoll:** Diese Methode wurde in Version 1.4 eingeführt
