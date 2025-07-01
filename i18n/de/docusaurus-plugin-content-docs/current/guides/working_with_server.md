---
sidebar_label: Arbeiten mit dem Server
title: Arbeiten mit dem Server
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie, wie Sie mit dem Server arbeiten. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Arbeiten mit dem Server

JavaScript Kanban kann sowohl clientseitige als auch serverseitige Daten verarbeiten. Es gibt keine speziellen Backend-Anforderungen, sodass eine Verbindung zu jeder Plattform möglich ist, die REST-APIs unterstützt.

:::info
Das Widget wird mit integrierten **Go**- und **Node**-Backend-Optionen geliefert, unterstützt aber auch eigene Server-Skripte.
:::

## RestDataProvider

JavaScript Kanban bietet den **RestDataProvider**-Service, der REST-APIs für Backend-Operationen vollständig unterstützt. Dieser Service erleichtert die Kommunikation mit Ihrem Server und ermöglicht folgende Datenaktionen:

- ***"add-card"***
- ***"add-column"***
- ***"add-comment"***
- ***"add-row"***
- ***"add-link"***
- ***"delete-card"***
- ***"delete-column"***
- ***"delete-comment"***
- ***"delete-row"***
- ***"delete-link"***
- ***"move-card"***
- ***"move-column"***
- ***"move-row"***
- ***"update-card"***
- ***"update-column"***
- ***"update-comment"***
- ***"update-row"***

## REST-Methoden

Der **RestDataProvider**-Service stellt verschiedene REST-Methoden zum dynamischen Laden von Daten bereit:

- [`getCards()`](/api/provider/rest_methods/js_kanban_getcards_method.md) - gibt ein Promise mit den ***Karten-Daten*** zurück
- [`getColumns()`](/api/provider/rest_methods/js_kanban_getcolumns_method.md) - gibt ein Promise mit den ***Spalten-Daten*** zurück
- [`getLinks()`](/api/provider/rest_methods/js_kanban_getlinks_method.md) - gibt ein Promise mit den ***Verknüpfungen-Daten*** zurück
- [`getRows()`](/api/provider/rest_methods/js_kanban_getrows_method.md) - gibt ein Promise mit den ***Zeilen-Daten*** zurück
- [`getUsers()`](/api/provider/rest_methods/js_kanban_getusers_method.md) - gibt ein Promise mit den ***Benutzerdaten*** zurück

## Verbindung mit dem Backend

Um eine Verbindung zum Server herzustellen, müssen Sie einfach den **RestDataProvider** mit Ihren Server-Skripten verknüpfen. Wenn Sie die integrierten Backends verwenden, finden Sie diese hier:

- [**Go**](https://github.com/web-widgets/kanban-go) Backend
- [**Node**](https://github.com/web-widgets/kanban-node) Backend

Sie können selbstverständlich auch Ihr eigenes Backend einrichten.

:::tip
Wenn Sie ein individuelles Backend verwenden, lesen Sie bitte den Abschnitt [**REST API-Routen**](/api/overview/rest_routes_overview/) für weitere Details.
:::

Das Verbinden des **RestDataProvider** mit dem Backend ist einfach: Verwenden Sie einfach den **kanban.RestDataProvider**-Konstruktor und übergeben Sie die Server-**URL**.

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
Um Datenoperationen wie das Hinzufügen oder Löschen von Elementen zu ermöglichen und Anfragen an den Server zu senden, muss **RestDataProvider** in die **Event Bus**-Kette über [**api.setNext()**](/api/internal/js_kanban_setnext_method.md) eingebunden werden.
:::

### Beispiel

Hier sehen Sie einen Codeausschnitt, wie **RestDataProvider** mit einem **Go**-Backend verbunden und Daten vom Server geladen werden:

<iframe src="https://snippet.dhtmlx.com/f25y0809?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Multiuser-Backend

Kanban-Boards sind beliebte Tools für Unternehmen jeder Größe, und Multiuser-Unterstützung kann die Zusammenarbeit deutlich verbessern. Mit dieser Funktion können mehrere Nutzer dieselben Karten in Echtzeit verwalten - ganz ohne Seiten-Reload. So wird die Zusammenarbeit reibungsloser und alle bleiben bei Änderungen stets auf dem neuesten Stand.

Um ein Multiuser-Backend einzurichten, müssen Sie sich zunächst vor der Initialisierung des Kanban-Boards am Server authentifizieren. Dazu können Sie eine einfache `login(url: string)`-Funktion verwenden:

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

Diese Funktion dient nur zu Demonstrationszwecken - jeder Benutzer wird mit einer ID von 1 authentifiziert. Nach dem Login sendet der Server ein Token zurück, das bei zukünftigen Anfragen mitgesendet werden sollte. Um dies automatisch zu erledigen, verwenden Sie die Methode `RestDataProvider.setHeaders()`, die benutzerdefinierte Header zu jeder Anfrage hinzufügt. Standardmäßig erwartet der Server das Token im Header `"Remote-Token":<value>`:

~~~js {}
login(url).then(token => {
    // Initialisierung des RestProviders
    const restProvider = new kanban.RestDataProvider(url);
    // Token als benutzerdefinierten Header setzen
    restProvder.setHeaders({
        "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
    });
    
    // Widget-Initialisierung...
});
~~~

Sobald Sie das Token haben, können Sie das Kanban-Widget wie folgt initialisieren:

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

    // Daten vom Client an den Server speichern
    board.api.setNext(restProvider);
    
    // Multiuser-Initialisierung...
});
~~~

