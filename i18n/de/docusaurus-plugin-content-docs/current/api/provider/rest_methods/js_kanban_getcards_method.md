---
sidebar_label: getCards()
title: getCards REST-Methode API
description: Lesen Sie die API-Dokumentation der getCards REST-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie ein Promise mit Kartendaten erhalten.
---

# getCards()

### Beschreibung

@short: Gibt ein Promise mit den Kartendaten zurück

:::info
Die **getCards()**-Methode ist Teil des **RestDataProvider**-Dienstes, der für die Arbeit mit dem Server vorgesehen ist.
:::

### Verwendung

~~~jsx {}
getCards(): promise;
~~~

### Rückgabewert

Die **getCards()**-Methode sendet eine Anfrage an den Server mit der **GET**-Methode und gibt ein **Promise** mit den Kartendaten zurück.

### Beispiel

~~~jsx {2,5}
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