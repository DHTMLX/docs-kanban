---
sidebar_label: history
title: history Konfiguration
description: Sie können die history-Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek nachlesen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# history

### Beschreibung

@short: Optional. Aktiviert/deaktiviert die Verwaltung der Änderungsverlaufshistorie

:::info
Mit der Eigenschaft `history` können Sie die Verwaltung der Kanban-Historie aktivieren oder deaktivieren. Wenn Sie sie auf **false** setzen, können Sie die Historie weder über die API noch über die Steuerelemente in der Toolbar verwalten.
:::

:::tip
Sie können auch einige Operationen in der Kanban-Historie überspringen, indem Sie den Parameter [`$meta`](api/common/js_kanban_meta_parameter.md) bei Methoden und Events verwenden!
:::

### Verwendung

~~~jsx {}
history?: boolean; 
~~~

### Standardkonfiguration

~~~jsx {}
history: true
~~~

### Beispiel

~~~jsx {4}
new kanban.Kanban("#root", {
    columns,
    cards,
    history: false, // Verwaltung der Historie deaktivieren
    // weitere Parameter
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in Version v1.3 hinzugefügt

**Verwandte Artikel:** [`undo()`](api/methods/js_kanban_undo_method.md) und [`redo()`](api/methods/js_kanban_redo_method.md)