---
sidebar_label: getLinks()
title: getLinks REST-Methode
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die getLinks REST-Methode. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# getLinks()

### Beschreibung

@short: Gibt ein Promise mit den Link-Daten zurück

:::info
Die **getLinks()** Methode ist Teil des **RestDataProvider**-Dienstes, der für die Arbeit mit dem Server vorgesehen ist.
:::

### Verwendung

~~~jsx {}
getLinks(): promise;
~~~

### Rückgabewert

Die **getLinks()** Methode sendet eine Anfrage an den Server mit der **GET**-Methode und gibt ein **Promise** mit den Link-Daten zurück.

### Beispiel

~~~jsx {2,7}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getLinks(),
]).then(([cards, columns, links]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        links
    });
    board.api.setNext(restProvider);
});
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.5 hinzugefügt

**Verwandte Artikel:** [Arbeiten mit dem Server](guides/working_with_server.md)