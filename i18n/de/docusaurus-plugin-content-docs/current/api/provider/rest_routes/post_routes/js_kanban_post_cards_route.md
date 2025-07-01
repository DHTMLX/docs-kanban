---
sidebar_label: POST /cards
title: POST /cards
description: Entdecken Sie den POST /cards REST-Endpunkt in der DHTMLX JavaScript Kanban Bibliotheksdokumentation. Greifen Sie auf Entwickleranleitungen, API-Referenzen, Codebeispiele, Live-Demos zu und erhalten Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban.
---

# POST `/cards`

### Beschreibung

@short: Fügt eine neue Karte hinzu und antwortet mit einem JSON-Objekt, das die ID der Karte enthält.

Dieser Endpunkt verarbeitet **HTTP POST**-Anfragen, die an die URL `/cards` gesendet werden.

### Payload

Der Server erwartet ein JSON-Objekt mit den folgenden Feldern:

| Name        | Typ         | Beschreibung |
| ----------- | ----------- | ------------ |
| `label`     | string      | *Erforderlich*. Der Titel der zu erstellenden Karte. |
| `column`    | number      | *Erforderlich*. Die ID der Spalte, in der die Karte platziert wird. |
| `row`       | number      | *Erforderlich*. Die ID der Zeile, in der die Karte positioniert wird. |

Beispiel:

~~~json
{
    "label": "New card",
    "column": 2,
    "row": 1,
}
~~~

### Antwort

Der Endpunkt antwortet mit einem JSON-Objekt, das die ID der neu erstellten Karte enthält.

Beispiel:

~~~json
{ 
   "id": 1
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder ob ein Fehler aufgetreten ist (response.status == 500).

---

**Verwandte Artikel**: [Working with server](/guides/working_with_server.md)
