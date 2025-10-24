---
sidebar_label: getColumns()
title: getColumns REST-Methode
description: Sie können die getColumns REST-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
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