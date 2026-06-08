---
sidebar_label: setConfig()
title: setConfig Methode API
description: Lesen Sie die API-Dokumentation der setConfig-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie die Board-Konfiguration zur Laufzeit dynamisch aktualisieren.
---

# setConfig()

### Beschreibung

@short: Setzt neue Konfigurationsparameter für das Kanban

### Verwendung

~~~jsx {}
setConfig(config: object): void;
~~~

### Parameter

- `config` - (erforderlich) das Objekt mit der Kanban-Konfiguration. Eine vollständige Liste der Eigenschaften finden Sie [hier](api/overview/main_overview.md#kanban-properties)

:::tip
Mit dieser Methode können Sie das Kanban-Widget konfigurieren sowie Daten laden. Die Methode ändert nicht die Historie (eine Änderung der Historie ist überhaupt nicht möglich).
:::

### Beispiel

~~~jsx {10-20,22-23}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

// Toolbar erstellen
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });

// neue Konfigurationsparameter für das Kanban angeben
board.setConfig({
    columnKey: "stage",
    rowKey: "type",
    cardShape,
    editorShape,
    editor: {
       autoSave: false
    },
    /* weitere Parameter */
});
                        
// neue Konfigurationsparameter für die Toolbar angeben
toolbar.setConfig({ items: ["search", "spacer", "sort"] });
~~~