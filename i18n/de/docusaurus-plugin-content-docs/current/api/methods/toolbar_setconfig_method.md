---
sidebar_label: setConfig()
title: setConfig Methode
description: Sie können in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek mehr über die setConfig Methode der Toolbar erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# setConfig()

### Beschreibung

@short: Aktualisiert die Toolbar mit neuen Konfigurationseinstellungen

### Verwendung

~~~jsx {}
setConfig(config: object): void;
~~~

### Parameter

- `config` - (erforderlich) ein Objekt, das die Konfigurationsoptionen der Toolbar enthält. Eine vollständige Liste der Eigenschaften finden Sie [hier](/api/overview/main_overview.md#toolbar-eigenschaften)

:::note
Es werden nur die im Objekt angegebenen Parameter aktualisiert.
:::

### Beispiel

~~~jsx {6-8}
// Kanban erstellen
const board = new kanban.Kanban("#root", {});
// Toolbar erstellen
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// Toolbar-Konfiguration mit neuen Parametern aktualisieren
toolbar.setConfig({
    items: ["search", "spacer", "sort"]
});
~~~
