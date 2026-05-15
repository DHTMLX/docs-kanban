---
sidebar_label: Arbeiten mit dem Server
title: Arbeiten mit dem Server
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie, wie Sie mit dem Server arbeiten. Stöbern Sie in Entwicklerhandbüchern und der API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Arbeiten mit dem Server

JavaScript Kanban unterstützt sowohl clientseitige als auch serverseitige Daten. Das Widget stellt keine besonderen Anforderungen an das Backend und lässt sich mit jeder Plattform verbinden, die eine REST-(RESTful-)API bereitstellt.

:::info
Das Widget wird mit integrierten Backends für Go und Node ausgeliefert. Sie können auch eigene Serverskripte verwenden.
:::

## RestDataProvider

JavaScript Kanban enthält den `RestDataProvider`-Service, der die REST API vollständig für die Kommunikation mit dem Backend unterstützt. Der Provider sendet und empfängt folgende Datenoperationen:

- `"add-card"`
- `"add-column"`
- `"add-comment"`
- `"add-row"`
- `"add-link"`
- `"delete-card"`
- `"delete-column"`
- `"delete-comment"`
- `"delete-row"`
- `"delete-link"`
- `"move-card"`
- `"move-column"`
- `"move-row"`
- `"update-card"`
- `"update-column"`
- `"update-comment"`
- `"update-row"`
- `"add-vote"`
- `"delete-vote"`

## REST-Methoden

Der `RestDataProvider`-Service stellt folgende REST-Methoden für das dynamische Laden von Daten bereit:

- [`getCards()`](api/provider/rest_methods/js_kanban_getcards_method.md) — gibt ein Promise mit den Kartendaten zurück
- [`getColumns()`](api/provider/rest_methods/js_kanban_getcolumns_method.md) — gibt ein Promise mit den Spaltendaten zurück
- [`getLinks()`](api/provider/rest_methods/js_kanban_getlinks_method.md) — gibt ein Promise mit den Verbindungsdaten zurück
- [`getRows()`](api/provider/rest_methods/js_kanban_getrows_method.md) — gibt ein Promise mit den Zeilendaten zurück
- [`getUsers()`](api/provider/rest_methods/js_kanban_getusers_method.md) — gibt ein Promise mit den Benutzerdaten zurück
- [`send()`](api/provider/rest_methods/js_kanban_send_method.md) — sendet eine benutzerdefinierte HTTP-Anfrage und gibt ein Promise zurück

## Interaktion mit dem Backend

Um mit dem Server zu interagieren, verbinden Sie `RestDataProvider` mit Backend-Skripten. Verwenden Sie eines der integrierten Backends oder erstellen Sie ein eigenes:

- [Go](https://github.com/web-widgets/kanban-go)
- [Node](https://github.com/web-widgets/kanban-node)

:::tip
Für ein eigenes Backend lesen Sie die Referenz zu den [REST API routes](api/overview/rest_routes_overview.md).
:::

Um `RestDataProvider` mit einem Backend zu verbinden, rufen Sie den `kanban.RestDataProvider`-Konstruktor mit der Backend-URL auf. Der folgende Codeausschnitt erstellt einen Provider, lädt die Initialdaten und bindet den Provider an den Kanban Event Bus:

~~~js {1-2,27}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getUsers(),
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getLinks(),
    restProvider.getRows()
]).then(([users, cards, columns, links, rows]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        links,
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

:::info
Binden Sie `RestDataProvider` über die Methode [`api.setNext()`](api/internal/js_kanban_setnext_method.md) in den Event Bus ein. Dieser Schritt stellt sicher, dass Datenoperationen (Hinzufügen, Löschen usw.) entsprechende Anfragen an den Server auslösen.
:::

### Beispiel

Das folgende Demo verbindet `RestDataProvider` mit einem Go-Backend und lädt Serverdaten:

<iframe src="https://snippet.dhtmlx.com/f25y0809?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Multiuser-Backend

Ein Multiuser-Backend ermöglicht es mehreren Nutzern, dasselbe Kanban-Board in Echtzeit zu bearbeiten, ohne die Seite neu zu laden. Das Widget verbindet sich über einen WebSocket mit dem Server, und benutzerdefinierte Handler wenden eingehende Änderungen auf das Kanban-Board an.

Um ein Multiuser-Backend zu aktivieren, autorisieren Sie den Benutzer am Server, bevor Kanban initialisiert wird. Die folgende `login(url)`-Funktion ruft ein Session-Token ab und speichert es im Cache:

~~~js {}
const login = (url) => {
    var token = sessionStorage.getItem("login-token");
    if (token) {
        return Promise.resolve(token);
    }

    return fetch(url + "/login?id=1")
        .then(raw => raw.text())
        .then(token => {
            sessionStorage.setItem("login-token", token);
            return token;
        });
};
~~~

Die Funktion simuliert die Autorisierung (im Demo ist `id=1` fest im Login-Query hinterlegt, sodass jede abgerufene Sitzung die ID `1` verwendet). Nach erfolgreicher Autorisierung gibt der Server ein Token zurück, das alle nachfolgenden Anfragen enthalten müssen.

Um das Token an jede Anfrage anzuhängen, rufen Sie `RestDataProvider.setHeaders()` auf. Standardmäßig speichert der Server das Token im Header `"Remote-Token": <value>`:

~~~js {}
login(url).then(token => {
    // Initialisierung des RestProviders
    const restProvider = new kanban.RestDataProvider(url);
    // Token als benutzerdefinierten Header setzen
    restProvider.setHeaders({
        "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
    });
    
    // Widget-Initialisierung...
});
~~~

Nachdem das Token eingetroffen ist, initialisieren Sie das Widget. Der folgende Codeausschnitt lädt die Daten und erstellt das Kanban-Board:

~~~js {}
// Widget-Initialisierung...
Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getLinks(),
    restProvider.getRows(),
]).then(([cards, columns, links, rows]) => {
    const board = new Kanban("#root", {
        cards,
        columns,
        links,
        rows,
        rowKey: "row",
        cardShape,
        editorShape,
    });

    // Daten vom Client zum Server speichern
    board.api.setNext(restProvider);
    
    // Multiuser-Initialisierung...
});
~~~

