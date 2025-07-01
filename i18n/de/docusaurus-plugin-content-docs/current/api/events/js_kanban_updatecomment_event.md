---
sidebar_label: update-comment
title: update-comment Event
description: Lernen Sie das update-comment Event aus der DHTMLX JavaScript Kanban-Bibliothek kennen. Entdecken Sie Entwicklerhandbücher und API-Referenzen, sehen Sie sich Codebeispiele und Live-Demos an und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
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

Der Callback für das **update-comment** Event erhält ein Objekt mit folgenden Parametern:

- `id` -  (optional) die ID des aktualisierten Kommentars
- `cardId` - (erforderlich) die ID der Karte, auf der sich der Kommentar befindet
- `comment` - (erforderlich) ein Objekt mit den Details des aktualisierten Kommentars. Es kann enthalten:
    - `id` -  (optional) die ID des aktualisierten Kommentars
    - `cardId` - (optional) die Karten-ID, auf der der aktualisierte Kommentar hinzugefügt wird
    - `text` - (optional) der aktualisierte Kommentartext
    - `date` - (optional) das aktualisierte Kommentardatum
    - `html` - (optional) das HTML-Markup des aktualisierten Kommentars. Um HTML statt Text anzuzeigen, aktivieren Sie die Eigenschaft `html` in der [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameter-für-den-typ-comments) Konfiguration
- `skipProvider` - (optional) steuert, ob die Aktualisierungsanfrage an den Server gesendet werden soll oder nicht

:::info
Um interne Events zu verwalten, können Sie die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// auf das "update-comment" Event hören
board.api.on("update-comment", (obj) => {
    console.log(obj.comment);
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version v1.4 eingeführt
