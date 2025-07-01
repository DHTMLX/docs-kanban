---
sidebar_label: DELETE /cards/{id}/vote
title: DELETE /cards/{cardId}/vote
description: Sie können die REST-Route DELETE /cards/{cardId}/vote in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# DELETE `/cards/{cardId}/vote`

### Beschreibung

@short: Entfernt eine Stimme von einer Karte und gibt ein JSON-Objekt mit der Benutzer-ID zurück, die die Stimme entfernt hat.

Diese Route verarbeitet eine **HTTP DELETE**-Anfrage, die an `/cards/{cardId}/vote` gesendet wird.

### Pfadparameter

Der folgende Parameter ist in der Anforderungs-URL enthalten:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `cardId`   |  number     | *Erforderlich*. Die ID der Karte, von der die Stimme entfernt wird. |

### Payload

Es muss keine Nutzlast gesendet werden.

### Antwort

Die Antwort ist ein JSON-Objekt, das die Benutzer-ID der Person enthält, die ihre Stimme entfernt hat.

Beispiel:

~~~json
{ 
   "id": 1
}
~~~

Der HTTP-Statuscode gibt an, ob die Anfrage erfolgreich war (response.status == 200) oder ob ein Fehler aufgetreten ist (response.status == 500).

---

**Verwandte Artikel**: [Working with server](/guides/working_with_server.md)