Sobald das Board existiert, fügen Sie einen WebSocket hinzu, um Server-Ereignisse zu empfangen. Der folgende Codeausschnitt richtet die `RemoteEvents`-Handler ein:

~~~js {}
// Multiuser-Initialisierung...

// Client-Handler für Server-Events erhalten
const handlers = kanbanUpdates(
    board.api,
    restProvider.getIDResolver()
);
// Verbindung zu Server-Events herstellen
const events = new RemoteEvents(url + "/api/v1", token);
// Client-Handler an Server-Events anhängen
events.on(handlers);
~~~

Der Ausschnitt verwendet folgende Bezeichner:

- `handlers` — Client-Handler für Server-Ereignisse
- `events` — `RemoteEvents`-Instanz, die eingehende Ereignisse vom Server abhört

Der Aufruf `events.on(handlers)` registriert die Client-Handler für die serverseitigen Ereignisse. Das Widget spiegelt nun serverseitige Änderungen in Echtzeit wider.

### Beispiel

Das folgende Demo konfiguriert das Multiuser-Backend, um Änderungen anderer Nutzer in Echtzeit zu verfolgen:

<iframe src="https://snippet.dhtmlx.com/xw6g6qd6?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Server-Ereignisse anpassen

Um benutzerdefinierte Logik für Server-Ereignisse zu definieren, übergeben Sie ein `handlers`-Objekt an `RemoteEvents.on(handlers)`. Das Objekt hat folgende Struktur:

~~~ts {}
{
    cards?: (obj: any) => void;
    columns?: (obj: any) => void;
    links?: (obj: any) => void;
    rows?: (obj: any) => void;
    comments?: (obj: any) => void;
    votes?: (obj: any) => void;
}
~~~

Nach einer Änderung auf dem Server enthält die Antwort den Namen des geänderten Elements. Die Namen hängen von der Serverlogik ab.

Die aktualisierten clientseitigen Daten werden im `obj`-Argument des `function(obj: any)`-Callbacks übergeben. Das Feld `type: string` gibt die Operation an. Zulässige Werte:

- Für cards: `"add-card"`, `"update-card"`, `"delete-card"`, `"move-card"`
- Für columns: `"add-column"`, `"update-column"`, `"delete-column"`, `"move-column"`
- Für links: `"add-link"`, `"delete-link"`
- Für rows: `"add-row"`, `"update-row"`, `"delete-row"`, `"move-row"`
- Für comments: `"add-comment"`, `"update-comment"`, `"delete-comment"`
- Für votes: `"add-vote"`, `"delete-vote"`

Der folgende Codeausschnitt zeigt die Implementierung:

~~~js {}
// Kanban initialisieren
const board = new kanban.Kanban(...);
const restProvider = new kanban.RestDataProvider(url);
const idResolver = restProvider.getIDResolver();
const TypeCard = 1;
const TypeRow = 2;
const TypeCol = 3;

const cardsHandler = (obj: any) => {
    obj.card.id = idResolver(obj.card.id, TypeCard);
    obj.card.row = idResolver(obj.card.row, TypeRow);
    obj.card.column = idResolver(obj.card.column, TypeCol);
    switch (obj.type) {
        case "add-card":
            board.api.exec("add-card", {
                card: obj.card,
                select: false,
                skipProvider: true, // prevent the client from sending the request to the server
            })
            break;
        // other operations
    }
}

// Eigene Handler hinzufügen
const handlers = {
   cards: cardsHandler,
};

const remoteEvents = new kanban.RemoteEvents(remoteEventsURL, token);
remoteEvents.on(handlers);
~~~

