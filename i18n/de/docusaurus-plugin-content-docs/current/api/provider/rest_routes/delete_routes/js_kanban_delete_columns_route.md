---
sidebar_label: DELETE /columns
title: DELETE /columns
description: Sie können mehr über die DELETE /columns REST-Route in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# DELETE `/columns`

### Beschreibung

@short: Löscht Daten einer Spalte

Die Route verarbeitet die **HTTP DELETE**-Anfrage, die an den Pfad `/columns/{id}` gesendet wird.

### Pfad-Parameter

Der folgende Parameter wird in der Anforderungszeile übermittelt:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       | number      | *Erforderlich*. Die ID der zu löschenden Spalte. |

### Payload

Es wird keine Payload benötigt.

### Antwort

Es werden keine Daten zurückgegeben. Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Arbeiten mit dem Server](guides/working_with_server.md)