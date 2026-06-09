---
sidebar_label: getHandlers()
title: getHandlers REST-Methode API
description: Lesen Sie die API-Referenz der getHandlers REST-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie die Standard-Action-Handler abrufen, die zum Senden von Operationen an den Server verwendet werden.
---

# getHandlers()

### Beschreibung

@short: Gibt die Standard-Action-Handler zurück, die von RestDataProvider verwendet werden, um Datenoperationen an den Server zu senden

:::info
Die Methode **getHandlers()** ist Teil des **RestDataProvider**-Dienstes für die Arbeit mit dem Server.
:::

### Verwendung

~~~jsx {}
getHandlers(): object;
~~~

### Rückgabewert

Die Methode `getHandlers()` gibt ein Objekt zurück, das die [von `RestDataProvider` unterstützten Datenoperationen](guides/working_with_server.md/#restdataprovider) den Anfragen zuordnet, die der Provider an den Server sendet.

Das zurückgegebene Objekt ist die Standard-Actions-Map, die intern von `RestDataProvider` verwendet wird. Überschreiben Sie diese Methode, um benutzerdefinierte Handler hinzuzufügen oder die Standardhandler durch eigene Logik zu ersetzen.

### Beispiel

Um die Standard-Handler um benutzerdefinierte zu erweitern, erstellen Sie eine Klasse, die `RestDataProvider` erweitert, und überschreiben Sie `getHandlers()`. Rufen Sie dabei immer `super.getHandlers()` aus der überschriebenen Methode auf, um die Standard-Handler beizubehalten:

~~~jsx {3-11}
const url = "https://some_backend_url";

class MyDataProvider extends kanban.RestDataProvider {
    getHandlers() {
        const handlers = super.getHandlers();
        return {
            ...handlers,
            // custom or overridden handlers go here
        };
    }
}

const restProvider = new MyDataProvider(url);
board.api.setNext(restProvider);
~~~

:::warning
Kopieren Sie die Standard-Handler nicht manuell in die überschriebene Methode. Der Inhalt der Standard-Actions-Map kann sich zwischen Versionen ändern; der Aufruf von `super.getHandlers()` stellt sicher, dass Ihre benutzerdefinierten Handler stets auf den aktuellen Standardwerten aufbauen.
:::

**Verwandte Artikel:** [Arbeiten mit dem Server](guides/working_with_server.md)
