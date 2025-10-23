---
sidebar_label: POST /cards/{id}/comments
title: POST /cards/{cardId}/comments
description: Sie können die REST-Route POST /cards/{cardId}/comments in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# POST `/cards/{cardId}/comments`

### Beschreibung

@short: Fügt dem Kartenobjekt einen neuen Kommentar hinzu und gibt ein JSON-Objekt mit der ID des neu hinzugefügten Kommentars zurück.

Diese Route verarbeitet die **HTTP POST**-Anfrage an den Pfad `/cards/{cardId}/comments`.

### Payload

Der Server erwartet ein JSON-Objekt mit den folgenden Eigenschaften:

| Name        | Typ         | Beschreibung                      |
| ----------- | ----------- | -------------------------------- |
| `text`      | string      | *Erforderlich*. Der Text des Kommentars. |
| `date`      | object      | *Erforderlich*. Das Datum des Kommentars. |

Beispiel:

~~~json
{
    "text": "The comment content",
    "date": "2023-05-18T09:13:56.656Z",
}
~~~

### Antwort

Die Route gibt ein JSON-Objekt mit der ID des neu hinzugefügten Kommentars zurück.

Beispiel:

~~~json
{ 
   "id": 1
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Working with server](guides/working_with_server.md)