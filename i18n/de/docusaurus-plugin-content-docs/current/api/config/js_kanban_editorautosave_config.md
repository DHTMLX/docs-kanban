---
sidebar_label: editorAutoSave
title: editorAutoSave Konfiguration API
description: Lesen Sie die editorAutoSave Konfigurations-API für DHTMLX Kanban. Erfahren Sie, wie Sie die automatische Speicherung im Karten-Editor aktivieren oder deaktivieren.
---

# 

<h1 style = {{color: "red"}}><s>editorAutoSave</s></h1>

:::danger
Ab Version 1.3 ist die Eigenschaft `editorAutoSave` **veraltet**. Um den "Autosave"-Modus zu verwalten, verwenden Sie die Eigenschaft [`editor`](api/config/js_kanban_editor_config.md)!
:::

### Beschreibung

@short: Optional. Aktiviert/deaktiviert den Autosave-Modus

:::info
Mit diesem Parameter können Sie den Autosave-Modus von Kanban aktivieren oder deaktivieren. Wenn Sie die Eigenschaft **editorAutoSave** auf **false** setzen, zeigt der Editor die Schaltfläche "Speichern" an, um die bearbeiteten Daten zu speichern.
:::

### Verwendung

~~~jsx {}
editorAutoSave?: boolean; // (standardmäßig true)
~~~

### Standardkonfiguration

~~~jsx {}
editorAutoSave: true
~~~

### Beispiel

~~~jsx {4}
new kanban.Kanban("#root", {
    columns,
    cards,
    editorAutoSave: false, // Autosave deaktivieren
    // weitere Parameter
});
~~~