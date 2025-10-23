---
sidebar_label: Arbeiten mit dem Server
title: Arbeiten mit dem Server
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie, wie Sie mit dem Server arbeiten. Stöbern Sie in Entwicklerhandbüchern und der API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Arbeiten mit dem Server

JavaScript Kanban ermöglicht das Arbeiten sowohl mit Client- als auch mit Serverdaten. Das Widget stellt keine besonderen Anforderungen an das Backend. Es kann einfach mit jeder Backend-Plattform verbunden werden, die die REST API (RESTful API) unterstützt.

:::info
Standardmäßig wird das Widget mit einem integrierten **Go**- und **Node**-Backend ausgeliefert. Sie können jedoch auch eigene Serverskripte verwenden.
:::

## RestDataProvider

JavaScript Kanban bietet den **RestDataProvider**-Service, der die REST API vollständig für die Kommunikation mit dem Backend unterstützt. Damit können Sie mit dem Server interagieren und folgende Datenoperationen ausführen:

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

Der **RestDataProvider**-Service enthält spezielle REST-Methoden für das dynamische Laden von Daten:

- [`getCards()`](api/provider/rest_methods/js_kanban_getcards_method.md) – gibt ein Promise mit den ***Karten-Daten*** zurück
- [`getColumns()`](api/provider/rest_methods/js_kanban_getcolumns_method.md) – gibt ein Promise mit den ***Spalten-Daten*** zurück
- [`getLinks()`](api/provider/rest_methods/js_kanban_getlinks_method.md) – gibt ein Promise mit den ***Verbindungsdaten*** zurück
- [`getRows()`](api/provider/rest_methods/js_kanban_getrows_method.md) – gibt ein Promise mit den ***Zeilen-Daten*** zurück
- [`getUsers()`](api/provider/rest_methods/js_kanban_getusers_method.md) – gibt ein Promise mit den ***Benutzerdaten*** zurück

## Interaktion mit dem Backend  

Um mit dem Server zu interagieren, müssen Sie den **RestDataProvider** mit den entsprechenden Serverskripten verbinden. Wenn Sie das integrierte Backend verwenden möchten, finden Sie die benötigten Skripte in folgenden Repositories:

