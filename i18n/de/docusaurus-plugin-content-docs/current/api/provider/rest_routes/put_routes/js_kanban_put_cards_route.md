---
sidebar_label: PUT /cards
title: PUT /cards
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die REST-Route PUT /cards. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# PUT `/cards`

### Beschreibung

@short: Aktualisiert die Daten einer angegebenen Karte und gibt ein leeres JSON-Objekt zurück.

Diese Route verarbeitet eine **HTTP PUT**-Anfrage, die an den Endpunkt `/cards/{id}` gesendet wird.

### Pfadparameter

Folgender Parameter ist im Anforderungspfad enthalten:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       |  number     | *Erforderlich*. Die ID der Karte, die aktualisiert werden soll.|

### Payload

Der Server erwartet ein JSON-Objekt, das das Kartenobjekt mit all seinen Eigenschaften enthält, einschließlich unveränderter und aktualisierter Werte.

| Name          | Typ         | Beschreibung |
| ------------- | ----------- | ------------ |
| `label`       |  string     | *Erforderlich*. Der Name der zu aktualisierenden Karte.|
| `description` |  string     | *Erforderlich*. Die Beschreibung der Karte.|
| `column`      | number      | *Erforderlich*. Die ID der Spalte, zu der die Karte gehört.|
| `row`         | number      | *Erforderlich*. Die ID der Zeile, zu der die Karte gehört.|
| `start_date`  |  string     | *Erforderlich*. Das Startdatum im ISO-Format yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| `end_date`    |  string     | *Erforderlich*. Das Enddatum im ISO-Format yyyy-MM-dd'T'HH:mm:ss.SSSXXX |
| `progress`    |  number     | *Erforderlich*. Der Fortschrittswert, von 0 bis 100.|
| `attached`    |  object     | *Erforderlich*. Ein Array mit Daten über angehängte Datei(en). Siehe das Objektbeispiel hier [**cards**](/api/config/js_kanban_cards_config.md)|
| `color`       |  string     | *Erforderlich*. Die Farbe der oberen Linie der Karte im HEX-Format.|
| `priority`    |  number     | *Erforderlich*. Die Prioritäts-ID der Karte. |
| `users`       |  object     | *Erforderlich*. Ein Array von zugewiesenen Benutzer-IDs. Siehe das Objektbeispiel hier [**cardShape**](/api/config/js_kanban_cardshape_config.md) |

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

Ein weiteres Beispiel des Kartenobjekts finden Sie im Abschnitt [**cards**](/api/config/js_kanban_cards_config.md).

### Antwort

Wenn die Aktualisierung erfolgreich ist, gibt der Server ein leeres JSON-Objekt zurück.

Der HTTP-Statuscode zeigt das Ergebnis der Anfrage an: Erfolg mit Status 200 oder Fehler mit Status 500.

---

**Verwandte Artikel**: [Arbeiten mit dem Server](/guides/working_with_server.md)
