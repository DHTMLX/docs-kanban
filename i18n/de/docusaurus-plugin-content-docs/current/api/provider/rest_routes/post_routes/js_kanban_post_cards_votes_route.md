---
sidebar_label: POST /cards/{id}/vote
title: POST /cards/{cardId}/vote
description: Sie können mehr über die POST /cards/{cardId}/vote REST-Route in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# POST `/cards/{cardId}/vote`

### Beschreibung

@short: Fügt der Karte eine neue Stimme hinzu und gibt ein JSON-Objekt mit der ID des abstimmenden Benutzers zurück.

Die Route verarbeitet die **HTTP POST**-Anfrage, die an den Pfad `/cards/{cardId}/vote` gesendet wird.

### Payload

Es ist kein Payload erforderlich.

### Antwort

Die Route gibt ein JSON-Objekt mit der ID des abstimmenden Benutzers zurück.

Beispiel:

~~~json
{ 
   "id": 1
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Working with server](guides/working_with_server.md)