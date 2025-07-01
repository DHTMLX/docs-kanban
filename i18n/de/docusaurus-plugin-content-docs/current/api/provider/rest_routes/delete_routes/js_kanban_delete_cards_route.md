---
sidebar_label: DELETE /cards
title: DELETE /cards
description: Sie können die REST-Route DELETE /cards in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# DELETE `/cards`

### Beschreibung

@short: Entfernt Daten von einer Karte

Diese Route verarbeitet die **HTTP DELETE**-Anfrage, die an den Endpunkt `/cards/{id}` gesendet wird.

### Pfadparameter

Der folgende Parameter ist in der Anforderungs-URL enthalten:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       |  number     | *Erforderlich*. Die ID der zu entfernenden Karte.|

### Payload

Es muss kein Payload gesendet werden.

### Antwort

Es wird kein Inhalt zurückgegeben. Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder ein Fehler auftrat (response.status == 500).

---

**Verwandte Artikel**: [Working with server](/guides/working_with_server.md)
