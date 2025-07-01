---
sidebar_label: getLinks()
title: getLinks REST-Methode
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die getLinks REST-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# getLinks()

### Beschreibung

@short: Ruft ein Promise mit den Link-Daten ab

:::info
Die **getLinks()** Methode gehört zum **RestDataProvider**-Service, der für Serverinteraktionen konzipiert ist.
:::

### Verwendung

~~~jsx {}
getLinks(): promise;
~~~

### Rückgabewert

Die **getLinks()** Methode sendet eine **GET**-Anfrage an den Server und gibt ein **Promise** zurück, das mit den Link-Daten aufgelöst wird.

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

**Änderungsprotokoll:** Diese Methode wurde in Version 1.5 eingeführt

**Verwandte Artikel:** [Arbeiten mit dem Server](../../../../guides/working_with_server)
