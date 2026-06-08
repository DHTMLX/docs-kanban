---
sidebar_label: getColumns()
title: getColumns REST-Methode API
description: Lesen Sie die API-Referenz der getColumns REST-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie ein Promise mit Spaltendaten abrufen.
---

# getColumns()

### Beschreibung

@short: Gibt ein Promise mit den Spaltendaten zurück

:::info
Die **getColumns()**-Methode ist Teil des **RestDataProvider**-Dienstes, der für die Arbeit mit dem Server vorgesehen ist.
:::

### Verwendung

~~~jsx {}
getColumns(): promise;
~~~

### Rückgabewert

Die **getColumns()**-Methode sendet eine Anfrage an den Server mittels der **GET**-Methode und gibt ein **Promise** mit den Spaltendaten zurück.

### Beispiel

~~~jsx {2,6}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns()
]).then(([cards, columns]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns
    });
    board.api.setNext(restProvider);
});
~~~

**Verwandte Artikel:** [Arbeiten mit dem Server](guides/working_with_server.md)