---
sidebar_label: update-comment
title: update-comment Ereignis
description: Sie können mehr über das update-comment Ereignis in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# update-comment

### Beschreibung

@short: Wird ausgelöst, wenn ein Kommentar aktualisiert wird

### Verwendung

~~~jsx {}
"update-comment": ({
    id?: string | number, 
    cardId: string | number, 
    comment: {
        id?: string | number, 
        cardId?: string | number, 
        text?: string, 
        date?: Date, 
        html?: string 
    },
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback des **update-comment** Ereignisses kann ein Objekt mit den folgenden Parametern erhalten:

- `id` -  (optional) die ID des zu aktualisierenden Kommentars
- `cardId` - (erforderlich) die ID der Karte, deren Kommentar aktualisiert wird
- `comment` - (erforderlich) das Konfigurationsobjekt des zu aktualisierenden Kommentars. Hier können Sie folgende Parameter angeben:
    - `id` -  (optional) die ID des aktualisierten Kommentars
    - `cardId` - (optional) die ID der Karte, zu der der aktualisierte Kommentar hinzugefügt wird
    - `text` - (optional) der Text des aktualisierten Kommentars
    - `date` - (optional) das Datum des aktualisierten Kommentars
    - `html` - (optional) das HTML-Markup des aktualisierten Kommentars. Aktivieren Sie die Eigenschaft `html` der [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameter-für-den-typ-comments) Konfiguration, um das HTML-Markup anstelle von Text anzuzeigen
- `skipProvider` - (optional) aktiviert/deaktiviert die Verhinderung, dass die Anfrage an den Server gesendet wird

:::info
Für die Behandlung der internen Ereignisse können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung für das "update-comment" Ereignis
board.api.on("update-comment", (obj) => {
    console.log(obj.comment);
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in Version v1.4 hinzugefügt