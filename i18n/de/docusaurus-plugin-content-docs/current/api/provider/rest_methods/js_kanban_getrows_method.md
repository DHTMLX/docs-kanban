---
sidebar_label: getRows()
title: getRows REST-Methode
description: Sie können mehr über die getRows REST-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# getRows()

### Beschreibung

@short: Ruft ein Promise mit den Zeilendaten ab

:::info
Die **getRows()** Methode ist Teil des **RestDataProvider**-Dienstes, der für Serverinteraktionen entwickelt wurde.
:::

### Verwendung

~~~jsx {}
getRows(): promise;
~~~

### Rückgabewert

Die **getRows()** Methode sendet eine **GET**-Anfrage an den Server und gibt ein **Promise** zurück, das mit den Zeilendaten aufgelöst wird.

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

**Verwandte Artikel:** [Arbeiten mit dem Server](../../../../guides/working_with_server)