Nach der Initialisierung des Widgets müssen Sie einen WebSocket hinzufügen, um auf Server-Ereignisse zu hören. So geht's:

~~~js {}
// Multiuser-Initialisierung...

// Handler für Serverereignisse vom Client holen
const handlers = kanbanUpdates(
    board.api,
    restProvider.getIDResolver()
);
// Verbindung zu Serverereignissen herstellen
const events = new RemoteEvents(url + "/api/v1", token);
// Client-Handler an Serverereignisse anhängen
events.on(handlers);
~~~

- `handlers` - das sind die Client-Funktionen, die auf Serverereignisse reagieren
- `events` - dieses Objekt stellt die Verbindung zum Server her und hört auf eingehende Ereignisse
- `RemoteEvents.on(handlers)` - verbindet die Handler mit den Serverereignissen

Durch das Hinzufügen eines Multiuser-Backends wird die Zusammenarbeit deutlich erleichtert und Änderungen werden sofort in der Benutzeroberfläche sichtbar.

### Beispiel

Hier sehen Sie einen Codeausschnitt, wie ein Multiuser-Backend eingerichtet wird, sodass Nutzer die Änderungen der anderen in Echtzeit sehen können:

<iframe src="https://snippet.dhtmlx.com/xw6g6qd6?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Anpassung von Serverereignissen

Sie können die Verarbeitung von Serverereignissen individuell anpassen. Übergeben Sie dazu Ihr eigenes **handlers**-Objekt an die Methode `RemoteEvents.on(handlers)`. Das **handlers**-Objekt ist wie folgt aufgebaut:

~~~js {}
{
    "cards": cardsHandler: function(obj: any),
    "columns": columnsHandler: function(obj: any),
    "links": linksHandler: function(obj: any),
    "rows": rowsHandler: function(obj: any),
}
~~~

Immer wenn sich etwas auf dem Server ändert, erhalten Sie den Namen des geänderten Elements zurück - dieser kann je nach Backend-Logik variieren.

Updates auf der Clientseite werden im Argument **obj** der Funktion `function(obj: any)` übergeben. Der Operationstyp wird mit dem Feld `type: string` angegeben, das folgende Werte haben kann:

- Für **cards**: `"add-card"`, `"update-card"`, `"delete-card"`, `"move-card"`
- Für **columns**: `"add-column"`, `"update-column"`, `"delete-column"`, `"move-column"`
- Für **links**: `"add-link"`, `"delete-link"`
- Für **rows**: `"add-row"`, `"update-row"`, `"delete-row"`, `"move-row"`

Siehe folgendes Codebeispiel:

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
    obj.card.column = idResolver(obj.card.column, TypeColumn);
    switch (obj.type) {
        case "add-card":
            board.api.exec("add-card", {
                card: obj.card,
                select: false,
                skipProvider: true, // verhindert, dass der Client eine Anfrage an den Server sendet
            })
            break;
        // weitere Operationen
    }
}

// Eigene Handler hinzufügen
const handlers = {
   cards: cardsHandler,
};

