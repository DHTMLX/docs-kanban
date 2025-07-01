---
sidebar_label: POST /cards/{id}/vote
title: POST /cards/{cardId}/vote
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die REST-Route POST /cards/{cardId}/vote. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# POST `/cards/{cardId}/vote`

### Beschreibung

@short: Fügt der Karte eine neue Stimme hinzu und gibt ein JSON-Objekt mit der ID des abstimmenden Benutzers zurück.

Diese Route akzeptiert eine **HTTP POST**-Anfrage an den Endpunkt `/cards/{cardId}/vote`.

### Payload

Für diese Anfrage muss kein Payload gesendet werden.

### Antwort

Die Antwort enthält ein JSON-Objekt mit der ID des Benutzers, der abgestimmt hat.

Beispiel:

~~~json
{ 
   "id": 1
}
~~~

Der HTTP-Statuscode gibt das Ergebnis an: Ein Status von 200 bedeutet, dass die Anfrage erfolgreich war, während 500 auf einen Fehler hinweist.

---

**Verwandte Artikel**: [Working with server](/guides/working_with_server.md)
