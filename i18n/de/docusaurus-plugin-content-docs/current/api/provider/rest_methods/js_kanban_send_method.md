---
sidebar_label: send()
title: send() Methode
description: Sie können die send() Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# send()

### Beschreibung

@short: Sendet eine erforderliche HTTP-Anfrage an den Server und gibt ein Promise mit oder ohne Daten zurück, abhängig von der Anfrage.

Alle Anfragen an den Server werden mit der **send()** Methode ausgeführt, die Teil des [**RestDataProvider**](guides/working_with_server.md/#restdataprovider) Dienstes ist.

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

| Name        | Typ         | Beschreibung |
| ----------- | ----------- | ------------ |
| `url`       | string      | *Erforderlich*. Ein Pfad zum Server, an den die Anfrage gesendet wird. |
| `method`    | string      | *Erforderlich*. Ein HTTP-Methodentyp (GET, POST, PUT, DELETE) |
| `data`      | object      | *Optional*. Parameter, die an den Server gesendet werden. Standardmäßig werden die Parameter des ausgelösten Events gesendet. Sie können jedoch zusätzliche Parameter mit einem benutzerdefinierten Objekt hinzufügen. Siehe das [Beispiel](#examples) unten. |
| `headers`   | object      | *Optional*. Ein Standard-Header ist der **Content-Type** Header mit dem Wert *application/json*. Weitere optionale Header können mit dem Parameter **customHeaders** hinzugefügt werden. Siehe das [Beispiel](#examples) unten. |

### Antwort

Die Methode gibt ein Promise-Objekt zurück, mit oder ohne Daten, abhängig von der Anfrage.

Ein Promise wird bei erfolgreichem Anfragestatus zurückgegeben. Im Falle einer fehlgeschlagenen Anfrage wird ein Fehler ausgelöst.

Sie können konfigurieren, was zurückgegeben wird. Um eine Antwort auf eine fehlgeschlagene Anfrage zu behandeln, verwenden Sie die **catch** Methode des zurückgegebenen Promise.

~~~jsx
restDataProvider.send(url, method, data)
.then(data => {
   ... // Erfolg: etwas mit den Daten machen
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
        // Konfigurationsparameter
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

Die folgenden Beispiele zeigen, wie Sie der **send()** Methode weitere Header hinzufügen können.

~~~js
const customHeaders = {
    "Authorization": "Bearer",
    "Custom header": "some value",
};

board.api.on("add-cards", obj => {
    restDataProvider.send("cards", "POST", obj, customHeaders);
});
~~~

Oder Sie können Header folgendermaßen hinzufügen, indem Sie RestDataProvider neu definieren, was Ihnen mehr Kontrolle über die an den Server gesendeten Daten gibt:

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

**Verwandte Artikel:** [Working with server](guides/working_with_server.md)