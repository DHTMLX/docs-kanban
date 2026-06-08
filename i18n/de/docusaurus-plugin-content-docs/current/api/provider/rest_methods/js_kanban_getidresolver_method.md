---
sidebar_label: getIDResolver()
title: getIDResolver REST-Methode API
description: Lesen Sie die API-Referenz der getIDResolver REST-Methode für DHTMLX Kanban. Erfahren Sie, wie temporäre clientseitige IDs in Backend-IDs aufgelöst werden.
---

# getIDResolver()

### Beschreibung

@short: Gibt eine Funktion zurück, die temporäre clientseitige IDs in Backend-IDs auflöst

:::info
Die Methode `getIDResolver()` ist Teil des **RestDataProvider**-Diensts für die Arbeit mit dem Server.
:::

### Verwendung

~~~jsx {}
getIDResolver(): (id: string | number, type: number) => string | number;
~~~

### Rückgabewert

Die Methode gibt eine `idResolver(id, type)`-Funktion zurück:

- `id` — die aufzulösende Entitäts-ID (eine temporäre clientseitige ID oder eine reguläre ID)
- `type` — der Modelltyp, zu dem die ID gehört:
    - `1` — Karte (`CardID`)
    - `2` — Zeile (`RowID`)
    - `3` — Spalte (`ColumnID`)
    - `4` — Verknüpfung (`LinkID`)
    - `5` — Kommentar (`CommentID`)

Wenn der Client eine neue Entität (Karte, Spalte, Zeile, Verknüpfung, Kommentar) erstellt, weist `RestDataProvider` ihr eine temporäre clientseitige ID zu und speichert die vom Server zurückgegebene Backend-ID. Die Funktion `idResolver(id, type)` gibt die Backend-ID für jede temporäre ID zurück, die sie noch enthält. Für IDs, die bereits mit der Backend-ID übereinstimmen, gibt die Funktion sie unverändert zurück.

### Beispiel

Der häufigste Anwendungsfall ist die Verbindung von `RestDataProvider` mit `kanbanUpdates` in einer Mehrbenutzerumgebung, damit serverseitige Ereignisse, die auf Backend-IDs abzielen, korrekt auf Entitäten angewendet werden, die auf dem Client noch unter temporären IDs gespeichert sind:

~~~jsx {6-9}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

// other initialization...

const handlers = kanbanUpdates(
    board.api,
    restProvider.getIDResolver()
);

const events = new kanban.RemoteEvents(url + "/api/v1", token);
events.on(handlers);
~~~

Dieselbe Resolver-Funktion kann in benutzerdefinierten Handlern verwendet werden, die an `RemoteEvents.on()` übergeben werden. Ein vollständiges Beispiel finden Sie unter [Serverevents anpassen](guides/working_with_server.md#customize-server-events).

**Verwandte Artikel:** [Mit dem Server arbeiten: Mehrbenutzer-Backend](guides/working_with_server.md#multiuser-backend)
