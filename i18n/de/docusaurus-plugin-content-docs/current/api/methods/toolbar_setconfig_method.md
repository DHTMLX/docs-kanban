---
sidebar_label: setConfig()
title: Methode setConfig
description: Sie können die Methode setConfig der Toolbar in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# setConfig()

### Beschreibung

@short: Setzt neue Konfigurationsparameter der Toolbar

### Verwendung

~~~jsx {}
setConfig(config: object): void;
~~~

### Parameter

- `config` - (erforderlich) das Objekt der Toolbar-Konfiguration. Die vollständige Liste der Eigenschaften finden Sie [hier](api/overview/main_overview.md#toolbar-properties)

:::note
Die Methode ändert nur die Parameter, die Sie übergeben haben.
:::

### Beispiel

~~~jsx {6-8}
// Kanban erstellen
const board = new kanban.Kanban("#root", {});
// Toolbar erstellen
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// neue Konfigurationsparameter der Toolbar setzen
toolbar.setConfig({
    items: ["search", "spacer", "sort"]
});
~~~