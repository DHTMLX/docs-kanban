---
sidebar_label: history
title: history-Konfiguration
description: Dieser Abschnitt behandelt die history-Konfiguration in der DHTMLX JavaScript Kanban-Bibliothek. Entdecken Sie Entwicklerhandbücher, API-Referenzen, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# history

### Beschreibung

@short: Optional. Steuert, ob die Historie der Änderungen verfolgt wird

:::info
Die Eigenschaft `history` ermöglicht es Ihnen, die Historienverwaltung für Kanban ein- oder auszuschalten. Wird sie auf **false** gesetzt, kann die Historie weder über die API noch über die Toolbar-Steuerelemente kontrolliert werden.
:::

:::tip
Es ist auch möglich, bestimmte Operationen von der Kanban-Historie auszuschließen, indem Sie den [`$meta`](/api/common/js_kanban_meta_parameter.md)-Parameter bei Methoden und Events verwenden!
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

**Änderungsprotokoll:** Diese Eigenschaft wurde in Version 1.3 eingeführt

**Verwandte Artikel:** [`undo()`](/api/methods/js_kanban_undo_method.md) und [`redo()`](/api/methods/js_kanban_redo_method.md)
