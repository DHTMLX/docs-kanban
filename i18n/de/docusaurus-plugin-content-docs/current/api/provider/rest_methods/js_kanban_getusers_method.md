---
sidebar_label: getUsers()
title: getUsers REST-Methode
description: Sie können mehr über die getUsers REST-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# getUsers()

### Beschreibung

@short: Liefert ein Promise mit den Benutzerdaten

:::info
Die **getUsers()** Methode ist Teil des **RestDataProvider**-Dienstes, der für die Arbeit mit dem Server vorgesehen ist.
:::

### Verwendung

~~~jsx {}
getUsers(): promise;
~~~

### Rückgabe

Die **getUsers()** Methode sendet eine Anfrage an den Server mit der **GET**-Methode und gibt ein **Promise** mit den Benutzerdaten zurück.

### Beispiel

~~~jsx {2,8,21}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getRows(),
    restProvider.getUsers(),
]).then(([cards, columns, rows, users]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        rows,
        rowKey: "type",
        editorShape: [
            ...kanban.defaultEditorShape,
            {
                type: "multiselect", 
                key: "users",
                label: "Users",
                values: users
            }
        ]
    });
    board.api.setNext(restProvider);
});
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.3 hinzugefügt

**Verwandte Artikel:** [Working with server](guides/working_with_server.md)