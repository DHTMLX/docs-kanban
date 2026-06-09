---
sidebar_label: setHeaders()
title: setHeaders REST-Methode API
description: Lesen Sie die setHeaders REST-Methoden-API für DHTMLX Kanban. Erfahren Sie, wie Sie benutzerdefinierte HTTP-Header festlegen, die an jede Anfrage angehängt werden.
---

# setHeaders()

### Beschreibung

@short: Legt benutzerdefinierte HTTP-Header fest, die RestDataProvider bei jeder an den Server gesendeten Anfrage anhängt

:::info
Die Methode `setHeaders()` ist Teil des **RestDataProvider**-Dienstes für die Arbeit mit dem Server.
:::

### Verwendung

~~~jsx {}
setHeaders(headers: object): void;
~~~

### Parameter

- `headers` - (erforderlich) ein Objekt, dessen Schlüssel Header-Namen und dessen Werte Header-Werte sind. Die Header werden bei jeder über [`send()`](api/provider/rest_methods/js_kanban_send_method.md) gesendeten Anfrage zum Standard-Header `Content-Type: application/json` hinzugefügt.

### Beispiel

Der häufigste Anwendungsfall ist das Anhängen eines Autorisierungs-Tokens an jede Anfrage:

~~~jsx {4-6}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

restProvider.setHeaders({
    "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
});
~~~

Um Header nur für eine bestimmte Anfrage und nicht für jede Anfrage festzulegen, übergeben Sie diese stattdessen als viertes Argument an [`send()`](api/provider/rest_methods/js_kanban_send_method.md).

**Verwandte Artikel:** [Arbeiten mit dem Server: Multiuser-Backend](guides/working_with_server.md#multiuser-backend)
