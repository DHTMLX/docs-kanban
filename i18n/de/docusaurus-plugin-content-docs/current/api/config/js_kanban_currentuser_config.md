---
sidebar_label: currentUser
title: currentUser Konfiguration
description: Sie können die currentUser-Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# currentUser

### Beschreibung

@short: Optional. Repräsentiert die ID des aktuellen Benutzers

:::note
Die ID des aktuellen Benutzers sollte mit einer der IDs übereinstimmen, die in der Eigenschaft [`cardShape.users`](/api/config/js_kanban_cardshape_config.md) aufgeführt sind. Wenn diese ID nicht angegeben wird, sind Kommentare nur im Nur-Lese-Modus zugänglich.
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

**Änderungsprotokoll:** Diese Eigenschaft wurde in Version 1.4 eingeführt

**Verwandtes Beispiel:** [Kanban. Swimlanes, Kommentare, Bewertungen](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
