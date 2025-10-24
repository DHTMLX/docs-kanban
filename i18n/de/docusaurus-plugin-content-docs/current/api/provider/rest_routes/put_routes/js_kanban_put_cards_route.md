---
sidebar_label: PUT /cards
title: PUT /cards
description: Sie können die PUT /cards REST-Route in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# PUT `/cards`

### Beschreibung

@short: Aktualisiert Daten auf einer angegebenen Karte und gibt ein leeres JSON-Objekt zurück

Die Route verarbeitet die **HTTP PUT**-Anfrage, die an den Pfad `/cards/{id}` gesendet wird.

### Pfadparameter

Der folgende Parameter wird in der Anforderungszeile übergeben:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       | number      | *Erforderlich*. Die ID der zu aktualisierenden Karte. |

### Payload

Der Server muss ein JSON-Objekt erhalten, das das Kartenobjekt enthält und alle Eigenschaften der Karte umfasst (sowohl unveränderte als auch neue/geänderte).

| Name          | Typ         | Beschreibung |
| ------------- | ----------- | ------------ |
| `label`       | string      | *Erforderlich*. Der Name der zu aktualisierenden Karte. |
| `description` | string      | *Erforderlich*. Die Beschreibung der Karte. |
| `column`      | number      | *Erforderlich*. Die ID der Spalte, auf die sich die Karte bezieht. |
| `row`         | number      | *Erforderlich*. Die ID der Zeile, auf die sich die Karte bezieht. |
| `start_date`  | string      | *Erforderlich*. Das Startdatum im ISO-Format yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| `end_date`    | string      | *Erforderlich*. Das Enddatum im ISO-Format yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| `progress`    | number      | *Erforderlich*. Der Wert der Fortschrittsanzeige im Bereich von 0 bis 100 Punkten. |
| `attached`    | object      | *Erforderlich*. Ein Array mit Daten der angehängten Datei(en). Siehe das Objektbeispiel hier [**cards**](api/config/js_kanban_cards_config.md) |
| `color`       | string      | *Erforderlich*. Die Farbe der oberen Kartenlinie im HEX-Format. |
| `priority`    | number      | *Erforderlich*. Die Prioritäts-ID der Karte. |
| `users`       | object      | *Erforderlich*. Ein Array mit den IDs der zugewiesenen Benutzer. Siehe das Objektbeispiel hier [**cardShape**](api/config/js_kanban_cardshape_config.md) |

Beispiel:

~~~json
{
    "card": {
        "label": "Drag and drop",
        "description": "",
        "column": 3,
        "row": 1,
        "start_date": null,
        "end_date": "2018-01-01T00:00:00Z",
        "progress": 100,
        "attached": [],
        "color": "#58C3FE",
        "priority": 2,
        "users": []
    },
}
~~~

Ein weiteres Beispiel für das Kartenobjekt finden Sie im Abschnitt [**cards**](api/config/js_kanban_cards_config.md).

### Antwort

Im Erfolgsfall wird ein leeres JSON-Objekt zurückgegeben.

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Arbeiten mit dem Server](guides/working_with_server.md)