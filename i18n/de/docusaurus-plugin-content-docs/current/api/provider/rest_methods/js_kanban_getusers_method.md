---
sidebar_label: getUsers()
title: getUsers REST-Methode API
description: Lesen Sie die getUsers REST-Methoden-API für DHTMLX Kanban. Erfahren Sie, wie Sie ein Promise mit Benutzerdaten abrufen.
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

**Verwandte Artikel:** [Arbeiten mit dem Server](guides/working_with_server.md)