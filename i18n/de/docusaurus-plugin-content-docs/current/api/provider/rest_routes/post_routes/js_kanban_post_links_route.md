---
sidebar_label: POST /links
title: POST /links REST-Route API
description: Lesen Sie die REST-Route POST /links API für DHTMLX Kanban. Erfahren Sie, wie Sie einen neuen Link erstellen und dessen neue ID zurückgeben.
---

# POST `/links`

### Beschreibung

@short: Erstellt einen neuen Link und gibt ein JSON-Objekt mit einer neuen Link-ID zurück.

Die Route verarbeitet die **HTTP POST**-Anfrage, die an den Pfad `/links` gesendet wird.

### Payload

Der Server erwartet ein JSON-Objekt mit den folgenden Eigenschaften:

| Name        | Typ                    | Beschreibung |
| ----------- | ---------------------- | ------------ |
| `source`    | *number* oder *string* | *Erforderlich*. Die ID des Start-Links. |
| `target`    | *number* oder *string* | *Erforderlich*. Die ID des End-Links.   |
| `relation`  | *string*               | *Erforderlich*. Der Typ der durch den Link erstellten Beziehung. |

Beispiel:

~~~json
{
    "source": 1,
    "target": 2,
    "relation": "relatesTo"
}
~~~

### Antwort

Die Route gibt ein JSON-Objekt mit einer neuen Link-ID zurück.

Beispiel:

~~~json
{ 
   "id": 1
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**:
- [Working with server](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](api/config/js_kanban_links_config.md)