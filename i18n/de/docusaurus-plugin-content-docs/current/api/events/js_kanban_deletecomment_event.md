---
sidebar_label: delete-comment
title: delete-comment Ereignis
description: Sie können mehr über das delete-comment Ereignis in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# delete-comment

### Beschreibung

@short: Wird ausgelöst, wenn ein Kommentar einer Karte gelöscht wird

### Verwendung

~~~jsx {}
"delete-comment": ({
    id?: string | number, 
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback des **delete-comment** Ereignisses kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `id` -  (optional) die ID des zu löschenden Kommentars
- `cardId` - (erforderlich) die ID der Karte, deren Kommentar gelöscht werden soll
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
// Auf das "delete-comment" Ereignis abonnieren
board.api.on("delete-comment", (obj) => {
    console.log(obj.id);
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in Version v1.4 hinzugefügt