const remoteEvents = new kanban.RemoteEvents(remoteEventsURL, token);
remoteEvents.on(handlers);
~~~

Die Methode `RestDataProvider.getIDResolver()` liefert Ihnen eine Funktion, mit der Sie Client-IDs mit Server-IDs synchronisieren können. Wenn Sie etwas Neues (*card/column/row*) auf dem Client erstellen, erhält es zunächst eine temporäre ID; die echte Server-ID wird im Store gespeichert. Die Funktion `idResolver()` sorgt für die Synchronisierung. Die Signatur ist `idResolver(id: TID, type: number)`.

Die Werte für `type` sind wie folgt zugeordnet:

- `CardID` - 1,
- `RowID` - 2,
- `ColumnID` - 3

Wenn Sie vermeiden möchten, dass eine neue Anfrage an den Server gesendet wird, nutzen Sie beim Aufruf von `board.api.exec()` das Flag `skipProvider: true`.

Sobald die eigenen Handler eingebunden sind, können Sie die Verarbeitung von Serverereignissen auf der Clientseite vollständig steuern.

## Gruppierung von zwei oder mehr Status in einer Spalte

Manchmal möchten Sie Karten mit unterschiedlichen Status in einer einzigen Spalte anzeigen (zum Beispiel alle Karten mit dem Status *To do* und *Unassigned* in einer Spalte).

Hierzu fügen Sie ein eigenes Feld (z.B. **status**) hinzu, das den aktuellen Status der Karte speichert. Das **column**-Feld speichert den gemeinsamen Status.

Definieren Sie anschließend Regeln für die Gruppierung von Karten. Beispielsweise könnten Karten nach folgenden Status zu Spalten gruppiert werden:

- *todo*, *unassigned* - für die Spalte **Open**
- *dev*, *testing* - für die Spalte **Inprogress**
- *merged*, *released* - für die Spalte **Done**

Es gibt verschiedene Möglichkeiten, diese Gruppierung zu implementieren:

- [Serverseitig](#serverseitige-gruppierung)
- [Serverseitig + clientseitig](#serverseitige--clientseitige-gruppierung)

### Serverseitige Gruppierung

Wenn Sie die Gruppierung auf dem Server durchführen möchten, muss Ihr Backend in der Lage sein, Daten per [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) an den Client zu senden (siehe [Multiuser-Backend](#multiuser-backend)).

Erhält der Server eine Anfrage zum Aktualisieren einer Karte, sollte er das **status**-Feld prüfen. Zum Beispiel könnte das mit [Go](https://go.dev/) folgendermaßen aussehen:

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
      // Wurde die Spalte durch das status-Feld geändert,
      // sollte der Client benachrichtigt werden, die Karte in die entsprechende Spalte zu verschieben

      // Kartenindex aktualisieren
      updateCardIndex(&c)

      // Client informieren, die Spalte zu aktualisieren
      ws.Publish("card-update", &c)
   }
   // ...
}
~~~

Wenn sich also der Status einer Karte ändert, weist die Serverlogik sie der passenden Spalte zu und informiert den Client via WebSocket, damit die Karte dorthin verschoben wird.

### Serverseitige + clientseitige Gruppierung

Bei einem kombinierten Ansatz stellt der Server die Gruppierungsregeln bereit, und der Client entscheidet anhand des Status, in welche Spalte eine Karte gehört.

~~~js
const groupingRules = await fetch("http://server.com/rules");
~~~

Ein Beispiel für solche Regeln könnte so aussehen:

~~~json
{
   "open": ["todo", "unassigned"],
   "progress": ["dev", "testing"],
   "done": ["merged", "released"],
}
~~~

Fügen Sie nun auf dem Client Logik hinzu, um den Status einer Karte zu überprüfen und sie der richtigen Spalte zuzuordnen:

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
      card: { status: groupingRules[ev.columnId][0],
   });
});

kanban.api.intercept("update-card", ev => {
   updateColumn(ev.card);
});
~~~

So steuern Sie, in welchen Spalten Karten erscheinen - basierend auf anderen Feldern.

### Beispiel

Hier sehen Sie einen Codeausschnitt, wie Sie mit serverseitiger Logik zwei oder mehr Status in Echtzeit in einer Spalte gruppieren:

<iframe src="https://snippet.dhtmlx.com/habbz6mf?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
