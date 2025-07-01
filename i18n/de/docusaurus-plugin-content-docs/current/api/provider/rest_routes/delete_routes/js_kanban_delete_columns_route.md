---
sidebar_label: DELETE /columns
title: DELETE /columns
description: Sie können mehr über die DELETE /columns REST-Route in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# DELETE `/columns`

### Beschreibung

@short: Entfernt die Daten einer Spalte

Diese Route verarbeitet **HTTP DELETE**-Anfragen, die an den Endpunkt `/columns/{id}` gesendet werden.

### Pfadparameter

Der folgende Parameter ist in der Anforderungs-URL enthalten:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       |  number     | *Erforderlich*. Gibt die ID der zu entfernenden Spalte an. |

### Payload

Es wird keine Payload benötigt.

### Antwort

Es wird kein Inhalt zurückgegeben. Der Statuscode gibt das Ergebnis an: Erfolg mit response.status == 200 oder Fehler mit response.status == 500.

---

**Verwandte Artikel**: [Working with server](/guides/working_with_server.md)