Die Methode `RestDataProvider.getIDResolver()` gibt eine Funktion zurück, die Client-IDs mit Server-IDs synchronisiert. Wenn der Client ein neues Objekt (Karte, Spalte, Zeile oder Verbindung) erstellt, erhält das Objekt eine temporäre ID zusammen mit einer im Datenspeicher hinterlegten Server-ID. Die Funktion `idResolver(id: TID, type: number)` löst die temporäre ID in die Server-ID auf.

Das Argument `type` gibt den Modelltyp an:

- `CardID` — `1`
- `RowID` — `2`
- `ColumnID` — `3`
- `LinkID` — `4`
- `CommentID` — `5`

Um zu verhindern, dass die Anfrage an den Server gesendet wird, übergeben Sie `skipProvider: true` beim Aufruf von `board.api.exec()`. Der Aufruf `remoteEvents.on(handlers)` registriert die eigenen Handler.

## Status in einer einzigen Spalte gruppieren

Zeigen Sie Karten aus verschiedenen Spalten in einer einzigen Spalte an. Sie können beispielsweise eine gemeinsame Spalte für Karten mit den Status `todo` und `unassigned` verwenden.

Um die Gruppierung zu implementieren, fügen Sie ein benutzerdefiniertes Feld (zum Beispiel `status`) hinzu, das den aktuellen Kartenstatus speichert. Das Feld `column` speichert dann einen gemeinsamen Status.

Definieren Sie Gruppierungsregeln. Im folgenden Beispiel verwendet die Gruppierung diese Status:

- `todo`, `unassigned` — für die Spalte **Open**
- `dev`, `testing` — für die Spalte **Inprogress**
- `merged`, `released` — für die Spalte **Done**

Es stehen zwei Implementierungswege zur Verfügung:

- [Serverseitig gruppieren](#serverseitig-gruppieren)
- [Server und Client kombinieren](#server-side-client-side-grouping)

### Serverseitig gruppieren

Die serverseitige Gruppierung erfordert, dass der Server Daten über [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) an den Client sendet (siehe [Multiuser-Backend](#multiuser-backend)).

Wenn der Server eine Karten-Aktualisierungsanfrage verarbeitet, prüfen Sie das Feld `status`. Das folgende Beispiel verwendet [Go](https://go.dev/), jede andere Backend-Technologie funktioniert jedoch ebenfalls.

Der folgende Codeausschnitt ordnet das Feld `status` serverseitig einer Zielspalte zu:

~~~go
func Update(id int, c Card) error {
   // ...
   oldColumn := c.Column
   s := data.Status
   if s == "todo" || s == "unassigned" {
      c.Column = "open"
   } else if s == "dev" || s == "testing" {
      c.Column = "inprogress"
   } else if s == "merged" || s == "released" {
      c.Column = "done"
   }

   db.Save(&c)

   if oldColumn != c.Column {
      // if the column has been updated by the status field,
      // notify the client to move the card to the corresponding column

      // update the index of the card
      updateCardIndex(&c)

      // notify the client to update the column
      ws.Publish("card-update", &c)
   }
   // ...
}
~~~

Wenn der Benutzer das Statusfeld ändert, prüft die Serverlogik den Wert und platziert die Karte in der Zielspalte. Anschließend benachrichtigt der Server den Client über den WebSocket, die Karte zu verschieben.

### Server und Client kombinieren {#server-side-client-side-grouping}

Beim gemischten Server-plus-Client-Ansatz rufen Sie Gruppierungsregeln vom Server ab. Der Client nutzt diese Regeln, um die Zielspalte anhand des Felds `status` zu bestimmen.

Der folgende Codeausschnitt ruft die Regeln ab:

~~~js
const groupingRules = await fetch("http://server.com/rules");
~~~

Ein Regelobjekt hat folgendes Format:

~~~json
{
   "open": ["todo", "unassigned"],
   "progress": ["dev", "testing"],
   "done": ["merged", "released"],
}
~~~

Definieren Sie eine Logik, die Kartenänderungen prüft und die Karte in die passende Spalte verschiebt. Der folgende Codeausschnitt fängt die Ereignisse `move-card` und `update-card` ab:

~~~js
const updateColumn = card => {
   for (let col in groupingRules) {
      if (groupingRules[col].includes(card.status)) {
         card.column = col;
         break;
      }
   }
};

kanban.api.intercept("move-card", ev => {
   kanban.api.exec("update-card", {
      id: ev.id,
      card: { status: groupingRules[ev.columnId][0] },
   });
});

kanban.api.intercept("update-card", ev => {
   updateColumn(ev.card);
});
~~~

Dieser Ansatz weist Spalten basierend auf anderen Feldwerten zu.

### Beispiel

Das folgende Demo konfiguriert die Serverseite, um zwei oder mehr Status in Echtzeit in einer Spalte zu gruppieren:

<iframe src="https://snippet.dhtmlx.com/habbz6mf?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
