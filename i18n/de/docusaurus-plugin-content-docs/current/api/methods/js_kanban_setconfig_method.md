---
sidebar_label: setConfig()
title: setConfig Methode
description: Sie können die setConfig Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# setConfig()

### Beschreibung

@short: Aktualisiert das Kanban mit neuen Konfigurationseinstellungen

### Verwendung

~~~jsx {}
setConfig(config: object): void;
~~~

### Parameter

- `config` - (erforderlich) ein Objekt, das die Kanban-Konfigurationsoptionen enthält. Eine vollständige Liste der Eigenschaften finden Sie [hier](/api/overview/main_overview.md#kanban-eigenschaften).

:::tip
Mit dieser Methode können Sie die Einstellungen des Kanban-Widgets anpassen und Daten darin laden. Beachten Sie, dass sie keinen Einfluss auf die Historie hat (Änderungen an der Historie werden nicht unterstützt) oder auf Themes (verwenden Sie dafür die [`setTheme()`](/api/methods/js_kanban_settheme_method.md) Methode).
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

// Kanban-Konfiguration mit neuen Parametern aktualisieren
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
                        
// Toolbar-Konfiguration mit neuen Elementen aktualisieren
toolbar.setConfig({ items: ["search", "spacer", "sort"] });
~~~
