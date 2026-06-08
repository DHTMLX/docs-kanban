---
sidebar_label: DELETE /cards/{id}/comments/{id}
title: DELETE /cards/{cardId}/comments/{commentId} REST-Route API
description: Lesen Sie die REST-Routen-API DELETE /cards/{cardId}/comments/{commentId} für DHTMLX Kanban. Erfahren Sie, wie Sie einen Kommentar von einer Karte entfernen.
---

# DELETE `/cards/{cardId}/comments/{commentId}`

### Beschreibung

@short: Entfernt einen Kommentar von einer Karte

Die Route verarbeitet die **HTTP DELETE**-Anfrage, die an den Pfad `cards/{cardId}/comments/{commentId}` gesendet wird.

### Pfadparameter

Die folgenden Parameter werden in der Anforderungszeile übergeben:

| Name        | Typ         | Beschreibung |
| ----------- | ----------- | ------------ |
| `cardId`    |  number     | *Erforderlich*. Die ID der Karte, von der der Kommentar gelöscht wird. |
| `commentId` |  number     | *Erforderlich*. Die ID des zu entfernenden Kommentars. |

### Payload

Es ist kein Payload erforderlich.

### Antwort

Der Server gibt ein JSON-Objekt mit der Benutzer-ID zurück, die den Kommentar entfernt hat.

Beispiel:

~~~json
{
    "id": 4
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Working with server](guides/working_with_server.md)