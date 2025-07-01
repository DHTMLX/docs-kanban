---
sidebar_label: delete-link
title: delete-link Ereignis
description: Sie können mehr über das delete-link Ereignis in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# delete-link

### Beschreibung

@short: Wird ausgelöst, wenn ein Link gelöscht wird

### Verwendung

~~~jsx {}
"delete-link": ({
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback für das **delete-link** Ereignis erhält ein Objekt mit den folgenden Eigenschaften:

- `id` - (erforderlich) die ID des Links, der gelöscht wird
- `skipProvider` - (optional) steuert, ob die Anfrage an den Server unterdrückt wird

:::info
Um interne Ereignisse zu verarbeiten, können die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden) verwendet werden
:::

### Beispiel

~~~jsx {8-10}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links
});
// auf das "delete-link" Ereignis hören
board.api.on("delete-link", (obj) => {
    console.log(obj.id);
});
~~~

**Änderungsprotokoll:** Dieses Ereignis wurde in Version 1.4 eingeführt
