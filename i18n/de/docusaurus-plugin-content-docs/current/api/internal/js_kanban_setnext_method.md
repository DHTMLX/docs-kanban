---
sidebar_label: api.setNext()
title: setNext Methode
description: Sie können mehr über die setNext Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# api.setNext()

### Beschreibung

@short: Ermöglicht das Einfügen einer bestimmten Aktion in die Event Bus-Sequenz.

### Verwendung

~~~jsx {}
api.setNext(next: any): void;
~~~

### Parameter

- `next` - (erforderlich) die Aktion, die in die **Event Bus**-Sequenz eingefügt werden soll  

### Beispiel

~~~jsx {15}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getRows()
]).then(([cards, columns, rows]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        rows,
        rowKey: "row"
    });
    board.api.setNext(restProvider);
});
~~~

:::info
Die Einbindung von **RestDataProvider** in die **Event Bus**-Sequenz ist notwendig, um Datenoperationen wie **Hinzufügen**, **Löschen** zu verarbeiten und die zugehörigen Anfragen an den Server zu senden.
:::
