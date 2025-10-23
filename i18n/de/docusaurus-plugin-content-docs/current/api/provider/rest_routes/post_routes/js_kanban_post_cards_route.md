---
sidebar_label: POST /cards
title: POST /cards
description: Sie können die REST-Route POST /cards in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# POST `/cards`

### Beschreibung

@short: Erstellt eine neue Karte und gibt ein JSON-Objekt mit einer neuen Karten-ID zurück.

Die Route verarbeitet die **HTTP POST**-Anfrage, die an den Pfad `/cards` gesendet wird.

### Payload

Der Server erwartet ein JSON-Objekt mit den folgenden Eigenschaften:

| Name        | Typ         | Beschreibung |
| ----------- | ----------- | ------------ |
| `label`     | string      | *Erforderlich*. Der Name der neuen hinzuzufügenden Karte. |
| `column`    | number      | *Erforderlich*. Die Ziel-Spalten-ID. |
| `row`       | number      | *Erforderlich*. Die Ziel-Zeilen-ID. |

Beispiel:

~~~json
{
    "label": "New card",
    "column": 2,
    "row": 1,
}
~~~

### Antwort

Die Route gibt ein JSON-Objekt mit einer neuen Karten-ID zurück.

Beispiel:

~~~json
{ 
   "id": 1
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Working with server](guides/working_with_server.md)