---
sidebar_label: DELETE /rows
title: DELETE /rows
description: Sie können mehr über die DELETE /rows REST-Route in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# DELETE `/rows`

### Beschreibung

@short: Löscht Daten in einer Zeile (Swimlane)

Die Route verarbeitet die **HTTP DELETE**-Anfrage, die an den Pfad `/rows/{id}` gesendet wird.

### Pfadparameter

Der folgende Parameter wird in der Anforderungszeile übergeben:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       | number      | *Erforderlich*. Die ID der zu löschenden Zeile. |

### Payload

Es ist kein Payload erforderlich.

### Antwort

Es werden keine Daten zurückgegeben. Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Working with server](guides/working_with_server.md)