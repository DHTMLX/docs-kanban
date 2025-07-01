---
sidebar_label: getColumns()
title: getColumns REST-Methode
description: Sie können die getColumns REST-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# getColumns()

### Beschreibung

@short: Ruft ein Promise mit den Spalten-Daten ab

:::info
Die **getColumns()**-Methode ist Teil des **RestDataProvider**-Dienstes, der für Serverinteraktionen entwickelt wurde.
:::

### Verwendung

~~~jsx {}
getColumns(): promise;
~~~

### Rückgabewert

Die **getColumns()**-Methode führt eine **GET**-Anfrage an den Server aus und gibt ein **Promise** zurück, das mit den Spalten-Daten aufgelöst wird.

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

**Verwandte Artikel:** [Arbeiten mit dem Server](../../../../guides/working_with_server)
