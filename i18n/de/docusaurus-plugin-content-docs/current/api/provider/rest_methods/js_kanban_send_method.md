---
sidebar_label: send()
title: send() Methode
description: Erfahren Sie mehr über die send() Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek. Durchsuchen Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# send()

### Beschreibung

@short: Diese Methode übernimmt das Senden der erforderlichen HTTP-Anfragen an den Server und liefert ein Promise zurück, das je nach Anfragetyp Daten enthalten kann.

Alle Serveranfragen werden über die **send()** Methode ausgeführt, die Teil des [**RestDataProvider**](/guides/working_with_server.md/#restdataprovider) Services ist.

### Verwendung

~~~js
send(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | string,
    data?: object,
    headers?: object,
): promise;
~~~

### Parameter

| Name       | Typ        | Beschreibung |
| ----------- | ----------- | ----------- |
| `url`         |  string     | *Erforderlich*. Der Server-Endpunkt, an den die Anfrage gesendet wird.            |
| `method`            |string             | *Erforderlich*. Die zu verwendende HTTP-Methode (GET, POST, PUT, DELETE).            |
| `data`  | object        | *Optional*. Parameter, die an den Server gesendet werden. Standardmäßig werden Event-Parameter gesendet, Sie können jedoch zusätzliche Parameter mit einem benutzerdefinierten Objekt hinzufügen. Siehe das [Beispiel](#beispiele) unten. |
| `headers`  |object       | *Optional*. Der Standard-Header enthält **Content-Type** mit dem Wert *application/json*. Zusätzliche Header können über den Parameter **customHeaders** hinzugefügt werden. Siehe das [Beispiel](#beispiele) unten. |

### Antwort

Diese Methode gibt ein Promise zurück, das je nach Anfrage Daten enthalten kann oder nicht.

Ein Promise wird bei erfolgreicher Anfrage aufgelöst. Wenn die Anfrage fehlschlägt, wird ein Fehler ausgelöst.

Sie können die zurückgegebenen Daten steuern und Fehler bei fehlgeschlagenen Anfragen mit der **catch** Methode des zurückgegebenen Promise behandeln.

~~~jsx
restDataProvider.send(url, method, data)
.then(data => {
   ... // Erfolg: Verarbeite die erhaltenen Daten
})
.catch(err => {
    ... // Fehlerbehandlung
});
~~~

### Beispiele

Das folgende Beispiel zeigt, wie eine Anfrage mit zusätzlichen Parametern neben den Standardparametern gesendet wird:

~~~jsx {14-20}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns()
]).then(([cards, columns]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        //Konfigurationsparameter
    });

    board.api.on("add-card", obj => {
        obj.custom = "custom prop";
        restProvider.send(`cards`, "POST", obj).then(data => {
            board.api.parse({ cards: data });
            return Promise.resolve();
        });
    });

   board.api.setNext(restProvider);
});
~~~

Die folgenden Beispiele zeigen, wie zusätzliche Header beim Verwenden der **send()** Methode hinzugefügt werden können.

~~~js
const customHeaders = {
    "Authorization": "Bearer",
    "Custom header": "some value",
};

board.api.on("add-cards", obj => {
    restDataProvider.send("cards", "POST", obj, customHeaders);
});
~~~

Alternativ können Header auch hinzugefügt werden, indem RestDataProvider erweitert wird, was eine bessere Kontrolle über die an den Server gesendeten Daten ermöglicht:

~~~jsx {3-8}
const url = "https://some_backend_url";

class MyDataProvider extends RestDataProvider {
    send(url, method, data, headers) {
        headers = { ...headers, "SomeToken": "abc" };
        return super.send(url, methods, data, headers);
    }
}

board.api.setNext(new MyDataProvider(url));
~~~

---

**Verwandte Artikel:** [Arbeiten mit dem Server](../../../../guides/working_with_server)
