---
sidebar_label: add-link
title: add-link Event
description: Sie können mehr über das add-link Event in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# add-link

### Beschreibung

@short: Wird ausgelöst, wenn ein neuer Link hinzugefügt wird

### Verwendung

~~~jsx {}
"add-link": ({
    id?: string | number,
    link: object,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback des **add-link** Events kann ein Objekt mit den folgenden Parametern erhalten:

- `id` - (optional) die ID des neuen Links
- `link` - (erforderlich) das Datenobjekt des neuen Links. Die vollständige Liste der Link-Parameter finden Sie [hier](api/config/js_kanban_links_config.md)
- `skipProvider` - (optional) aktiviert/deaktiviert das Verhindern, dass die Anfrage an den Server gesendet wird

:::info
Zur Behandlung der internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {8-10}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links
});
// Anmeldung auf das "add-link" Event
board.api.on("add-link", (obj) => {
    console.log(obj.link.masterId);
});
~~~

**Änderungsprotokoll:** Das Event wurde in Version v1.4 hinzugefügt