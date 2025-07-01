---
sidebar_label: getUsers()
title: getUsers REST-Methode
description: Sie können die getUsers REST-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# getUsers()

### Beschreibung

@short: Ruft ein Promise mit den Benutzerdaten ab

:::info
Die **getUsers()**-Methode ist Teil des **RestDataProvider**-Dienstes, der für die Serverkommunikation entwickelt wurde
:::

### Verwendung

~~~jsx {}
getUsers(): promise;
~~~

### Rückgabewert

Die **getUsers()**-Methode sendet eine **GET**-Anfrage an den Server und gibt ein **Promise** zurück, das mit den Benutzerdaten aufgelöst wird

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

**Änderungsprotokoll:** Diese Methode wurde in Version 1.3 eingeführt

**Verwandte Artikel:** [Arbeiten mit dem Server](../../../../guides/working_with_server)
