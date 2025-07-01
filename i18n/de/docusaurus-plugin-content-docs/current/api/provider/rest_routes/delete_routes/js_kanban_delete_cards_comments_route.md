---
sidebar_label: DELETE /cards/{id}/comments/{id}
title: DELETE /cards/{cardId}/comments/{commentId}
description: Sie können die DELETE /cards/{cardId}/comments/{commentId} REST-Route in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# DELETE `/cards/{cardId}/comments/{commentId}`

### Beschreibung

@short: Löscht einen Kommentar von einer Karte

Diese Route verarbeitet eine **HTTP DELETE**-Anfrage, die an den Endpunkt `cards/{cardId}/comments/{commentId}` gesendet wird.

### Pfadparameter

Die folgenden Parameter sind in der Anforderungs-URL enthalten:

| Name        | Typ         | Beschreibung |
| ----------- | ----------- | ------------ |
| `cardId`    |  number     | *Erforderlich*. Die Kennung der Karte, von der der Kommentar gelöscht werden soll. |
| `commentId` |  number     | *Erforderlich*. Die Kennung des zu löschenden Kommentars. |

### Payload

Für diese Anfrage muss kein Payload gesendet werden.

### Antwort

Der Server antwortet mit einem JSON-Objekt, das die Benutzer-ID enthält, die den Kommentar gelöscht hat.

Beispiel:

~~~json
{
    "id": 4
}
~~~

Der HTTP-Statuscode zeigt das Ergebnis an: 200 bedeutet, dass die Anfrage erfolgreich war, während 500 einen Fehler anzeigt.

---

**Verwandte Artikel**: [Working with server](/guides/working_with_server.md)
