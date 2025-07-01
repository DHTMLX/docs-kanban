---
sidebar_label: editorAutoSave
title: editorAutoSave Konfiguration
description: Sie können die editorAutoSave-Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek nachlesen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# 

<h1 style = {{color: "red"}}><s>editorAutoSave</s></h1>

:::danger
Ab Version 1.3 ist die Eigenschaft `editorAutoSave` **veraltet**. Um den "Autosave"-Modus zu steuern, verwenden Sie bitte stattdessen die Eigenschaft [`editor`](/api/config/js_kanban_editor_config.md).
:::

### Beschreibung

@short: Optional. Schaltet den Autosave-Modus ein oder aus

:::info
Diese Einstellung ermöglicht es Ihnen, den Autosave im Kanban-Editor zu aktivieren oder zu deaktivieren. Wenn die Eigenschaft **editorAutoSave** auf **false** gesetzt ist, zeigt der Editor eine "Speichern"-Schaltfläche an, um Änderungen manuell zu speichern.
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
