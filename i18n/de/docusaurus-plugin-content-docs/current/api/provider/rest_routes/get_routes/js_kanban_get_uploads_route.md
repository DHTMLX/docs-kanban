---
sidebar_label: GET /uploads
title: GET /uploads
description: Sie können die REST-Route GET /uploads in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# GET `/uploads`

### Beschreibung

@short: Ruft die angeforderte Binärdatei vom Server ab

Die Route verarbeitet die **HTTP GET**-Anfrage, die an den Pfad `/uploads/{id}/{name}` gesendet wird.

### Pfadparameter

Die folgenden Parameter werden in der Anforderungszeile übergeben:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       |  number     | *Erforderlich*. Die ID der benötigten Datei. |
| `name`     |  string     | *Erforderlich*. Der Name der angeforderten Datei. |

### Payload

Es ist kein Payload erforderlich.

### Antwort

Die Route gibt die angeforderte Binärdatei zurück.

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Working with server](guides/working_with_server.md)