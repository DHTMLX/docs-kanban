---
sidebar_label: DELETE /cards/{id}/vote
title: DELETE /cards/{cardId}/vote
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die REST-Route DELETE /cards/{cardId}/vote. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# DELETE `/cards/{cardId}/vote`

### Beschreibung

@short: Entfernt eine Stimme von einer Karte und gibt ein JSON-Objekt mit der Benutzer-ID zurück, die die Stimme entfernt hat.

Die Route verarbeitet die **HTTP DELETE**-Anfrage, die an den Pfad `/cards/{cardId}/vote` gesendet wird.

### Pfadparameter

Der folgende Parameter wird in der Anforderungszeile übergeben:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `cardId`   | number      | *Erforderlich*. Die ID der Karte, von der die Stimme entfernt wird. |

### Payload

Es wird kein Payload benötigt.

### Antwort

Die Route gibt ein JSON-Objekt mit der Benutzer-ID zurück, die die Stimme entfernt hat.

Beispiel:

~~~json
{ 
   "id": 1
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Working with server](guides/working_with_server.md)