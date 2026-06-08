---
sidebar_label: DELETE /cards
title: DELETE /cards REST-Route API
description: Lesen Sie die REST-Routen-API DELETE /cards für DHTMLX Kanban. Erfahren Sie, wie Sie eine Karte löschen.
---

# DELETE `/cards`

### Beschreibung

@short: Löscht Daten auf einer Karte

Die Route verarbeitet die **HTTP DELETE**-Anfrage, die an den Pfad `/cards/{id}` gesendet wird.

### Pfadparameter

Der folgende Parameter wird in der Anforderungszeile übergeben:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       |  number     | *Erforderlich*. Die ID der zu löschenden Karte. |

### Payload

Kein Payload erforderlich.

### Antwort

Es werden keine Daten zurückgegeben. Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Arbeiten mit dem Server](guides/working_with_server.md)