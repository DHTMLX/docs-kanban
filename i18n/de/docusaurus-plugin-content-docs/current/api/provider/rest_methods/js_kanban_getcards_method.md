---
sidebar_label: getCards()
title: getCards REST-Methode
description: Sie können in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek mehr über die getCards REST-Methode erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# getCards()

### Beschreibung

@short: Ruft ein Promise mit den Kartendaten ab

:::info
Die **getCards()**-Methode gehört zum **RestDataProvider**-Service, der für die Kommunikation mit dem Server zuständig ist.
:::

### Verwendung

~~~jsx {}
getCards(): promise;
~~~

### Rückgabewert

Die **getCards()**-Methode führt eine **GET**-Anfrage an den Server aus und gibt ein **Promise** mit den Kartendaten zurück.

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

**Verwandte Artikel:** [Arbeiten mit dem Server](../../../../guides/working_with_server)
