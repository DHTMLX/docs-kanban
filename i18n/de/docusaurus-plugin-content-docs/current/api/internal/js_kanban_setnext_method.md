---
sidebar_label: api.setNext()
title: setNext Methode API
description: Lesen Sie die API der setNext-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie die Board-API mit Datenanbietern und Backend-Abläufen verbinden.
---

# api.setNext()

### Beschreibung

@short: Ermöglicht das Hinzufügen einer Aktion in die Reihenfolge des Event Bus

### Verwendung

~~~jsx {}
api.setNext(next: any): void;
~~~

### Parameter

- `next` - (erforderlich) die Aktion, die in die Reihenfolge des **Event Bus** aufgenommen werden soll  

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
Sie müssen **RestDataProvider** in die Reihenfolge des **Event Bus** aufnehmen, um Operationen mit Daten (wie **Hinzufügen**, **Löschen** usw.) durchzuführen und die entsprechenden Anfragen an den Server zu senden.
:::