---
sidebar_label: POST /links
title: POST /links
description: Erforschen Sie die POST /links REST-Route in der DHTMLX JavaScript Kanban Bibliotheksdokumentation. Schauen Sie sich Entwickleranleitungen, API-Referenzen, Beispielcode, Live-Demos an und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# POST `/links`

### Beschreibung

@short: Fügt einen neuen Link hinzu und gibt ein JSON-Objekt mit der neuen Link-ID zurück

Diese Route verarbeitet **HTTP POST**-Anfragen, die an den Endpunkt `/links` gesendet werden.

### Payload

Der Server erwartet ein JSON-Objekt mit den folgenden Eigenschaften:

| Name        | Typ                    | Beschreibung |
| ----------- | ---------------------- | ------------ |
| `masterId`  | *number* oder *string* | *Erforderlich*. Die ID des Master-Links. |
| `slaveId`   | *number* oder *string* | *Erforderlich*. Die ID des Slave-Links.  |
| `relation`  | *string*               | *Erforderlich*. Definiert die Art der Beziehung, die der Link darstellt. |

Beispiel:

~~~json
{
    "masterId": 1,
    "slaveId": 2,
    "relation": "relatesTo",
}
~~~

### Antwort

Die Antwort gibt ein JSON-Objekt mit der ID des neu erstellten Links zurück.

Beispiel:

~~~json
{ 
   "id": 1
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**:
- [Working with server](/guides/working_with_server.md)
- [getLinks()](/api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](/api/config/js_kanban_links_config.md)
