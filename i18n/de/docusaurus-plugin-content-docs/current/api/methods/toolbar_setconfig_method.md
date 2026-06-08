---
sidebar_label: setConfig()
title: Toolbar setConfig Methode API
description: Lesen Sie die Toolbar setConfig Method API für DHTMLX Kanban. Erfahren Sie, wie Sie die Toolbar-Konfiguration zur Laufzeit aktualisieren.
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