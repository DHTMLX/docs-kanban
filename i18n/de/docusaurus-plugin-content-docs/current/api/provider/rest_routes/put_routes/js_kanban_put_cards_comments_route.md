---
sidebar_label: PUT /cards/{id}/comments/{id}
title: PUT /cards/{cardId}/comments/{commentId}
description: Sie können die REST-Route PUT /cards/{cardId}/comments/{cardId} in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# PUT `/cards/{cardId}/comments/{commentId}`

### Beschreibung

@short: Aktualisiert einen Kommentar in einer Karte und gibt ein JSON-Objekt mit der ID des aktualisierten Kommentars zurück.

Die Route verarbeitet die **HTTP PUT**-Anfrage, die an den Pfad `cards/{cardId}/comments/{commentId}` gesendet wird.

### Pfadparameter

Die folgenden Parameter werden in der Anforderungszeile übergeben:

| Name        | Typ         | Beschreibung |
| ----------- | ----------- | ------------ |
| `cardId`    | number      | *Erforderlich*. Die ID der Karte, deren Kommentar aktualisiert wird. |
| `commentId` | number      | *Erforderlich*. Die ID des zu aktualisierenden Kommentars. |

### Payload

Der Server erwartet ein JSON-Objekt mit den folgenden Eigenschaften:

| Name        | Typ         | Beschreibung |
| ----------- | ----------- | ------------ |
| `text`      | string      | *Erforderlich*. Der Text des Kommentars.|

Beispiel:

~~~json
{
    "text": "The comment's content"
}
~~~

### Antwort

Der Server gibt ein JSON-Objekt mit einer Karten-ID zurück.

Beispiel:

~~~json
{
    "id": 4
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Working with server](guides/working_with_server.md)