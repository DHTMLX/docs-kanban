---
sidebar_label: currentUser
title: currentUser Konfiguration
description: Sie können mehr über die currentUser Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# currentUser

### Beschreibung

@short: Optional. Eine ID des aktuellen Benutzers

:::note
Die ID des aktuellen Benutzers muss mit einer der IDs übereinstimmen, die in der Eigenschaft [`cardShape.users`](api/config/js_kanban_cardshape_config.md) angegeben sind. Wenn Sie diese ID nicht angeben, sind die Kommentare nur lesbar.
:::

### Verwendung

~~~jsx {}
currentUser?: string | number; 
~~~

### Beispiel

~~~jsx {4}
new kanban.Kanban("#root", {
    cards,
    columns,
    currentUser: 1,
    // andere Parameter
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in Version v1.4 hinzugefügt

**Verwandtes Beispiel:** [Kanban. Swimlanes, Kommentare, Stimmen](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)