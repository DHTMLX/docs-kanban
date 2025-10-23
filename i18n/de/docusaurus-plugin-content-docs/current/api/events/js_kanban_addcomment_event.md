---
sidebar_label: add-comment
title: add-comment Ereignis
description: Sie können das add-comment Ereignis in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# add-comment

### Beschreibung

@short: Wird ausgelöst, wenn ein neuer Kommentar hinzugefügt wird

### Verwendung

~~~jsx {}
"add-comment": ({
    id?: string | number,
    cardId: string | number,
    comment: {
        text?: string,
        date?: Date,
        html?: string
    },
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback des **add-comment** Ereignisses kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `id` - (optional) die ID des neuen Kommentars
- `cardId` - (erforderlich) die ID der Karte, zu der der Kommentar hinzugefügt werden soll
- `comment` - (erforderlich) das Konfigurationsobjekt des neuen Kommentars. Hier können Sie folgende Parameter angeben:
    - `text` - (optional) der Text des neuen Kommentars
    - `date` - (optional) das Datum des neuen Kommentars
    - `html` - (optional) das HTML-Markup des neuen Kommentars. Aktivieren Sie die `html`-Eigenschaft der [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameter-für-den-typ-comments) Konfiguration, um das HTML-Markup anstelle des Texts anzuzeigen
- `skipProvider` - (optional) aktiviert/deaktiviert das Verhindern, dass die Anfrage an den Server gesendet wird

:::info
Für die Verarbeitung der internen Ereignisse können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung für das "add-comment" Ereignis
board.api.on("add-comment", (obj) => {
    console.log(obj.comment);
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in Version v1.4 hinzugefügt