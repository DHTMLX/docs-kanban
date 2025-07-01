---
sidebar_label: add-comment
title: add-comment Event
description: Entdecken Sie das add-comment Ereignis in der DHTMLX JavaScript Kanban Bibliothek Dokumentation. Sehen Sie sich Entwicklerhandbücher, API-Referenzen an, probieren Sie Beispiele und Live-Demos aus und erhalten Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban.
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

Der Callback für das **add-comment** Ereignis erhält ein Objekt mit folgenden Eigenschaften:

- `id` - (optional) die ID, die dem neuen Kommentar zugewiesen wurde
- `cardId` - (erforderlich) die ID der Karte, zu der der Kommentar hinzugefügt wird
- `comment` - (erforderlich) ein Objekt, das die Details des neuen Kommentars definiert. Es kann enthalten:
    - `text` - (optional) der Textinhalt des Kommentars
    - `date` - (optional) das Datum, an dem der Kommentar gemacht wurde
    - `html` - (optional) der HTML-Inhalt des Kommentars. Um die Darstellung von HTML anstelle von Text zu aktivieren, aktivieren Sie die Eigenschaft `html` in der [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameter-für-den-typ-comments) Konfiguration
- `skipProvider` - (optional) steuert, ob die Anfrage an den Server verhindert wird oder nicht

:::info
Zur Verwaltung der internen Ereignisbehandlung siehe [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methoden)
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// auf das "add-comment" Ereignis hören
board.api.on("add-comment", (obj) => {
    console.log(obj.comment);
});
~~~

**Änderungsprotokoll:** Dieses Ereignis wurde in Version v1.4 eingeführt
