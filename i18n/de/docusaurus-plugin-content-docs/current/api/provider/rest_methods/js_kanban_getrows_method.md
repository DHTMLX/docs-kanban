---
sidebar_label: getRows()
title: getRows REST-Methode API
description: Lesen Sie die getRows REST-Methoden-API für DHTMLX Kanban. Erfahren Sie, wie Sie ein Promise mit Zeilendaten abrufen.
---

# getRows()

### Beschreibung

@short: Gibt ein Promise mit den Zeilendaten zurück

:::info
Die **getRows()** Methode ist Teil des **RestDataProvider**-Dienstes, der für die Arbeit mit dem Server vorgesehen ist
:::

### Verwendung

~~~jsx {}
getRows(): promise;
~~~

### Rückgabewert

Die **getRows()** Methode sendet eine Anfrage an den Server mit der **GET**-Methode und gibt ein **Promise** mit den Zeilendaten zurück.

### Beispiel

~~~jsx {2,7}
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
        rowKey: "type"
    });
    board.api.setNext(restProvider);
});
~~~

**Verwandte Artikel:** [Arbeiten mit dem Server](guides/working_with_server.md)