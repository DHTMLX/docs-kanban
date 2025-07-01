---
sidebar_label: POST /cards/{id}/comments
title: POST /cards/{cardId}/comments
description: Dieser Abschnitt behandelt die REST-Route POST /cards/{cardId}/comments aus der DHTMLX JavaScript Kanban-Bibliotheksdokumentation. Er umfasst Entwickleranleitungen, API-Referenzen, praktische Code-Beispiele, Live-Demos und bietet eine kostenlose 30-Tage-Testversion von DHTMLX Kanban.
---

# POST `/cards/{cardId}/comments`

### Beschreibung

@short: Fügt der angegebenen Karte einen oder mehrere neue Kommentare hinzu und gibt ein JSON-Objekt mit der ID des neu hinzugefügten Kommentars zurück.

Dieser Endpunkt verarbeitet **HTTP POST**-Anfragen, die an `/cards/{cardId}/comments` gesendet werden.

### Payload

Der Server erwartet ein JSON-Objekt mit den folgenden Eigenschaften:

| Name        | Typ         | Beschreibung                         |
| ----------- | ----------- | ---------------------------------- |
| `text`      | string      | *Erforderlich*. Der Inhalt des Kommentars. |
| `date`      | object      | *Erforderlich*. Das Datum des Kommentars.  |

Beispiel:

~~~json
{
    "text": "The comment content",
    "date": "2023-05-18T09:13:56.656Z",
}
~~~

### Antwort

Die Antwort enthält ein JSON-Objekt mit der ID des neu hinzugefügten Kommentars.

Beispiel:

~~~json
{ 
   "id": 1
}
~~~

Der HTTP-Statuscode gibt das Ergebnis der Anfrage an: Ein Status von 200 bedeutet Erfolg, während 500 auf einen Fehler hinweist.

---

**Verwandte Artikel**: [Working with server](/guides/working_with_server.md)
