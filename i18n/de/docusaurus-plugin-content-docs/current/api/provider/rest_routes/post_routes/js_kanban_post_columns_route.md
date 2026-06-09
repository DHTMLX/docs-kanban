---
sidebar_label: POST /columns
title: POST /columns REST-Route API
description: Lesen Sie die REST-Route POST /columns API für DHTMLX Kanban. Erfahren Sie, wie Sie eine neue Spalte erstellen und deren ID zurückgeben.
---

# POST `/columns`

### Beschreibung

@short: Fügt eine neue Spalte hinzu und gibt ein JSON-Objekt mit der Spalten-ID zurück

Die Route verarbeitet die **HTTP POST**-Anfrage, die an den Pfad `/columns` gesendet wird.

### Payload

Der Server erwartet ein JSON-Objekt mit den folgenden Eigenschaften:

| Name        | Typ         | Beschreibung |
| ----------- | ----------- | ------------ |
| `label`     |  string     | *Erforderlich*. Der Name der hinzuzufügenden neuen Spalte. |

Beispiel:

~~~json
{
    "label": "Neue Spalte",
}
~~~

### Antwort

Die Route gibt ein JSON-Objekt mit der ID der neuen Spalte zurück.

Beispiel:

~~~json
{ 
   "id": 4
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Arbeiten mit dem Server](guides/working_with_server.md)