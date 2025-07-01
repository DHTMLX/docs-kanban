---
sidebar_label: PUT /cards/{id}/comments/{id}
title: PUT /cards/{cardId}/comments/{commentId}
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die REST-Route PUT /cards/{cardId}/comments/{cardId}. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# PUT `/cards/{cardId}/comments/{commentId}`

### Beschreibung

@short: Dieser Endpunkt aktualisiert einen bestehenden Kommentar innerhalb einer Karte und gibt ein JSON-Objekt mit der ID des aktualisierten Kommentars zurück.

Diese Route verarbeitet die **HTTP PUT**-Anfrage, die an `cards/{cardId}/comments/{commentId}` gesendet wird.

### Pfadparameter

Die folgenden Parameter sind in der Anfrage-URL enthalten:

| Name        | Typ         | Beschreibung |
| ----------- | ----------- | ------------ |
| `cardId`    | number      | *Erforderlich*. Die ID der Karte, die den zu aktualisierenden Kommentar enthält. |
| `commentId` | number      | *Erforderlich*. Die ID des Kommentars, der aktualisiert werden soll. |

### Payload

Der Server erwartet ein JSON-Objekt mit der folgenden Eigenschaft:

| Name    | Typ     | Beschreibung                   |
| ------- | ------- | ----------------------------- |
| `text`  | string  | *Erforderlich*. Der aktualisierte Inhalt des Kommentars. |

Beispiel:

~~~json
{
    "text": "The comment's content"
}
~~~

### Antwort

Der Server antwortet mit einem JSON-Objekt, das die ID des aktualisierten Kommentars enthält.

Beispiel:

~~~json
{
    "id": 4
}
~~~

Der HTTP-Statuscode zeigt das Ergebnis der Anfrage an: Ein Status von 200 bedeutet Erfolg, während 500 einen Fehler anzeigt.

---

**Verwandte Artikel**: [Working with server](/guides/working_with_server.md)