- [**Go**](https://github.com/web-widgets/kanban-go) Backend
- [**Node**](https://github.com/web-widgets/kanban-node) Backend

Sie können aber auch ein eigenes Backend erstellen.

:::tip
Wenn Sie ein eigenes Backend verwenden, lesen Sie das Thema [**REST API routes**](api/overview/rest_routes_overview.md) für weitere Informationen!
:::

Um **RestDataProvider** mit dem Backend zu verbinden, müssen Sie den **kanban.RestDataProvider**-Konstruktor aufrufen und die entsprechende **URL** als Parameter übergeben.

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
Sie müssen **RestDataProvider** in die Reihenfolge des **Event Bus** über die Methode [**api.setNext()**](api/internal/js_kanban_setnext_method.md) einbinden, um Datenoperationen (*Hinzufügen*, *Löschen* usw.) durchzuführen und die entsprechenden Anfragen an den Server zu senden.
:::

### Beispiel

Im folgenden Beispiel sehen Sie, wie Sie **RestDataProvider** mit dem **Go**-Backend verbinden und Serverdaten laden:

<iframe src="https://snippet.dhtmlx.com/f25y0809?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Multiuser-Backend

Projektmanagement-Tools wie unser Kanban sind bei Unternehmen jeder Größe sehr gefragt. Daher ist es wichtig, eine reibungslose Benutzererfahrung für mehrere Nutzer zu ermöglichen. Unser neues Feature erlaubt es, dass mehrere Nutzer dieselben Karten auf dem Kanban-Board in Echtzeit verwalten können, ohne dass die Seite neu geladen werden muss. So können Endnutzer zusammenarbeiten und bleiben stets über die Aktionen der anderen auf dem Laufenden, was die Produktivität und Zufriedenheit steigert.

Um ein Multiuser-Backend zu implementieren, müssen Sie vor der Kanban-Initialisierung eine Autorisierung am Server durchführen. Dafür können Sie die Funktion `login(url: string)` erstellen:

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

Diese Funktion simuliert lediglich die Autorisierung, und alle Benutzer werden mit der ID 1 autorisiert. Nach erfolgreicher Autorisierung sendet der Server ein Token, das bei jeder weiteren Anfrage an den Server verwendet werden muss. Um das Senden des Tokens zu automatisieren, wird die Funktion `RestDataProvider.setHeaders()` verwendet. Diese Funktion fügt Anfragen benutzerdefinierte Header hinzu. Standardmäßig speichert unser Server das Token im Header `"Remote-Token":<value>`:

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

Nach Erhalt des Tokens sollten Sie das Widget initialisieren. Dies kann folgendermaßen erfolgen:

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

Nach der Widget-Initialisierung müssen Sie einen WebSocket hinzufügen, um Ereignisse vom Server zu empfangen. Dies kann wie folgt umgesetzt werden:

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

- `handlers` – die Client-Handler, die Server-Ereignisse verarbeiten
- `events` – das Objekt, das sich mit dem Server verbindet und alle eingehenden Ereignisse abhört
- `RemoteEvents.on(handlers)` – wendet die Client-Handler auf Server-Ereignisse an

Nach der Integration des Multiuser-Backends in Ihre App können Sie die Zusammenarbeit zwischen den Nutzern vereinfachen und ermöglichen, dass Änderungen in Echtzeit über die Benutzeroberfläche verfolgt werden.

### Beispiel

Der folgende Snippet zeigt, wie Sie das Multiuser-Backend konfigurieren, um Änderungen anderer Nutzer in Echtzeit zu verfolgen:

<iframe src="https://snippet.dhtmlx.com/xw6g6qd6?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Anpassung von Server-Ereignissen

Sie können Ihre eigene Logik für die Verarbeitung von Server-Ereignissen definieren. Dafür müssen Sie das **handlers**-Objekt an die Methode `RemoteEvents.on(handlers)` übergeben. Das **handlers**-Objekt sollte folgende Struktur haben:

~~~js {}
{
    "cards": cardsHandler: function(obj: any),
    "columns": columnsHandler: function(obj: any),
    "links": linksHandler: function(obj: any),
    "rows": rowsHandler: function(obj: any),
}
~~~

Wenn auf dem Server eine Änderung erfolgt, gibt dieser den Namen des geänderten Elements zurück. Diese Namen können je nach Server-Logik variieren.

Die auf der Client-Seite aktualisierten Daten werden im **obj**-Argument der Funktion `function(obj: any)` übergeben. Um eine Operation zu kennzeichnen, gibt es das Feld `type: string`. Es kann folgende Werte annehmen:

- Für **cards**: `"add-card"`, `"update-card"`, `"delete-card"`, `"move-card"`
- Für **columns**: `"add-column"`, `"update-column"`, `"delete-column"`, `"move-column"`
- Für **links**: `"add-link"`, `"delete-link"`
- Für **rows**: `"add-row"`, `"update-row"`, `"delete-row"`, `"move-row"`

Im folgenden Codebeispiel sehen Sie die Implementierungsdetails:

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
                skipProvider: true, // verhindert das Senden der Anfrage vom Client an den Server
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

Die Methode `RestDataProvider.getIDResolver()` gibt eine Funktion zurück, die zur Synchronisierung von Client-IDs mit Server-IDs benötigt wird. Wenn ein neues Objekt (*card/column/row/link*) auf der Client-Seite erstellt wird, erhält das Objekt eine temporäre ID und eine entsprechende Server-ID im Store. Die Funktion `idResolver()` ermöglicht die Synchronisierung der Client-ID mit der Server-ID. Diese Funktion hat folgendes Format: `idResolver(id: TID, type: number)`

Das Argument `type` ist der Modelltyp und nimmt folgende Werte an:

- `CardID` - 1,
- `RowID` - 2,
- `ColumnID` - 3
- `LinkID` - 4

Um zu verhindern, dass eine Anfrage an den Server gesendet wird, müssen Sie das Flag `skipProvider: true` beim Aufruf der Methode `board.api.exec()` verwenden.

Im letzten Schritt wenden Sie die eigenen Handler auf die Server-Ereignisse an. So können Sie Ihre eigenen Server-Event-Handler erstellen.

## Gruppierung von zwei oder mehr Status in einer einzigen Spalte

In diesem Abschnitt sehen Sie, wie Sie Karten aus verschiedenen Spalten in einer Spalte anzeigen können (zum Beispiel eine gemeinsame Spalte für Karten mit den Status *To do* und *Unassigned*).

Um eine solche Gruppierung zu implementieren, müssen Sie ein benutzerdefiniertes Feld hinzufügen (zum Beispiel **status**). Dieses Feld speichert den aktuellen Status einer Karte. Das Feld **column** speichert den gemeinsamen Status.

Anschließend müssen Sie spezielle Regeln für die Gruppierung der Karten erstellen. In unserem Fall werden die Karten in bestimmten Spalten nach folgenden Status gruppiert:

- *todo*, *unassigned* – Status für die Spalte **Open**
- *dev*, *testing* – Status für die Spalte **Inprogress**
- *merged*, *released* – Status für die Spalte **Done**

Es gibt zwei Möglichkeiten, wie Sie eine solche Gruppierung von Karten in einer Spalte nach zwei oder mehr Status umsetzen können:

- [Serverseitig](#serverseitige-gruppierung)
- [Serverseitig + clientseitig](#serverseitige--clientseitige-gruppierung)

### Serverseitige Gruppierung

Wenn Sie die serverseitige Gruppierung umsetzen möchten, sollte Ihr Server in der Lage sein, Daten über [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) an den Client zu senden (siehe [Multiuser-Backend](#multiuser-backend)).

An der Stelle, an der der Server eine Anfrage zur Aktualisierung einer Karte verarbeitet, müssen Sie das **status**-Feld überprüfen. In unserem Beispiel verwenden wir die Programmiersprache [Go](https://go.dev/), aber Sie können auch andere Backend-Technologien verwenden.

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
      // Wenn die Spalte durch das Statusfeld aktualisiert wurde,
      // sollte der Client benachrichtigt werden, die Karte in die entsprechende Spalte zu verschieben

      // Index der Karte aktualisieren
      updateCardIndex(&c)

      // Client benachrichtigen, die Spalte zu aktualisieren
      ws.Publish("card-update", &c)
   }
   // ...
}
~~~

Wenn der Benutzer den Wert des Statusfelds ändert, prüft die Serverlogik den Wert und platziert die Karte in der entsprechenden Spalte. Anschließend verwendet der Server WebSocket, um dem Client mitzuteilen, dass die Karte in eine andere Spalte verschoben werden muss.

### Serverseitige + clientseitige Gruppierung

Für den gemischten Server- + Client-Ansatz sollten Sie Gruppierungsregeln vom Server abrufen. Gemäß diesen Regeln kann der Client bestimmen, in welche Spalte die Karte je nach Wert des Statusfelds verschoben wird.

~~~js
const groupingRules = await fetch("http://server.com/rules");
~~~

Beispielsweise können Sie folgende Regeln festlegen:

~~~json
{
   "open": ["todo", "unassigned"],
   "progress": ["dev", "testing"],
   "done": ["merged", "released"],
}
~~~

Anschließend müssen Sie eine Logik definieren, die die Kartenänderungen prüft und die Karte in die gewünschte Spalte verschiebt:

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

Auf diese Weise können Sie bestimmte Spalten für Karten abhängig von anderen Feldern festlegen.

### Beispiel

Der folgende Snippet zeigt, wie Sie die Serverseite konfigurieren, um zwei oder mehr Status in Echtzeit in einer Spalte zu gruppieren:

<iframe src="https://snippet.dhtmlx.com/habbz6mf?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>